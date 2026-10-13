import React from "react";
import { Container } from "@/components/ui/Container";

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-14 lg:py-16 border-t border-surface-border/60">
      <Container>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest uppercase text-lavender-400">
            <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
            <span>About</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            A developer in progress. Always building.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-[1.75] pt-1">
            I&apos;m a BCA student at Pillai&apos;s College who loves building web apps that actually solve real problems. When I&apos;m not writing code for projects like JanSetu and FitBook, I&apos;m diving into data structures, exploring defensive cybersecurity, and learning how to keep systems secure and resilient.
          </p>
        </div>
      </Container>
    </section>
  );
}
