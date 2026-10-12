import React from "react";
import { Sparkles, Terminal } from "lucide-react";

export function HeroPlaceholder() {
  return (
    <div className="relative flex h-[380px] sm:h-[460px] lg:h-[540px] w-full items-center justify-center overflow-hidden rounded-3xl border border-surface-border bg-gradient-to-b from-surface-elevated/40 via-surface/30 to-background/50 p-6 backdrop-blur-sm">
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lavender-500/15 via-transparent to-transparent opacity-60" />

      {/* Futuristic Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#9c76eb 1px, transparent 1px), linear-gradient(to right, #9c76eb 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Abstract Metallic Geometric Motif (Placeholder for interactive 3D Three.js object) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Geometric nested rings representation */}
        <div className="relative flex h-48 w-48 sm:h-64 sm:w-64 items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-lavender-500/30 animate-[spin_24s_linear_infinite]" />
          
          {/* Middle faceted ring */}
          <div className="absolute inset-4 rounded-3xl border border-surface-border-hover bg-gradient-to-br from-lavender-500/10 via-surface-elevated/60 to-surface/40 transform rotate-12 transition-transform duration-700" />
          
          {/* Core metallic faceted icon */}
          <div className="relative flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-2xl border border-lavender-400/40 bg-gradient-to-tr from-surface-elevated via-lavender-900/30 to-slate-800 shadow-glow-lavender">
            <div className="h-12 w-12 rounded-xl border border-lavender-400/60 bg-lavender-500/20 transform -rotate-45 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-lavender-300 transform rotate-45" />
            </div>
          </div>
        </div>

        {/* Viewport Meta Badge */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/90 px-3 py-1 text-xs font-mono text-slate-400 shadow-sm">
          <Terminal className="h-3.5 w-3.5 text-lavender-400" />
          <span>Interactive 3D Canvas • Stage Ready</span>
        </div>
      </div>

      {/* Decorative corner markers */}
      <div className="absolute top-4 left-4 h-2 w-2 border-t-2 border-l-2 border-lavender-400/40" />
      <div className="absolute top-4 right-4 h-2 w-2 border-t-2 border-r-2 border-lavender-400/40" />
      <div className="absolute bottom-4 left-4 h-2 w-2 border-b-2 border-l-2 border-lavender-400/40" />
      <div className="absolute bottom-4 right-4 h-2 w-2 border-b-2 border-r-2 border-lavender-400/40" />
    </div>
  );
}

