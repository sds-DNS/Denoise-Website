import { ArrowRight, CheckCircle2 } from "lucide-react";
import { pricingPlans, pricingRules } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import UnifiedCard from "../ui/UnifiedCard";

export default function Pricing({ onPackageSelect }) {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-y border-ink/8 bg-lilac-50 px-6 py-24 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgb(from_var(--color-brand)_r_g_b_/_0.14),transparent_32%),radial-gradient(circle_at_84%_82%,rgb(from_var(--color-gold-bright)_r_g_b_/_0.13),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionLabel>Pricing</SectionLabel>
            <SectionHeading>
              High-value operational transformation, not fragmented project work.
            </SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
              <p>
                DENOISE is built for scaling companies that need complete operational structure, not
                a small one-off system build.
              </p>
              <p>
                Every engagement is designed around full transformation: systems, implementation,
                and execution discipline working together.
              </p>
              <p className="font-semibold text-brand-deep">
                We do not reduce the engagement into disconnected modules. We only scope upward when
                the operational requirement is larger.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {pricingPlans.map((plan) => (
              <UnifiedCard key={plan.name} className="flex h-full flex-col p-7">
                <div className="flex h-full flex-col">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">
                    {plan.term}
                  </p>
                  <h3 className="mt-6 text-2xl font-black tracking-[-0.03em] text-ink">
                    {plan.name}
                  </h3>
                  <div className="mt-6">
                    <span className="block whitespace-nowrap text-[42px] font-black leading-none tracking-[-0.05em] text-brand lg:text-[46px]">
                      {plan.price}
                    </span>
                    <span className="mt-2 block text-sm font-semibold leading-5 text-muted-3">
                      {plan.range}
                    </span>
                  </div>
                  <p className="mt-6 text-sm leading-7 text-muted-2">{plan.description}</p>
                  <div className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-3 text-sm font-semibold leading-6 text-ink-soft"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => onPackageSelect(plan.name)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-black text-white shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-dark"
                  >
                    Select {plan.name}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </UnifiedCard>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {pricingRules.map((rule, index) => (
            <UnifiedCard key={rule} className="flex min-h-[116px] flex-col justify-between p-5">
              <span className="text-xs font-black tracking-[0.16em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 text-[15px] font-semibold leading-6 tracking-[-0.01em] text-ink-soft">
                {rule}
              </p>
            </UnifiedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
