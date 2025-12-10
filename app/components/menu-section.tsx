"use client";

import { Lobster } from "next/font/google";
import React, { useState } from "react";
import { menu } from "../dishes-en";

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
            <div className="grid grid-cols-2 gap-10 py-16 px-20 w-full bg-white/40 rounded-sm backdrop-blur-sm relative">
              {menu.map((dish) => (
                <div key={dish.title} className="flex flex-col">
                  <div className="mb-6">
                    <h2
                      className={`text-3xl font-bold text-logo capitalize ${lobster.className}`}
                    >
                      {dish.title}
                    </h2>
                    <div className="w-24 h-1 bg-brick mt-3 rounded-full"></div>
                  </div>

                  <div className="flex flex-col">
                    {dish.items.map((item, itemIndex) => (
                      <div
                        key={item.name}
                        className={`flex items-start justify-between gap-4 py-3 ${
                          itemIndex !== dish.items.length - 1
                            ? "border-b border-wood-light/30"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col flex-1">
                          <span className="text-wood-dark font-bold text-medium mb-0.5">
                            {item.name}
                          </span>
                          {item.description && (
                            <span className="text-wood-dark/80 font-light text-sm leading-relaxed">
                              {item.description}
                            </span>
                          )}
                        </div>
                        <span className="text-brick font-bold text-medium whitespace-nowrap mt-0.5">
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

          {/* Back Side */}
          <div className="absolute top-0 left-0 w-full backface-hidden [transform:rotateY(180deg)]">
            <div className="grid grid-cols-2 gap-10 py-16 px-20 w-full bg-white/40 rounded-sm backdrop-blur-sm relative">
              <div className="col-span-2 text-center">
                <h2
                  className={`text-5xl font-bold text-logo capitalize mb-8 ${lobster.className}`}
                >
                  About Our Menu
                </h2>
                <p className="text-wood-dark text-lg leading-relaxed max-w-4xl mx-auto">
                  All our dishes are prepared with authentic Greek recipes,
                  using fresh ingredients sourced locally and from Greece. We
                  pride ourselves on bringing traditional flavors to your table
                  with a modern touch.
                </p>
              </div>

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
