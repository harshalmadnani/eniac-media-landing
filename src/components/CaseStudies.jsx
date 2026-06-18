import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel, AnimatedHeading } from "./ui";

const cases = [
  { token: "$CTX", type: "Pump", change: "+100%", volume: "$600K", date: "02/12/2024" },
  { token: "$Router", type: "Push", change: "+10%", volume: "$600K", date: "Mar 2025" },
  { token: "$XAR", type: "Push", change: "+30%", volume: "$300K", date: "Apr 2025" },
  { token: "$CXT", type: "Pump", change: "+100%", volume: "$600K", date: "May 2025" },
  { token: "$CXT", type: "Push", change: "+20%", volume: "$1M", date: "May–Jun 2025" },
  { token: "$MindAI", type: "Push", change: "+50%", volume: "$120K", date: "May–Jun 2025" },
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionLabel index="(04)">Proven in the wild</SectionLabel>
            <AnimatedHeading
              text="Real campaigns. Real numbers."
              accentWords={["numbers"]}
              className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <a href="#contact" className="btn-ghost shrink-0">
              See all case studies <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        {/* hero metric */}
        <Reveal delay={0.05}>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl bg-lime p-8 text-white lg:col-span-1">
              <div className="halftone pointer-events-none absolute inset-0 opacity-20" />
              <span className="relative font-mono text-xs uppercase tracking-widest text-white/60">
                Best single campaign
              </span>
              <div className="relative mt-6 font-display text-6xl font-bold sm:text-7xl">+100%</div>
              <p className="relative mt-4 text-sm text-white/70">
                Price change on $CTX in a single push, with $600K of fresh volume routed
                through KOL coverage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-2">
              {cases.map((c, i) => (
                <motion.div
                  key={c.token + i}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="card flex flex-col justify-between p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-semibold">{c.token}</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                      {c.type}
                    </span>
                  </div>
                  <div className="mt-6 flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-1 font-display text-2xl font-bold text-lime">
                        <TrendingUp size={18} /> {c.change}
                      </div>
                      <div className="mt-1 text-xs text-muted">Vol {c.volume}</div>
                    </div>
                    <span className="text-[11px] text-muted">{c.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
