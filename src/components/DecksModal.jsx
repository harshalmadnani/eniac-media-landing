import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, ArrowUpRight } from "lucide-react";
import { DECKS_URL } from "../data/network";

const decks = ["Company Deck", "Case Studies", "Services Deck"];

export default function DecksModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("eniac_decks_seen")) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    sessionStorage.setItem("eniac_decks_seen", "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/85 p-5 backdrop-blur-xl"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="gradient-border relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-ink-800/80 p-8 backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute -top-20 right-0 h-48 w-48 rounded-full bg-lime/20 blur-[90px]" />
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted hover:bg-white/10 hover:text-bone"
            >
              <X size={16} />
            </button>

            <img src="/brand/eniac-logo.svg" alt="ENIAC Media" className="relative h-7 w-auto" />
            <h3 className="relative mt-6 font-display text-2xl font-semibold">
              Explore our decks
            </h3>
            <p className="relative mt-2 text-sm text-muted">
              Get the full picture — company overview, case studies, and our services, all in
              one place.
            </p>

            <ul className="relative mt-6 space-y-2">
              {decks.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm"
                >
                  <FileText size={16} className="text-lime" />
                  {d}
                </li>
              ))}
            </ul>

            <a
              href={DECKS_URL}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="btn-primary relative mt-7 w-full"
            >
              Open the decks <ArrowUpRight size={16} />
            </a>
            <button
              onClick={close}
              className="relative mt-3 w-full text-center text-xs text-muted hover:text-bone"
            >
              Maybe later
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
