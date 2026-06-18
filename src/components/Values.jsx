import { Network, BarChart3, Zap, Globe2 } from "lucide-react";
import { Reveal, SectionLabel } from "./ui";

const values = [
  {
    icon: Network,
    title: "Extensive influencer network",
    desc: "Reach across YouTube, X, Telegram and Instagram.",
  },
  {
    icon: BarChart3,
    title: "Data-driven approach",
    desc: "Every campaign is backed by in-depth analytics.",
  },
  {
    icon: Zap,
    title: "Fast execution",
    desc: "Get your campaign live in 24–48 hours.",
  },
  {
    icon: Globe2,
    title: "Global audience",
    desc: "Targeted engagement in 20+ countries.",
  },
];

export default function Values() {
  return (
    <section className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="(06)">Why Eniac</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Upholding values that define us.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="card group h-full p-7 transition-colors hover:border-lime/30">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-lime transition-all group-hover:bg-lime group-hover:text-ink-900">
                  <v.icon size={20} />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm text-muted">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
