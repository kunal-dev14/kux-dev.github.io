import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Image as ImageIcon,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { StatusBadge } from "@/components/projects/StatusBadge";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Kux.dev",
      description: "The requested project case study could not be located.",
    };
  }

  return {
    title: `${project.title} — Case Study | Kux.dev`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.subtitle} | Kux.dev`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const details = project.details;
  const hasProblemOrSolution = details?.problem || details?.solution;
  const hasFeatures = details?.features && details.features.length > 0;
  const hasChallenges = details?.challenges && details.challenges.length > 0;
  const hasLearnings = details?.learnings && details.learnings.length > 0;
  const hasArchitecture =
    details?.technicalArchitecture && details.technicalArchitecture.length > 0;
  const hasGallery = project.gallery && project.gallery.length > 0;

  return (
    <div className="flex min-h-screen flex-col bg-background text-slate-100">
      <Header />
      <main className="flex-1 py-12 sm:py-20">
        <Container size="tight">
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-lavender-300 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all projects</span>
            </Link>

            <span className="text-xs font-mono text-slate-500">
              Project ID: #{project.id}
            </span>
          </div>

          {/* Header metadata */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="lavender">{project.categoryLabel}</Badge>
              <StatusBadge status={project.status} label={project.statusLabel} />
              <span className="text-xs font-mono text-slate-500">Year: {project.year}</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-medium">
              {project.subtitle}
            </p>
            <p className="text-base text-slate-400 leading-relaxed pt-2">
              {project.description}
            </p>

            {/* Action buttons (only valid links rendered) */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {project.links?.liveDemo && (
                <Button href={project.links.liveDemo} isExternal variant="primary">
                  <span>Visit Live Platform</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              )}
              {project.links?.github && (
                <Button href={project.links.github} isExternal variant="secondary">
                  <GithubIcon className="h-4 w-4" />
                  <span>View Source on GitHub</span>
                </Button>
              )}
              {project.links?.documentation && (
                <Button href={project.links.documentation} isExternal variant="outline">
                  <span>Documentation</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Tech Stack Bar */}
          <div className="mb-12 rounded-2xl border border-surface-border bg-surface p-6 sm:p-7">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-lavender-400" />
              <span>Technologies & Architecture</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Optional Screenshots / Gallery Section */}
          {hasGallery && (
            <div className="mb-12 space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <ImageIcon className="h-4 w-4 text-lavender-400" />
                <span>Interface & Screenshots</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery!.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl border border-surface-border bg-surface-elevated/40 p-2"
                  >
                    <div className="relative aspect-video w-full rounded-lg bg-surface flex items-center justify-center text-xs font-mono text-slate-500">
                      <span>{imgSrc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case study deep dive sections */}
          <div className="space-y-10">
            {/* Problem & Solution (safely rendered) */}
            {hasProblemOrSolution && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {details?.problem && (
                  <Card className="border-l-4 border-l-red-500/80">
                    <h3 className="text-lg font-bold text-white mb-3">The Problem</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {details.problem}
                    </p>
                  </Card>
                )}

                {details?.solution && (
                  <Card className="border-l-4 border-l-emerald-500/80">
                    <h3 className="text-lg font-bold text-white mb-3">The Solution</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {details.solution}
                    </p>
                  </Card>
                )}
              </div>
            )}

            {/* Key Features (safely rendered) */}
            {hasFeatures && (
              <Card>
                <div className="flex items-center gap-2 mb-4 text-lavender-400 font-mono text-sm font-semibold">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Implemented Features & Architecture</span>
                </div>
                <ul className="space-y-3">
                  {details!.features!.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-lavender-400 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Challenges & Learnings (safely rendered) */}
            {(hasChallenges || hasLearnings) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hasChallenges && (
                  <Card>
                    <div className="flex items-center gap-2 mb-3 text-amber-400 font-mono text-sm font-semibold">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Engineering Challenges</span>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {details!.challenges!.map((ch, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {hasLearnings && (
                  <Card>
                    <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-sm font-semibold">
                      <Lightbulb className="h-4 w-4" />
                      <span>Key Learnings</span>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {details!.learnings!.map((lrn, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{lrn}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>
            )}

            {/* Technical Architecture Blueprint (safely rendered) */}
            {hasArchitecture && (
              <Card className="border border-surface-border bg-surface-elevated/40">
                <div className="flex items-center gap-2 mb-4 text-lavender-300 font-mono text-sm font-semibold">
                  <Cpu className="h-4 w-4" />
                  <span>Technical Blueprint</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
                  {details!.technicalArchitecture!.map((arch, idx) => (
                    <li key={idx} className="p-2.5 rounded-lg bg-surface border border-surface-border">
                      {arch}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>

          {/* Bottom Back Button */}
          <div className="mt-14 pt-8 border-t border-surface-border flex items-center justify-between">
            <Button href="/projects" variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              <span>Back to Projects Directory</span>
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
