import { problems } from "@/content/copy";
import { Card } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <section className="section-shell">
      <div className="container-edge grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Problem</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{problems.heading}</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            {problems.bullets.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <Card className="border-accent/40 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-slate-900/30">
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="text-base font-semibold text-foreground">자주 발견되는 실패 패턴</p>
            <ul className="space-y-3">
              <li className="rounded-lg border border-border/60 bg-slate-950/60 p-3">센서 스푸핑 상황에서 잘못된 경로 계획</li>
              <li className="rounded-lg border border-border/60 bg-slate-950/60 p-3">에이전트가 민감 데이터에 과도 접근 후 로깅 누락</li>
              <li className="rounded-lg border border-border/60 bg-slate-950/60 p-3">프롬프트 인젝션으로 툴 Misuse(오남용) 발생</li>
              <li className="rounded-lg border border-border/60 bg-slate-950/60 p-3">Fail-safe(안전중지) 전환 지연으로 현장 위험 증가</li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
}
