"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage, type Language } from "../contexts/language-context";
import { siteInfo, type Video } from "../site-info";
import { Label, Lines } from "./ui";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/gsap";

const TABS: { value: Language; label: string }[] = [
  { value: "en", label: "English" },
  { value: "gr", label: "Ελληνικά" },
  { value: "tr", label: "Türkçe" },
];
const TAG: Record<Language, string> = { en: "English", gr: "Ελληνικά", tr: "Türkçe" };

const isFile = (src: string) => /^(\/|https?:)/.test(src);

const VideoCard = ({ video, playing, muted, onToggle, onMute }: {
  video: Video;
  playing: boolean;
  muted: boolean;
  onToggle: () => void;
  onMute: () => void;
}) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLVideoElement>(null);
  const youtube = video.src && !isFile(video.src);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = muted;
    if (playing) el.play().catch(() => {});
    else el.pause();
  }, [playing, muted, video.src]);

  return (
    <div className="vid">
      <div className={`vid-frame ${playing ? "" : "is-paused"}`}>
        {youtube ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.src}?autoplay=1&mute=1&loop=1&playlist=${video.src}&controls=0&playsinline=1&rel=0`}
            title={t.sessions.videos[video.key]}
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="lazy"
          />
        ) : video.src ? (
          <video
            ref={ref}
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ objectPosition: video.focus }}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="poster" src={video.poster} alt="" style={{ objectPosition: video.focus }} />
        )}
        <div className="vid-shade" />
        {!youtube && (
          <>
            <div className="now" aria-live="polite">
              <span className="eq" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
              {playing ? t.sessions.playing : t.sessions.paused}
            </div>
            <button
              type="button"
              className="vid-play"
              aria-label={playing ? t.sessions.pause : t.sessions.play}
              onClick={onToggle}
            >
              {playing ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              )}
            </button>
          </>
        )}
        <div className="vid-cap">
          <div>
            <div className="tag">{TAG[video.key]}</div>
            <h3 lang={video.key === "gr" ? "el" : video.key}>{t.sessions.videos[video.key]}</h3>
          </div>
          {!youtube && (
            <button
              type="button"
              className="mute"
              aria-label={muted ? t.sessions.unmute : t.sessions.mute}
              aria-pressed={!muted}
              onClick={onMute}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 9h4l5-4v14l-5-4H4z" />
                {muted ? <path d="M17 9l4 6M21 9l-4 6" /> : <path d="M17 8.5a5 5 0 010 7M19.5 6a8.5 8.5 0 010 12" />}
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const SessionsSection = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const root = useRef<HTMLElement>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [muted, setMuted] = useState(true);
  const videos = siteInfo.videos[language];
  const idx = TABS.findIndex((tab) => tab.value === language);

  // Play only while the section is on screen
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const playing = inView && !userPaused;

  // A new language brings its videos in from below
  const first = useRef(true);
  useGSAP(
    () => {
      if (first.current) {
        first.current = false;
        return;
      }
      if (prefersReducedMotion()) return;
      gsap.from(".vid", { y: 40, autoAlpha: 0, duration: 0.9, stagger: 0.12, ease: "expo.out" });
    },
    { scope: root, dependencies: [language] }
  );

  return (
    <section className="sessions" id="sessions" ref={root}>
      <div className="wrap">
        <div className="head">
          <div>
            <Label n="03">{t.sessions.label}</Label>
            <Lines className="h2" parts={t.sessions.title} />
          </div>
          <div className="head-side" data-up="">
            <p>{t.sessions.note}</p>
            <div className="seg seg--dark" role="tablist" aria-label={t.sessions.tabs}>
              <span
                className="knob"
                aria-hidden="true"
                style={{ width: `calc(${100 / TABS.length}% - 3.4px)`, transform: `translateX(${idx * 100}%)` }}
              />
              {TABS.map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  role="tab"
                  aria-selected={language === tab.value}
                  aria-controls="session-videos"
                  onClick={() => setLanguage(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div id="session-videos" role="tabpanel" className={`vids ${videos.length > 1 ? "two" : ""}`} data-vids="">
          {videos.map((v) => (
            <VideoCard
              key={`${language}-${v.key}`}
              video={v}
              playing={playing}
              muted={muted}
              onToggle={() => setUserPaused((p) => !p)}
              onMute={() => setMuted((m) => !m)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
