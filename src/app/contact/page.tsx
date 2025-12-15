import { LeadForm } from "@/components/contact/LeadForm";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { contact } from "@/content/copy";

export const metadata = {
  title: "Contact | AI Red Teaming",
  description: "AI 레드팀 서비스 상담: Physical AI·Agentic AI 행동 리스크를 사전 검증합니다.",
};

export default function ContactPage() {
  return (
    <section className="section-shell">
      <div className="container-edge grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge>{contact.heading}</Badge>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            {contact.heroTitle}
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">{contact.heroSubtitle}</p>
          <div className="rounded-2xl border border-border/70 bg-slate-950/60 p-6 shadow-lg">
            <div className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Lead Checklist
                </p>
                <h2 className="mt-2 text-xl font-semibold text-foreground">
                  Evidence-ready Intake(증빙 준비형 접수)
                </h2>
              </div>
              <Separator />
              <ul className="space-y-3 text-sm text-muted-foreground">
                {contact.leadBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-lg border border-border/70 bg-background/60 p-4 text-sm text-foreground">
                <p className="font-semibold text-foreground">포함 정보</p>
                <p className="text-muted-foreground">
                  제품 유형, 배포 일정, 우려 리스크를 중심으로 알려주세요. 기밀 자료 없이도 스코핑 가능합니다.
                </p>
              </div>
              <Card className="border border-accent/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                <div className="space-y-3 p-5 text-sm text-muted-foreground">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">Risk snapshot</p>
                  <p className="text-lg font-semibold text-foreground">
                    30분 동안 현재 상태와 Release Gate(배포 게이트) 준비도를 빠르게 점검합니다.
                  </p>
                  <p>테스트 범위·일정을 합의하면 바로 Evidence Pack(증빙 패키지) 샘플을 공유합니다.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <Card className="border border-border/70 bg-slate-950/70 p-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">상담 요청</h2>
            <p className="text-sm text-muted-foreground">
              Pricing은 범위로 안내되며, 구체 견적은 테스트 범위 정의 후 제공됩니다.
            </p>
          </div>
          <Separator className="my-4" />
          <LeadForm concerns={contact.concerns} />
          <Separator className="my-6" />
          <p className="text-xs text-muted-foreground">{contact.privacyNote}</p>
        </Card>
      </div>
    </section>
  );
}
