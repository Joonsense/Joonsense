import { PerpMarket } from "../../types/market";

type HLMarket = {
  name: string;
  markPx: string;
  funding: string;
  openInterest: string;
  dayNtlVlm: string;
  isStable?: boolean;
};

const parseNumber = (value: string): number => {
  const parsed = Number.parseFloat(value);

  if (Number.isFinite(parsed)) {
    return parsed;
  }

  return 0;
};

export const hlToPerp = (raw: HLMarket): PerpMarket => {
  const market: PerpMarket = {
    symbol: raw.name,
    markPrice: parseNumber(raw.markPx),
    fundingRate: parseNumber(raw.funding),
    openInterest: parseNumber(raw.openInterest),
    volume24h: parseNumber(raw.dayNtlVlm),
  };

  if (raw.isStable) {
    market.stable = true;
  }

  return market;
};

export type { HLMarket };
