import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { buildCloudinaryUrl } from "../lib/cloudinary";

const LOGO_SRC = buildCloudinaryUrl(
  "https://res.cloudinary.com/dzhfxged2/image/upload/v1779270124/Asset_1_ngs0jf.png",
  { width: 480 }
);

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
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-dark"
    >
      {children}
    </a>
  );
}

const navLinks = [
  { label: "Operational Diagnosis", href: "#operational-diagnosis" },
  { label: "Talent Acquisition", href: "#talent-acquisition" },
  { label: "Knowledge Hub", href: "#insights" },
  { label: "Articles", href: "/blog" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/8 bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.15fr_.8fr_1.35fr_.7fr]">
        {/* Brand */}
        <div>
          <img
            src={LOGO_SRC}
            alt="DENOISE footer logo"
            width="220"
            height="40"
            loading="lazy"
            decoding="async"
            className="block h-9 w-auto object-contain"
          />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-3">
            Operational clarity, better hiring decisions, and structured growth for scaling companies.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            © DENOISE SYSTEMS FZ LLC {year}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-ink">Navigation</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-3">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-brand">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-ink">Contact</h3>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted-3">
            <a
              href="mailto:consult@denoisesystems.com"
              className="flex items-center gap-2 transition hover:text-brand"
            >
              <Mail className="h-4 w-4 shrink-0" />
              consult@denoisesystems.com
            </a>
            <a
              href="tel:+971585941007"
              className="flex items-center gap-2 transition hover:text-brand"
            >
              <Phone className="h-4 w-4 shrink-0" />
              +971 58 594 1007
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Taraf 1, JVC, Dubai, United Arab Emirates
            </p>
            <div className="flex items-center gap-3 pt-2">
              <SocialPill href="mailto:consult@denoisesystems.com" label="Email DENOISE">
                <Mail className="h-5 w-5 stroke-[2.4]" />
              </SocialPill>
              <SocialPill href="https://www.linkedin.com/company/denoisesystems/" label="DENOISE on LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </SocialPill>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-ink">Legal</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-3">
            <Link to="/privacy-policy" className="transition hover:text-brand">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition hover:text-brand">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
