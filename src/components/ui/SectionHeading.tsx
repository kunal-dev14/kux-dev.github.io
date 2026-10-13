import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-6 sm:mb-7 lg:mb-8",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-2.5 text-xs font-mono font-medium tracking-widest uppercase text-lavender-400",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lavender-400"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-slate-300 sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

