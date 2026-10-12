import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";
import { StatusBadge } from "./StatusBadge";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export function ProjectCard({ project, featuredLayout = false }: ProjectCardProps) {
  const hasProblemOrSolution =
    project.details?.problem || project.details?.solution;

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-surface-border bg-surface p-6 sm:p-8 transition-all duration-300 hover:border-lavender-500/40 hover:bg-surface-subtle hover:shadow-glow-lavender",
        featuredLayout && "lg:col-span-1"
      )}
    >
      <div>
        {/* Top Meta: Category + Status Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <Badge variant="lavender">{project.categoryLabel}</Badge>
          <StatusBadge status={project.status} label={project.statusLabel} />
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-lavender-200 transition-colors">
          <Link
            href={`/projects/${project.slug}`}
            className="focus:outline-none focus-visible:underline"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-400">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Problem & Solution Snippet (Safely rendered if present) */}
        {hasProblemOrSolution && (
          <div className="mt-5 space-y-2.5 rounded-xl border border-surface-border/70 bg-background/50 p-4 text-xs font-mono text-slate-400">
            {project.details?.problem && (
              <div className="flex gap-2">
                <span className="font-semibold text-lavender-400 shrink-0">Problem:</span>
                <span className="line-clamp-2 text-slate-300">{project.details.problem}</span>
              </div>
            )}
            {project.details?.solution && (
              <div className="flex gap-2">
                <span className="font-semibold text-emerald-400 shrink-0">Solution:</span>
                <span className="line-clamp-2 text-slate-300">{project.details.solution}</span>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-surface-border bg-surface-elevated/70 px-2 py-0.5 text-xs font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-8 pt-5 border-t border-surface-border/70 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-lavender-300 hover:text-white transition-colors group-hover:translate-x-0.5 transform duration-150"
        >
          <span>Deep-dive case study</span>
          <ArrowRight className="h-4 w-4" />
        </Link>

        <div className="flex items-center gap-2">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border text-slate-400 hover:text-white hover:border-lavender-400/50 hover:bg-surface-elevated transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
          {project.links?.liveDemo && (
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border text-slate-400 hover:text-white hover:border-lavender-400/50 hover:bg-surface-elevated transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
