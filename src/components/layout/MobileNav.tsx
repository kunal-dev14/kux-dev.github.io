"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Prevent body scrolling when mobile navigation is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col border-l border-surface-border bg-surface p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-surface-border pb-5">
          <Link
            href="/"
            onClick={onClose}
            className="text-lg font-mono font-bold tracking-wider text-white"
          >
            {profileData.brand}
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border text-slate-300 hover:text-white hover:border-lavender-500/50 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="mt-6 flex flex-1 flex-col space-y-1">
          {profileData.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-surface-subtle hover:text-lavender-300 transition-colors"
            >
              <span>{item.label}</span>
              <ArrowRight className="h-4 w-4 text-slate-500" />
            </Link>
          ))}
        </nav>

        {/* Bottom Contact CTA & Links */}
        <div className="border-t border-surface-border pt-6 space-y-4">
          <Button
            href="/#contact"
            onClick={onClose}
            className="w-full justify-center"
            variant="primary"
          >
            Get In Touch
          </Button>

          <div className="flex items-center justify-center gap-4 pt-2 text-slate-400">
            {profileData.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.isExternal ? "_blank" : undefined}
                rel={social.isExternal ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="hover:text-lavender-300 transition-colors"
              >
                {social.icon === "github" && <GithubIcon className="h-5 w-5" />}
                {social.icon === "linkedin" && <LinkedinIcon className="h-5 w-5" />}
                {social.icon === "mail" && <Mail className="h-5 w-5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

