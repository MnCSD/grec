import Image from "next/image";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { MenuSection } from "./components/menu-section";

export default function Home() {
  return (
    <div className="bg-sand w-screen ">
      <Navbar />
      <HeroSection />
      <MenuSection />
    </div>
  );
}
