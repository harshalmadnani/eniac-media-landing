import { useEffect } from "react";
import Lenis from "lenis";

// Buttery smooth scrolling, exposed on window.__lenis for router + anchor sync.
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Only run momentum scroll on devices with a precise pointer (desktop).
    // Touch devices keep native scrolling so mobile is never hijacked.
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !finePointer) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    });
    window.__lenis = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
