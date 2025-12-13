"use client";

import { LanguageProvider } from "./contexts/language-context";
import { DynamicTitle } from "./components/dynamic-title";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageProvider>
      <DynamicTitle />
      {children}
    </LanguageProvider>
  );
};

