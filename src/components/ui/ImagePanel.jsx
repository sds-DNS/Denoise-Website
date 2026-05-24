import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

export default function ImagePanel({ title, prompt, src, alt }) {
  if (src) {
    return (
      <motion.div
        variants={fadeUp}
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-white shadow-soft sm:aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[360px]"
      >
        <img
          src={src}
          alt={alt || title}
          className="h-full w-full rounded-[2rem] object-cover object-top"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      className="group relative h-full min-h-[360px] overflow-hidden rounded-[2rem] bg-white shadow-soft"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgb(from_var(--color-brand)_r_g_b_/_0.22),transparent_35%),radial-gradient(circle_at_78%_76%,rgb(from_var(--color-gold-bright)_r_g_b_/_0.18),transparent_32%),linear-gradient(135deg,var(--color-white),var(--color-lilac-300)_52%,var(--color-gold-tint))]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(from_var(--color-brand)_r_g_b_/_0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(from_var(--color-brand)_r_g_b_/_0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-8 right-8 top-8 rounded-2xl border border-white/70 bg-white/65 p-5 shadow-sm backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">AI Image Placeholder</p>
          <div className="h-2 w-2 rounded-full bg-brand shadow-brand-glow" />
        </div>
        <p className="text-xl font-semibold leading-snug text-ink">{title}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-brand/10 bg-white/80 p-6 backdrop-blur-md">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Prompt</p>
        <p className="line-clamp-4 text-sm leading-relaxed text-muted">{prompt}</p>
      </div>
    </motion.div>
  );
}
