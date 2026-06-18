import { Users, BarChart3, Cpu, Layers, Target } from "lucide-react";
import { Reveal, SectionLabel, AnimatedHeading } from "./ui";

const values = [
  {
    icon: Users,
    title: "2,000+ verified KOLs & creators",
    desc: "Access one of the largest curated Web3 influencer networks.",
  },
  {
    icon: BarChart3,
    title: "Data-driven execution",
    desc: "Every campaign is optimized through performance analytics and measurable KPIs.",
  },
  {
    icon: Cpu,
    title: "Web3-native team",
    desc: "Deep expertise across DeFi, AI, infrastructure, gaming, memecoins, and Layer 1 ecosystems.",
  },
  {
    icon: Layers,
    title: "Full-funnel growth",
    desc: "From awareness and acquisition to retention and community building.",
  },
  {
    icon: Target,
    title: "Founder-centric approach",
    desc: "Growth strategies customized around project goals, milestones, and token events.",
  },
];

export default function Values() {
  return (
    <section className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="(06)">Why Eniac</SectionLabel>
          <AnimatedHeading
            text="Built for Web3 growth. Trusted by industry leaders."
            accentWords={["growth", "leaders"]}
            className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="card group h-full p-7 transition-colors hover:border-lime/30">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-lime transition-all group-hover:bg-lime group-hover:text-white">
                  <v.icon size={20} />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm text-muted">{v.desc}</p>
              </div>
            </Reveal>
          ))}

          {/* highlight card filling the 6th cell */}
          <Reveal delay={values.length * 0.06}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-lime p-7 text-white">
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                Our reach
              </span>
              <div>
                <div className="font-display text-4xl font-bold leading-none">100M+</div>
                <p className="mt-3 text-sm text-white/80">
                  Campaign impressions generated across global exchanges, protocols, and
                  trading ecosystems.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
