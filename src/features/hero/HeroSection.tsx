import { ChevronRight, Play } from "lucide-react";
import HeroBanner from "./HeroBanner";
import plantImage1 from "../../assets/plants/plant-image1.png";
import { HeroReview } from "./HeroReview";
import { useDynamicScale } from "../../hooks/useDynamicScale";

export const HeroSection = () => {
  return (
    <section className="py-6 md:py-10 lg:py-16 xl:py-20">
      <HeroBanner />

      <div className="flex flex-col min-[820px]:flex-row! justify-between py-0 gap-8 lg:gap-4 items-centers lg:items-stretch">
        <div className="flex flex-col justify-between pt-4 md:pt-8 lg:pt-[6rem] gap-6 md:gap-[8rem] lg:gap-[12rem] text-left items-center md:items-start">
          <HeroText />
          <div className="min-[820px]:block hidden">
            <HeroReview />
          </div>
        </div>

        {/* left side plant */}
        <section className="flex max-[600px]:flex-col gap-5 justify-center w-full lg:w-auto">
          <HeroPlant />
          <div className="max-[820px]:block hidden">
            <HeroReview />
          </div>
        </section>
      </div>
    </section>
  );
};

const HeroText = () => {
  return (
    <section className="w-full lg:w-min space-y-3 opacity-75">
      <div className="text-4xl min-[780px]:text-5xl! min-[960px]:text-7xl! min-[1180px]:text-8xl! min-[1440px]:text-[118px]! font-semibold whitespace-normal lg:whitespace-nowrap leading-tight lg:leading-[0.80]">
        Earth's Exhale
      </div>
      <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[23px] max-[960px]:leading-[1.3]! font-medium w-full overflow-hidden">
        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
        environment and its essential role in sustaining life.
      </div>
      {/* Buttons */}
      <div className="flex gap-3 sm:gap-5 items-center flex-wrap ">
        <button className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] rounded-[12px] p-2 sm:p-3 border-2 px-6 sm:px-8 lg:px-14 duration-300 hover:bg-white hover:text-[#1a2e1a] active:scale-95 cursor-pointer">
          Buy Now
        </button>
        <div className="rounded-full h-full px-3 sm:px-4 gap-5 aspect-square border-3 flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-90">
          <Play fill="white" size={28} />
        </div>{" "}
        <span className="whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-[25px] font-indie-flower">
          Live Demo...
        </span>
      </div>
    </section>
  );
};

const HeroPlant = () => {
  const { wrapperRef, innerRef } = useDynamicScale(512, 644, 600);

  return (
    <div
      className="hero-card-wrapper max-[820px]:my-14! max-[600px]:my-6!"
      ref={wrapperRef}
    >
      <section
        className="hero-card-inner relative w-[512px] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01]"
        ref={innerRef}
      >
        <img
          className="absolute top-[-202px] left-1/2 -translate-x-1/2 w-[570px] h-[570px] z-20 pointer-events-none object-cover"
          src={plantImage1}
          alt="Hero plant image"
          style={{
            filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.4))",
          }}
        />

        {/* Card */}
        <div className="relative w-[512px] curvy-card h-[644px] blur-style">
          <div className="w-full p-20 flex flex-col space-y-3 absolute bottom-0 left-0 right-0">
            <div>
              <p className="text-white/75 text-[26px]">Indoor Plant</p>
              <div className="flex items-center justify-between">
                <h2 className="text-white/75 text-[38px] font-normal">
                  Aglaonema plant
                </h2>
                <span className="text-white/75 text-4xl cursor-pointer ">
                  <ChevronRight className="cursor-pointer hover:text-white transition-colors active:scale-90"/>
                </span>
              </div>
            </div>
            <button className="text-[28px] rounded-[12px] text-white/75 p-3 border-2 px-14 w-fit transition-all duration-300 hover:bg-white hover:text-black active:scale-95 cursor-pointer">
              Buy Now
            </button>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="w-5 h-1.5 rounded-full bg-white" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
          </div>
        </div>

        {/* SVG border only */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 512 644"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 81 11 C 70 9 57 5 46 5 C 14 5 0 17 0 57 L 0 604 C 0 634 11 644 39 644 L 470 644 C 503 644 510 633 510 602 L 508 51 C 508 20 495 5 469 4 C 442 4 415 15 391 21 L 358 30 C 291 46 224 51 135 27 C 121 24 107 19 94 15"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
          />
        </svg>
      </section>
    </div>
  );
};
