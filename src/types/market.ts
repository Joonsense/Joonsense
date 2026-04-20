export interface PerpMarket {
  symbol: string;
  markPrice: number;
  fundingRate: number;
  openInterest: number;
  volume24h: number;
  stable?: boolean;
}
