import Link from "next/link";

import builderData from "@/data/builder.json";
import { formatCompact } from "@/utils/format/number";

type BuilderTeam = {
  code: string;
  owner: string;
  members: number;
  volume24h: number;
  estRewards: number;
};

const rawTeams = builderData as BuilderTeam[];

export default function BuilderPage() {
  const teams = [...rawTeams].sort((a, b) => b.volume24h - a.volume24h);
  const hasTeams = teams.length > 0;

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-wide text-slate-400">
            모의 데이터 • 실데이터 연동 예정
          </span>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold text-white">Builder Rankings</h1>
            <p className="text-sm text-slate-400">
              Hyperliquid 빌더 레퍼럴 팀의 24시간 거래 실적을 기준으로 정렬했습니다.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
          {hasTeams ? (
            <>
              <div className="grid grid-cols-[50px,1fr,1fr,1fr,1fr,120px] items-center gap-4 border-b border-slate-700/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-900/40 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-300">
                <span>#</span>
                <span>Code</span>
                <span>Owner</span>
                <span>Members</span>
                <span>24h Vol</span>
                <span className="text-right">Join</span>
              </div>
              <div className="divide-y divide-slate-800 text-sm">
                {teams.map((team, index) => (
                  <div
                    key={team.code}
                    className="grid grid-cols-[50px,1fr,1fr,1fr,1fr,120px] items-center gap-4 px-6 py-4 text-slate-300 transition hover:bg-slate-900"
                  >
                    <span className="font-semibold text-slate-200">{index + 1}</span>
                    <span className="font-medium text-slate-100">{team.code}</span>
                    <span>{team.owner}</span>
                    <span>{Number.isFinite(team.members) ? team.members.toLocaleString() : "—"}</span>
                    <span className="font-medium text-slate-100">
                      ${formatCompact(team.volume24h)}
                    </span>
                    <span className="flex justify-end">
                      <Link
                        href={`https://app.hyperliquid.xyz/?ref=${team.code}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-700 hover:text-white"
                      >
                        Join
                      </Link>
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex h-40 items-center justify-center text-sm text-slate-400">
              No builder codes
            </div>
          )}
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-slate-100">운영 아이디어</h2>
          <p className="mt-3 leading-relaxed">
            커뮤니티 참여 이벤트와 일일 미션을 통해 신규 유입을 늘리고, 상위 빌더에 대한
            스포트라이트 콘텐츠를 제작해 브랜드 신뢰도를 강화할 계획입니다.
          </p>
          <p className="mt-2 leading-relaxed">
            {/* TODO: 실데이터 연동 시 자동화된 리워드 계산 및 공시 기능 추가 */}
            장기적으로는 실시간 거래 데이터를 연동하여 보상 누적치를 자동으로 추적하고
            공시하는 대시보드를 제공할 예정입니다.
          </p>
        </section>
      </div>
    </div>
  );
}
