import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger, replayViewport } from "../../lib/animations";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import ImagePanel from "../ui/ImagePanel";
import Spinner from "../ui/Spinner";

export default function Consultation({
  submitted,
  isSubmitting,
  onSubmit,
  challengeText,
  onChallengeChange,
}) {
  return (
    <section id="consultation" className="relative overflow-hidden px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgb(from_var(--color-brand)_r_g_b_/_0.14),transparent_34%),radial-gradient(circle_at_82%_24%,rgb(from_var(--color-gold-bright)_r_g_b_/_0.14),transparent_30%),linear-gradient(180deg,var(--color-white),var(--color-lilac-100))]" />
      <div className="relative mx-auto grid max-w-7xl items-stretch gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={fadeUp}
          className="h-full"
        >
          <ImagePanel
            title="Offering structured direction"
            src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779265019/8._CONSULTATION_SECTION_enjjw6.png"
            alt="White marble executive statue extending a document forward for the consultation section"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={stagger}
          className="flex h-full flex-col"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionLabel>Initial Consultation</SectionLabel>
            </motion.div>
            <motion.div variants={fadeUp}>
              <SectionHeading>Request an Initial Consultation</SectionHeading>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-muted">
              Tell us where operational clarity is breaking inside your organization.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-lg font-semibold leading-8 text-ink">
              Every engagement begins with understanding operational reality before recommending
              change.
            </motion.p>
          </div>
          <motion.form
            variants={fadeUp}
            onSubmit={onSubmit}
            className="mt-7 rounded-[2rem] border border-brand/12 bg-white/86 p-7 shadow-soft backdrop-blur-md md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                required
                placeholder="Name"
                title="Enter your name"
                aria-label="Name"
                className="rounded-2xl border border-ink/12 bg-white px-5 py-4 text-ink outline-none transition focus:border-brand focus:shadow-brand-ring"
              />
              <input
                required
                type="email"
                placeholder="Email"
                title="Enter your email address"
                aria-label="Email address"
                className="rounded-2xl border border-ink/12 bg-white px-5 py-4 text-ink outline-none transition focus:border-brand focus:shadow-brand-ring"
              />
              <input
                required
                placeholder="Position"
                title="Enter your position"
                aria-label="Position"
                className="rounded-2xl border border-ink/12 bg-white px-5 py-4 text-ink outline-none transition focus:border-brand focus:shadow-brand-ring"
              />
              <input
                required
                placeholder="Company"
                title="Enter your company"
                aria-label="Company"
                className="rounded-2xl border border-ink/12 bg-white px-5 py-4 text-ink outline-none transition focus:border-brand focus:shadow-brand-ring"
              />
              <input
                placeholder="Company Size"
                title="Enter your company size"
                aria-label="Company size"
                className="rounded-2xl border border-ink/12 bg-white px-5 py-4 text-ink outline-none transition focus:border-brand focus:shadow-brand-ring md:col-span-2"
              />
            </div>
            <textarea
              required
              placeholder="Current Operational Challenge"
              title="Describe your current operational challenge"
              aria-label="Current operational challenge"
              rows={7}
              value={challengeText}
              onChange={onChallengeChange}
              className="mt-5 w-full resize-none rounded-2xl border border-ink/12 bg-white px-5 py-4 text-ink outline-none transition focus:border-brand focus:shadow-brand-ring"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-black text-white shadow-brand transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  Submitting <Spinner />
                </>
              ) : (
                <>
                  Submit Request <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            {submitted && (
              <p className="mt-4 text-center text-sm font-semibold text-brand-deep">
                Request captured. Connect this form to your CRM or email backend before launch.
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
