"use client";

import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { Arrow, Label } from "./ui";

export const StorySection = () => {
  const { t } = useTranslation();
  const words = t.story.statement.split(" ");

  return (
    <section className="story" id="story">
      <div className="wrap">
        <Label n="01">{t.story.label}</Label>
        {/* each word lights up as the sentence scrolls through the screen */}
        <p className="statement" data-words="">
          {words.map((w, i) => (
            <span className="w" key={i}>
              {w}{" "}
            </span>
          ))}
        </p>
        <div className="room">
          <div className="room-ph" data-clip="">
            <Image
              src="/assets/indoor_grec.jpg"
              alt={t.story.roomAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "50% 70%" }}
            />
          </div>
          <div className="room-txt" data-up="">
            <div className="label">{t.story.roomLabel}</div>
            <p>{t.story.room}</p>
            <a className="link-arrow" href="#visit">
              {t.story.roomLink} <Arrow size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
