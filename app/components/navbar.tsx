import Image from "next/image";
import React from "react";
import { LanguageSelection } from "./language-selection";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16  px-10">
      <div className="flex items-center gap-4 w-40">
        <span className="text-olive text-[14px] font-medium">Menu</span>
        <span className="text-olive font-bold opacity-30">·</span>
        <span className="text-olive text-[14px] font-medium">About</span>
      </div>
      <div className="mt-4">
        <Image
          src={"/assets/grec_logo.png"}
          alt="Logo"
          width={100}
          height={40}
        />
      </div>
      <div className="flex items-center gap-4 w-40">
        <span className="text-olive text-[14px] font-medium">Contact</span>
        <span className="text-olive font-bold opacity-30">·</span>

        <LanguageSelection />
      </div>
    </div>
  );
};
