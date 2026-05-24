import { useState } from "react";
import { Menu, X } from "lucide-react";
import CTAButton from "./ui/CTAButton";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#work", label: "How We Work" },
  { href: "#systems", label: "Systems" },
  { href: "#pricing", label: "Pricing" },
  { href: "#insights", label: "Insights" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/8 bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center" onClick={closeMenu}>
          <img
            src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779270124/Asset_1_ngs0jf.png"
            alt="DENOISE logo"
            className="block h-8 w-auto object-contain sm:h-10"
          />
        </a>

        {/* Desktop / tablet nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/60 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="whitespace-nowrap hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton>Consultation</CTAButton>
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 transition hover:bg-brand/10 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <div className="px-3 pb-2 pt-3" onClick={closeMenu}>
            <CTAButton>Consultation</CTAButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
