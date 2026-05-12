import HeroBanner from "./HeroBanner";
import { HeroReview } from "./HeroReview";
import { HeroTitle } from "./HeroTitle";
import { HeroPlant } from "./HeroPlant";

export const HeroSection = () => {
  return (
    <section className="py-6 md:pt-10 lg:pt-16 xl:pt-20">
      <HeroBanner />

      <div className="flex flex-col min-[820px]:flex-row! justify-between py-0 gap-8 lg:gap-4 items-centers lg:items-stretch">
        <div className="flex flex-col justify-between pt-4 md:pt-8 lg:pt-[6rem] gap-6 md:gap-[8rem] lg:gap-[12rem] text-left items-center md:items-start">
          <HeroTitle />
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
