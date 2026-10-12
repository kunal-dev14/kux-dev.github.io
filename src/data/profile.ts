export interface NavItem {
  label: string;
  href: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  brand: string;
  tagline: string;
  roles: string[];
  bio: string;
  navigation: NavItem[];
  socialLinks: {
    label: string;
    href: string;
    icon: string;
    isExternal?: boolean;
  }[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillGroup[];
  cybersecurityFocus: {
    currentStudies: string[];
    coreAreas: string[];
    longTermGoal: string;
  };
  contact: {
    email: string;
    phone: string;
    github: string;
    status: string;
    availability: string;
    location: string;
  };
}

export const profileData: ProfileData = {
  name: "Kunal",
  brand: "KUX.DEV",
  tagline: "I BUILD. I LEARN. I KEEP SHIPPING.",
  roles: [
    "BCA Student",
    "Full-Stack Web Developer",
    "Cybersecurity Enthusiast",
  ],
  bio: "I'm a BCA student at Pillai's College who loves building web apps that actually solve real problems. When I'm not writing code for platforms like JanSetu and FitBook, I'm diving into core data structures, exploring defensive cybersecurity, and learning how to keep software resilient and secure.",
  navigation: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/kunalshinde-14",
      icon: "github",
      isExternal: true,
    },
    {
      label: "Email",
      href: "mailto:kunalshinde1401@gmail.com",
      icon: "mail",
    },
    {
      label: "Phone",
      href: "tel:+919326005479",
      icon: "phone",
    },
  ],
  experience: [
    {
      role: "Web Developer Intern",
      company: "Nexcore Alliance LLP",
      location: "Kurla, Mumbai",
      period: "August 2025 – September 2025",
      type: "Internship",
      highlights: [
        "Developed responsive web interfaces using React.js and Tailwind CSS.",
        "Built backend APIs using Node.js and Express.js.",
        "Collaborated with a team to deliver client projects and implement new features.",
      ],
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "REST APIs"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Pillai's College of Arts, Commerce & Science",
      location: "Panvel, Navi Mumbai",
      period: "June 2023 – Present",
      status: "In Progress",
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Shankarrao Chavan Vidyalay",
      location: "Kamothe, Navi Mumbai",
      period: "April 2022 – May 2023",
      status: "Completed",
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "Shantiniketan Public School",
      location: "Panvel, Navi Mumbai",
      period: "April 2020 – May 2021",
      status: "Completed",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "Modern CSS"],
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Python"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "Mongoose", "Oracle Database 21c XE", "SQL"],
    },
    {
      category: "Computer Science Core",
      skills: ["Data Structures (Queues, Stacks, Hash Tables)", "Algorithms", "Tkinter GUI"],
    },
    {
      category: "Cybersecurity & Tools",
      skills: ["Networking (TCP/IP, Ports & Protocols)", "OWASP Top 10 Awareness", "Git / GitHub", "bcrypt"],
    },
  ],
  cybersecurityFocus: {
    currentStudies: [
      "Networking fundamentals: TCP/IP stack layers, ports, DNS resolution, and HTTP/HTTPS lifecycles.",
      "Application security fundamentals: Defense against injection, cross-site scripting (XSS), and insecure session management.",
      "Defensive architecture: Secure password hashing workflows with bcrypt and HTTP-only cookie tokens.",
    ],
    coreAreas: [
      "Network Protocol Analysis",
      "Defensive Coding",
      "Access Control & Auth",
      "Vulnerability Identification",
    ],
    longTermGoal:
      "To build a dedicated career in Security Operations (SecOps), protecting systems, analyzing network events, and maintaining resilient digital infrastructure.",
  },
  contact: {
    email: "kunalshinde1401@gmail.com",
    phone: "+91 9326005479",
    github: "https://github.com/kunalshinde-14",
    status: "Available for internships, junior engineering roles, and collaborative projects.",
    availability: "Available for internships & junior developer opportunities",
    location: "Navi Mumbai / Mumbai, India (IST)",
  },
};
