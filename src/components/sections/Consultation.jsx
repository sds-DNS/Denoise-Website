import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger, replayViewport } from "../../lib/animations";
import { COMPANY_SIZES, PACKAGES } from "../../../shared/form-constants.js";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import ImagePanel from "../ui/ImagePanel";
import Spinner from "../ui/Spinner";
import { controlClass, FieldError } from "../ui/FormField";

export default function Consultation({
  submitted,
  isSubmitting,
  errorMessage,
  fieldErrors = {},
  onSubmit,
  form,
  onFieldChange,
}) {
  const err = (field) => fieldErrors[field];

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
            noValidate
            className="mt-7 rounded-[2rem] border border-brand/12 bg-white/86 p-7 shadow-soft backdrop-blur-md md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <input
                  placeholder="Name"
                  aria-label="Name"
                  aria-invalid={Boolean(err("name"))}
                  value={form.name}
                  onChange={onFieldChange("name")}
                  className={controlClass(err("name"))}
                />
                <FieldError message={err("name")} />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Work email"
                  aria-label="Work email"
                  aria-invalid={Boolean(err("email"))}
                  value={form.email}
                  onChange={onFieldChange("email")}
                  className={controlClass(err("email"))}
                />
                <FieldError message={err("email")} />
              </div>
              <div>
                <input
                  placeholder="Position"
                  aria-label="Position"
                  aria-invalid={Boolean(err("position"))}
                  value={form.position}
                  onChange={onFieldChange("position")}
                  className={controlClass(err("position"))}
                />
                <FieldError message={err("position")} />
              </div>
              <div>
                <input
                  placeholder="Company"
                  aria-label="Company"
                  aria-invalid={Boolean(err("company"))}
                  value={form.company}
                  onChange={onFieldChange("company")}
                  className={controlClass(err("company"))}
                />
                <FieldError message={err("company")} />
              </div>
              <div>
                <select
                  aria-label="Company size"
                  aria-invalid={Boolean(err("companySize"))}
                  value={form.companySize}
                  onChange={onFieldChange("companySize")}
                  className={controlClass(
                    err("companySize"),
                    `pr-12 ${form.companySize ? "" : "text-ink/50"}`
                  )}
                >
                  <option value="" disabled>
                    Company size
                  </option>
                  {COMPANY_SIZES.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <FieldError message={err("companySize")} />
              </div>
              <div>
                <select
                  aria-label="Selected package"
                  aria-invalid={Boolean(err("selectedPackage"))}
                  value={form.selectedPackage}
                  onChange={onFieldChange("selectedPackage")}
                  className={controlClass(
                    err("selectedPackage"),
                    `pr-12 ${form.selectedPackage ? "" : "text-ink/50"}`
                  )}
                >
                  <option value="" disabled>
                    Select a package
                  </option>
                  {PACKAGES.map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
                <FieldError message={err("selectedPackage")} />
              </div>
            </div>
            <div className="mt-5">
              <textarea
                placeholder="Current operational challenge"
                aria-label="Current operational challenge"
                aria-invalid={Boolean(err("challenge"))}
                rows={7}
                value={form.challenge}
                onChange={onFieldChange("challenge")}
                className={controlClass(err("challenge"), "resize-none")}
              />
              <FieldError message={err("challenge")} />
            </div>
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
                Thank you. Your request has been received — we'll be in touch shortly.
              </p>
            )}
            {errorMessage && !submitted && (
              <p className="mt-4 text-center text-sm font-semibold text-red-600">{errorMessage}</p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
