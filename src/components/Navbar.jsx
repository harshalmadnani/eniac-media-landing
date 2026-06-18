import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SmartLink } from "../lib/SmartLink";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "/work" },
  { label: "Network", href: "#network" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-ink-900/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="container-px flex h-[72px] items-center justify-between">
          <SmartLink to="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime font-display text-lg font-bold text-white">
              E
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Eniac<span className="text-lime">Media</span>
            </span>
          </SmartLink>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <SmartLink
                key={l.href}
                to={l.href}
                className="text-sm text-muted transition-colors hover:text-bone"
              >
                {l.label}
              </SmartLink>
            ))}
          </div>

          <div className="hidden md:block">
            <SmartLink to="#contact" className="btn-primary">
              Book a Call <ArrowUpRight size={16} />
            </SmartLink>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-white/10 bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {links.map((l) => (
                <SmartLink
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted hover:bg-white/5 hover:text-bone"
                >
                  {l.label}
                </SmartLink>
              ))}
              <SmartLink
                to="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                Book a Call <ArrowUpRight size={16} />
              </SmartLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
