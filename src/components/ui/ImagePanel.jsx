import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

export default function ImagePanel({ title, prompt, src, alt }) {
  if (src) {
    return (
      <motion.div variants={fadeUp} className="group relative h-full min-h-[360px] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(24,24,40,0.10)]">
        <img src={src} alt={alt || title} className="h-full w-full scale-[1.015] rounded-[2rem] object-cover object-center" />
      </motion.div>
    );
  }

  return (
    <motion.div variants={fadeUp} className="group relative h-full min-h-[360px] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(24,24,40,0.10)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(91,46,255,0.22),transparent_35%),radial-gradient(circle_at_78%_76%,rgba(201,162,39,0.18),transparent_32%),linear-gradient(135deg,#FFFFFF,#F6F2FF_52%,#FFF8E3)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(91,46,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(91,46,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-8 right-8 top-8 rounded-2xl border border-white/70 bg-white/65 p-5 shadow-sm backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#17131F]">AI Image Placeholder</p>
          <div className="h-2 w-2 rounded-full bg-[#5B2EFF] shadow-[0_0_18px_rgba(91,46,255,0.55)]" />
        </div>
        <p className="text-xl font-semibold leading-snug text-[#17131F]">{title}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#5B2EFF]/10 bg-white/80 p-6 backdrop-blur-md">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9E7A16]">Prompt</p>
        <p className="line-clamp-4 text-sm leading-relaxed text-[#4A4654]">{prompt}</p>
      </div>
    </motion.div>
  );
}
