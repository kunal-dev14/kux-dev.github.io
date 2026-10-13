import React from "react";
import Link from "next/link";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-surface-border/80 bg-surface/40 text-slate-400">
      <Container>
        <div className="py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Col 1: Brand & Bio */}
            <div className="md:col-span-6 space-y-3.5">
              <Link
                href="/"
                className="text-xl font-mono font-bold tracking-widest text-white inline-block hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded-sm"
              >
                KUX<span className="text-lavender-400">.DEV</span>
              </Link>
              <p className="max-w-md text-sm text-slate-400 leading-relaxed">
                Full-Stack Developer &amp; Cybersecurity Enthusiast. BCA student building honest, scalable web platforms and reliable systems.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-3.5">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-sm">
                {profileData.navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-block text-slate-400 hover:text-lavender-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Connect & Socials */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-3.5">
                Connect
              </h3>
              <ul className="space-y-2.5 text-sm">
                {profileData.socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.isExternal ? "_blank" : undefined}
                      rel={social.isExternal ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-slate-400 hover:text-lavender-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded-sm"
                    >
                      {social.icon === "github" && (
                        <GithubIcon className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-lavender-300 transition-colors" />
                      )}
                      {social.icon === "linkedin" && (
                        <LinkedinIcon className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-lavender-300 transition-colors" />
                      )}
                      {social.icon === "mail" && (
                        <Mail className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-lavender-300 transition-colors" />
                      )}
                      {social.icon === "phone" && (
                        <Phone className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-lavender-300 transition-colors" />
                      )}
                      <span>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
            <p>© 2026 KUX.DEV. Built by Kunal.</p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 hover:text-lavender-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded-sm"
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

