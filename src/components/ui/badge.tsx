import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-secondary text-secondary-foreground border border-border/60",
    outline: "border border-border text-foreground",
  };

  return (
    <span
      className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", variants[variant], className)}
      {...props}
    />
  );
}
