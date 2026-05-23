import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import ImagePanel from "../ui/ImagePanel";

export default function WhyDenoise() {
  return (
    <section id="why" className="border-y border-ink/8 bg-lilac-200 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-stretch gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div className="h-full self-stretch">
            <ImagePanel
              title="Removing operational noise"
              src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779265009/6._WHY_DENOISE_EXISTS_Alt_vai0by.png"
              alt="White marble executive statue brushing away purple and gold particles for the why DENOISE exists section"
            />
          </div>
          <div className="flex h-full flex-col self-stretch">
            <div>
              <SectionLabel>Why DENOISE Exists</SectionLabel>
              <SectionHeading>
                Growth without operational structure creates hidden instability.
              </SectionHeading>
              <div className="mt-7 space-y-5 text-lg leading-8 text-muted">
                <p>
                  Most companies focus on outcomes while remaining blind to how execution actually
                  functions internally. Revenue may grow. Teams may expand. But without operational
                  clarity, complexity compounds faster than leadership can manage it.
                </p>
                <p>
                  DENOISE was created to solve that gap. We believe operational structure should
                  create visibility, accountability, and predictable execution, not additional
                  bureaucracy.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-semibold leading-8 text-ink">
              <span>The goal is not to add process.</span>
              <span className="text-gold">The goal is to remove operational noise.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
