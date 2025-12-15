import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: { id: string; label: string; content: React.ReactNode }[];
  defaultActiveId?: string;
}

export function Tabs({ tabs, defaultActiveId }: TabsProps) {
  const [active, setActive] = React.useState(defaultActiveId ?? tabs[0]?.id ?? "");

  return (
    <div>
      <div className="flex flex-wrap gap-2 rounded-xl border border-border/70 bg-slate-900/50 p-2">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 rounded-xl border border-border/70 bg-slate-900/50 p-6 text-sm text-muted-foreground">
        {tabs.find((tab) => tab.id === active)?.content}
      </div>
    </div>
  );
}
