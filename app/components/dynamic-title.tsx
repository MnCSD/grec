"use client";

import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";

export const DynamicTitle = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t.site.title;
  }, [t.site.title]);

  return null;
};
