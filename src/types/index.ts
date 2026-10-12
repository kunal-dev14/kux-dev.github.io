export type ProjectStatus = "deployed" | "in-development" | "completed" | "archived";

export type ProjectCategory = 
  | "full-stack"
  | "saas"
  | "systems"
  | "security"
  | "desktop"
  | "tools";

export interface ProjectLinks {
  liveDemo?: string;
  github?: string;
  caseStudy?: string;
  documentation?: string;
}

export interface ProjectDetails {
  problem?: string;
  solution?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  technicalArchitecture?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: ProjectStatus;
  statusLabel: string;
  year: string;
  technologies: string[];
  shortDescription?: string;
  homepageTechnologies?: string[];
  featured: boolean;
  coverImage?: string;
  gallery?: string[];
  links: ProjectLinks;
  details?: ProjectDetails;
}

export type CategoryFilter = "all" | ProjectCategory;
export type StatusFilter = "all" | ProjectStatus;
