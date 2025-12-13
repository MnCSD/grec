"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { LanguageSelection } from "./language-selection";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-3 items-center h-14 sm:h-16 px-4 sm:px-6 md:px-8 lg:px-10 relative z-50">
        {/* Left Section - Mobile: Hamburger, Desktop: Navigation */}
        <div className="flex items-center justify-start">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-olive transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-olive transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-olive transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Desktop Navigation - Left */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 md:gap-4">
            <Link
              href="#menu"
              className="text-olive text-xs sm:text-sm md:text-[14px] font-medium whitespace-nowrap hover:opacity-70 transition-opacity"
            >
              Menu
            </Link>
            <span className="text-olive font-bold opacity-30">·</span>
            <Link
              href="#about"
              className="text-olive text-xs sm:text-sm md:text-[14px] font-medium whitespace-nowrap hover:opacity-70 transition-opacity"
            >
              About
            </Link>
          </div>
        </div>

        {/* Center Section - Logo (Always Centered) */}
        <div className="flex items-center justify-center">
          <div className="mt-2 sm:mt-4">
            <Image
              src={"/assets/grec_logo.png"}
              alt="Logo"
              width={100}
              height={40}
              className="w-16 h-auto sm:w-20 md:w-24 lg:w-[100px]"
            />
          </div>
        </div>

        {/* Right Section - Mobile: Language, Desktop: Navigation */}
        <div className="flex items-center justify-end">
          {/* Desktop Navigation - Right */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 md:gap-4">
            <Link
              href="#contact"
              className="text-olive text-xs sm:text-sm md:text-[14px] font-medium whitespace-nowrap hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
            <span className="text-olive font-bold opacity-30">·</span>
            <LanguageSelection />
          </div>

          {/* Language Selection - Mobile Only (when menu is closed) */}
          {!isMenuOpen && (
            <div className="sm:hidden">
              <LanguageSelection />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-sand z-50 sm:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-6 sm:pt-20 px-6">
          {/* Logo */}
          <div className="flex justify-center mb-8 pb-6 border-b border-olive/20">
            <Image
              src={"/assets/grec_logo.png"}
              alt="Logo"
              width={100}
              height={40}
              className="w-24 h-auto"
            />
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-6">
            <Link
              href="#menu"
              onClick={handleLinkClick}
              className="text-olive text-xl font-medium py-3 border-b border-olive/20 hover:text-brick transition-colors duration-200 transform hover:translate-x-2"
            >
              Menu
            </Link>
            <Link
              href="#about"
              onClick={handleLinkClick}
              className="text-olive text-xl font-medium py-3 border-b border-olive/20 hover:text-brick transition-colors duration-200 transform hover:translate-x-2"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="text-olive text-xl font-medium py-3 border-b border-olive/20 hover:text-brick transition-colors duration-200 transform hover:translate-x-2"
            >
              Contact
            </Link>
          </nav>

          {/* Language Selection in Menu */}
          <div className="mt-8 pt-6">
            <div className="text-olive/70 text-sm mb-3">Language</div>
            <LanguageSelection />
          </div>
        </div>
      </div>
    </>
  );
};
