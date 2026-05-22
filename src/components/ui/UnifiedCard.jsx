export default function UnifiedCard({ children, className = "", accent = "top" }) {
  const accentClass =
    accent === "left"
      ? "absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5B2EFF] via-[#8B6BFF] to-[#C9A227]"
      : "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5B2EFF] via-[#8B6BFF] to-[#C9A227]";

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#5B2EFF]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#5B2EFF]/30 hover:shadow-[0_16px_42px_rgba(91,46,255,0.10)] ${className}`}>
      <div className={accentClass} />
      {children}
    </div>
  );
}
