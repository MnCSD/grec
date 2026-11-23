// Facts about the taverna, in one place. Empty values are hidden on the page.
import type { Language } from "./contexts/language-context";

export type Video = {
  /** "gr" | "en" | "tr": which caption from the translations to show */
  key: Language;
  /**
   * The video itself. Either a file in /public (e.g. "/videos/greek-set.mp4")
   * or a YouTube video id (e.g. "dQw4w9WgXcQ"). Empty: the poster shows instead.
   */
  src: string;
  poster: string;
  /** object-position of the poster, so each frame shows a different part */
  focus: string;
};

const greekVideo: Video = {
  key: "gr",
  src: "", // TODO: the Greek set (mp4 in /public/videos or a YouTube id)
  poster: "/assets/music/band.jpg",
  focus: "50% 35%",
};
const englishVideo: Video = {
  key: "en",
  src: "", // TODO: the English set
  poster: "/assets/music/band.jpg",
  focus: "50% 30%",
};
const turkishVideo: Video = {
  key: "tr",
  src: "", // TODO: the Turkish set
  poster: "/assets/music/band.jpg",
  focus: "92% 35%",
};

export const siteInfo = {
  address: {
    en: "Aigyptou 21, Ladadika",
    gr: "Αιγύπτου 21, Λαδάδικα",
    tr: "Aigyptou 21, Ladadika",
  },
  city: { en: "Thessaloniki", gr: "Θεσσαλονίκη", tr: "Selanik" },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Aigyptou+21+Ladadika+Thessaloniki",
  phone: { display: "2316 017820", tel: "+302316017820" },
  /** e.g. "grec.ladadika" (without @). Empty hides the link. */
  instagram: "",
  /** One line per language, e.g. "Every day 13:00 to 01:00". Empty hides the row. */
  hours: { en: "", gr: "", tr: "" },
  /** The language picked decides the videos: Turkish plays Greek and Turkish together. */
  videos: {
    en: [englishVideo],
    gr: [greekVideo],
    tr: [{ ...greekVideo, focus: "12% 35%" }, turkishVideo],
  } satisfies Record<Language, Video[]>,
};
