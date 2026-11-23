"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "./contexts/language-context";
import { DynamicTitle } from "./components/dynamic-title";
import { SmoothScroll } from "./components/smooth-scroll";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageProvider>
      <DynamicTitle />
      <SmoothScroll />
      {children}
    </LanguageProvider>
  );
};
