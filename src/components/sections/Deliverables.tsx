import { deliverables } from "@/content/copy";
import { Tabs } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function DeliverablesSection() {
  return (
    <section className="section-shell">
      <div className="container-edge space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Deliverables</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{deliverables.heading}</h2>
          <p className="text-lg text-muted-foreground">{deliverables.intro}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Tabs
            defaultActiveId={deliverables.items[0]?.title}
            tabs={deliverables.items.map((item) => ({
              id: item.title,
              label: item.title,
              content: item.description,
            }))}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.items.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
