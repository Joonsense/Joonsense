import { NextResponse } from "next/server";
import { hlToPerp } from "../../../server/hl/adapter";
import { fetchHLMarkets } from "../../../server/hl/fetch";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const rawMarkets = await fetchHLMarkets();
    const markets = rawMarkets.map(hlToPerp);

    return NextResponse.json({ ok: true, markets });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

// 수동 테스트: curl -X GET http://localhost:3000/api/perp
