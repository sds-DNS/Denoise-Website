import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";
import SectionLabel from "../ui/SectionLabel";
import CTAButton from "../ui/CTAButton";
import ImagePanel from "../ui/ImagePanel";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgb(from_var(--color-brand)_r_g_b_/_0.15),transparent_34%),radial-gradient(circle_at_88%_12%,rgb(from_var(--color-gold-bright)_r_g_b_/_0.16),transparent_30%),radial-gradient(circle_at_70%_82%,rgb(from_var(--color-brand)_r_g_b_/_0.09),transparent_38%),linear-gradient(180deg,var(--color-white),var(--color-lilac-400)_56%,var(--color-white))]" />
      <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/8 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-stretch gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex h-full flex-col justify-between"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionLabel>No-bullshit operations collective</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-ink md:text-7xl"
            >
              Operational chaos becomes expensive long before companies notice it.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl"
            >
              DENOISE helps scaling companies identify operational failure points, restructure
              execution, and build systems that make growth predictable, measurable, and scalable.
            </motion.p>
          </div>
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6"
          >
            <CTAButton />
            <p className="max-w-[240px] pb-1 text-sm leading-6 text-muted-3">
              Built for companies where growth has outpaced operational clarity.
            </p>
          </motion.div>
        </motion.div>
        <div className="self-stretch pt-1">
          <ImagePanel
            title="Operational clarity emerging from chaos"
            src="https://res.cloudinary.com/dzhfxged2/image/upload/f_auto,q_auto/1._HERO_xmjspr"
            alt="White marble executive statue writing on a clipboard for the DENOISE hero section"
          />
        </div>
      </div>
    </section>
  );
}
