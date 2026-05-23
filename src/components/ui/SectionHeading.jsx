import { sectionHeadingClass } from "../../lib/styles";

// Standard section <h2>. For animated headings, use sectionHeadingClass
// directly on a motion.h2 instead.
export default function SectionHeading({ children, className = "" }) {
  return <h2 className={`${sectionHeadingClass} ${className}`.trim()}>{children}</h2>;
}
