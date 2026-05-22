import { ArrowRight } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import ImagePanel from "../ui/ImagePanel";

export default function Consultation({ submitted, onSubmit, challengeText, onChallengeChange }) {
  return (
    <section id="consultation" className="relative overflow-hidden px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(91,46,255,0.14),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(201,162,39,0.14),transparent_30%),linear-gradient(180deg,#FFFFFF,#F8F5FF)]" />
      <div className="relative mx-auto grid max-w-7xl items-stretch gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div className="h-full"><ImagePanel title="Offering structured direction" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779265019/8._CONSULTATION_SECTION_enjjw6.png" alt="White marble executive statue extending a document forward for the consultation section" /></div>
        <div className="flex h-full flex-col">
          <div>
            <SectionLabel>Initial Consultation</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">Request an Initial Consultation</h2>
            <p className="mt-6 text-lg leading-8 text-[#4A4654]">Tell us where operational clarity is breaking inside your organization.</p>
            <p className="mt-4 text-lg font-semibold leading-8 text-[#17131F]">Every engagement begins with understanding operational reality before recommending change.</p>
          </div>
          <form onSubmit={onSubmit} className="mt-7 rounded-[2rem] border border-[#5B2EFF]/12 bg-white/86 p-7 shadow-[0_24px_80px_rgba(24,24,40,0.10)] backdrop-blur-md md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <input required placeholder="Name" className="rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)]" />
              <input required type="email" placeholder="Email" className="rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)]" />
              <input required placeholder="Position" className="rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)]" />
              <input required placeholder="Company" className="rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)]" />
              <input placeholder="Company Size" className="rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)] md:col-span-2" />
            </div>
            <textarea required placeholder="Current Operational Challenge" rows={7} value={challengeText} onChange={onChallengeChange} className="mt-5 w-full resize-none rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)]" />
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#5B2EFF] px-6 py-4 text-sm font-black text-white shadow-[0_14px_32px_rgba(91,46,255,0.24)] transition hover:-translate-y-0.5 hover:bg-[#4822D8]">Submit Request <ArrowRight className="h-4 w-4" /></button>
            {submitted && <p className="mt-4 text-center text-sm font-semibold text-[#4A22D8]">Request captured. Connect this form to your CRM or email backend before launch.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
