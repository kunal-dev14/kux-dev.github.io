import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectDirectory } from "@/components/projects/ProjectDirectory";
import {
  projects,
  getAvailableCategories,
  getAvailableStatuses,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects Directory | Kux.dev",
  description:
    "Comprehensive engineering directory: explore JanSetu, FitBook, Airport Runway Management, and Yatrik with technology filters and detailed architecture.",
};

export default function ProjectsDirectoryPage() {
  const categories = getAvailableCategories();
  const statuses = getAvailableStatuses();

  return (
    <div className="flex min-h-screen flex-col bg-background text-slate-100">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <Container>
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-lavender-300 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to home</span>
            </Link>
          </div>

          <SectionHeading
            eyebrow="Expandable Registry"
            title="Projects & Case Studies"
            description="Filter and search through real-world applications, custom algorithmic systems, and active development prototypes. Filter by category, status, or technology."
          />

          <ProjectDirectory
            initialProjects={projects}
            categories={categories}
            statuses={statuses}
          />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
