"use client";

import { LanguageProvider } from "./contexts/language-context";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

