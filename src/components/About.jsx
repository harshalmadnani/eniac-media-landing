import { Reveal, SectionLabel, CountUp, AnimatedHeading } from "./ui";

const stats = [
  { to: 100, suffix: "+", label: "Successful campaigns" },
  { to: 5, suffix: "+", label: "Years of industry experience" },
  { to: 500, suffix: "K+", label: "Users Acquired" },
  { to: 3000, suffix: "+", label: "KOL Partnerships" },
  { to: 20, suffix: "+", label: "Countries Reached" },
  { to: 10, suffix: "+", label: "Top-Tier Exchange Clients" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="(01)">About ENIAC Media</SectionLabel>
        </Reveal>

        <AnimatedHeading
          text="A leading Web3 marketing & growth agency."
          accentWords={["growth"]}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
        />
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-2xl text-muted">
            Trusted by 50+ blockchain, crypto, and fintech brands — from Binance, Bybit,
            MEXC, Bitget, and CoinDCX to protocols like Covalent, Arcana, Router Protocol,
            and MIND AI. We accelerate growth through strategic marketing, creator
            partnerships, community building, and performance-driven campaigns.
          </p>
        </Reveal>

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
