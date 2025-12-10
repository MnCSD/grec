"use client";

import { Lobster } from "next/font/google";
import React, { useState } from "react";
import { menu } from "../dishes-en";
import { drinksMenu } from "../drinks-en";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

export const MenuSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      id="menu"
      className="text-black bg-sand flex flex-col items-center mt-20 pb-20"
    >
      <h1
        className={`text-[150px] font-bold text-logo capitalize mb-16 ${lobster.className}`}
      >
        Menu
      </h1>

      <div className="perspective-[2000px] w-full max-w-7xl px-20 relative">
        <div
          className={`relative transition-transform duration-1000 transform-style-3d ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front Side */}
          <div className="backface-hidden">
            <div className="columns-2 gap-x-12 py-16 px-20 w-full bg-white/40 rounded-sm backdrop-blur-sm relative h-[1800px] overflow-y-auto">
              {menu.map((dish) => (
                <div key={dish.title} className="break-inside-avoid mb-8">
                  <div className="mb-4">
                    <h2
                      className={`text-3xl font-bold text-logo capitalize ${lobster.className}`}
                    >
                      {dish.title}
                    </h2>
                    <div className="w-24 h-1 bg-brick mt-3 rounded-full"></div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    {dish.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-start justify-between gap-4"
                      >
                        <div className="flex flex-col flex-1">
                          <span className="text-wood-dark font-semibold text-base leading-tight">
                            {item.name}
                          </span>
                          {item.description && (
                            <span className="text-wood-dark/70 font-light text-sm leading-snug">
                              {item.description}
                            </span>
                          )}
                        </div>
                        <span className="text-wood-dark font-bold text-base whitespace-nowrap">
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
                className="absolute bottom-0 right-0 w-12 h-12 cursor-pointer group overflow-hidden"
                title="About Menu"
              >
                {/* Shadow under curl */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[48px] border-l-transparent border-b-[48px] border-b-black/20" />

                {/* Back of page (darker) */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[45px] border-l-transparent border-b-[45px] border-b-wood-dark group-hover:border-b-wood transition-all duration-300" />

                {/* Curl fold */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[45px] border-l-sand border-b-[45px] border-b-transparent" />

                {/* Highlight on curl */}
                <div className="absolute bottom-1 right-1 w-0 h-0 border-l-[15px] border-l-white/30 border-b-[15px] border-b-transparent" />
              </div>
            </div>
          </div>

          {/* Back Side - Drinks Menu */}
          <div className="absolute top-0 left-0 w-full backface-hidden [transform:rotateY(180deg)]">
            <div className="columns-2 gap-x-12 py-16 px-20 w-full bg-white/40 rounded-sm backdrop-blur-sm relative h-[1800px] overflow-y-auto">
              {drinksMenu.map((drink) => (
                <div key={drink.title} className="break-inside-avoid mb-8">
                  <div className="mb-4">
                    <h2
                      className={`text-3xl font-bold text-logo capitalize ${lobster.className}`}
                    >
                      {drink.title}
                    </h2>
                    <div className="w-24 h-1 bg-brick mt-3 rounded-full"></div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    {drink.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between gap-4"
                      >
                        <div className="flex flex-col flex-1">
                          <span className="text-wood-dark font-semibold text-base leading-tight">
                            {item.name}
                          </span>
                          {item.description && (
                            <span className="text-wood-dark/70 font-light text-sm leading-snug">
                              {item.description}
                            </span>
                          )}
                        </div>
                        <span className="text-wood-dark font-bold text-base whitespace-nowrap">
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
                className="absolute bottom-0 right-0 w-12 h-12 cursor-pointer group overflow-hidden"
                title="View Menu"
              >
                {/* Shadow under curl */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[48px] border-l-transparent border-b-[48px] border-b-black/20" />

                {/* Back of page (darker) */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[45px] border-l-transparent border-b-[45px] border-b-wood-dark group-hover:border-b-wood transition-all duration-300" />

                {/* Curl fold */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[45px] border-l-sand border-b-[45px] border-b-transparent" />

                {/* Highlight on curl */}
                <div className="absolute bottom-1 right-1 w-0 h-0 border-l-[15px] border-l-white/30 border-b-[15px] border-b-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
