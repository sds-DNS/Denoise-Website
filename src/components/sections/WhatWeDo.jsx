import { motion } from "framer-motion";
import { fadeUp, replayViewport } from "../../lib/animations";
import { deliverables } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import GoldNote from "../ui/GoldNote";
import UnifiedCard from "../ui/UnifiedCard";
import ImagePanel from "../ui/ImagePanel";

export default function WhatWeDo() {
  return (
    <section id="what" className="relative overflow-hidden px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,rgb(from_var(--color-brand)_r_g_b_/_0.09),transparent_28%),radial-gradient(circle_at_12%_82%,rgb(from_var(--color-gold-bright)_r_g_b_/_0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-stretch gap-12 lg:grid-cols-[.9fr_.8fr]">
          <div className="flex h-full max-w-3xl flex-col">
            <div className="self-start"><SectionLabel>What We Do</SectionLabel></div>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-ink md:text-5xl">We turn operational ambiguity into structured execution.</h2>
            <p className="mt-6 text-lg leading-8 text-muted">DENOISE analyzes how a company actually functions beneath the surface and converts that understanding into clear operational decisions, systems, and execution structures.</p>
            <div className="mt-6 grid flex-1 auto-rows-fr gap-3 md:grid-cols-2">
              {deliverables.map(({ icon: Icon, title, text }) => (
                <motion.div key={title} initial="hidden" whileInView="visible" viewport={replayViewport} variants={fadeUp}>
                  <UnifiedCard accent="left" className="flex h-full flex-col p-4 pl-6"><Icon className="mb-3 h-5 w-5 text-brand" /><h3 className="text-base font-bold leading-6 text-ink">{title}</h3><p className="mt-2 text-[13px] leading-6 text-muted-2">{text}</p></UnifiedCard>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="pt-1"><ImagePanel title="Transforming ambiguity into structure" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779264987/3._WHAT_WE_DO_Alt_blyygc.png" alt="White marble executive statue arranging white blocks for the what we do section" /></div>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-semibold leading-8 text-ink"><span>We do not deliver generic consulting reports.</span><GoldNote>We deliver operational clarity with implementation direction.</GoldNote></div>
      </div>
    </section>
  );
}
