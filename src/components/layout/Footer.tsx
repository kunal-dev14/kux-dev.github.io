import React from "react";
import Link from "next/link";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface/50 text-slate-400">
      <Container>
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Col 1: Brand & Identity */}
            <div className="md:col-span-2 space-y-4">
              <Link
                href="/"
                className="text-xl font-mono font-bold tracking-widest text-white inline-block"
              >
                KUX<span className="text-lavender-400">.DEV</span>
              </Link>
              <p className="max-w-md text-sm text-slate-400 leading-relaxed">
                Full-Stack Developer & Cybersecurity Enthusiast. BCA undergraduate engineering
                honest, scalable web platforms and deterministic systems.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/40 bg-emerald-950/30 px-3 py-1 text-xs font-mono text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profileData.contact.availability}</span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4">
                Navigation
              </p>
              <ul className="space-y-2.5 text-sm">
                {profileData.navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-lavender-300 transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Connect & Socials */}
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4">
                Connect
              </p>
              <ul className="space-y-2.5 text-sm">
                {profileData.socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.isExternal ? "_blank" : undefined}
                      rel={social.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 hover:text-lavender-300 transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {social.icon === "github" && <GithubIcon className="h-4 w-4" />}
                      {social.icon === "linkedin" && <LinkedinIcon className="h-4 w-4" />}
                      {social.icon === "mail" && <Mail className="h-4 w-4" />}
                      {social.icon === "phone" && <Phone className="h-4 w-4" />}
                      <span>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <p>
              © {new Date().getFullYear()} Kux.dev. Built with Next.js App Router & Tailwind CSS.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 hover:text-lavender-300 transition-colors focus-visible:outline-none focus-visible:underline"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

