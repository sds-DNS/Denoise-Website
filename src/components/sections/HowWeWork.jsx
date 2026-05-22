import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, replayViewport } from "../../lib/animations";
import { workStages } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import CTAButton from "../ui/CTAButton";
import ImagePanel from "../ui/ImagePanel";

export default function HowWeWork() {
  return (
    <section id="work" className="relative overflow-hidden bg-[#F9F6FF] px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(91,46,255,0.14),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(201,162,39,0.13),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-stretch gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div className="h-full"><ImagePanel title="Structured methodology in motion" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779264995/4._HOW_WE_WORK_ftt0xm.png" alt="White marble executive statue drawing a precise line for the how we work section" /></div>
          <div className="flex h-full flex-col">
            <div><SectionLabel>How We Work</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">Structured diagnosis. Clear decisions. Controlled execution.</h2><p className="mt-6 text-lg leading-8 text-[#4A4654]">Every engagement is built around evidence, not assumptions.</p><div className="mt-8"><CTAButton>Start the Process</CTAButton></div></div>
            <div className="mt-8 flex flex-1 flex-col justify-between">
              {workStages.map(([num, title, text, detail], index) => (
                <div key={title}>
                  <motion.div initial="hidden" whileInView="visible" viewport={replayViewport} variants={fadeUp} className="relative z-10 overflow-hidden rounded-2xl border border-[#5B2EFF]/10 bg-white/90 p-4 pl-6 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#5B2EFF]/30 hover:shadow-[0_16px_42px_rgba(91,46,255,0.10)]"><div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5B2EFF] via-[#8B6BFF] to-[#C9A227]" /><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5B2EFF] text-base font-black text-white shadow-[0_12px_28px_rgba(91,46,255,0.24)]">{num}</div><div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9E7A16]">Stage {num}</p><h3 className="mt-1 text-xl font-black tracking-[-0.03em] text-[#17131F]">{title}</h3><p className="mt-2 text-[13px] leading-6 text-[#5B5568]">{text}</p><p className="mt-2 text-[12px] font-medium leading-5 text-[#615B6F]">{detail}</p></div></div></motion.div>
                  {index < 2 && <div className="mx-auto flex w-[88%] items-center justify-center py-3"><div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#5B2EFF]/35 to-[#5B2EFF]/35" /><div className="flex items-center gap-2 rounded-full border border-[#5B2EFF]/15 bg-[#F7F3FF] px-4 py-2 shadow-sm"><span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#9E7A16]">Flows To</span><ArrowRight className="h-4 w-4 text-[#5B2EFF]" /></div><div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#5B2EFF]/35 to-[#5B2EFF]/35" /></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
