import { hero } from "@/content/copy";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog } from "@/components/ui/dialog";

export function HeroSection() {
  return (
    <section className="section-shell">
      <div className="container-edge">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-6 lg:max-w-2xl">
            <Badge>{hero.eyebrow}</Badge>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              {hero.title}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">{hero.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">{hero.primaryCta}</Button>
              <Dialog
                trigger={<Button size="lg" variant="ghost">{hero.secondaryCta}</Button>}
                title="샘플 리포트 미리보기"
                description="기밀 정보 없이 형식과 깊이를 확인할 수 있는 요약본입니다."
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>Executive-ready Report(경영진용 리포트) 목차</li>
                  <li>Scorecard·Heatmap 요약 샘플</li>
                  <li>Failure Path(실패 경로) 기록 예시</li>
                </ul>
              </Dialog>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Physical AI · Agentic AI 전문</p>
                <p>로봇·에이전트 특화 스트레스 테스트 자산 보유</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Evidence-first</p>
                <p>Evidence Pack(증빙 패키지)로 신뢰를 증명</p>
              </div>
            </div>
          </div>
          <div className="gradient-border w-full max-w-xl">
            <div className="inner rounded-2xl p-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Behavior Stress Dashboard</p>
                <div className="rounded-xl border border-border/60 bg-slate-950/60 p-4 shadow-inner">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Release Gate(배포 게이트) 준비도</span>
                    <span className="text-xs text-accent">updated 4h ago</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-center text-xl font-bold leading-[64px] text-slate-950">
                      92%
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 h-2 rounded-full bg-slate-800">
                        <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                      </div>
                      <p className="text-sm text-muted-foreground">취약점 3건, 대응 가이드 전달 완료</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                  <div className="rounded-lg border border-border/60 bg-slate-950/60 p-3">
                    <p className="text-xs uppercase tracking-widest">Physical AI</p>
                    <p className="mt-2 text-foreground">Collision & fall</p>
                    <p>PASS</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-slate-950/60 p-3">
                    <p className="text-xs uppercase tracking-widest">Agentic</p>
                    <p className="mt-2 text-foreground">Tool misuse</p>
                    <p>2 findings</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-slate-950/60 p-3">
                    <p className="text-xs uppercase tracking-widest">Adversarial</p>
                    <p className="mt-2 text-foreground">Prompt injection</p>
                    <p>Watch</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-slate-950/60 p-3">
                    <p className="text-xs uppercase tracking-widest">Integration</p>
                    <p className="mt-2 text-foreground">API/PLC</p>
                    <p>Stable</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-slate-950/60 p-3">
                    <p className="text-xs uppercase tracking-widest">Retest</p>
                    <p className="mt-2 text-foreground">Loop</p>
                    <p>scheduled</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-slate-950/60 p-3">
                    <p className="text-xs uppercase tracking-widest">Evidence</p>
                    <p className="mt-2 text-foreground">Pack</p>
                    <p>Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
