import { motion, useScroll, useSpring } from "framer-motion";

// A purple beam fixed to the top that fills as you scroll the entire landing.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-gradient-to-r from-blue via-lime to-pink shadow-[0_0_12px_rgba(139,92,255,0.8)]"
    />
  );
}
