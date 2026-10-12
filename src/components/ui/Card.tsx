import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "interactive";
  glow?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  glow = false,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-surface border-surface-border",
    elevated: "bg-surface-elevated border-surface-border",
    interactive:
      "bg-surface border-surface-border hover:border-surface-border-hover hover:bg-surface-subtle transition-all duration-300",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border p-6 sm:p-8 transition-colors",
        variantStyles[variant],
        glow && "hover:shadow-glow-lavender hover:border-lavender-500/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

