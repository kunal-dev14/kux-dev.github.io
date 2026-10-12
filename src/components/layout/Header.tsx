"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { profileData } from "@/data/profile";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-surface-border/80 bg-background/80 backdrop-blur-md">
        <Container>
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="group flex items-center gap-2 text-lg sm:text-xl font-mono font-bold tracking-widest text-white transition-colors"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-elevated border border-surface-border text-lavender-400 group-hover:border-lavender-500/50 group-hover:text-white transition-colors">
                  K
                </span>
                <span>
                  KUX<span className="text-lavender-400">.DEV</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {profileData.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-surface-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                >
                  {item.label}
                  {item.label === "Projects" && (
                    <span className="ml-1.5 inline-flex items-center rounded-full bg-lavender-500/10 px-1.5 py-0.2 text-[10px] font-mono text-lavender-300 border border-lavender-500/20">
                      {projects.length}
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/#contact" variant="outline" size="sm">
                Get In Touch
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border bg-surface text-slate-200 hover:text-white hover:border-lavender-400/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

