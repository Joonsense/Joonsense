import * as React from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Dialog({ trigger, title, description, children }: DialogProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} className="inline-flex cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8">
          <div className="relative w-full max-w-lg rounded-2xl border border-border/80 bg-slate-900/95 p-6 shadow-2xl">
            <button
              aria-label="Close dialog"
              className="absolute right-4 top-4 text-xl text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <div className="space-y-3 pr-6">
              <h3 className="text-xl font-semibold">{title}</h3>
              {description && <p className="text-sm text-muted-foreground">{description}</p>}
              <div className={cn("text-sm text-muted-foreground")}>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
