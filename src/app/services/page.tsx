import Link from "next/link";
import { servicesPage } from "@/content/copy";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const buttonBase =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export default function ServicesPage() {
  return (
    <main className="space-y-10">
      <section className="section-shell">
        <div className="container-edge space-y-6">
          <div className="space-y-3">
            <Badge variant="outline">Services</Badge>
            <h1 className="text-4xl font-semibold leading-tight">{servicesPage.hero.title}</h1>
            <p className="max-w-3xl text-lg text-muted-foreground">{servicesPage.hero.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className={cn(buttonBase, "bg-primary px-5 py-3 text-primary-foreground hover:bg-blue-500/90")}> 
              {servicesPage.hero.primaryCta}
            </Link>
            <Link href="#service-list" className={cn(buttonBase, "border border-border px-5 py-3 text-foreground hover:bg-muted/50")}> 
              {servicesPage.hero.secondaryCta}
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">{servicesPage.note}</p>
        </div>
      </section>

      <section id="service-list" className="section-shell pt-0">
        <div className="container-edge space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">서비스 라인업</h2>
              <p className="text-muted-foreground">각 서비스별 포함/미포함, 산출물, 기간을 빠르게 비교하세요.</p>
            </div>
            <Badge variant="outline">5 services</Badge>
          </div>
          <Separator className="bg-border/60" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicesPage.items.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
