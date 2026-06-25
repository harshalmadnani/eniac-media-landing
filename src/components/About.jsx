import { Check } from "lucide-react";
import { Reveal, SectionLabel, CountUp, AnimatedHeading } from "./ui";

const stats = [
  { to: 100, suffix: "+", label: "Successful campaigns" },
  { to: 5, suffix: "+", label: "Years of industry experience" },
  { to: 500, suffix: "K+", label: "Users Acquired" },
  { to: 3000, suffix: "+", label: "KOL Partnerships" },
  { to: 20, suffix: "+", label: "Countries Reached" },
  { to: 10, suffix: "+", label: "Top-Tier Exchange Clients" },
];

const impact = [
  "50+ Web3 & Crypto Brands Served",
  "100M+ Campaign Impressions Generated",
  "500K+ Users Reached & Acquired",
  "1,000+ KOL & Creator Partnerships",
  "Global Reach Across Exchanges, Protocols & Trading Ecosystems",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="(01)">About ENIAC Media</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AnimatedHeading
              text="About ENIAC Media"
              accentWords={["ENIAC"]}
              className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            />
            <p className="mt-6 max-w-xl text-muted">
              ENIAC Media is a leading Web3 marketing and growth agency trusted by 50+
              blockchain, crypto, and fintech brands worldwide. We help exchanges, protocols,
              AI projects, and trading ecosystems accelerate growth through strategic
              marketing, creator partnerships, community building, and performance-driven
              campaigns.
            </p>
            <p className="mt-4 max-w-xl text-muted">
              From industry leaders like Binance, Bybit, MEXC, Bitget, and CoinDCX to
              innovative Web3 protocols such as Covalent, Arcana, Router Protocol, and MIND
              AI, ENIAC Media has become a trusted growth partner across the global digital
              asset ecosystem.
            </p>
          </div>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="card h-full p-7">
              <h3 className="label-mono">Our Impact</h3>
              <ul className="mt-6 space-y-4">
                {impact.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-bone">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime/15 text-lime">
                      <Check size={12} />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* impact stat band */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-900/60 px-5 py-9 text-center backdrop-blur-sm">
                <div className="font-display text-4xl font-bold text-bone sm:text-5xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
