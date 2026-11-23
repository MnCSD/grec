"use client";

import Image from "next/image";
import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { lockScroll } from "./smooth-scroll";

export type Dish = {
  src: string;
  name: string;
  description?: string;
  price?: string;
  category?: string;
};

const DishContext = createContext<(dish: Dish) => void>(() => {});
export const useOpenDish = () => useContext(DishContext);

export const DishModalProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation();
  const [dish, setDish] = useState<Dish | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const open = useCallback((d: Dish) => {
    opener.current = document.activeElement as HTMLElement | null;
    setDish(d);
  }, []);

  const close = useCallback(() => {
    setDish(null);
    opener.current?.focus();
  }, []);

  useEffect(() => {
    if (!dish) return;
    lockScroll(true);
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [dish, close]);

  return (
    <DishContext.Provider value={open}>
      {children}
      {dish && (
        <div className="modal" onClick={close}>
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dish-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button ref={closeBtn} type="button" className="modal-close" aria-label={t.common.close} onClick={close}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="modal-ph">
              <Image src={dish.src} alt={dish.name} fill sizes="(max-width: 760px) 100vw, 520px" />
            </div>
            <div className="modal-txt">
              {dish.category && <div className="label">{dish.category}</div>}
              <h3 id="dish-title">{dish.name}</h3>
              {dish.description && <p>{dish.description}</p>}
              {dish.price && <div className="price">{dish.price}</div>}
            </div>
          </div>
        </div>
      )}
    </DishContext.Provider>
  );
};
