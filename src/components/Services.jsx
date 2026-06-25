import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Share2, Compass, CalendarDays, Sparkles, ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel, AnimatedHeading } from "./ui";
import { SmartLink } from "../lib/SmartLink";

const services = [
  {
    icon: Megaphone,
    title: "KOL & Influencer Marketing",
    tag: "Access 2,000+ Crypto KOLs, Creators & UGC Partners",
    desc: "Launch high-impact influencer campaigns through our curated network of 2,000+ vetted KOLs, creators, analysts, and content producers across X, YouTube, Telegram, Discord, TikTok, and emerging Web3 channels. Every campaign is strategically planned, executed, and measured through our proprietary analytics platform, Metricus, ensuring transparent performance tracking and measurable ROI.",
    deliver: ["Crypto KOL Campaigns", "Influencer Outreach & Management", "UGC Content Production", "Ambassador Programs", "Viral Awareness Campaigns", "Performance Analytics & Reporting"],
  },
  {
    icon: TrendingUp,
    title: "User Acquisition & Growth",
    tag: "Sustainable Growth Beyond Vanity Metrics",
    desc: "We engineer full-funnel growth systems designed to acquire, activate, and retain high-value users at scale. From market validation and audience research to multi-channel growth execution, our approach focuses on sustainable user acquisition that compounds over time.",
    deliver: ["User Acquisition Strategy", "Growth Marketing Campaigns", "Community Expansion", "Referral & Ambassador Programs", "Conversion Optimization", "Retention Systems"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    tag: "Turn Attention Into Authority",
    desc: "Build a strong and recognizable Web3 brand across every major platform. Our team creates high-frequency, algorithmically optimized content strategies designed to maximize reach, engagement, and community growth while maintaining a consistent brand voice.",
    deliver: ["X (Twitter) Management", "LinkedIn Growth", "Content Strategy", "Daily Content Production", "Community Engagement", "Brand Positioning"],
  },
  {
    icon: Compass,
    title: "Advisory Services",
    tag: "Master Every Stage That Matters",
    desc: "Navigate the complexities of launching and scaling a Web3 project with expert strategic guidance. We help founders build stronger foundations through roadmap planning, tokenomics consulting, go-to-market strategy, whitepaper development, ecosystem positioning, and launch readiness.",
    deliver: ["Roadmap Development", "Tokenomics Consulting", "Whitepaper Advisory", "Go-To-Market Strategy", "Ecosystem Positioning", "Launch Preparation"],
  },
  {
    icon: CalendarDays,
    title: "Event Marketing & Community Experiences",
    tag: "Create Experiences That Build Communities",
    desc: "From intimate founder meetups to large-scale conferences and virtual activations, we design experiences that strengthen relationships, increase visibility, and create lasting brand impact.",
    deliver: ["Event Strategy & Planning", "Conference Activation", "Side Events & Meetups", "Virtual Events & AMAs", "Speaker & Partner Coordination", "Post-Event Amplification"],
  },
  {
    icon: Sparkles,
    title: "Custom Growth Solutions",
    tag: "Built Around Your Vision",
    desc: "Every project is different. That's why we create bespoke growth systems tailored specifically to your goals, stage, and market. Whether you need TGE marketing, branding, ecosystem partnerships, OTC KOL collaborations, launch campaigns, or end-to-end growth execution, we build the exact playbook required for success.",
    deliver: ["TGE Marketing", "Brand Strategy", "Ecosystem Partnerships", "OTC & Strategic Collaborations", "Market Expansion Campaigns", "End-to-End Growth Execution"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionLabel index="(02)">Our Services</SectionLabel>
            <AnimatedHeading
              text="Growth Solutions Built for Web3 Leaders"
              accentWords={["Web3", "Leaders"]}
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
                <p className="relative mt-2 text-sm text-muted">{s.tag}</p>
                <ul className="relative mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {s.deliver.slice(0, 4).map((d) => (
                    <li key={d} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-muted">
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
