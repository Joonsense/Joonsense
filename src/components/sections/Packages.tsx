import { packages } from "@/content/copy";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PackagesSection() {
  return (
    <section className="section-shell">
      <div className="container-edge space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Packages</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{packages.heading}</h2>
          <p className="text-lg text-muted-foreground">{packages.description}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`h-full border ${tier.highlight ? "border-accent/80 bg-slate-900/40" : "border-border/80"}`}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  {tier.highlight && <Badge variant="outline">Most picked</Badge>}
                </div>
                <CardDescription className="text-foreground text-xl font-semibold">{tier.price}</CardDescription>
                <CardDescription>{tier.detail}</CardDescription>
                <div className="space-y-2 text-sm text-foreground">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Button variant={tier.highlight ? "default" : "outline"} fullWidth>
                  상담 예약
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
