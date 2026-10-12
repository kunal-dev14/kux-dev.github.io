import React from "react";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 border-t border-surface-border/60">
      <Container>
        <div className="mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 mb-2.5 text-xs font-mono font-medium tracking-widest uppercase text-lavender-400">
            <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
            <span>Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technical Skills
          </h2>
        </div>

        {/* Clean, editorial domain list instead of dozens of boxed tags */}
        <div className="divide-y divide-surface-border/70 border-y border-surface-border/70">
          {profileData.skills.map((group) => (
            <div
              key={group.category}
              className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
            >
              <div className="sm:col-span-4 text-xs font-mono uppercase tracking-wider text-lavender-300 font-medium">
                {group.category}
              </div>
              <div className="sm:col-span-8 text-sm sm:text-base text-slate-200 leading-relaxed">
                {group.skills.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
