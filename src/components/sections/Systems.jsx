import { motion } from "framer-motion";
import { fadeUp, replayViewport } from "../../lib/animations";
import { systems } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import UnifiedCard from "../ui/UnifiedCard";
import ImagePanel from "../ui/ImagePanel";

export default function Systems() {
  return (
    <section id="systems" className="relative overflow-hidden px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgb(from_var(--color-brand)_r_g_b_/_0.10),transparent_30%),linear-gradient(180deg,var(--color-white),var(--color-cream))]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_.95fr]">
        <div>
          <SectionLabel>Operational Systems</SectionLabel>
          <SectionHeading>Operational systems designed for scale.</SectionHeading>
          <div className="mt-10 space-y-4">
            {systems.map(([title, text]) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={replayViewport}
                variants={fadeUp}
              >
                <UnifiedCard accent="left" className="p-6 pl-7">
                  <h3 className="text-xl font-bold text-brand-deep">{title}</h3>
                  <p className="mt-2 leading-7 text-muted-2">{text}</p>
                </UnifiedCard>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-lg font-semibold text-ink">
            Every system is designed around operational clarity, not unnecessary complexity.
          </p>
        </div>
        <ImagePanel
          title="Operational infrastructure for scale"
          src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779265001/5._OPERATIONAL_SYSTEMS_Alt_t6eb2n.png"
          alt="White marble executive statue holding purple and gold strands for the operational systems section"
        />
      </div>
    </section>
  );
}
