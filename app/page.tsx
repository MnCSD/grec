import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { Marquee } from "./components/marquee";
import { StorySection } from "./components/story-section";
import { MusiciansSection } from "./components/musicians-section";
import { SessionsSection } from "./components/sessions-section";
import { KitchenSection } from "./components/kitchen-section";
import { MenuSection } from "./components/menu-section";
import { VisitSection } from "./components/visit-section";
import { Footer } from "./components/footer";
import { DishModalProvider } from "./components/dish-modal";
import { ScrollMotion } from "./components/scroll-motion";

export default function Home() {
  return (
    <DishModalProvider>
      <div id="top" />
      <Navbar />
      <main id="main">
        <HeroSection />
        <Marquee />
        <StorySection />
        <MusiciansSection />
        <SessionsSection />
        <KitchenSection />
        <MenuSection />
        <VisitSection />
      </main>
      <Footer />
      <ScrollMotion />
    </DishModalProvider>
  );
}
