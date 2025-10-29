import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import cron from 'node-cron';
import { createClient } from '@supabase/supabase-js';
import { Table } from 'console-table-printer';

import CONFIG from '../config/config.js';
import { fetchPolymarketMarkets } from './adapters/polymarket.js';
import { fetchKalshiMarkets } from './adapters/kalshi.js';
import { fetchManifoldMarkets } from './adapters/manifold.js';
import Logger from './utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = CONFIG.OUTPUT_PATH.startsWith('/')
  ? CONFIG.OUTPUT_PATH
  : path.resolve(__dirname, '..', CONFIG.OUTPUT_PATH);

function getSupabaseClient() {
  if (!CONFIG.SUPABASE_URL || !CONFIG.SUPABASE_KEY) {
    return null;
  }
  return createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY);
}

async function writeToFile(markets) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(markets, null, 2), 'utf8');
  Logger.success(`Wrote ${markets.length} markets to ${outputPath}`);
}

async function upsertToSupabase(client, markets) {
  if (!client) {
    return;
  }

  const chunks = [];
  const size = 500;
  for (let i = 0; i < markets.length; i += size) {
    chunks.push(markets.slice(i, i + size));
  }

  for (const chunk of chunks) {
    const { error } = await client.from(CONFIG.SUPABASE_TABLE).upsert(chunk, {
      onConflict: 'platform,market_id'
    });
    if (error) {
      Logger.error(`Supabase upsert failed: ${error.message}`);
      throw error;
    }
  }
  Logger.success(`Upserted ${markets.length} markets into Supabase table ${CONFIG.SUPABASE_TABLE}`);
}

function logTopMarkets(markets) {
  const sorted = [...markets]
    .filter((market) => typeof market.volume_24h === 'number')
    .sort((a, b) => b.volume_24h - a.volume_24h)
    .slice(0, 5);

  if (!sorted.length) {
    Logger.warn('No markets with volume_24h to display');
    return;
  }

  const table = new Table({ columns: [
    { name: 'platform', title: 'Platform' },
    { name: 'market_id', title: 'Market ID' },
    { name: 'question', title: 'Question' },
    { name: 'volume_24h', title: '24h Volume' }
  ] });

  table.addRows(sorted.map((market) => ({
    platform: market.platform,
    market_id: market.market_id,
    question: (() => {
      const text = typeof market.question === 'string' ? market.question : '';
      return text.length > 60 ? `${text.slice(0, 60)}…` : text;
    })(),
    volume_24h: market.volume_24h
  })));

  table.printTable();
}

async function aggregateMarkets() {
  try {
    Logger.info('Fetching markets from all platforms');

    const [polymarket, kalshi, manifold] = await Promise.all([
      fetchPolymarketMarkets(),
      fetchKalshiMarkets(),
      fetchManifoldMarkets()
    ]);

    const merged = [...polymarket, ...kalshi, ...manifold];

    Logger.success(`Fetched ${merged.length} markets in total`);

    await writeToFile(merged);

    const supabaseClient = getSupabaseClient();
    if (supabaseClient) {
      await upsertToSupabase(supabaseClient, merged);
    } else {
      Logger.info('Supabase credentials not provided; skipping database sync');
    }

    logTopMarkets(merged);
  } catch (error) {
    Logger.error('Aggregation run failed', error.message);
  }
}

function startScheduler() {
  const intervalMinutes = Math.max(Math.round(CONFIG.POLLING_INTERVAL_MS / 60_000), 1);
  const cronExpression = `*/${intervalMinutes} * * * *`;

  Logger.info(`Scheduling aggregation every ${intervalMinutes} minute(s) using cron expression ${cronExpression}`);
  cron.schedule(cronExpression, aggregateMarkets);
}

await aggregateMarkets();
startScheduler();
