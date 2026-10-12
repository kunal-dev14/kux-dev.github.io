import React from "react";
import { ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: ProjectStatus;
  label?: string;
  className?: string;
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const config: Record<
    ProjectStatus,
    { text: string; bg: string; textCol: string; dot: string; border: string }
  > = {
    deployed: {
      text: label || "Officially Deployed",
      bg: "bg-emerald-950/40",
      textCol: "text-emerald-300",
      dot: "bg-emerald-400",
      border: "border-emerald-800/40",
    },
    "in-development": {
      text: label || "In Development",
      bg: "bg-amber-950/40",
      textCol: "text-amber-300",
      dot: "bg-amber-400",
      border: "border-amber-800/40",
    },
    completed: {
      text: label || "Completed",
      bg: "bg-lavender-950/40",
      textCol: "text-lavender-300",
      dot: "bg-lavender-400",
      border: "border-lavender-800/40",
    },
    archived: {
      text: label || "Archived",
      bg: "bg-slate-900/60",
      textCol: "text-slate-400",
      dot: "bg-slate-500",
      border: "border-slate-800",
    },
  };

  const current = config[status] || config.completed;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-full border",
        current.bg,
        current.textCol,
        current.border,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", current.dot)} />
      <span>{current.text}</span>
    </span>
  );
}

