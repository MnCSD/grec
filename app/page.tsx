import Image from "next/image";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";

export default function Home() {
  return (
    <div className="bg-sand w-screen pb-20">
      <Navbar />
      <HeroSection />
    </div>
  );
}
