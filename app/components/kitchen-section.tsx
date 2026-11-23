"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { getMenu } from "../lib/menu-data";
import { menuTitle } from "../lib/menu-titles";
import { useOpenDish } from "./dish-modal";
import { Arrow, Label, Lines } from "./ui";

/** The dishes that have a photograph, straight from the menu data. */
export const KitchenSection = () => {
  const { t, language } = useTranslation();
  const openDish = useOpenDish();
  const dishes = getMenu("food", language)
    .flatMap((c) => c.items.filter((i) => i.image).map((i) => ({ ...i, category: menuTitle(c.title) })))
    .reverse() // the feta first, as in the design
    .slice(0, 2);

  return (
    <section className="kitchen" id="kitchen">
      <div className="wrap">
        <div className="head">
          <div>
            <Label n="04">{t.kitchen.label}</Label>
            <Lines className="h2" parts={t.kitchen.title} />
          </div>
          <div className="head-side" data-up="">
            <p>{t.kitchen.lead}</p>
            <a className="link-arrow" href="#menu">
              {t.kitchen.link} <Arrow size={18} />
            </a>
          </div>
        </div>
        <div className="dishes">
          {dishes.map((d, i) => (
            <article className="dish" key={d.name} data-parallax={i === 1 ? "-0.12" : undefined}>
              <button
                type="button"
                className="dish-ph"
                data-clip=""
                aria-label={`${t.kitchen.view}: ${d.name}`}
                onClick={() =>
                  openDish({ src: d.image!, name: d.name, description: d.description, price: d.price, category: d.category })
                }
              >
                <Image src={d.image!} alt={d.name} fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <span className="view" aria-hidden="true">
                  {t.kitchen.view}
                </span>
              </button>
              <div className="dish-meta">
                <div>
                  <div className="label">{d.category}</div>
                  <h3>{d.name}</h3>
                </div>
                <span className="price">{d.price}</span>
              </div>
              {d.description && <p>{d.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
