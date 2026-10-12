import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-slate-100">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <Container size="tight" className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-elevated text-lavender-400 border border-lavender-500/30 mb-6 shadow-glow-lavender">
            <Compass className="h-8 w-8 animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-mono text-slate-400 mb-4">
            <span>Error 404 • Resource Not Located</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-4">
            Page or Project Not Found
          </h1>

          <p className="max-w-md mx-auto text-base text-slate-400 mb-8 leading-relaxed">
            The project or route you requested does not exist or may have been relocated. Check the project directory for active work.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/projects" variant="primary">
              <span>View All Projects</span>
            </Button>
            <Button href="/" variant="secondary">
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              <span>Return Home</span>
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

