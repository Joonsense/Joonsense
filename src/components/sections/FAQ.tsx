import { faq } from "@/content/copy";
import { Accordion } from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="section-shell">
      <div className="container-edge space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">FAQ</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{faq.heading}</h2>
          <p className="text-lg text-muted-foreground">가장 많이 받는 질문을 모았습니다.</p>
        </div>
        <Accordion
          items={faq.items.map((item, idx) => ({
            value: `faq-${idx}`,
            title: item.question,
            content: item.answer,
          }))}
        />
      </div>
    </section>
  );
}
