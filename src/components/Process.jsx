import { Reveal, SectionLabel, AnimatedHeading } from "./ui";

const steps = [
  {
    n: "01",
    title: "Initial Contact",
    desc: "Reach out through the form. We respond fast to gather preliminary info about your goals.",
  },
  {
    n: "02",
    title: "Needs Assessment",
    desc: "We dive deeper into your objectives, challenges, communication needs, and target audience.",
  },
  {
    n: "03",
    title: "Proposal & Agreement",
    desc: "A tailored proposal outlining strategy, services, projected outcomes, timeline, and cost.",
  },
  {
    n: "04",
    title: "Strategy & Planning",
    desc: "A detailed planning session to align the strategy, key solutions, and tactics for success.",
  },
  {
    n: "05",
    title: "Implementation",
    desc: "We execute, keep regular communication, and report progress, coverage, and adjustments.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative border-y border-white/10 bg-ink-900/40 py-24 backdrop-blur-sm sm:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-px relative">
        <Reveal>
          <SectionLabel index="(03)">How it works</SectionLabel>
          <AnimatedHeading
            text="From first message to live campaign."
            accentWords={["live", "campaign"]}
            className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-ink-800/50 p-6 transition-colors hover:border-lime/40">
                <div className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-lime/80">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
