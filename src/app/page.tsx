import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          deLeaderboard (HL only)
        </h1>
        <nav>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/perp"
                className="inline-flex w-full items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 transition hover:border-neutral-600 hover:bg-neutral-800"
              >
                <span className="font-medium">Perp Markets</span>
                <span className="text-xs text-neutral-400">/perp</span>
              </Link>
            </li>
            <li>
              <Link
                href="/builder"
                className="inline-flex w-full items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 transition hover:border-neutral-600 hover:bg-neutral-800"
              >
                <span className="font-medium">Builder Leaderboard</span>
                <span className="text-xs text-neutral-400">/builder</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
