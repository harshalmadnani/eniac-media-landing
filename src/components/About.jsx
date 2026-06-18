import { Target, Eye } from "lucide-react";
import { Reveal, SectionLabel, CountUp, AnimatedHeading } from "./ui";

const stats = [
  { to: 500, suffix: "+", label: "Influencers globally" },
  { to: 250, suffix: "+", label: "Successful campaigns" },
  { to: 20, suffix: "+", label: "Countries reached" },
  { to: 6, suffix: "+", label: "Years of experience" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="(01)">About Eniac</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AnimatedHeading
              text="Pioneering the future of Web3 marketing."
              accentWords={["Web3", "marketing"]}
              className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            />
            <p className="mt-6 max-w-xl text-muted">
              We're a crypto-native marketing agency helping blockchain startups, tokens,
              and Web3 projects grow through strategic campaigns and influential voices.
              With a global network of trusted KOLs and deep roots in Web3, we craft
              results-driven experiences that spark engagement, drive visibility, and
              scale your project's impact.
            </p>
          </div>

          <div className="grid gap-4 lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-lime/15 text-lime">
                    <Target size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">Our Mission</h3>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Empowering Web3 growth through creative strategies, powerful storytelling,
                  and trusted influence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-mint/15 text-mint">
                    <Eye size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">Our Vision</h3>
                </div>
                <p className="mt-4 text-sm text-muted">
                  To become the go-to partner for Web3 brands seeking impactful marketing
                  and global reach.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stat band */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-900 px-6 py-10 text-center sm:py-12">
                <div className="font-display text-5xl font-bold text-bone sm:text-6xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
