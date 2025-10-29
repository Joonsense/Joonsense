import CONFIG from '../../config/config.js';
import { getWithRetry } from '../utils/fetcher.js';

/**
 * Normalize a Manifold market into the unified schema.
 * @param {object} market - Raw Manifold market payload.
 * @returns {object}
 */
function normalizeMarket(market) {
  const yesPrice = market?.probability != null ? Number(market.probability) : null;
  const noPrice = yesPrice != null ? Number((1 - yesPrice).toFixed(4)) : null;
  const outcomes = Array.isArray(market?.answers)
    ? market.answers.map((answer) => answer?.text ?? 'Option').filter(Boolean)
    : market?.outcomeType === 'BINARY'
      ? ['Yes', 'No']
      : ['Yes', 'No', 'Other'];

  return {
    platform: 'Manifold',
    market_id: market?.id ?? '',
    question: market?.question ?? market?.title ?? 'Unknown Manifold market',
    category: market?.groupSlugs?.[0] ?? market?.topicSlug ?? null,
    outcomes,
    yes_price: Number.isFinite(yesPrice) ? yesPrice : null,
    no_price: Number.isFinite(noPrice) ? noPrice : null,
    liquidity: market?.liquidity != null ? Number(market.liquidity) : null,
    volume_24h: market?.volume24Hours != null ? Number(market.volume24Hours) : market?.volume24h != null ? Number(market.volume24h) : null,
    end_date: market?.closeTime ? new Date(market.closeTime).toISOString() : null,
    url: market?.creatorUsername && market?.slug
      ? `https://manifold.markets/${market.creatorUsername}/${market.slug}`
      : market?.url ?? '',
    last_update: new Date().toISOString()
  };
}

/**
 * Fetch and normalize Manifold markets.
 * @returns {Promise<object[]>}
 */
export async function fetchManifoldMarkets() {
  const data = await getWithRetry(CONFIG.MANIFOLD_URL, { timeout: 15_000 });
  const markets = Array.isArray(data) ? data : Array.isArray(data?.markets) ? data.markets : [];
  return markets.map(normalizeMarket);
}

export default fetchManifoldMarkets;
