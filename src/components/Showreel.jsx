import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Reveal, SectionLabel, AnimatedHeading } from "./ui";

const imgs = [
  "crypto-rover.avif", "datadash.webp", "altcoin-daily.webp", "crypto-banter.webp",
  "the-moon.webp", "cryptosrus.webp", "michael-wrubel.avif", "professor-crypto.webp",
  "joe-parys.webp", "davinci-jeremie.webp", "cameron-fous.webp", "that-martini-guy.webp",
  "conor-kenny.webp", "darryl-boo.webp", "crypto-mason.png", "datadash.webp",
].map((f) => `/influencers/${f}`);

function Tile({ src, i }) {
  return (
    <div className="relative h-28 w-44 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-36 sm:w-56">
      <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
    </div>
  );
}

function Row({ slice, reverse, speed = "animate-marquee" }) {
  return (
    <div className="flex gap-4">
      <div className={`flex w-max gap-4 ${reverse ? "animate-marquee-rev" : speed}`}>
        {[...slice, ...slice].map((src, i) => (
          <Tile key={i} src={src} i={i} />
        ))}
      </div>
    </div>
  );
}

export default function Showreel() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionLabel index="(05)">In motion</SectionLabel>
          <AnimatedHeading
            text="Press play on real growth."
            accentWords={["play"]}
            className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          />
        </Reveal>
      </div>

      {/* montage frame */}
      <Reveal delay={0.1}>
        <div className="relative mt-12">
          <div className="relative mx-auto flex max-w-[1400px] flex-col gap-4 overflow-hidden px-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <Row slice={imgs.slice(0, 8)} />
            <Row slice={imgs.slice(4, 12)} reverse />
            <Row slice={imgs.slice(8, 16)} />
          </div>

          {/* dark wash + play button overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,9,11,0.7)_0%,rgba(8,9,11,0.35)_55%,transparent_100%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <button
              onClick={() => setOpen(true)}
              className="group relative grid h-24 w-24 place-items-center"
              aria-label="Play showreel"
            >
              <span className="absolute inset-0 animate-pulseglow rounded-full bg-gradient-to-br from-lime via-pink to-cyan blur-md" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-lime via-pink to-cyan opacity-90" />
              <span className="absolute inset-[3px] rounded-full bg-ink-900/80 backdrop-blur-sm" />
              <Play size={30} className="relative ml-1 fill-white text-white transition-transform group-hover:scale-110" />
            </button>
            <p className="mt-6 font-display text-lg font-semibold">Watch the Eniac showreel</p>
            <p className="mt-1 text-sm text-muted">Events · campaigns · creators · activations</p>
          </div>
        </div>
      </Reveal>

      {/* lightbox */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-bone hover:bg-white/10"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drop the real Eniac showreel URL here (YouTube/Vimeo/mp4). */}
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-lime/20 via-pink/15 to-cyan/20">
              <div className="text-center">
                <p className="font-display text-xl font-semibold">Showreel coming soon</p>
                <p className="mt-2 max-w-sm px-6 text-sm text-muted">
                  Add your event reels (Bali, Trade&amp;Chill, Token2049) here — just drop in a
                  YouTube/Vimeo embed or an MP4 source.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
