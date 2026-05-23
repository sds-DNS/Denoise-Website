export default function UnifiedCard({ children, className = "", accent = "top" }) {
  const accentClass =
    accent === "left"
      ? "absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand via-brand-light to-gold-bright"
      : "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-light to-gold-bright";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-brand-card ${className}`}
    >
      <div className={accentClass} />
      {children}
    </div>
  );
}
