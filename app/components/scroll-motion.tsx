"use client";

import { useTranslation } from "../hooks/useTranslation";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/gsap";

/**
 * Page-wide scroll animations, driven by data attributes:
 *  data-lines     headline parts rise from behind a mask
 *  data-up        fades up into place
 *  data-clip      a photo frame opens from the bottom, its photo settles
 *  data-parallax  drifts at another speed (the value is the fraction of its height)
 *  data-words     each word of a statement lights up while it crosses the screen
 *  data-wordmark  the footer's big letters rise
 * Re-run on language change so the new text gets the same treatment.
 */
export const ScrollMotion = () => {
  const { language } = useTranslation();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const reveal = { start: "top 85%", once: true };

      gsap.utils.toArray<HTMLElement>("main [data-lines]").forEach((el) => {
        if (el.closest(".hero")) return; // the hero has its own entrance
        gsap.from(el.querySelectorAll(".ln > span"), {
          yPercent: 110,
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, ...reveal },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-up]").forEach((el) => {
        gsap.from(el, {
          y: 32,
          autoAlpha: 0,
          duration: 1,
          ease: "expo.out",
          clearProps: "transform,opacity,visibility", // hand hover effects back to CSS
          scrollTrigger: { trigger: el, ...reveal },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
        const img = el.querySelector("img");
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 88%", once: true } });
        tl.fromTo(
          el,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", clearProps: "clipPath" }
        );
        if (img) tl.from(img, { scale: 1.25, duration: 2, ease: "expo.out", clearProps: "transform" }, 0);
      });

      const phone = window.innerWidth < 761;
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        if (phone) return;
        const amount = parseFloat(el.dataset.parallax || "0");
        gsap.fromTo(
          el,
          { yPercent: -amount * 50 },
          {
            yPercent: amount * 50,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll(".w"),
          { opacity: 0.16 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-wordmark]").forEach((el) => {
        gsap.from(el.querySelectorAll("span"), {
          yPercent: 100,
          duration: 1.4,
          stagger: 0.07,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 95%", once: true },
        });
      });
    },
    { dependencies: [language], revertOnUpdate: true }
  );

  return null;
};
