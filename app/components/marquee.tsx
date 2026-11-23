"use client";

import { useRef } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "../lib/gsap";
import { Star } from "./ui";

/** Endless row of words; scrolling speeds it up and turns it round. */
export const Marquee = () => {
  const { t, language } = useTranslation();
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !track.current) return;
      const loop = gsap.to(track.current, { xPercent: -50, duration: 34, ease: "none", repeat: -1 });
      let boost = 0;
      let dir = 1;
      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const v = self.getVelocity();
          dir = v < 0 ? -1 : 1;
          boost = Math.min(5, Math.abs(v) / 350);
        },
      });
      const tick = () => {
        boost *= 0.93;
        loop.timeScale(dir * (1 + boost));
      };
      gsap.ticker.add(tick);
      return () => {
        gsap.ticker.remove(tick);
        st.kill();
      };
    },
    { dependencies: [language] }
  );

  const words = [...t.marquee, ...t.marquee];
  return (
    <div className="mq" aria-hidden="true">
      <div className="mq-track" ref={track}>
        {words.map((w, i) => (
          <span className="mq-item" key={i}>
            {w}
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
};
