import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-lime/70" />
      {index && <span className="font-mono text-xs text-lime">{index}</span>}
      <span className="label-mono">{children}</span>
    </div>
  );
}

// Heading that reveals word-by-word with a clip-up motion when scrolled into view
export function AnimatedHeading({ text, className = "", as = "h2", accentWords = [] }) {
  const Tag = motion[as];
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
    >
      {words.map((w, i) => {
        const accent = accentWords.includes(w.replace(/[.,]/g, ""));
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.06em] align-top">
            <motion.span
              className={`inline-block ${accent ? "text-lime" : ""}`}
              variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {w}
            </motion.span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        );
      })}
    </Tag>
  );
}

// Big statement whose words brighten from muted -> bone as you scroll through it
function HighlightWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(progress, range, ["#5b606a", "#f4f1ea"]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
}

export function ScrollHighlight({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.6"],
  });
  const words = text.split(" ");
  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((w, i) => {
        const start = i / words.length;
        // overlap each word's fade window with its neighbours for a smooth sweep
        const end = Math.min(start + 2.2 / words.length, 1);
        return (
          <HighlightWord key={i} progress={scrollYProgress} range={[start, end]}>
            {w}
          </HighlightWord>
        );
      })}
    </p>
  );
}

// Animated number counter that triggers when scrolled into view
export function CountUp({ to, suffix = "", duration = 1800, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
