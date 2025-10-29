import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  POLYMARKET_URL: process.env.POLYMARKET_URL || 'https://gamma-api.polymarket.com/markets?limit=50',
  KALSHI_URL: process.env.KALSHI_URL || 'https://trading-api.kalshi.com/v1/events',
  MANIFOLD_URL: process.env.MANIFOLD_URL || 'https://api.manifold.markets/v0/markets',
  POLLING_INTERVAL_MS: Number(process.env.POLLING_INTERVAL_MS || 60_000),
  OUTPUT_PATH: process.env.OUTPUT_PATH || new URL('../data/unified_markets.json', import.meta.url).pathname,
  SCHEMA_PATH: process.env.SCHEMA_PATH || new URL('../data/schema.json', import.meta.url).pathname,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
  SUPABASE_TABLE: process.env.SUPABASE_TABLE || 'prediction_markets'
};

export default CONFIG;
