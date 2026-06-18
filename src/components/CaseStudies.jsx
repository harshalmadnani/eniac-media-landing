import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel, AnimatedHeading } from "./ui";
import { SmartLink } from "../lib/SmartLink";
import TokenCoin from "./TokenCoin";
import Sparkline from "./Sparkline";
import { cases } from "../data/cases";

export default function CaseStudies() {
  const featured = cases.find((c) => c.featured) || cases[0];
  const rest = cases.filter((c) => c.id !== featured.id).slice(0, 4);

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
            <SmartLink to="/work" className="btn-ghost shrink-0">
              See all case studies <ArrowUpRight size={16} />
            </SmartLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* featured campaign */}
          <Reveal className="lg:col-span-1">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-lime p-8 text-ink">
              <div className="halftone pointer-events-none absolute inset-0 opacity-20" />
              <div className="relative flex items-center gap-3">
                <TokenCoin token={featured.token} img={featured.img} size={40} />
                <div>
                  <div className="font-display font-semibold leading-none">{featured.token}</div>
                  <div className="text-xs text-ink/70">{featured.name}</div>
                </div>
              </div>
              <div className="relative">
                <div className="mt-8 font-display text-6xl font-bold sm:text-7xl">
                  {featured.change}
                </div>
                <p className="mt-4 text-sm text-ink/80">{featured.summary}</p>
              </div>
            </div>
          </Reveal>

          {/* grid of campaigns */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {rest.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="card flex h-full flex-col justify-between p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <TokenCoin token={c.token} img={c.img} size={32} />
                      <span className="font-display text-base font-semibold">{c.token}</span>
                    </div>
                    <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                      {c.type}
                    </span>
                  </div>

                  <div className="my-4 h-10">
                    <Sparkline data={c.series} height={40} />
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-1 font-display text-xl font-bold text-lime">
                        <TrendingUp size={16} /> {c.change}
                      </div>
                      <div className="mt-1 text-xs text-muted">Vol {c.volume}</div>
                    </div>
                    <span className="text-[11px] text-muted">{c.date}</span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
