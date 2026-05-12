import { Play } from "lucide-react";

export const HeroTitle = () => {
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
