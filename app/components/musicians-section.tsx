"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { Label, Lines } from "./ui";

const MUSICIANS = [
  {
    en: "Makis Gkotsikas",
    gr: "Μάκης Γκότσικας",
    role: "bouzouki",
    photo: "/assets/music/makis.jpg",
  },
  {
    en: "Eleni Boutsi",
    gr: "Ελένη Μπούτση",
    role: "vocals",
    photo: "/assets/music/eleni.jpg",
  },
  {
    en: "Manolis Papoulias",
    gr: "Μανώλης Παπούλιας",
    role: "guitar",
    photo: "/assets/music/manolis.jpg",
  },
] as const;

export const MusiciansSection = () => {
  const { t, language } = useTranslation();

  return (
    <section className="music" id="music">
      <div className="wrap">
        <div className="head">
          <div>
            <Label n="02">{t.music.label}</Label>
            <Lines className="h2" parts={t.music.title} />
          </div>
          <div className="head-side" data-up="">
            <p>{t.music.lead}</p>
            <div className="genres" lang="el">
              <span>Ρεμπέτικο</span>
              <span>Λαϊκό</span>
              <span>Μουχαμπέτ</span>
            </div>
          </div>
        </div>
        <div className="band">
          {MUSICIANS.map((m, i) => {
            const role = t.music.roles[m.role];
            const main = language === "gr" ? m.gr : m.en;
            const alt = language === "gr" ? m.en : m.gr;
            return (
              <a className="mus" href="#sessions" key={m.en} data-parallax={i === 1 ? "-0.08" : undefined}>
                <div className="mus-ph" data-clip="">
                  <Image src={m.photo} alt={`${main}, ${role}`} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  <span className="inst">{role}</span>
                </div>
                <h3>{main}</h3>
                <div className="alt">{alt}</div>
                <div className="role">
                  <span>{role}</span>
                  <span>0{i + 1}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
