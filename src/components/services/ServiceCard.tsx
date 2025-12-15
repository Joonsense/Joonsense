"use client";

import { useRouter } from "next/navigation";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { servicesPage } from "@/content/copy";

type ServiceItem = (typeof servicesPage.items)[number];

export function ServiceCard({ service }: { service: ServiceItem }) {
  const router = useRouter();

  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <CardTitle className="text-xl">{service.name}</CardTitle>
          <CardDescription className="text-sm leading-6">{service.tagline}</CardDescription>
        </div>
        <Badge className="shrink-0">{service.priceRange}</Badge>
      </div>

      <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
        <Info label="추천 대상" value={service.recommended} />
        <Info label="기간" value={service.duration} align="end" />
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Deliverables (산출물)</p>
        <div className="flex flex-wrap gap-2">
          {service.deliverables.map((item) => (
            <Badge key={item} variant="outline" className="text-xs font-medium">
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
        <ListBlock title="포함" items={service.includes} />
        <ListBlock title="미포함" items={service.excludes} muted />
      </div>

      <Separator className="bg-border/60" />

      <div className="flex flex-wrap gap-3">
        <Button size="sm" onClick={() => router.push(`/services/${service.slug}`)}>
          상세 보기
        </Button>
        <Dialog
          trigger={<Button size="sm" variant="outline">포함/미포함 보기</Button>}
          title={`${service.name} 구성 상세`}
          description={service.tagline}
        >
          <div className="space-y-4">
            <ListBlock title="포함" items={service.includes} />
            <ListBlock title="미포함" items={service.excludes} muted />
          </div>
        </Dialog>
        <Button size="sm" variant="secondary" onClick={() => router.push("/contact")}>
          상담 문의
        </Button>
      </div>
    </Card>
  );
}

function Info({
  label,
  value,
  align = "start",
}: {
  label: string;
  value: string;
  align?: "start" | "end";
}) {
  return (
    <div className={`space-y-1 ${align === "end" ? "text-right" : "text-left"}`}>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="text-foreground">{value}</p>
    </div>
  );
}

function ListBlock({ title, items, muted }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
      <ul className={`space-y-1.5 text-sm ${muted ? "text-muted-foreground" : "text-foreground"}`}>
        {items.map((item) => (
          <li key={item} className="leading-relaxed">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
