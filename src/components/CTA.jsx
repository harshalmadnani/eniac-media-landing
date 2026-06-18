import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, SectionLabel } from "./ui";

const spendRanges = [
  "Under $20k",
  "$20k–$50k",
  "$50k–$100k",
  "$100k–$250k",
  "$250k–$500k",
  "$500k+",
];

export default function CTA() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-lime/15 blur-[150px]" />
      <div className="container-px relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionLabel index="(07)">Get in touch</SectionLabel>
            <h2 className="mt-6 max-w-md text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
              Ready to <span className="text-lime">scale</span> your token?
            </h2>
            <p className="mt-6 max-w-md text-muted">
              Tell us where you're stuck. We'll show you what we'd ship in week one —
              influencer coverage, community engineering, and exchange partnerships, run
              end to end.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
              <span>A real human reads every message.</span>
            </div>
            <div className="mt-8 flex flex-col gap-2 font-mono text-sm">
              <a href="mailto:hello@eniacmedia.com" className="text-bone hover:text-lime">
                hello@eniacmedia.com
              </a>
              <span className="text-muted">Live in 24–48h · 20+ countries</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-lime text-white">
                      <Check size={28} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold">
                      Message received.
                    </h3>
                    <p className="mt-3 max-w-xs text-sm text-muted">
                      Thanks for reaching out. Our team will get back to you within one
                      business day.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="btn-ghost mt-8"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Your name" name="name" placeholder="Satoshi N." />
                      <Field label="Project / Token" name="project" placeholder="$TOKEN" />
                    </div>
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      placeholder="you@project.xyz"
                    />
                    <div>
                      <label className="label-mono">Monthly marketing budget</label>
                      <select
                        required
                        defaultValue=""
                        className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-bone outline-none transition-colors focus:border-lime"
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        {spendRanges.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-mono">Where you're stuck</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your launch, volume goals, or community."
                        className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted/60 focus:border-lime"
                      />
                    </div>
                    <button type="submit" className="btn-primary mt-2 w-full">
                      Book a strategy call <ArrowUpRight size={16} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="label-mono" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted/60 focus:border-lime"
      />
    </div>
  );
}
