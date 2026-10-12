import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "jansetu",
    slug: "jansetu",
    title: "JanSetu",
    subtitle: "Government Job Discovery & Public Service Access Platform",
    description:
      "A centralized web portal designed to streamline access to official government job notifications, eligibility criteria, and application workflows for Indian citizens.",
    category: "full-stack",
    categoryLabel: "Full-Stack Web",
    status: "deployed",
    statusLabel: "Live",
    year: "2024",
    shortDescription: "A simpler way to discover government job opportunities.",
    homepageTechnologies: ["React", "Node.js", "MongoDB"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    featured: true,
    coverImage: "/projects/jansetu.svg",
    links: {
      liveDemo: "https://jansetu.in",
      caseStudy: "/projects/jansetu",
      github: "https://github.com/kunalshinde-14/govt-jobs",
    },
    details: {
      problem:
        "Government job postings in India are scattered across dozens of fragmented regional portals with slow servers, ambiguous eligibility rules, and complex application procedures.",
      solution:
        "Built JanSetu to unify official notifications into a responsive, searchable portal with structured qualification matching, real-time filters, and secure user authentication.",
      features: [
        "Consolidated job alerts categorized by qualification, department, and state.",
        "Role-based authentication with JSON Web Tokens (JWT) and secure cookie handling.",
        "Server-side pagination and optimized MongoDB aggregation for fast query filtering.",
        "Mobile-first responsive UI crafted for low-bandwidth mobile internet users.",
      ],
      challenges: [
        "Designing schema indexes in MongoDB to support multi-faceted queries across qualifications and dates without query latency.",
        "Ensuring low payload size and rapid time-to-interactive on mobile connections.",
      ],
      learnings: [
        "Hands-on architectural experience separating Express REST API endpoints from the React client.",
        "Stateful token refresh cycles and defensive input validation using Express middleware.",
      ],
      technicalArchitecture: [
        "Client: React SPA with custom hooks for cache-first fetch queries.",
        "Server: Express.js REST API with rate limiting and CORS policies.",
        "Database: MongoDB Atlas with compound indices on status and deadline fields.",
      ],
    },
  },
  {
    id: "fitbook",
    slug: "fitbook",
    title: "FitBook",
    subtitle: "Gym & Personal Trainer Client Management SaaS",
    description:
      "A software-as-a-service application enabling fitness facilities and independent trainers to organize client schedules, workout plans, and membership renewals.",
    category: "saas",
    categoryLabel: "SaaS Application",
    status: "in-development",
    statusLabel: "In development",
    year: "2025",
    shortDescription: "Gym management, without the spreadsheet chaos.",
    homepageTechnologies: ["Next.js", "React", "MongoDB"],
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Node.js",
      "JWT",
      "bcrypt",
    ],
    featured: true,
    coverImage: "/projects/fitbook.svg",
    links: {
      caseStudy: "/projects/fitbook",
      github: "https://github.com/kunalshinde-14/Fitbook",
    },
    details: {
      problem:
        "Independent fitness trainers and small gym facilities struggle with manual spreadsheet tracking for member subscriptions, session booking, and workout logs.",
      solution:
        "Developing a modern Next.js SaaS platform providing interactive scheduling, automated membership expiry alerts, and trainer-client workout tracking.",
      features: [
        "Trainer and client dual-role access control with encrypted password authentication using bcrypt.",
        "Workout routine and diet plan assignment with customized progress logs.",
        "Member subscription tracking with automated expiry alerts.",
        "Modern dashboard interface built with Next.js App Router and Tailwind CSS.",
      ],
      challenges: [
        "Modeling relational membership cycles inside a document-oriented MongoDB schema with Mongoose.",
        "Handling concurrent booking slots to prevent overlapping trainer schedules.",
      ],
      learnings: [
        "Mastery of Next.js App Router server actions and server components for reduced client-side JavaScript.",
        "Secure credential hashing patterns and defense against session hijacking.",
      ],
      technicalArchitecture: [
        "Framework: Next.js (App Router) with React Server Components.",
        "Data Layer: MongoDB with Mongoose strict schema enforcement.",
        "Security: bcrypt salt rounds and HTTP-only JWT cookies.",
      ],
    },
  },
  {
    id: "airport-runway",
    slug: "airport-runway",
    title: "Airport Runway Management System",
    subtitle: "Deterministic Flight Scheduling & Air Traffic Data Structures",
    description:
      "A desktop application modeling runway allocation, emergency landing queues, and flight lookup operations utilizing core computer science data structures.",
    category: "systems",
    categoryLabel: "Systems & Data Structures",
    status: "completed",
    statusLabel: "Completed",
    year: "2024",
    shortDescription: "A Python desktop app for runway scheduling and flight management.",
    homepageTechnologies: ["Python", "Tkinter", "Data Structures"],
    technologies: ["Python", "Tkinter", "Queue", "Hash Table", "Stack", "Data Structures"],
    featured: true,
    coverImage: "/projects/airport-runway.svg",
    links: {
      caseStudy: "/projects/airport-runway",
      github: "https://github.com/kunalshinde-14/Airport-Runway-Management-System",
    },
    details: {
      problem:
        "Airport control towers must manage runway priority between scheduled departures, arriving flights, and priority distress signals without race conditions or starvation.",
      solution:
        "Engineered a desktop simulation in Python implementing priority queues for takeoff/landing sequences, hash tables for constant-time flight lookups, and stacks for operational rollback.",
      features: [
        "Runway scheduling powered by Priority Queues enforcing emergency flight preemption.",
        "Custom Hash Table with Linear Probing for flight registration and O(1) status lookup.",
        "Undo/History stack for air traffic controller commands and dispatch rollbacks.",
        "Interactive graphical interface built with Python's native Tkinter library.",
      ],
      challenges: [
        "Implementing linear probing collision resolution from scratch to maintain lookup performance under high load factors.",
        "Synchronizing UI updates with queuing logic in a single-threaded GUI event loop.",
      ],
      learnings: [
        "Deep understanding of algorithmic complexity (Big-O) in real-world resource allocation scenarios.",
        "Collision avoidance mechanisms in hashing algorithms and deterministic memory utilization.",
      ],
      technicalArchitecture: [
        "Data Core: Native Python implementation of Queue, Stack, and Open Addressing Hash Table.",
        "GUI: Tkinter with modular frame controllers and event bindings.",
      ],
    },
  },
  {
    id: "yatrik",
    slug: "yatrik",
    title: "Yatrik",
    subtitle: "Enterprise Railway Ticket Reservation & Inventory System",
    description:
      "A comprehensive desktop booking system interfacing with Oracle Database 21c Enterprise Edition, enforcing ACID guarantees across seat reservations and ticket cancellations.",
    category: "desktop",
    categoryLabel: "Desktop & Enterprise Database",
    status: "completed",
    statusLabel: "Completed",
    year: "2024",
    shortDescription: "A railway ticket booking app powered by Python and Oracle Database.",
    homepageTechnologies: ["Python", "Tkinter", "Oracle Database"],
    technologies: ["Python", "Tkinter", "Oracle Database 21c XE", "SQL", "cx_Oracle"],
    featured: true,
    coverImage: "/projects/yatrik.svg",
    links: {
      caseStudy: "/projects/yatrik",
      github: "https://github.com/kunalshinde-14/Yatrik",
    },
    details: {
      problem:
        "Railway reservation engines need rigorous transactional integrity to prevent duplicate seat allocations, phantom reads, and inconsistent passenger records.",
      solution:
        "Built Yatrik with Python Tkinter and Oracle Database 21c XE, leveraging strict relational constraints, stored procedures, and transaction rollbacks for ticket issuance.",
      features: [
        "Passenger reservation and PNR generation workflow with quota-based seat allocation.",
        "Oracle Database 21c XE backend enforcing foreign keys, checks, and sequence generators.",
        "Ticket cancellation workflow with automatic seat inventory replenishment.",
        "Comprehensive administrative dashboard for train schedule updates and passenger manifests.",
      ],
      challenges: [
        "Maintaining database transaction isolation levels to prevent double-booking of identical berth numbers.",
        "Configuring Oracle Instant Client and cx_Oracle connectivity in Windows development environments.",
      ],
      learnings: [
        "Advanced relational schema design, third normal form (3NF), and foreign key cascades.",
        "Transactional safety (`COMMIT` and `ROLLBACK`) in enterprise relational database engines.",
      ],
      technicalArchitecture: [
        "Interface: Python Tkinter with parameterized form validation.",
        "Database Driver: cx_Oracle / oracledb with connection pool management.",
        "Storage: Oracle Database 21c Express Edition.",
      ],
    },
  },
];

// Dynamic helper functions
export function getProjectCount(): number {
  return projects.length;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getAvailableCategories(): { id: string; label: string; count: number }[] {
  const catMap = new Map<string, { label: string; count: number }>();
  
  projects.forEach((p) => {
    const existing = catMap.get(p.category);
    if (existing) {
      existing.count += 1;
    } else {
      catMap.set(p.category, { label: p.categoryLabel, count: 1 });
    }
  });

  return Array.from(catMap.entries()).map(([id, data]) => ({
    id,
    label: data.label,
    count: data.count,
  }));
}

export function getAvailableStatuses(): { id: string; label: string; count: number }[] {
  const statusMap = new Map<string, { label: string; count: number }>();
  
  projects.forEach((p) => {
    const existing = statusMap.get(p.status);
    if (existing) {
      existing.count += 1;
    } else {
      statusMap.set(p.status, { label: p.statusLabel, count: 1 });
    }
  });

  return Array.from(statusMap.entries()).map(([id, data]) => ({
    id,
    label: data.label,
    count: data.count,
  }));
}
