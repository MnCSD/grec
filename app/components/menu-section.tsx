"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { getMenu } from "../lib/menu-data";
import { menuTitle } from "../lib/menu-titles";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "../lib/gsap";
import { useOpenDish } from "./dish-modal";
import { Label, Lines } from "./ui";
import { scrollToId } from "./smooth-scroll";

type Tab = "food" | "drinks";

const Camera = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M3 8h3l2-3h8l2 3h3v11H3z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export const MenuSection = () => {
  const { t, language } = useTranslation();
  const openDish = useOpenDish();
  const [tab, setTab] = useState<Tab>("food");
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement>(null);
  const first = useRef(true);
  const cats = getMenu(tab, language);

  useGSAP(
    () => {
      // Scroll-spy: the list on the left follows the category on screen
      const triggers = gsap.utils.toArray<HTMLElement>(".cat").map((el, i) =>
        ScrollTrigger.create({
          trigger: el,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => self.isActive && setActive(i),
        })
      );
      setActive(0);

      // Switching Food / Drinks deals the categories in again
      if (!first.current && !prefersReducedMotion()) {
        gsap.from(".cat", { y: 36, autoAlpha: 0, duration: 0.8, stagger: 0.05, ease: "expo.out" });
        gsap.from(".side a", { x: -16, autoAlpha: 0, duration: 0.6, stagger: 0.03, ease: "expo.out" });
      }
      first.current = false;
      ScrollTrigger.refresh();
      return () => triggers.forEach((tr) => tr.kill());
    },
    { scope: root, dependencies: [tab, language] }
  );

  const tabs: { value: Tab; label: string }[] = [
    { value: "food", label: t.menu.food },
    { value: "drinks", label: t.menu.drinks },
  ];
  const idx = tab === "food" ? 0 : 1;

  return (
    <section className="menu" id="menu" ref={root}>
      <div className="wrap">
        <div className="menu-head">
          <div>
            <Label n="05">{t.menu.label}</Label>
            <Lines className="h2" parts={t.menu.title} />
          </div>
          <div className="seg seg--light" role="tablist" aria-label={t.menu.label} data-up="">
            <span
              className="knob"
              aria-hidden="true"
              style={{ width: "calc(50% - 6px)", transform: `translateX(${idx * 100}%)` }}
            />
            {tabs.map((tb) => (
              <button
                key={tb.value}
                type="button"
                role="tab"
                aria-selected={tab === tb.value}
                aria-controls="menu-list"
                onClick={() => {
                  setTab(tb.value);
                  const top = document.getElementById("menu")?.getBoundingClientRect().top ?? 0;
                  if (top < 0) scrollToId("menu");
                }}
              >
                {tb.label}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-body">
          <nav className="side" aria-label={t.menu.sections}>
            {cats.map((c, i) => (
              <a key={c.title} href={`#cat-${tab}-${i}`} aria-current={active === i ? "true" : undefined}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {menuTitle(c.title)}
              </a>
            ))}
          </nav>

          <div className="cats" id="menu-list" role="tabpanel">
            {cats.map((c, i) => (
              <div className="cat" id={`cat-${tab}-${i}`} key={`${tab}-${c.title}`}>
                <h3>
                  <small>{String(i + 1).padStart(2, "0")}</small>
                  {menuTitle(c.title)}
                </h3>
                {c.items.map((item, j) => {
                  const body = (
                    <>
                      <span className="row-top">
                        <span className="row-n">
                          {item.name}
                          {item.image && (
                            <span className="cam" title={t.menu.hasPhoto}>
                              <Camera />
                            </span>
                          )}
                        </span>
                        <span className="row-p">{item.price}</span>
                      </span>
                      {item.description && <span className="row-d">{item.description}</span>}
                    </>
                  );
                  return item.image ? (
                    <button
                      type="button"
                      className="row"
                      key={j}
                      aria-label={`${item.name}, ${item.price}. ${t.menu.hasPhoto}`}
                      onClick={() =>
                        openDish({
                          src: item.image!,
                          name: item.name,
                          description: item.description,
                          price: item.price,
                          category: menuTitle(c.title),
                        })
                      }
                    >
                      {body}
                      <span className="peek" aria-hidden="true">
                        <Image src={item.image} alt="" fill sizes="150px" style={{ objectFit: "cover" }} />
                      </span>
                    </button>
                  ) : (
                    <div className="row" key={j}>
                      {body}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
