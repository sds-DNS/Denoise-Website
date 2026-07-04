import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, stagger, replayViewport } from "../../lib/animations";
import { pricingPlans, pricingDeliverables } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import UnifiedCard from "../ui/UnifiedCard";
import ImagePanel from "../ui/ImagePanel";
import CTAButton from "../ui/CTAButton";

export default function WhatWeDo() {
  return (
    <section
      id="operational-diagnosis"
      className="relative overflow-hidden border-y border-ink/8 bg-lilac-50 px-6 py-24 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgb(from_var(--color-brand)_r_g_b_/_0.14),transparent_32%),radial-gradient(circle_at_84%_82%,rgb(from_var(--color-gold-bright)_r_g_b_/_0.13),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-stretch gap-14 lg:grid-cols-[.9fr_.95fr]">
          <div className="flex h-full flex-col">
            <div>
              <SectionLabel>Operational Diagnosis</SectionLabel>
              <SectionHeading>
                Find what is breaking execution before growth makes it expensive.
              </SectionHeading>
              <p className="mt-6 text-lg leading-8 text-muted">
                We identify failure points, uncover root causes, and define course-correction
                actions that help leadership see what is moving, delayed, blocked, or at risk.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton>See Packages</CTAButton>
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 bg-white px-6 py-3 text-sm font-black text-brand transition duration-300 hover:-translate-y-0.5 hover:border-brand/50"
                >
                  Discuss Operational Issues
                </a>
              </div>
            </div>

            {/* What We Deliver */}
            <div className="mt-auto pt-10">
              <h3 className="text-3xl font-black tracking-[-0.04em] text-ink md:text-4xl">
                What We Deliver
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {pricingDeliverables.map((d) => (
                  <motion.div
                    key={d.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={replayViewport}
                    variants={fadeUp}
                  >
                    <UnifiedCard className="flex min-h-[170px] flex-col p-5">
                      <p className="text-xs font-black tracking-[0.16em] text-gold">{d.term}</p>
                      <h4 className="mt-3 text-base font-black leading-tight tracking-[-0.02em] text-ink">
                        {d.title}
                      </h4>
                      <p className="mt-2 flex-1 text-xs leading-6 text-muted-2">{d.text}</p>
                    </UnifiedCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-1">
            <ImagePanel
              title="Transforming ambiguity into structure"
              src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779264987/3._WHAT_WE_DO_Alt_blyygc.png"
              alt="White marble executive statue arranging white blocks for the what we do section"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
