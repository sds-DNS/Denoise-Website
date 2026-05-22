import { ArrowRight } from "lucide-react";

export default function CTAButton({ children = "Request Consultation" }) {
  return (
    <a href="#consultation" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-brand-cta transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-brand-cta-hover">
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
