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

        {/*
          Subgrid pricing layout:
          - Outer grid defines 6 named row tracks (term, name, price, desc, features, btn)
          - Each card spans all 6 rows via `grid-row: span 6` and uses `display: grid; grid-row: subgrid`
          - This makes each card a single continuous box while all internal sections align across columns
          - Subgrid is supported in Firefox 71+, Chrome 117+, Safari 16+
        */}
        <div
          className="mt-12 hidden gap-5 lg:grid lg:grid-cols-4"
          style={{ gridTemplateRows: "auto auto auto auto 1fr auto" }}
        >
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              whileInView="visible"
              viewport={replayViewport}
              variants={fadeUp}
              style={{ gridRow: "span 6", display: "grid", gridTemplateRows: "subgrid" }}
              className="relative overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-brand-card"
            >
              {/* Accent bar */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-light to-gold-bright" />

              {/* Row 1 — term */}
              <div className="px-7 pb-4 pt-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{plan.term}</p>
              </div>

              {/* Row 2 — name */}
              <div className="px-7 pb-4">
                <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-ink">{plan.name}</h3>
              </div>

              {/* Row 3 — price */}
              <div className="px-7 pb-4">
                <p className="text-sm font-semibold text-muted-3">{plan.range}</p>
                <span className="mt-1 block text-[42px] font-black leading-none tracking-[-0.05em] text-brand">
                  {plan.price}
                </span>
              </div>

              {/* Row 4 — description */}
              <div className="px-7 pb-4">
                <p className="text-sm leading-7 text-muted-2">{plan.description}</p>
              </div>

              {/* Row 5 — features (stretches) */}
              <div className="px-7 pb-4">
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm font-semibold leading-6 text-ink-soft">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 6 — button */}
              <div className="px-7 pb-7 pt-7">
                <button
                  type="button"
                  onClick={() => onPackageSelect(plan.name)}
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-4 text-sm font-black text-white shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-dark"
                >
                  Select Package <ArrowRight className="h-4 w-4 shrink-0" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/tablet — stacked cards, no subgrid needed */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:hidden">
          {pricingPlans.map((plan) => (
            <UnifiedCard key={plan.name} className="flex flex-col p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{plan.term}</p>
              <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-ink">{plan.name}</h3>
              <div className="mt-5">
                <p className="text-sm font-semibold text-muted-3">{plan.range}</p>
                <span className="mt-1 block text-[42px] font-black leading-none tracking-[-0.05em] text-brand">
                  {plan.price}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-2">{plan.description}</p>
              <div className="mt-5 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm font-semibold leading-6 text-ink-soft">
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
          ))}
        </div>

        {/* Deliverables */}
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
          {/* Desktop deliverables — subgrid for equal height + aligned rows */}
          <div
            className="mt-7 hidden gap-5 lg:grid lg:grid-cols-4"
            style={{ gridTemplateRows: "auto auto 1fr" }}
          >
            {pricingDeliverables.map((d) => (
              <motion.div
                key={d.term}
                variants={fadeUp}
                style={{ gridRow: "span 3", display: "grid", gridTemplateRows: "subgrid" }}
                className="relative overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-brand-card"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-light to-gold-bright" />
                <div className="px-7 pb-2 pt-7">
                  <span className="text-xs font-black tracking-[0.16em] text-gold">{d.term}</span>
                </div>
                <div className="px-7 pb-2">
                  <p className="text-xl font-black leading-snug tracking-[-0.02em] text-ink">{d.title}</p>
                </div>
                <div className="px-7 pb-7">
                  <p className="text-[15px] leading-7 text-muted-2">{d.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/tablet deliverables */}
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:hidden">
            {pricingDeliverables.map((d) => (
              <motion.div key={d.term} variants={fadeUp} style={{ height: "100%" }}>
                <UnifiedCard className="flex h-full flex-col p-7">
                  <span className="text-xs font-black tracking-[0.16em] text-gold">{d.term}</span>
                  <p className="mt-5 text-xl font-black leading-snug tracking-[-0.02em] text-ink">{d.title}</p>
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
