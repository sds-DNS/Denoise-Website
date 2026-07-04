import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import CTAButton from "./ui/CTAButton";
import { buildCloudinaryUrl } from "../lib/cloudinary";

const LOGO_SRC = buildCloudinaryUrl(
  "https://res.cloudinary.com/dzhfxged2/image/upload/v1779270124/Asset_1_ngs0jf.png",
  { width: 480 }
);

const hashLinks = [
  { href: "#operational-diagnosis", label: "Operational Diagnosis" },
  { href: "#talent-acquisition", label: "Talent Acquisition" },
  { href: "#insights", label: "Knowledge Hub" },
];

function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function SocialPill({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-dark"
    >
      {children}
    </a>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  function NavLink({ href, label, mobile }) {
    const target = onHome ? href : `/${href}`;
    const cls = mobile
      ? "rounded-lg px-3 py-3 transition hover:bg-brand/10 hover:text-brand"
      : "whitespace-nowrap hover:text-brand";
    return (
      <a href={target} onClick={closeMenu} className={cls}>
        {label}
      </a>
    );
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/8 bg-white/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href={onHome ? "#home" : "/"} className="flex items-center" onClick={closeMenu}>
            <img
              src={LOGO_SRC}
              alt="DENOISE logo"
              width="220"
              height="40"
              decoding="async"
              fetchpriority="high"
              className="block h-8 w-auto object-contain sm:h-10"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-ink/60 md:flex lg:gap-8">
            {hashLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Social icons + CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <SocialPill href="mailto:consult@denoisesystems.com" label="Email DENOISE">
              <Mail className="h-4 w-4 stroke-[2.4]" />
            </SocialPill>
            <SocialPill href="https://www.linkedin.com/company/denoisesystems/" label="DENOISE on LinkedIn">
              <LinkedinIcon className="h-4 w-4" />
            </SocialPill>
            <CTAButton>Book Consultation</CTAButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-lg p-2 text-ink transition hover:bg-brand/10 hover:text-brand md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile expandable menu */}
        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-ink/8 bg-white/95 backdrop-blur-xl transition-[max-height] duration-300 ease-in-out md:hidden ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-6 py-4 text-base font-medium text-ink/70">
            {hashLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} mobile />
            ))}
            <div className="px-3 pb-2 pt-3" onClick={closeMenu}>
              <CTAButton>Book Consultation</CTAButton>
            </div>
          </nav>
        </div>
      </header>

      {/* Floating Book Consultation button */}
      <a
        href="#consultation"
        className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-black text-white shadow-brand transition hover:-translate-y-0.5 hover:bg-brand-dark md:inline-flex"
      >
        Book Consultation
      </a>
    </>
  );
}
