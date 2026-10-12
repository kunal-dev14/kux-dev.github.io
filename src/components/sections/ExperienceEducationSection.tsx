import React from "react";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function ExperienceEducationSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 border-t border-surface-border/60">
      <div id="education" className="sr-only" />
      <Container>
        <div className="mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 mb-2.5 text-xs font-mono font-medium tracking-widest uppercase text-lavender-400">
            <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
            <span>Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience &amp; Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Internship Experience */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-lavender-400 shrink-0" />
              <span>Professional Experience</span>
            </h3>

            {profileData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-surface-border bg-surface p-6 sm:p-7 space-y-3.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-semibold text-lavender-300">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 pt-1 sm:pt-0">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2.5 border-t border-surface-border/70 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-surface-border bg-surface-elevated/70 px-2 py-0.5 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Academic Education */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-lavender-400 shrink-0" />
              <span>Academic Education</span>
            </h3>

            <div className="relative border-l border-surface-border ml-2 space-y-6 pt-1">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute -left-[6px] top-0.5 h-3 w-3 rounded-full border-2 border-lavender-400 bg-surface" />
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono text-lavender-400">
                      <span>{edu.period}</span>
                      {edu.status && (
                        <span className="text-[11px] text-slate-500">
                          {edu.status}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {edu.degree}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300">
                      {edu.institution}
                    </p>

                    <p className="text-[11px] font-mono text-slate-500">
                      {edu.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
