import { ArrowRight } from "lucide-react";

export default function CTAButton({ children = "Request Consultation" }) {
  return (
    <a href="#consultation" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5B2EFF] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(91,46,255,0.26)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4822D8] hover:shadow-[0_18px_42px_rgba(91,46,255,0.34)]">
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
