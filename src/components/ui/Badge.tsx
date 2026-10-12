import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "lavender" | "subtle" | "outline";
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-surface-elevated text-slate-300 border-surface-border",
    lavender: "bg-lavender-500/10 text-lavender-300 border-lavender-500/30",
    subtle: "bg-surface text-slate-400 border-surface-border/60",
    outline: "bg-transparent text-slate-300 border-surface-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-md border tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

