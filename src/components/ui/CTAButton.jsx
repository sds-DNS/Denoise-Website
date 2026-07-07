import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function CTAButton({ children = "Request Consultation" }) {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const href = onHome ? "#consultation" : "/#consultation";

  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-brand-cta transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-brand-cta-hover"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
