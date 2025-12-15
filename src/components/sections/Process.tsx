import { process } from "@/content/copy";
import { Separator } from "@/components/ui/separator";

export function ProcessSection() {
  return (
    <section className="section-shell">
      <div className="container-edge space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Process</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{process.heading}</h2>
        </div>
        <div className="space-y-6">
          {process.steps.map((step, index) => (
            <div key={step.title} className="grid gap-4 rounded-2xl border border-border/80 bg-slate-900/60 p-5 sm:grid-cols-[0.15fr_1fr] sm:items-start">
              <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">{index + 1}</span>
                <Separator className="hidden h-px w-16 bg-border/60 sm:block" />
              </div>
              <div>
                <p className="text-lg font-semibold">{step.title}</p>
                <p className="mt-2 text-muted-foreground">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
