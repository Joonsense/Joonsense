import { finalCta } from "@/content/copy";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FinalCTASection() {
  return (
    <section className="section-shell">
      <div className="container-edge">
        <Card className="bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/50 p-8 text-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Get started</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">{finalCta.heading}</h2>
            <p className="text-lg text-muted-foreground">{finalCta.subheading}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg">{finalCta.primaryCta}</Button>
              <Button size="lg" variant="outline">
                {finalCta.secondaryCta}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
