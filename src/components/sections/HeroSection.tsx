import React from "react";
import { ArrowRight, Code2, Download, Shield, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Hero3DWrapper } from "@/components/3d/Hero3DWrapper";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-16">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-lavender-500/10 blur-[120px]" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7">
            {/* Identity pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-lavender-500/30 bg-surface-elevated/70 px-3.5 py-1.5 text-xs font-mono text-lavender-300 mb-3 sm:mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-lavender-400 animate-pulse" />
              <span>BCA Student & Full-Stack Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.08] mb-4 sm:mb-5">
              I BUILD. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-lavender-300">
                I LEARN.
              </span>{" "}
              <br />
              <span className="text-lavender-400">I KEEP SHIPPING.</span>
            </h1>

            {/* Introduction */}
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-7">
              Hey, I&apos;m Kunal. I&apos;m a BCA student and full-stack developer who loves turning ideas into real, working software. When I&apos;m not building web apps or tinkering with data structures, you&apos;ll find me exploring defensive cybersecurity and figuring out how things break — and how to fix them.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button href="/#projects" variant="primary" size="lg">
                <span>View Selected Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/#contact" variant="secondary" size="lg">
                Get In Touch
              </Button>
              <Button
                href="/Kunal-Shinde-Resume.pdf"
                download="Kunal-Shinde-Resume.pdf"
                variant="outline"
                size="lg"
              >
                <Download className="h-4 w-4" />
                <span>Download Résumé</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Dedicated 3D Stage Area */}
          <div className="lg:col-span-5 w-full">
            <Hero3DWrapper />
          </div>
        </div>
      </Container>
    </section>
  );
}
