import { proofItems } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import UnifiedCard from "../ui/UnifiedCard";

export default function Proof() {
  return (
    <section id="proof" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionLabel>Proof of Thinking</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-ink md:text-5xl">Built around operational reality, not theory.</h2>
            <p className="mt-6 text-lg leading-8 text-muted">DENOISE is designed for companies that need visible execution, clean accountability, and leadership systems grounded in operational reality.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofItems.map(({ icon: Icon, text }) => (
              <UnifiedCard key={text} className="flex h-[112px] items-start gap-4 p-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand"><Icon className="h-5 w-5" /></div><p className="pt-1 text-[14px] font-semibold leading-5 tracking-[-0.01em] text-ink-soft">{text}</p></UnifiedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
