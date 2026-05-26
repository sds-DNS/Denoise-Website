// Shared classes so inputs, selects, and the textarea look identical and
// surface validation errors the same way (red border when invalid).
const baseControl =
  "w-full rounded-2xl border bg-white px-5 py-4 text-ink outline-none transition focus:shadow-brand-ring";

export function controlClass(hasError, extra = "") {
  const border = hasError
    ? "border-red-500 focus:border-red-500"
    : "border-ink/12 focus:border-brand";
  return `${baseControl} ${border} ${extra}`.trim();
}

export function FieldError({ message }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-semibold text-red-600">{message}</p>;
}
