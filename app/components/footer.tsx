"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/language-context";
import { siteInfo } from "../site-info";
import { scrollToId } from "./smooth-scroll";

export const Footer = () => {
  const { t, language } = useTranslation();
  const { setLanguage } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <p className="tag" data-up="">
            {t.footer.tag}
          </p>
          <div className="foot-col">
            <div className="label">{t.footer.explore}</div>
            <a className="ul" href="#menu">{t.navbar.menu}</a>
            <a className="ul" href="#music">{t.navbar.music}</a>
            <a className="ul" href="#story">{t.navbar.story}</a>
            <a className="ul" href="#visit">{t.navbar.visit}</a>
          </div>
          <div className="foot-col">
            <div className="label">{t.footer.language}</div>
            <button type="button" className="ul" lang="en" onClick={() => setLanguage("en")}>English</button>
            <button type="button" className="ul" lang="el" onClick={() => setLanguage("gr")}>Ελληνικά</button>
            <button type="button" className="ul" lang="tr" onClick={() => setLanguage("tr")}>Türkçe</button>
          </div>
          <div className="foot-col">
            <div className="label">{t.footer.follow}</div>
            <a className="ul" href={siteInfo.mapUrl} target="_blank" rel="noopener noreferrer">
              {siteInfo.address[language]}
            </a>
            <a className="ul" href={`tel:${siteInfo.phone.tel}`}>{siteInfo.phone.display}</a>
            {siteInfo.instagram && (
              <a className="ul" href={`https://www.instagram.com/${siteInfo.instagram}/`} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            )}
            <button type="button" className="ul" onClick={() => scrollToId("top")}>
              {t.footer.top} ↑
            </button>
          </div>
        </div>
      </div>
      <p className="wordmark" aria-hidden="true" data-wordmark="">
        <span>g</span>
        <span>r</span>
        <span>e</span>
        <span>c</span>
      </p>
      <div className="wrap">
        <div className="legal">
          <span>
            © {year} Grec · {siteInfo.address[language]}, {siteInfo.city[language]}
          </span>
          <span>{t.footer.allergies}</span>
        </div>
      </div>
    </footer>
  );
};
