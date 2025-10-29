import CONFIG from '../../config/config.js';
import { getWithRetry } from '../utils/fetcher.js';

function buildKalshiUrl(baseUrl) {
  const url = new URL(baseUrl);
  if (!url.searchParams.has('limit')) {
    url.searchParams.set('limit', '100');
  }
  return url.toString();
}

/**
 * Normalize a Kalshi event into the unified schema.
 * @param {object} event - Raw Kalshi event payload.
 * @returns {object}
 */
function normalizeEvent(event) {
  const yesPrice = event?.yes_bid != null ? Number(event.yes_bid) : null;
  const noPrice = event?.no_bid != null ? Number(event.no_bid) : yesPrice != null ? Number((1 - yesPrice).toFixed(4)) : null;

  return {
    platform: 'Kalshi',
    market_id: event?.event_ticker ?? event?.id ?? '',
    question: event?.title ?? event?.event_title ?? 'Unknown Kalshi event',
    category: event?.category ?? event?.event_category ?? null,
    outcomes: ['Yes', 'No'],
    yes_price: Number.isFinite(yesPrice) ? yesPrice : null,
    no_price: Number.isFinite(noPrice) ? noPrice : null,
    liquidity: event?.volume != null ? Number(event.volume) : null,
    volume_24h: event?.volume_24h != null ? Number(event.volume_24h) : event?.volume24h != null ? Number(event.volume24h) : null,
    end_date: event?.close_time ?? event?.close_date ?? null,
    url: event?.event_ticker ? `https://kalshi.com/events/${event.event_ticker}` : '',
    last_update: new Date().toISOString()
  };
}

/**
 * Fetch and normalize Kalshi markets.
 * @returns {Promise<object[]>}
 */
export async function fetchKalshiMarkets() {
  const url = buildKalshiUrl(CONFIG.KALSHI_URL);
  const data = await getWithRetry(url, { timeout: 15_000, headers: { Accept: 'application/json' } });
  const events = Array.isArray(data?.events) ? data.events : Array.isArray(data) ? data : [];
  return events.map(normalizeEvent);
}

export default fetchKalshiMarkets;
