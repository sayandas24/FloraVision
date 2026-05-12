import { useDynamicScale } from "../../hooks/useDynamicScale";
import { ChevronRight, Play } from "lucide-react";
import plantImage1 from "../../assets/plants/plant-image1.png";

export const HeroPlant = () => {
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
        <div className="hero-curvy-card relative w-[512px] h-[644px] blur-style">
          <div className="w-full p-20 flex flex-col space-y-3 absolute bottom-0 left-0 right-0">
            <div>
              <p className="text-white/75 text-[26px]">Indoor Plant</p>
              <div className="flex items-center justify-between">
                <h2 className="text-white/75 text-[38px] font-normal">
                  Aglaonema plant
                </h2>
                <span className="text-white/75 text-4xl cursor-pointer ">
                  <ChevronRight className="cursor-pointer hover:text-white transition-colors active:scale-90" />
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
          viewBox="0 0 512 645"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 145 13 C 128 3 120 1 105 1 C 38 0 0 37 1 110 L -1 516 C 0 627 22 644 164 644 L 342 645 C 496 644 513 626 512 512 L 512 110 C 512 36 478 0 401 0 C 372 3 366 8 352 12 C 342 16 332 21 325 23 C 290 40 205 40 167 24"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
          />
        </svg>
      </section>
    </div>
  );
};
