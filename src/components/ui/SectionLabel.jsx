export default function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand/15 bg-brand/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </div>
  );
}
