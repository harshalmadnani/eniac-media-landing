import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "./ui";
import { SmartLink } from "../lib/SmartLink";

export default function CreatorsBand() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/40 p-8 backdrop-blur-sm sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime/15 blur-[110px]" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <SectionLabel index="✦">Now recruiting · 20 spots</SectionLabel>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">
                  Creators Program
                </h3>
                <p className="mt-4 text-muted">
                  A 3-month paid acceleration program for rising crypto, trading &amp; finance
                  creators — <span className="text-bone">₹20,000/month + brand deals</span>,
                  weekly mentorship, VIP brand access, and a sponsored Creator House finale.
                  Apply with 2–10K followers.
                </p>
              </div>
              <SmartLink to="/creators" className="btn-primary shrink-0">
                Explore the program <ArrowUpRight size={16} />
              </SmartLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
