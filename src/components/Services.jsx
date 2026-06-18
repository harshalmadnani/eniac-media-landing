import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Share2, Compass, CalendarDays, Sparkles, ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel, AnimatedHeading } from "./ui";
import { SmartLink } from "../lib/SmartLink";

const services = [
  {
    icon: Megaphone,
    title: "KOL & Influencer Marketing",
    tag: "Access 2,000+ crypto KOLs, creators & UGC partners",
    desc: "High-impact influencer campaigns across X, YouTube, Telegram, Discord, and TikTok — planned, executed, and measured through our analytics platform.",
    deliver: ["Crypto KOL campaigns", "Influencer outreach & management", "UGC content production", "Ambassador programs", "Viral awareness campaigns", "Performance analytics"],
  },
  {
    icon: TrendingUp,
    title: "User Acquisition & Growth",
    tag: "Sustainable growth beyond vanity metrics",
    desc: "Full-funnel growth systems designed to acquire, activate, and retain high-value users at scale across multiple channels.",
    deliver: ["Acquisition strategy", "Growth campaigns", "Community expansion", "Referral programs", "Conversion optimization", "Retention systems"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    tag: "Turn attention into authority",
    desc: "High-frequency, algorithmically optimized content strategies that maximize reach, engagement, and community growth with a consistent brand voice.",
    deliver: ["X (Twitter) management", "LinkedIn growth", "Content strategy", "Daily content production", "Community engagement", "Brand positioning"],
  },
  {
    icon: Compass,
    title: "Advisory Services",
    tag: "Master every stage that matters",
    desc: "Expert strategic guidance for launching and scaling — stronger foundations through planning, tokenomics, GTM, and launch readiness.",
    deliver: ["Roadmap development", "Tokenomics consulting", "Whitepaper advisory", "Go-to-market strategy", "Ecosystem positioning", "Launch preparation"],
  },
  {
    icon: CalendarDays,
    title: "Event Marketing & Experiences",
    tag: "Create experiences that build communities",
    desc: "From founder meetups to large-scale conferences and virtual activations — experiences that strengthen relationships and brand impact.",
    deliver: ["Event strategy & planning", "Conference activation", "Side events & meetups", "Virtual events & AMAs", "Speaker coordination", "Post-event amplification"],
  },
  {
    icon: Sparkles,
    title: "Custom Growth Solutions",
    tag: "Built around your vision",
    desc: "Bespoke growth systems tailored to your goals, stage, and market — from TGE marketing to end-to-end execution.",
    deliver: ["TGE marketing", "Brand strategy", "Ecosystem partnerships", "OTC collaborations", "Market expansion", "End-to-end growth"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionLabel index="(02)">Our services</SectionLabel>
            <AnimatedHeading
              text="Growth solutions built for Web3 leaders."
              accentWords={["Web3", "leaders"]}
              className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
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
            <Reveal key={s.title} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card group relative flex h-full flex-col overflow-hidden p-7"
              >
                <div className="halftone pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-25" />
                <div className="relative flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-lime transition-colors group-hover:bg-lime group-hover:text-white">
                    <s.icon size={20} />
                  </span>
                  <span className="font-mono text-sm text-white/20">0{i + 1}</span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="relative mt-1.5 text-[13px] font-medium text-lime/90">{s.tag}</p>
                <p className="relative mt-3 text-sm text-muted">{s.desc}</p>
                <ul className="relative mt-5 grid grid-cols-1 gap-x-4 gap-y-2 border-t border-white/10 pt-5 sm:grid-cols-2">
                  {s.deliver.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-muted">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-lime" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* CTA banner */}
        <Reveal delay={0.1}>
          <SmartLink
            to="#contact"
            className="mt-4 flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl bg-lime p-8 text-white transition-transform hover:scale-[1.005] sm:flex-row sm:items-center"
          >
            <h3 className="max-w-xl font-display text-2xl font-semibold leading-tight">
              Not sure which fits? Let's map your growth playbook together.
            </h3>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold backdrop-blur-sm">
              Book a free strategy call <ArrowUpRight size={16} />
            </span>
          </SmartLink>
        </Reveal>
      </div>
    </section>
  );
}
