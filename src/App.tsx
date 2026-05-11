import BestOf from "./features/best-of/BestOf";
import Footer from "./features/footer/Footer";
import Navbar from "./features/header/Navbar";
import HeroSection from "./features/hero/HeroSection";
import ReviewSection from "./features/reviews/ReviewSection";
import TopSelling from "./features/top-selling/TopSelling";
import TrendyPlants from "./features/trendy-plants/TrendyPlants";

export default function App() {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">
      
      <div className="p-6 md:p-8 lg:p-12 min-[1440px]:px-20! min-[740px]:pt-2! ">
        <Navbar />
        <HeroSection />
        <TrendyPlants />
        <TopSelling />
        <ReviewSection />
        <BestOf />
        <Footer />
      </div>
    </main>
  );
}
