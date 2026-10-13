"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { profileData } from "@/data/profile";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { KMonogram } from "@/components/ui/Icons";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-lavender-500/15 bg-background/90 backdrop-blur-sm">
        <Container>
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded-lg"
              >
                <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-surface-elevated border border-surface-border text-lavender-400 shadow-sm transition-all duration-200 group-hover:border-lavender-500/50 group-hover:shadow-[0_0_12px_rgba(156,118,235,0.22)]">
                  <KMonogram className="h-[18px] w-[18px]" />
                </span>
                <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                  Kunal{" "}
                  <span className="text-lavender-400 font-semibold transition-colors group-hover:text-lavender-300">
                    Shinde
                  </span>
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

