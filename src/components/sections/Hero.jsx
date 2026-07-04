import { motion } from "framer-motion";
import { SearchCheck, UsersRound } from "lucide-react";
import { fadeUp, stagger } from "../../lib/animations";
import SectionLabel from "../ui/SectionLabel";
import UnifiedCard from "../ui/UnifiedCard";
import ImagePanel from "../ui/ImagePanel";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgb(from_var(--color-brand)_r_g_b_/_0.15),transparent_34%),radial-gradient(circle_at_88%_12%,rgb(from_var(--color-gold-bright)_r_g_b_/_0.16),transparent_30%),linear-gradient(180deg,var(--color-white),var(--color-lilac-400)_56%,var(--color-white))]" />
      <div className="relative mx-auto grid max-w-7xl items-stretch gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex h-full flex-col"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionLabel>Business operations and hiring support</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-ink md:text-7xl"
            >
              Operational clarity. Better hiring decisions. Structured growth.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl"
            >
              DENOISE helps scaling companies diagnose operational failure points, improve
              execution, and hire the right people with greater confidence.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-black text-white shadow-brand-cta transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Book Consultation
              </a>
              <a
                href="#operational-diagnosis"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 bg-white px-6 py-3 text-sm font-black text-brand transition duration-300 hover:-translate-y-0.5 hover:border-brand/50"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-auto grid gap-4 pt-14 sm:grid-cols-2"
          >
            <UnifiedCard accent="left" className="flex flex-col p-6">
              <SearchCheck className="h-6 w-6 text-brand" />
              <h3 className="mt-4 text-xl font-black text-ink">Operational Diagnosis</h3>
              <p className="mt-3 text-sm leading-7 text-muted-2">
                Identify what is slowing execution and define what must change.
              </p>
            </UnifiedCard>
            <UnifiedCard accent="left" className="flex flex-col p-6">
              <UsersRound className="h-6 w-6 text-brand" />
              <h3 className="mt-4 text-xl font-black text-ink">Talent Acquisition</h3>
              <p className="mt-3 text-sm leading-7 text-muted-2">
                Source, assess, and hire candidates with structured decision support.
              </p>
            </UnifiedCard>
          </motion.div>
        </motion.div>

        <div className="self-stretch pt-1">
          <ImagePanel
            title="Operational clarity emerging from chaos"
            src="https://res.cloudinary.com/dzhfxged2/image/upload/f_auto,q_auto/1._HERO_xmjspr"
            alt="White marble executive statue writing on a clipboard for the DENOISE hero section"
            priority
          />
        </div>
      </div>
    </section>
  );
}
