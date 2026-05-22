import CTAButton from "./ui/CTAButton";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/8 bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center">
          <img src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779270124/Asset_1_ngs0jf.png" alt="DENOISE logo" className="block h-10 w-auto object-contain" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/60 md:flex">
          <a href="#problem" className="hover:text-brand">Problem</a>
          <a href="#work" className="hover:text-brand">How We Work</a>
          <a href="#systems" className="hover:text-brand">Systems</a>
          <a href="#pricing" className="hover:text-brand">Pricing</a>
          <a href="#insights" className="hover:text-brand">Insights</a>
        </nav>
        <div className="hidden sm:block">
          <CTAButton>Consultation</CTAButton>
        </div>
      </div>
    </header>
  );
}
