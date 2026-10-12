import React from "react";
import { Mail, Phone, ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 border-t border-surface-border/60">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="Get In Touch"
            title="Have an idea? Let's talk."
            description="Whether you're looking for an intern, have an idea you'd like to bring to life, or just want to chat about tech and security — I'd love to hear from you."
          />

          <div className="rounded-2xl border border-surface-border bg-surface p-8 sm:p-10 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Reach out directly
              </h3>
              <p className="max-w-md mx-auto text-sm text-slate-300 leading-relaxed">
                I check my messages daily and usually reply within a few hours.
              </p>
            </div>

            {/* Direct contact options: Email, Phone, and GitHub Profile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {/* Email Button */}
              <a
                href={`mailto:${profileData.contact.email}`}
                className="group flex items-center justify-between p-4 rounded-xl border border-surface-border bg-surface-elevated/60 hover:bg-surface-elevated hover:border-lavender-500/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-lavender-500/10 text-lavender-400 border border-lavender-500/20 group-hover:bg-lavender-500/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-lavender-300 transition-colors">
                      {profileData.contact.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-lavender-300 transition-colors shrink-0 ml-1.5" />
              </a>

              {/* Phone Button */}
              <a
                href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                className="group flex items-center justify-between p-4 rounded-xl border border-surface-border bg-surface-elevated/60 hover:bg-surface-elevated hover:border-lavender-500/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Phone</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-emerald-300 transition-colors">
                      {profileData.contact.phone}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-300 transition-colors shrink-0 ml-1.5" />
              </a>

              {/* GitHub Profile Button */}
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-surface-border bg-surface-elevated/60 hover:bg-surface-elevated hover:border-lavender-500/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">GitHub</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-purple-300 transition-colors">
                      kunalshinde-14
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-purple-300 transition-colors shrink-0 ml-1.5" />
              </a>
            </div>

            <div className="pt-6 border-t border-surface-border/70 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{profileData.contact.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-lavender-400 shrink-0" />
                <span>{profileData.contact.location}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
