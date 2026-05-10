import { Play } from "lucide-react";
import HeroBanner from "./HeroBanner";
import plantImage1 from "../../assets/plants/plant-image1.png";
import { HeroReview } from "./HeroReview";

const HeroSection = () => {
  return (
    <section className="py-20">
      <HeroBanner />

      <div className="flex justify-between py-0">
        <div className="flex flex-col justify-between pt-[6rem] gap-[15rem]">
          <HeroText />

          <HeroReview />
        </div>

        {/* left side plant */}
        <section>
          <HeroPlant />
        </section>
      </div>
    </section>
  );
};
export default HeroSection;

const HeroText = () => {
  return (
    <section className="w-min space-y-3 opacity-75">
      <div className="text-[118px] font-semibold whitespace-nowrap leading-[0.80]">
        Earth's Exhale
      </div>
      <div className="text-[23px] font-medium w-full overflow-hidden">
        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
        environment and its essential role in sustaining life.
      </div>
      {/* Buttons */}
      <div className="flex gap-5 items-center">
        <button className="text-[28px] rounded-[12px] p-3 border-2 px-14">
          Buy Now
        </button>
        <div className="rounded-full h-full px-4 gap-5 aspect-square border-3 flex justify-center items-center">
          <Play fill="white" size={28} />
        </div>{" "}
        <span className="whitespace-nowrap text-[25px] font-indie-flower">
          Live Demo...
        </span>
      </div>
    </section>
  );
};

const HeroPlant = () => {
  return (
    <section className="relative w-[512px]">
      <img
        className="absolute top-[-202px] left-1/2 -translate-x-1/2 w-[570px] h-[570px] z-20 pointer-events-none object-cover"
        src={plantImage1}
        alt="Hero plant image"
        style={{
          filter: `
                 drop-shadow(0px 20px 40px rgba(0,0,0,0.4))
              `,
        }}
      />

      {/* Card */}
      <div
        className="relative w-[512px] curvy-card h-[644px] blur-style"
      >
        <div className="w-full p-20 flex flex-col space-y-3 absolute bottom-0 left-0 right-0">
          <div>
            <p className="text-white/75 text-[26px]">Indoor Plant</p>
            <div className="flex items-center justify-between">
              <h2 className="text-white/75 text-[38px] font-normal">
                Aglaonema plant
              </h2>
              <span className="text-white/75 text-2xl">›</span>
            </div>
          </div>
          <button className="text-[28px] rounded-[12px] text-white/75 p-3 border-2 px-14 w-fit">
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
  );
};
