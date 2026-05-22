import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, stagger, replayViewport } from "../../lib/animations";
import { failureIndicators } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import ImagePanel from "../ui/ImagePanel";

export default function Problem() {
  return (
    <section id="problem" className="border-y border-[#17131F]/8 bg-[#F7F3FF] px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={replayViewport} variants={stagger}>
          <motion.div variants={fadeUp}><SectionLabel>Problem Recognition</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">Most operational problems stay invisible until growth starts breaking.</motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-[#4A4654]">Companies rarely fail because of bad ideas. They fail because execution becomes inconsistent, ownership becomes unclear, and leadership loses visibility into how work actually moves through the organization.</motion.p>
          <motion.p variants={fadeUp} className="mt-6 text-lg font-semibold text-[#4A22D8]">DENOISE exists to identify these patterns before they become structural damage.</motion.p>
          <div className="mt-8"><ImagePanel title="Identifying operational complexity" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779264975/2._PROBLEM_RECOGNITION_flc0ub.png" alt="White marble executive statue untangling purple and gold strands for the problem recognition section" /></div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={replayViewport} variants={stagger} className="grid self-stretch gap-3 sm:grid-cols-2">
          {failureIndicators.map((item, index) => (
            <motion.div key={item.title} variants={fadeUp} className="relative flex min-h-[132px] flex-col justify-between overflow-hidden rounded-2xl border border-[#5B2EFF]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#5B2EFF]/30 hover:shadow-[0_16px_42px_rgba(91,46,255,0.10)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5B2EFF] via-[#8B6BFF] to-[#C9A227]" />
              <div className="flex items-center justify-between"><CheckCircle2 className="h-5 w-5 text-[#5B2EFF]" /><span className="text-xs font-black tracking-[0.16em] text-[#9E7A16]">{String(index + 1).padStart(2, "0")}</span></div>
              <div className="mt-4 max-w-[94%]"><p className="text-[15px] font-black leading-5 tracking-[-0.01em] text-[#4A22D8]">{item.title}</p><p className="mt-2 text-[12px] font-medium leading-5 text-[#5B5568]">{item.detail}</p></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
