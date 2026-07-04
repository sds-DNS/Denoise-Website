import { motion } from "framer-motion";
import { BriefcaseBusiness, Clock3, FileCheck2, Search } from "lucide-react";
import { fadeUp, stagger, replayViewport } from "../../lib/animations";
import { recruitmentStages } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import UnifiedCard from "../ui/UnifiedCard";
import CTAButton from "../ui/CTAButton";

const reasons = [
  {
    Icon: Search,
    title: "We assess, not just source",
    text: "We screen candidates before presenting them so clients spend less time reviewing unsuitable applicants.",
  },
  {
    Icon: BriefcaseBusiness,
    title: "We understand operations",
    text: "We help determine whether the company is hiring for the right position in the first place.",
  },
  {
    Icon: FileCheck2,
    title: "Hiring advisory included",
    text: "We help define job descriptions, responsibilities, competencies, reporting lines, and success criteria.",
  },
  {
    Icon: Clock3,
    title: "Fast turnaround",
    text: "We move quickly while maintaining structured assessment and clear communication.",
  },
];

export default function TalentAcquisition() {
  return (
    <section id="talent-acquisition" className="relative overflow-hidden px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgb(from_var(--color-brand)_r_g_b_/_0.10),transparent_30%),radial-gradient(circle_at_14%_80%,rgb(from_var(--color-gold-bright)_r_g_b_/_0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Talent Acquisition</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionHeading>Hire with confidence, not just candidate volume.</SectionHeading>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-muted">
            DENOISE Talent Acquisition helps growing businesses identify, attract, assess, and hire
            the right people faster. We do not simply forward CVs. We support better hiring
            decisions through role clarity, structured screening, and practical recommendations.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <CTAButton>Discuss a Hiring Requirement</CTAButton>
            <a
              href="#recruitment-process"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 bg-white px-6 py-3 text-sm font-black text-brand transition duration-300 hover:-translate-y-0.5 hover:border-brand/50"
            >
              See Our Process
            </a>
          </motion.div>
        </motion.div>

        {/* Reasons grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={replayViewport}
              variants={fadeUp}
            >
              <UnifiedCard accent="left" className="flex min-h-[260px] flex-col p-6">
                <Icon className="h-6 w-6 text-brand" />
                <h3 className="mt-5 text-xl font-black leading-tight tracking-[-0.02em] text-ink">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-2">{text}</p>
              </UnifiedCard>
            </motion.div>
          ))}
        </div>

        {/* Recruitment process */}
        <div id="recruitment-process" className="mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={replayViewport}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
            >
              <div>
                <SectionLabel>Recruitment Process</SectionLabel>
                <h3 className="max-w-3xl text-3xl font-black tracking-[-0.04em] text-ink md:text-5xl">
                  A structured hiring process from role clarity to joining confirmation.
                </h3>
              </div>
              <CTAButton>Start a Hiring Discussion</CTAButton>
            </motion.div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recruitmentStages.map(([num, title, text]) => (
                <motion.div key={title} variants={fadeUp}>
                  <UnifiedCard className="flex min-h-[240px] flex-col p-6">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">
                      Stage {num}
                    </p>
                    <h4 className="mt-5 text-xl font-black leading-tight tracking-[-0.02em] text-ink">
                      {title}
                    </h4>
                    <p className="mt-4 flex-1 text-sm leading-7 text-muted-2">{text}</p>
                  </UnifiedCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
