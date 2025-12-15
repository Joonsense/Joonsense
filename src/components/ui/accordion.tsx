import * as React from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  value: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

export function Accordion({ items }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(items[0]?.value ?? null);

  return (
    <div className="divide-y divide-border/60 border border-border/80 rounded-xl bg-slate-900/50">
      {items.map((item) => {
        const open = openItem === item.value;
        return (
          <div key={item.value} className="p-4">
            <button
              onClick={() => setOpenItem(open ? null : item.value)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-base font-semibold">{item.title}</span>
              <span className="text-xl text-muted-foreground">{open ? "−" : "+"}</span>
            </button>
            {open && <div className={cn("pt-3 text-sm text-muted-foreground")}>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
