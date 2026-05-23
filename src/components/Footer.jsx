import { Mail } from "lucide-react";

export default function Footer() {
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
          <a href="mailto:hello@denoise.com" className="flex items-center gap-2 hover:text-brand">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-brand">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
