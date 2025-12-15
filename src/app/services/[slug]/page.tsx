import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesPage } from "@/content/copy";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const buttonBase =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesPage.items.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="space-y-10">
      <section className="section-shell">
        <div className="container-edge space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline">서비스 상세</Badge>
            <Badge>{service.priceRange}</Badge>
            <Badge variant="outline">기간 {service.duration}</Badge>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-semibold leading-tight">{service.name}</h1>
            <p className="text-lg text-muted-foreground">{service.tagline}</p>
            <p className="text-muted-foreground">추천 대상: {service.recommended}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className={cn(buttonBase, "bg-primary px-5 py-3 text-primary-foreground hover:bg-blue-500/90")}
            >
              상담 문의
            </Link>
            <Link
              href="/services"
              className={cn(buttonBase, "border border-border px-5 py-3 text-foreground hover:bg-muted/50")}
            >
              서비스 목록으로
            </Link>
          </div>

          <Separator className="bg-border/60" />

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="space-y-3">
              <h2 className="text-lg font-semibold">Deliverables (산출물)</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.deliverables.map((item) => (
                  <li key={item} className="leading-relaxed">· {item}</li>
                ))}
              </ul>
            </Card>

            <Card className="space-y-3">
              <h2 className="text-lg font-semibold">포함</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.includes.map((item) => (
                  <li key={item} className="leading-relaxed">· {item}</li>
                ))}
              </ul>
            </Card>

            <Card className="space-y-3">
              <h2 className="text-lg font-semibold">미포함</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.excludes.map((item) => (
                  <li key={item} className="leading-relaxed">· {item}</li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">가격 및 기간</h2>
              <p className="text-sm text-muted-foreground">{servicesPage.note}</p>
            </div>
            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
              <Info label="가격 범위" value={service.priceRange} />
              <Info label="예상 기간" value={service.duration} />
              <Info label="포함 항목 수" value={`${service.includes.length}개`} />
              <Info label="산출물" value={`${service.deliverables.length}개 핵심 결과물`} />
            </div>
            <Separator className="bg-border/60" />
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={cn(buttonBase, "bg-primary px-5 py-3 text-primary-foreground hover:bg-blue-500/90")}
              >
                견적 및 일정 확인
              </Link>
              <Link
                href="/services"
                className={cn(buttonBase, "border border-border px-5 py-3 text-foreground hover:bg-muted/50")}
              >
                다른 서비스 비교
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="text-foreground">{value}</p>
    </div>
  );
}
