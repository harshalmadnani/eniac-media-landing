import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, SectionLabel } from "./ui";

const serviceOptions = [
  "KOL Marketing",
  "User Acquisition",
  "Community Building",
  "Social Media Management",
  "Advisory Services",
  "Event Marketing",
  "Custom Services",
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
            <SectionLabel index="(07)">Contact Us</SectionLabel>
            <h2 className="mt-6 max-w-md text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl">
              Let's Build Something <span className="text-gradient">Extraordinary</span> Together
            </h2>
            <p className="mt-6 max-w-md text-muted">
              Whether you're launching a token, scaling a community, planning a TGE, running
              influencer campaigns, or looking for strategic growth support, our team is ready
              to help. Get in touch and let's discuss how Eniac Media can accelerate your next
              stage of growth.
            </p>
            <div className="mt-10 space-y-4">
              <div>
                <div className="label-mono">Email</div>
                <a href="mailto:info@eniacmedia.com" className="mt-1 block font-mono text-sm text-bone hover:text-lime">
                  info@eniacmedia.com
                </a>
              </div>
              <div>
                <div className="label-mono">Telegram</div>
                <a href="https://t.me/Eniacmedia" target="_blank" rel="noreferrer" className="mt-1 block font-mono text-sm text-bone hover:text-lime">
                  https://t.me/Eniacmedia
                </a>
              </div>
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
                    <div className="mb-1">
                      <h3 className="font-display text-xl font-semibold">Tell Us About Your Project</h3>
                      <p className="mt-2 text-sm text-muted">
                        Share a few details about your project and goals. Our team will review
                        your inquiry and get back to you within 24-48 hours.
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Full Name*" name="name" placeholder="John Doe" />
                      <Field label="Project / Company Name" name="project" placeholder="Enter your project name" required={false} />
                    </div>
                    <Field
                      label="Email Address*"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                    <div>
                      <label className="label-mono">Service Interested In</label>
                      <select
                        required
                        defaultValue=""
                        className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-bone outline-none transition-colors focus:border-lime"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-mono">Message*</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Tell us about your project, goals, and how we can help."
                        className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted/60 focus:border-lime"
                      />
                    </div>
                    <button type="submit" className="btn-primary mt-2 w-full">
                      Get in Touch <ArrowUpRight size={16} />
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

function Field({ label, name, type = "text", placeholder, required = true }) {
  return (
    <div>
      <label className="label-mono" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted/60 focus:border-lime"
      />
    </div>
  );
}
