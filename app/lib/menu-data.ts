import type { Language } from "../contexts/language-context";
import { menu as menuEn } from "../dishes-en";
import { menu as menuGr } from "../dishes-gr";
import { menu as menuTr } from "../dishes-tr";
import { drinksMenu as drinksEn } from "../drinks-en";
import { drinksMenu as drinksGr } from "../drinks-gr";
import { drinksMenu as drinksTr } from "../drinks-tr";

export const food = { en: menuEn, gr: menuGr, tr: menuTr } as const;
export const drinks = { en: drinksEn, gr: drinksGr, tr: drinksTr } as const;

export type MenuItem = { name: string; description?: string; price: string; image?: string };
export type MenuCategory = { title: string; items: MenuItem[] };

export const getMenu = (tab: "food" | "drinks", lang: Language): MenuCategory[] =>
  (tab === "food" ? food : drinks)[lang];
