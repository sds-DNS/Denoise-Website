import CTAButton from "./ui/CTAButton";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#17131F]/8 bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center">
          <img src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779270124/Asset_1_ngs0jf.png" alt="DENOISE logo" className="block h-10 w-auto object-contain" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#17131F]/60 md:flex">
          <a href="#problem" className="hover:text-[#5B2EFF]">Problem</a>
          <a href="#work" className="hover:text-[#5B2EFF]">How We Work</a>
          <a href="#systems" className="hover:text-[#5B2EFF]">Systems</a>
          <a href="#pricing" className="hover:text-[#5B2EFF]">Pricing</a>
          <a href="#insights" className="hover:text-[#5B2EFF]">Insights</a>
        </nav>
        <div className="hidden sm:block">
          <CTAButton>Consultation</CTAButton>
        </div>
      </div>
    </header>
  );
}
