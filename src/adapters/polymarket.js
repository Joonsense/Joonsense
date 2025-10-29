import CONFIG from '../../config/config.js';
import { getWithRetry } from '../utils/fetcher.js';

/**
 * Normalize a Polymarket market document into the unified schema.
 * @param {object} market - Raw Polymarket market payload.
 * @returns {object}
 */
function normalizeMarket(market) {
  const outcomes = Array.isArray(market?.outcomes)
    ? market.outcomes.map((outcome) => outcome?.title || outcome).filter(Boolean)
    : ['Yes', 'No'];

  const yesPrice = Array.isArray(market?.outcomePrices) ? Number(market.outcomePrices[0]) : null;
  const noPrice = Array.isArray(market?.outcomePrices) ? Number(market.outcomePrices[1]) : yesPrice != null ? Number((1 - yesPrice).toFixed(4)) : null;

  return {
    platform: 'Polymarket',
    market_id: market?.id ?? '',
    question: market?.question ?? market?.title ?? 'Unknown question',
    category: market?.category ?? (Array.isArray(market?.tags) ? market.tags[0] : null),
    outcomes,
    yes_price: Number.isFinite(yesPrice) ? yesPrice : null,
    no_price: Number.isFinite(noPrice) ? noPrice : null,
    liquidity: market?.liquidityNum != null ? Number(market.liquidityNum) : null,
    volume_24h: market?.volume24hr != null ? Number(market.volume24hr) : null,
    end_date: market?.endDate ?? market?.closeDate ?? null,
    url: market?.slug ? `https://polymarket.com/market/${market.slug}` : market?.url ?? '',
    last_update: new Date().toISOString()
  };
}

/**
 * Fetch and normalize Polymarket markets.
 * @returns {Promise<object[]>}
 */
export async function fetchPolymarketMarkets() {
  const data = await getWithRetry(CONFIG.POLYMARKET_URL, { timeout: 15_000 });
  const markets = Array.isArray(data?.markets) ? data.markets : Array.isArray(data) ? data : [];
  return markets.map(normalizeMarket);
}

export default fetchPolymarketMarkets;
