import { insights } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import UnifiedCard from "../ui/UnifiedCard";
import ImagePanel from "../ui/ImagePanel";

export default function Insights() {
  return (
    <section id="insights" className="bg-lilac-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-stretch gap-12 lg:grid-cols-[.72fr_.98fr]">
          <div className="flex h-full flex-col pt-1">
            <SectionLabel>Insights</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-ink md:text-5xl">Operational insights.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">We believe operational knowledge should compound across the industry. DENOISE shares practical insights, operational thinking, and implementation lessons gathered through working directly with scaling companies and complex execution environments.</p>
            <a href="#" className="mt-7 inline-block text-sm font-bold text-brand transition hover:text-gold">View all insights</a>
            <div className="mt-8 grid flex-1 auto-rows-fr gap-4 md:grid-cols-2">
              {insights.concat(["Execution Visibility in Scaling Teams"]).map((title, index) => (
                <article key={title} className="h-full">
                  <UnifiedCard className="flex h-full flex-col justify-between p-6"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Insight {String(index + 1).padStart(2, "0")}</p><h3 className="mt-4 text-xl font-black leading-tight tracking-[-0.03em] text-ink">{title}</h3></div><p className="mt-6 text-sm leading-7 text-muted-2">A practical breakdown for leaders trying to build cleaner execution, sharper visibility, and stronger operational control.</p></UnifiedCard>
                </article>
              ))}
            </div>
          </div>
          <div className="h-full"><ImagePanel title="Operational thinking and analysis" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779265015/7._INSIGHTS_SECTION_lo0rab.png" alt="White marble executive statue reviewing blank documents for the insights section" /></div>
        </div>
      </div>
    </section>
  );
}
