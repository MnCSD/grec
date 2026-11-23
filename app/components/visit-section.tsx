"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { siteInfo } from "../site-info";
import { ButtonArrow, Label, Lines } from "./ui";

export const VisitSection = () => {
  const { t, language } = useTranslation();
  const hours = siteInfo.hours[language];

  return (
    <section className="visit" id="visit">
      <div className="wrap">
        <div className="visit-grid">
          <div className="visit-txt">
            <Label n="06">{t.visit.label}</Label>
            <Lines className="h2" parts={t.visit.title} />
            <p className="lead" data-up="">
              {t.visit.lead}
            </p>
            <dl className="info" data-up="">
              <div>
                <dt>{t.visit.address}</dt>
                <dd>
                  <a className="ul" href={siteInfo.mapUrl} target="_blank" rel="noopener noreferrer">
                    {siteInfo.address[language]}
                    <br />
                    {siteInfo.city[language]}
                  </a>
                </dd>
              </div>
              {hours && (
                <div>
                  <dt>{t.visit.hours}</dt>
                  <dd style={{ whiteSpace: "pre-line" }}>{hours}</dd>
                </div>
              )}
              <div>
                <dt>{t.visit.phone}</dt>
                <dd>
                  <a className="ul" href={`tel:${siteInfo.phone.tel}`}>
                    {siteInfo.phone.display}
                  </a>
                </dd>
              </div>
              {siteInfo.instagram && (
                <div>
                  <dt>{t.visit.instagram}</dt>
                  <dd>
                    <a
                      className="ul"
                      href={`https://www.instagram.com/${siteInfo.instagram}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{siteInfo.instagram}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
            <a className="btn light" href={siteInfo.mapUrl} target="_blank" rel="noopener noreferrer" data-up="">
              {t.visit.directions}
              <ButtonArrow />
            </a>
          </div>
          <div className="visit-ph">
            <div className="arch" data-clip="">
              <Image
                src="/assets/view_grec.jpg"
                alt={t.visit.photoAlt}
                fill
                sizes="(max-width: 1023px) 90vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
