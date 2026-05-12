import { Footer } from "./features/footer/Footer";
import { Navbar } from "./features/header/Navbar";
import { HeroSection } from "./features/hero/HeroSection";
import { O2PlantsSection } from "./features/O2-section/O2PlantsSection";
import { TestimonialSection } from "./features/testimonials/TestimonialSection";
import { TopSelling } from "./features/top-selling/TopSelling";
import { TrendyPlants } from "./features/trendy-plants/TrendyPlants";

export default function App() {
  return (
    <main className="max-w-[1680px] mx-auto min-h-screen relative overflow-x-hidden">
      <div className="p-6 md:p-8 lg:p-12 min-[1440px]:px-20! min-[740px]:pt-2! ">
        <Navbar />
        <HeroSection />
        <TrendyPlants />
        <TopSelling />
        <TestimonialSection />
        <O2PlantsSection />
        <Footer />
      </div>
    </main>
  );
}

/**
 * M 145 13 C 127 4 123 1 106 0 C 38 0 0 37 1 110 L -1 516 C 0 605 73 644 164 644 L 342 645 C 461 645 512 605 512 512 L 512 110 C 512 36 486 0 405 0 L 297 1 C 317 39 194 43 167 24
 *
 */
