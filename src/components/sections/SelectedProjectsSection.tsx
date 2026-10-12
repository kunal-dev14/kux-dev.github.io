import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/projects/StatusBadge";

export function SelectedProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 border-t border-surface-border/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Portfolio"
            title="Things I've built."
            description="A selection of web platforms, systems, and tools I've built. Clean code, real problem solving, and zero fluff."
            className="mb-0"
          />

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-lavender-400 hover:text-white transition-colors shrink-0 mb-1"
          >
            <span>All {projects.length} case studies</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 4 Clean, Equal-Height Project Cards in a 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project) => {
            const shortDesc = project.shortDescription || project.description;
            const techList = project.homepageTechnologies || project.technologies.slice(0, 3);

            return (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-2xl border border-surface-border bg-surface p-6 sm:p-7 transition-all duration-200 hover:border-lavender-500/40 hover:bg-surface-subtle h-full"
              >
                <div>
                  {/* Top row: Project Title + Status Label */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h3 className="text-xl font-bold text-white hover:text-lavender-200 transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <StatusBadge
                      status={project.status}
                      label={project.statusLabel}
                      className="shrink-0"
                    />
                  </div>

                  {/* Short natural description (12-16 words max) */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {shortDesc}
                  </p>

                  {/* At most 3 relevant technology tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {techList.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-surface-border bg-surface-elevated/70 px-2.5 py-0.5 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row: Aligned across all cards */}
                <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between gap-3 mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-lavender-400 hover:text-white transition-colors"
                  >
                    <span>Read case study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  {project.links?.liveDemo && (
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Live site</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
