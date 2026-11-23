"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage, type Language } from "../contexts/language-context";
import { ButtonArrow } from "./ui";
import { lockScroll } from "./smooth-scroll";

const LANGS: { value: Language; short: string; long: string }[] = [
  { value: "en", short: "EN", long: "English" },
  { value: "gr", short: "ΕΛ", long: "Ελληνικά" },
  { value: "tr", short: "TR", long: "Türkçe" },
];

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  return (
    <div className="lang" role="group" aria-label={t.navbar.language}>
      {LANGS.map((l) => (
        <button
          key={l.value}
          type="button"
          lang={l.value === "gr" ? "el" : l.value}
          aria-label={l.long}
          aria-pressed={language === l.value}
          onClick={() => setLanguage(l.value)}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
};

export const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Border once the page moves; hide while reading down, show again on the way up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 400 && y > last + 2);
      if (y < last - 2) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    lockScroll(open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (open) lockScroll(false);
    };
  }, [open]);

  const links = [
    { href: "#menu", label: t.navbar.menu },
    { href: "#music", label: t.navbar.music },
    { href: "#story", label: t.navbar.story },
    { href: "#visit", label: t.navbar.visit },
  ];

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header
        className={`nav ${scrolled ? "is-scrolled" : ""} ${hidden && !open ? "is-hidden" : ""}`}
      >
        <div className="wrap">
          <nav className="nav-l" aria-label="Main">
            {links.map((l) => (
              <a key={l.href} className="ul" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="nav-c" href="#top" aria-label={t.navbar.home}>
            <Image
              className="logo"
              src="/assets/grec_logo.png"
              alt="Grec, Ελληνική Δημιουργική Κουζίνα"
              width={187}
              height={132}
              priority
            />
          </a>
          <div className="nav-r">
            <LanguageSwitch />
            <a className="btn" href="#menu">
              {t.navbar.cta}
              <ButtonArrow />
            </a>
            <button
              type="button"
              className="burger"
              aria-label={open ? t.navbar.closeMenu : t.navbar.openMenu}
              aria-expanded={open}
              aria-controls="sheet"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="bars" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div id="sheet" className={`sheet ${open ? "open" : ""}`} aria-hidden={!open} inert={!open}>
        {links.map((l) => (
          <a key={l.href} className="big" href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <LanguageSwitch />
        <a className="btn" href="#menu" onClick={() => setOpen(false)}>
          {t.navbar.cta}
          <ButtonArrow />
        </a>
      </div>
    </>
  );
};
