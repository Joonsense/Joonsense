"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PerpMarket } from "@/types/market";
import { formatCompact, formatPct, formatPrice } from "@/utils/format/number";

type ViewMode = "card" | "list";

type PerpResponse = {
  ok: boolean;
  markets?: PerpMarket[];
  error?: string;
};

const VIEW_OPTIONS: { label: string; value: ViewMode }[] = [
  { label: "Card", value: "card" },
  { label: "List", value: "list" },
];

export default function PerpPage() {
  const [markets, setMarkets] = useState<PerpMarket[]>([]);
  const [view, setView] = useState<ViewMode>("card");
  const [error, setError] = useState<string | null>(null);

  const fetchMarkets = useCallback(async () => {
    try {
      const response = await fetch("/api/perp", {
        cache: "no-store",
      });
      const payload = (await response.json()) as PerpResponse;

      if (!response.ok || !payload.ok || !Array.isArray(payload.markets)) {
        throw new Error(payload.error ?? "Failed to load markets");
      }

      setMarkets(payload.markets);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unexpected error";
      setError(message);
    }
  }, []);

  useEffect(() => {
    fetchMarkets();
    const interval = setInterval(fetchMarkets, 10_000);
    return () => clearInterval(interval);
  }, [fetchMarkets]);

  const hasMarkets = markets.length > 0;

  const marketContent = useMemo(() => {
    if (!hasMarkets) {
      return null;
    }

    if (view === "card") {
      return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {markets.map((market) => (
            <Card
              key={market.symbol}
              className="border-slate-800 bg-slate-900/80 text-slate-100 shadow-lg shadow-slate-950/40"
            >
              <CardHeader className="rounded-t-2xl border-b border-slate-800/60 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-900/90">
                <CardTitle className="flex items-baseline justify-between text-lg font-semibold">
                  <span>{market.symbol}</span>
                  <span className="text-base text-slate-300">
                    ${formatPrice(market.markPrice, market.stable)}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Funding</span>
                  <span className={market.fundingRate >= 0 ? "text-emerald-400" : "text-rose-400"}>
                    {formatPct(market.fundingRate)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Open Interest</span>
                  <span>${formatCompact(market.openInterest)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">24h Volume</span>
                  <span>${formatCompact(market.volume24h)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }

    return (
      <div className="overflow-hidden rounded-2xl border border-slate-800">
        <div className="grid grid-cols-5 gap-4 bg-slate-900/80 px-6 py-3 text-xs font-medium uppercase tracking-wide text-slate-400">
          <span>Symbol</span>
          <span>Price</span>
          <span>Funding</span>
          <span>Open Interest</span>
          <span>24h Volume</span>
        </div>
        <div className="divide-y divide-slate-800 bg-slate-950/60 text-sm text-slate-200">
          {markets.map((market) => (
            <div
              key={market.symbol}
              className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-slate-900/70"
            >
              <span className="font-medium text-slate-100">{market.symbol}</span>
              <span>${formatPrice(market.markPrice, market.stable)}</span>
              <span className={market.fundingRate >= 0 ? "text-emerald-400" : "text-rose-400"}>
                {formatPct(market.fundingRate)}
              </span>
              <span>${formatCompact(market.openInterest)}</span>
              <span>${formatCompact(market.volume24h)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }, [hasMarkets, markets, view]);

  return (
    <div className="min-h-screen bg-slate-950 py-12 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-2xl font-semibold text-white">Perpetual Markets</h1>
              <p className="text-sm text-slate-400">
                Live Hyperliquid perp metrics refreshed every 10 seconds.
              </p>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-slate-100/0 via-slate-100/40 to-slate-100/0" />
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 p-1">
            {VIEW_OPTIONS.map((option) => (
              <Button
                key={option.value}
                variant={view === option.value ? "default" : "ghost"}
                onClick={() => setView(option.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  view === option.value
                    ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </header>

        {error && (
          <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
            Unable to refresh markets. {error}
          </div>
        )}

        {hasMarkets ? (
          marketContent
        ) : (
          <div className="flex h-48 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60">
            <p className="text-sm text-slate-400">No data yet</p>
          </div>
        )}
      </div>
    </div>
  );
}

// UI 스냅샷 설명: 카드/리스트 전환이 가능한 다크톤 Perp 화면과 오류/빈 상태 안내 배너.
