import type { HLMarket } from "./adapter";

const REQUEST_BODY = { type: "metaAndAssetCtxs" } as const;
const STABLE_SYMBOLS = new Set(["USDC", "USDT", "DAI", "PYUSD"]);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const ensureString = (value: unknown, fallback = "0"): string => {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return value.toString();
  }

  return fallback;
};

const normalizeMarket = (entry: unknown): HLMarket | null => {
  if (!isRecord(entry)) {
    return null;
  }

  const name = typeof entry.name === "string" ? entry.name : "";

  return {
    name,
    markPx: ensureString(entry.markPx),
    funding: ensureString(entry.funding),
    openInterest: ensureString(entry.openInterest),
    dayNtlVlm: ensureString(entry.dayNtlVlm),
    isStable: name !== "" && STABLE_SYMBOLS.has(name),
  };
};

const pickMarketList = (payload: unknown): unknown[] => {
  if (!isRecord(payload)) {
    return [];
  }

  const candidates: unknown[] = [];

  const direct = payload.universe;
  if (Array.isArray(direct)) {
    candidates.push(...direct);
  }

  const perpMeta = isRecord(payload.perpMeta) ? payload.perpMeta.universe : undefined;
  if (Array.isArray(perpMeta)) {
    candidates.push(...perpMeta);
  }

  const meta = isRecord(payload.meta) ? payload.meta : null;
  const metaUniverse = meta && isRecord(meta.perpMeta) ? meta.perpMeta.universe : undefined;
  if (Array.isArray(metaUniverse)) {
    candidates.push(...metaUniverse);
  }

  return candidates;
};

export async function fetchHLMarkets(): Promise<HLMarket[]> {
  const endpoint = process.env.HL_REST;

  if (!endpoint) {
    throw new Error("HL_REST environment variable is not set");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(REQUEST_BODY),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch HL markets: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  const rawMarkets = pickMarketList(payload);

  const markets: HLMarket[] = [];

  for (const entry of rawMarkets) {
    const normalized = normalizeMarket(entry);

    if (normalized) {
      markets.push(normalized);
    }
  }

  return markets;
}

// 주의해야 할 응답 필드: universe, perpMeta.universe, meta.perpMeta.universe, markPx, funding, openInterest, dayNtlVlm, name
