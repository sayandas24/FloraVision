import O2PlantsSectionCard from "./O2PlantsSectionCard";

export const O2PlantsSection = () => {
  return (
    <section className="px-0 min-[1200px]:px-10">
      <div className="" />

      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold text-center 
      my-[5rem] md:my-[8rem] lg:my-[10rem] xl:my-[12rem] 2xl:my-[15rem]
      "
      >
        <span className="bracket-box">Our Best o2</span>
      </h2>

      <O2PlantsSectionCard />

      {/* Tripple Dots */}
      <div className="flex justify-center items-center gap-[8px] my-[5rem] ">
        <div className="w-5 h-1.5 bg-white/75 rounded-full" />
        <div className="w-1.5 h-1.5 bg-white/75 rounded-full" />
        <div className="w-1.5 h-1.5 bg-white/75 rounded-full" />
      </div>
    </section>
  );
};
