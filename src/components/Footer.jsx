import { Mail } from "lucide-react";

function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/8 bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <img
            src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779270124/Asset_1_ngs0jf.png"
            alt="DENOISE footer logo"
            className="block h-9 w-auto object-contain"
          />
          <p className="mt-3 text-sm text-muted-3">
            Structured execution creates scalable businesses.
          </p>
        </div>
        <div className="flex items-center gap-5 text-muted-3">
          <a
            href="mailto:consult@denoisesystems.com"
            className="flex items-center gap-2 hover:text-brand"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://www.linkedin.com/company/consultdenoise"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand"
          >
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-ink/8 pt-6">
        <p className="text-sm text-muted-3">&copy; {year} DENOISE Systems. All rights reserved.</p>
      </div>
    </footer>
  );
}
