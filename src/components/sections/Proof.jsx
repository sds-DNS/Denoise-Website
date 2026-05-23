import { motion } from "framer-motion";
import { fadeUp, stagger, replayViewport } from "../../lib/animations";
import { proofItems } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import UnifiedCard from "../ui/UnifiedCard";

export default function Proof() {
  return (
    <section id="proof" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={replayViewport}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Proof of Thinking</SectionLabel>
            </motion.div>
            <motion.div variants={fadeUp}>
              <SectionHeading>Built around operational reality, not theory.</SectionHeading>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-muted">
              DENOISE is designed for companies that need visible execution, clean accountability,
              and leadership systems grounded in operational reality.
            </motion.p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofItems.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                initial="hidden"
                whileInView="visible"
                viewport={replayViewport}
                variants={fadeUp}
              >
                <UnifiedCard className="flex h-[112px] items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="pt-1 text-[14px] font-semibold leading-5 tracking-[-0.01em] text-ink-soft">
                    {text}
                  </p>
                </UnifiedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
