"use client";

import { Lobster } from "next/font/google";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { menu as menuEn } from "../dishes-en";
import { drinksMenu as drinksMenuEn } from "../drinks-en";
import { drinksMenu as drinksMenuTr } from "../drinks-tr";
import { drinksMenu as drinksMenuGr } from "../drinks-gr";
import { menu as menuGr } from "../dishes-gr";
import { menu as menuTr } from "../dishes-tr";
import { useTranslation } from "../hooks/useTranslation";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

export const MenuSection = () => {
  const { t, language } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  // Select menu based on language
  const menu = language === "tr" ? menuTr : language === "gr" ? menuGr : menuEn;
  const drinksMenu =
    language === "tr"
      ? drinksMenuTr
      : language === "gr"
        ? drinksMenuGr
        : drinksMenuEn;
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    name: string;
    description?: string;
  } | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <div
      id="menu"
      className="text-black bg-sand flex flex-col items-center mt-10 sm:mt-20 pb-10 sm:pb-20 px-4 sm:px-6"
    >
      <h1
        className={`text-5xl sm:text-7xl md:text-9xl lg:text-[150px] font-bold text-logo capitalize mb-8 sm:mb-12 lg:mb-16 ${lobster.className}`}
      >
        {t.menu.title}
      </h1>

      <div className="perspective-[2000px] w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative">
        <div
          className={`relative transition-transform duration-1000 transform-style-3d ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front Side */}
          <div className="backface-hidden">
            <div className="columns-1 md:columns-2 gap-x-6 md:gap-x-12 py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 w-full bg-white/40 rounded-sm backdrop-blur-sm relative h-auto md:h-[1200px] lg:h-[1500px] xl:h-[1800px] overflow-visible md:overflow-y-auto">
              {menu.map((dish) => (
                <div
                  key={dish.title}
                  className="break-inside-avoid mb-6 sm:mb-8"
                >
                  <div className="mb-3 sm:mb-4">
                    <h2
                      className={`text-xl sm:text-2xl md:text-3xl font-bold text-logo capitalize ${lobster.className}`}
                    >
                      {dish.title}
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-brick mt-2 sm:mt-3 rounded-full"></div>
                  </div>

                  <div className="flex flex-col space-y-2 sm:space-y-3">
                    {dish.items.map((item) => (
                      <div
                        key={item.name}
                        className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 ${
                          item.image
                            ? "cursor-pointer group/item hover:opacity-90 transition-all duration-200"
                            : ""
                        }`}
                        onClick={() => {
                          if (item.image) {
                            setSelectedImage({
                              src: item.image,
                              name: item.name,
                              description: item.description,
                            });
                          }
                        }}
                      >
                        <div className="flex flex-col flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <span className="text-wood-dark font-semibold text-sm sm:text-base leading-tight break-words">
                              {item.name}
                            </span>
                            {item.image && (
                              <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-brick/10 hover:bg-brick/20 border border-brick/30 rounded-full text-brick text-[9px] sm:text-[10px] font-medium transition-all duration-200 group-hover/item:scale-110 group-hover/item:shadow-sm flex-shrink-0">
                                <svg
                                  className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <span className="hidden sm:inline">
                                  {t.common.view}
                                </span>
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <span className="text-wood-dark/70 font-light text-xs sm:text-sm leading-snug mt-0.5 sm:mt-1">
                              {item.description}
                            </span>
                          )}
                        </div>
                        <span className="text-wood-dark font-bold text-sm sm:text-base whitespace-nowrap flex-shrink-0 sm:self-start">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Page Curl - Front */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 cursor-pointer group overflow-hidden z-10"
                title={t.menu.title}
              >
                {/* Shadow under curl */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] sm:border-l-[48px] border-l-transparent border-b-[40px] sm:border-b-[48px] border-b-black/20" />

                {/* Back of page (darker) */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[38px] sm:border-l-[45px] border-l-transparent border-b-[38px] sm:border-b-[45px] border-b-wood-dark group-hover:border-b-wood transition-all duration-300" />

                {/* Curl fold */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[38px] sm:border-l-[45px] border-l-sand border-b-[38px] sm:border-b-[45px] border-b-transparent" />

                {/* Highlight on curl */}
                <div className="absolute bottom-1 right-1 w-0 h-0 border-l-[12px] sm:border-l-[15px] border-l-white/30 border-b-[12px] sm:border-b-[15px] border-b-transparent" />
              </div>
            </div>
          </div>

          {/* Back Side - Drinks Menu */}
          <div className="absolute top-0 left-0 w-full backface-hidden [transform:rotateY(180deg)]">
            <div className="columns-1 md:columns-2 gap-x-6 md:gap-x-12 py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 w-full bg-white/40 rounded-sm backdrop-blur-sm relative h-auto md:h-[1200px] lg:h-[1500px] xl:h-[1800px] overflow-visible md:overflow-y-auto">
              {drinksMenu.map((drink) => (
                <div
                  key={drink.title}
                  className="break-inside-avoid mb-6 sm:mb-8"
                >
                  <div className="mb-3 sm:mb-4">
                    <h2
                      className={`text-xl sm:text-2xl md:text-3xl font-bold text-logo capitalize ${lobster.className}`}
                    >
                      {drink.title}
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-brick mt-2 sm:mt-3 rounded-full"></div>
                  </div>

                  <div className="flex flex-col space-y-2 sm:space-y-3">
                    {drink.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4"
                      >
                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="text-wood-dark font-semibold text-sm sm:text-base leading-tight break-words">
                            {item.name}
                          </span>
                          {item.description && (
                            <span className="text-wood-dark/70 font-light text-xs sm:text-sm leading-snug mt-0.5 sm:mt-1">
                              {item.description}
                            </span>
                          )}
                        </div>
                        <span className="text-wood-dark font-bold text-sm sm:text-base whitespace-nowrap flex-shrink-0 sm:self-start">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Page Curl - Back */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 cursor-pointer group overflow-hidden z-10"
                title={t.menu.title}
              >
                {/* Shadow under curl */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] sm:border-l-[48px] border-l-transparent border-b-[40px] sm:border-b-[48px] border-b-black/20" />

                {/* Back of page (darker) */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[38px] sm:border-l-[45px] border-l-transparent border-b-[38px] sm:border-b-[45px] border-b-wood-dark group-hover:border-b-wood transition-all duration-300" />

                {/* Curl fold */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[38px] sm:border-l-[45px] border-l-sand border-b-[38px] sm:border-b-[45px] border-b-transparent" />

                {/* Highlight on curl */}
                <div className="absolute bottom-1 right-1 w-0 h-0 border-l-[12px] sm:border-l-[15px] border-l-white/30 border-b-[12px] sm:border-b-[15px] border-b-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal/Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] bg-white rounded-lg sm:rounded-lg shadow-2xl overflow-hidden animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-gradient-to-br from-sand to-stone-light overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-[1]"></div>
              <div className="animate-image-in w-full h-full relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                  quality={95}
                />
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover:rotate-90 group cursor-pointer"
              aria-label={t.common.close}
              type="button"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-wood-dark group-hover:text-brick transition-colors duration-200 pointer-events-none"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Image Info */}
            <div className="bg-white p-4 sm:p-6 border-t-4 border-brick">
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-bold text-logo mb-2 animate-text-in-1 ${lobster.className}`}
              >
                {selectedImage.name}
              </h3>
              {selectedImage.description && (
                <p className="text-wood-dark/80 text-sm sm:text-base leading-relaxed animate-text-in-2">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
