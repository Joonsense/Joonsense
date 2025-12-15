import { testCategories } from "@/content/copy";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WhatWeTestSection() {
  return (
    <section className="section-shell">
      <div className="container-edge space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">What we test</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{testCategories.heading}</h2>
          <p className="text-lg text-muted-foreground">{testCategories.description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testCategories.categories.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
