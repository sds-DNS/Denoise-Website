import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { fadeUp, stagger, replayViewport } from "../../lib/animations";
import { founders } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import UnifiedCard from "../ui/UnifiedCard";
import CTAButton from "../ui/CTAButton";

function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function SocialPill({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-dark"
    >
      {children}
    </a>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgb(from_var(--color-brand)_r_g_b_/_0.10),transparent_30%),linear-gradient(180deg,var(--color-white),var(--color-cream))]" />
      <div className="relative mx-auto max-w-7xl">
        {/* Founders */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={stagger}
          className=""
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <SectionLabel>Founders</SectionLabel>
              <h3 className="max-w-3xl text-3xl font-black tracking-[-0.04em] text-ink md:text-5xl">
                Founder-led thinking across operations, HR, hiring, and execution.
              </h3>
            </div>
            <CTAButton>Book a Conversation With Us</CTAButton>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {founders.map((founder) => (
              <motion.div key={founder.name} variants={fadeUp}>
                <UnifiedCard className="overflow-hidden p-0">
                  <div className="grid min-h-full md:grid-cols-[.95fr_1.05fr]">
                    {/* Initials panel */}
                    <div className="flex min-h-[520px] items-center justify-center bg-gradient-to-br from-white via-lilac-50 to-lilac-200 p-8">
                      <div className="flex h-full min-h-[420px] w-full items-center justify-center rounded-[2rem] border border-white/70 bg-white/65 text-7xl font-black text-brand shadow-inner">
                        {founder.initials}
                      </div>
                    </div>
                    {/* Info panel */}
                    <div className="flex flex-col p-8">
                      <p className="text-3xl font-black tracking-[-0.04em] text-ink">
                        {founder.name}
                      </p>
                      <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-gold">
                        {founder.role}
                      </p>
                      <div className="mt-5 flex items-center gap-3">
                        <SocialPill href={`mailto:${founder.email}`} label={`Email ${founder.name}`}>
                          <Mail className="h-5 w-5 stroke-[2.4]" />
                        </SocialPill>
                        <SocialPill href={founder.linkedin} label={`${founder.name} on LinkedIn`}>
                          <LinkedinIcon className="h-4 w-4" />
                        </SocialPill>
                      </div>
                      <p className="mt-6 text-base leading-8 text-muted-2">{founder.text}</p>
                      <div className="mt-7 border-t border-brand/10 pt-6">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">
                          Credentials
                        </p>
                        <ul className="mt-4 space-y-3">
                          {founder.credentials.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-sm font-semibold leading-6 text-ink-soft"
                            >
                              <span className="mr-1 text-brand">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </UnifiedCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
