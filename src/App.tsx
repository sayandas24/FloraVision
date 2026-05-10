import BestOf from "./features/best-of/BestOf";
import Footer from "./features/footer/Footer";
import Navbar from "./features/header/Navbar";
import HeroSection from "./features/hero/HeroSection";
import ReviewSection from "./features/reviews/ReviewSection";
import TopSelling from "./features/top-selling/TopSelling";
import TrendyPlants from "./features/trendy-plants/TrendyPlants";

export default function App() {
  return (
    <main className="w-full min-h-screen relative">

      <div className="p-20">
        <Navbar/>
        <HeroSection />
        <TrendyPlants/>
        <TopSelling/>
        <ReviewSection/>
        <BestOf/>
        <Footer/>
      </div>
    </main>
  );
}
