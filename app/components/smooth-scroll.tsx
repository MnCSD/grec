"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";

let lenis: Lenis | null = null;

/** Stop or restart page scrolling (used by the phone menu and the dish modal). */
export const lockScroll = (locked: boolean) => {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
};

/** Smooth scroll to an element id or to the top, falling back to the browser. */
export const scrollToId = (id: string) => {
  const target = id === "top" ? 0 : document.getElementById(id);
  if (target === null) return;
  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.4 });
  } else if (target === 0) {
    window.scrollTo({ top: 0 });
  } else {
    target.scrollIntoView();
  }
};

export const SmoothScroll = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    lenis = new Lenis({
      lerp: 0.1,
      anchors: { duration: 1.4 },
    });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
};
