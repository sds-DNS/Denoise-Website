import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeUp, stagger, replayViewport } from "../../lib/animations";
import { pricingPlans, pricingDeliverables } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import UnifiedCard from "../ui/UnifiedCard";

export default function Pricing({ onPackageSelect }) {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-y border-ink/8 bg-lilac-50 px-6 py-24 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgb(from_var(--color-brand)_r_g_b_/_0.14),transparent_32%),radial-gradient(circle_at_84%_82%,rgb(from_var(--color-gold-bright)_r_g_b_/_0.13),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Pricing</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionHeading>
              Diagnostic engagements designed around operational clarity.
            </SectionHeading>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Each DENOISE package is structured to identify failure points, uncover root causes, and
            define the course correction actions required to improve execution.
          </motion.p>
        </motion.div>

        {/* Pricing cards — 4 col */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              whileInView="visible"
              viewport={replayViewport}
              variants={fadeUp}
              className="h-full"
            >
              <UnifiedCard className="flex h-full flex-col p-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">
                  {plan.term}
                </p>
                <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-ink">
                  {plan.name}
                </h3>
                <div className="mt-5">
                  <p className="text-sm font-semibold text-muted-3">{plan.range}</p>
                  <span className="mt-1 block text-[42px] font-black leading-none tracking-[-0.05em] text-brand">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-2">{plan.description}</p>
                <div className="mt-5 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-3 text-sm font-semibold leading-6 text-ink-soft"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => onPackageSelect(plan.name)}
                  className="mt-7 inline-flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-4 text-sm font-black text-white shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-dark"
                >
                  Select Package <ArrowRight className="h-4 w-4 shrink-0" />
                </button>
              </UnifiedCard>
            </motion.div>
          ))}
        </div>

        {/* Deliverables — 4 col */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={stagger}
          className="mt-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-black tracking-[-0.04em] text-ink md:text-4xl"
          >
            DENOISE Deliverables
          </motion.h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pricingDeliverables.map((d) => (
              <motion.div key={d.term} variants={fadeUp} className="h-full">
                <UnifiedCard className="flex h-full flex-col p-7">
                  <span className="text-xs font-black tracking-[0.16em] text-gold">{d.term}</span>
                  <p className="mt-5 text-xl font-black leading-snug tracking-[-0.02em] text-ink">
                    {d.title}
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-muted-2">{d.text}</p>
                </UnifiedCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
