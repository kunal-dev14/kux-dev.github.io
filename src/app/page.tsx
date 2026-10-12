import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceEducationSection } from "@/components/sections/ExperienceEducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CybersecurityJourneySection } from "@/components/sections/CybersecurityJourneySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-slate-100 selection:bg-lavender-500/30 selection:text-lavender-200">
      <Header />
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Selected Projects */}
        <SelectedProjectsSection />

        {/* 3. About */}
        <AboutSection />

        {/* 4. Experience & Education */}
        <ExperienceEducationSection />

        {/* 5. Technical Skills */}
        <SkillsSection />

        {/* 6. Cybersecurity Journey */}
        <CybersecurityJourneySection />

        {/* 7. Contact */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
