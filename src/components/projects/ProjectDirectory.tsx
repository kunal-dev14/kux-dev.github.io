"use client";

import React, { useState, useMemo } from "react";
import { Search, X, Filter, RotateCcw } from "lucide-react";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectDirectoryProps {
  initialProjects: Project[];
  categories: { id: string; label: string; count: number }[];
  statuses: { id: string; label: string; count: number }[];
}

export function ProjectDirectory({
  initialProjects,
  categories,
  statuses,
}: ProjectDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // Filter projects based on query, category, and status
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category match
      if (selectedCategory !== "all" && project.category !== selectedCategory) {
        return false;
      }

      // Status match
      if (selectedStatus !== "all" && project.status !== selectedStatus) {
        return false;
      }

      // Search match
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesSubtitle = project.subtitle.toLowerCase().includes(query);
        const matchesDescription = project.description.toLowerCase().includes(query);
        const matchesTech = project.technologies.some((t) =>
          t.toLowerCase().includes(query)
        );
        const matchesProblem =
          project.details?.problem?.toLowerCase().includes(query) ?? false;
        const matchesSolution =
          project.details?.solution?.toLowerCase().includes(query) ?? false;

        if (
          !matchesTitle &&
          !matchesSubtitle &&
          !matchesDescription &&
          !matchesTech &&
          !matchesProblem &&
          !matchesSolution
        ) {
          return false;
        }
      }

      return true;
    });
  }, [initialProjects, searchQuery, selectedCategory, selectedStatus]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedStatus !== "all";

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedStatus("all");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls Bar */}
      <div className="rounded-2xl border border-surface-border bg-surface p-5 sm:p-6 space-y-6">
        {/* Top: Search Input */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, description, or technology (e.g. React, Python, MongoDB)..."
            aria-label="Search projects"
            className="w-full rounded-xl border border-surface-border bg-surface-elevated/70 py-3 pl-11 pr-10 text-sm text-white placeholder-slate-400 transition-colors focus:border-lavender-400 focus:outline-none focus:ring-1 focus:ring-lavender-400"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search input"
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter Rows: Category & Status */}
        <div className="space-y-4 pt-2 border-t border-surface-border/70">
          {/* Category Filter Pills */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Filter className="h-3 w-3 text-lavender-400" />
              <span>Category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                  selectedCategory === "all"
                    ? "bg-lavender-500/20 border-lavender-400 text-lavender-200"
                    : "bg-surface-elevated/50 border-surface-border text-slate-400 hover:text-white hover:border-surface-border-hover"
                }`}
              >
                <span>All Categories</span>
                <span className="opacity-60">({initialProjects.length})</span>
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                    selectedCategory === cat.id
                      ? "bg-lavender-500/20 border-lavender-400 text-lavender-200"
                      : "bg-surface-elevated/50 border-surface-border text-slate-400 hover:text-white hover:border-surface-border-hover"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="opacity-60">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter Pills */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Status
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedStatus("all")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                  selectedStatus === "all"
                    ? "bg-lavender-500/20 border-lavender-400 text-lavender-200"
                    : "bg-surface-elevated/50 border-surface-border text-slate-400 hover:text-white hover:border-surface-border-hover"
                }`}
              >
                <span>All Statuses</span>
              </button>

              {statuses.map((stat) => (
                <button
                  key={stat.id}
                  type="button"
                  onClick={() => setSelectedStatus(stat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                    selectedStatus === stat.id
                      ? "bg-lavender-500/20 border-lavender-400 text-lavender-200"
                      : "bg-surface-elevated/50 border-surface-border text-slate-400 hover:text-white hover:border-surface-border-hover"
                  }`}
                >
                  <span>{stat.label}</span>
                  <span className="opacity-60">({stat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Status bar: counts & reset */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surface-border/70 text-xs font-mono">
          <div className="text-slate-400">
            Showing <strong className="text-white">{filteredProjects.length}</strong> of{" "}
            <strong className="text-white">{initialProjects.length}</strong> projects
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1.5 text-lavender-400 hover:text-lavender-300 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset active filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        /* Empty-results state */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-surface-border bg-surface/40 p-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated text-slate-400 border border-surface-border mb-4">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No projects found</h3>
          <p className="max-w-md text-sm text-slate-400 mb-6 leading-relaxed">
            No projects matched your search criteria. Try modifying your search term or clearing the active filters.
          </p>
          <Button onClick={clearAllFilters} variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-1.5" />
            <span>Clear Filters</span>
          </Button>
        </div>
      )}
    </div>
  );
}

