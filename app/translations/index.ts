import { en } from "./en";
import { gr } from "./gr";
import { tr } from "./tr";

export const translations = {
  en,
  gr,
  tr,
};

export type TranslationKey = keyof typeof en;
