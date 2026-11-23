"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/gsap";
import { siteInfo } from "../site-info";
import { ButtonArrow, Lines } from "./ui";

export const HeroSection = () => {
  const { t, language } = useTranslation();
  const root = useRef<HTMLElement>(null);

  // Entrance: the headline rises line by line, the photo opens inside its arch
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".h1 .ln > span", { yPercent: 108, duration: 1.3, stagger: 0.12 })
        .fromTo(
          ".hero .arch",
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" },
          0.1
        )
        .from(".hero .arch img", { scale: 1.2, duration: 2.2, clearProps: "transform" }, 0.1)
        .from(".hero [data-fade]", { y: 20, autoAlpha: 0, duration: 1, stagger: 0.08, clearProps: "transform,opacity,visibility" }, 0.5)
        .from(".hero .badge", { scale: 0, rotate: -90, duration: 1.2 }, 0.9);

      // The photo drifts slower than the page
      gsap.to(".hero .arch img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section className="hero" ref={root}>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-txt">
            <div className="label" data-fade="">
              <b>●</b>
              <span lang="el">Μουσική ταβέρνα</span> · {t.hero.eyebrow}
            </div>
            <Lines as="h1" block className="h1" parts={t.hero.title} />
            <div data-fade="">
              <p className="lead">{t.hero.lead}</p>
              <div className="hero-cta">
                <a className="btn" href="#menu">
                  {t.hero.cta}
                  <ButtonArrow />
                </a>
                <a className="ul" href="#visit" style={{ fontWeight: 600 }}>
                  {t.hero.secondary}
                </a>
              </div>
            </div>
          </div>
          <div className="hero-ph">
            <div className="arch">
              <Image
                src="/assets/road_grec.jpg"
                alt={t.hero.photoAlt}
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 40vw"
              />
            </div>
            <div className="badge" aria-hidden="true">
              <svg className="badge-ring" viewBox="0 0 200 200">
                <defs>
                  <path
                    id="badge-circle"
                    d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                  />
                </defs>
                <text
                  fontFamily="Manrope Variable, sans-serif"
                  fontSize="15.5"
                  fontWeight="700"
                  letterSpacing="3.4"
                  fill="#3E5958"
                >
                  <textPath href="#badge-circle">ΕΛΛΗΝΙΚΗ ΔΗΜΙΟΥΡΓΙΚΗ ΚΟΥΖΙΝΑ • GREC • </textPath>
                </text>
              </svg>
              <svg width="54" height="40" viewBox="0 0 54 40" fill="none">
                <path d="M4 34C16 30 30 20 50 6" stroke="#6C7A3A" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="18" cy="24" rx="8" ry="3.4" transform="rotate(-50 18 24)" fill="#6C7A3A" />
                <ellipse cx="28" cy="15" rx="8" ry="3.4" transform="rotate(-20 28 15)" fill="#8EBFA4" />
                <ellipse cx="36" cy="21" rx="7" ry="3" transform="rotate(-60 36 21)" fill="#6C7A3A" />
                <circle cx="44" cy="12" r="3.4" fill="#5C8F74" />
              </svg>
            </div>
          </div>
        </div>
        <div className="hero-foot" data-fade="">
          <div className="scroll">
            <i />
            {t.hero.scroll}
          </div>
          <div className="where">
            {siteInfo.address[language]} · {siteInfo.city[language]}
          </div>
        </div>
      </div>
    </section>
  );
};
