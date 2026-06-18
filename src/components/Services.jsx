import { motion } from "framer-motion";
import { Megaphone, Users, Star, Gift, Rocket, ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel, AnimatedHeading } from "./ui";
import { SmartLink } from "../lib/SmartLink";

const services = [
  {
    icon: Megaphone,
    tag: "Best for launch phase",
    title: "Token Promotion",
    desc: "Boost visibility and engagement for your token through targeted campaigns tailored to Web3 audiences.",
  },
  {
    icon: Users,
    tag: "Turn followers into advocates",
    title: "Web3 Community Building",
    desc: "Build and nurture a loyal community across Discord, Telegram, and X to drive long-term engagement and brand trust.",
  },
  {
    icon: Star,
    tag: "Build trust, hype & conversions",
    title: "KOL / Influencer Marketing",
    desc: "Amplify your project through trusted voices. We connect you with crypto-native KOLs handpicked by niche and community quality.",
  },
  {
    icon: Gift,
    tag: "Boost wallet engagement",
    title: "Airdrop Marketing",
    desc: "Generate buzz and grow your community fast with targeted airdrop campaigns designed to attract real, engaged users.",
  },
  {
    icon: Rocket,
    tag: "Create FOMO & early conversions",
    title: "Presale Marketing",
    desc: "Maximize fundraising potential with a strategic presale campaign that builds trust, urgency, and investor interest.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionLabel index="(02)">What we do</SectionLabel>
            <AnimatedHeading
              text="Services engineered for token growth."
              accentWords={["growth"]}
              className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SmartLink to="#contact" className="btn-ghost shrink-0">
              Start a campaign <ArrowUpRight size={16} />
            </SmartLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card group relative h-full overflow-hidden p-7"
              >
                <div className="halftone pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-lime transition-colors group-hover:bg-lime group-hover:text-white">
                      <s.icon size={20} />
                    </span>
                    <span className="font-mono text-sm text-white/20">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-6 label-mono">{s.tag}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted">{s.desc}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}

          {/* CTA card filling the grid */}
          <Reveal delay={services.length * 0.06}>
            <SmartLink
              to="#contact"
              className="flex h-full flex-col justify-between rounded-2xl bg-lime p-7 text-white transition-transform hover:scale-[1.01]"
            >
              <span className="font-mono text-sm text-white/50">06</span>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-tight">
                  Not sure which fits? Let's map it together.
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Book a free strategy call <ArrowUpRight size={16} />
                </span>
              </div>
            </SmartLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
