import { trust } from "@/content/copy";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function TrustSection() {
  return (
    <section className="section-shell">
      <div className="container-edge space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Trust</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{trust.heading}</h2>
          <p className="text-lg text-muted-foreground">증명 가능한 출력물과 운영 원칙으로 신뢰를 쌓습니다.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trust.items.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
