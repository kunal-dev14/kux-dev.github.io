import React from "react";
import { ShieldCheck, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CybersecurityJourneySection() {
  return (
    <section id="journey" className="py-12 sm:py-14 lg:py-16 border-t border-surface-border/60">
      <Container>
        <div className="max-w-3xl">
          <div className="mb-6 sm:mb-7">
            <div className="inline-flex items-center gap-2 mb-2.5 text-xs font-mono font-medium tracking-widest uppercase text-lavender-400">
              <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
              <span>Specialization</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Cybersecurity Journey
            </h2>
            <p className="mt-3 text-base text-slate-300 sm:text-lg leading-relaxed">
              Connecting software engineering with practical defensive security, network analysis, and infrastructure protection.
            </p>
          </div>

          <div className="space-y-4">
            {/* 3 Core Focus Points */}
            <div className="rounded-2xl border border-surface-border bg-surface p-6 sm:p-7 space-y-3.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Current Learning Focus</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                  <span><strong>Networking Fundamentals:</strong> TCP/IP stack layers, ports and protocols, DNS resolution, and HTTP/HTTPS lifecycles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                  <span><strong>Application Defense:</strong> Mitigating OWASP Top 10 vulnerabilities, strict input validation, and defensive API routing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                  <span><strong>Authentication Security:</strong> Salted password stretching using bcrypt and tamper-resistant HTTP-only cookie tokens.</span>
                </li>
              </ul>
            </div>

            {/* Long-Term Goal */}
            <div className="rounded-2xl border border-surface-border bg-surface p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-lavender-400 flex items-center gap-2">
                  <Target className="h-4 w-4 shrink-0" />
                  <span>Career Direction</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Security Operations (SecOps)
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  Aiming to combine full-stack engineering expertise with defensive incident response, log monitoring, and threat detection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
