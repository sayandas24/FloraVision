import BestOfPlantsCard from "./BestOfPlantsCard";

const BestOf = () => {
  return (
    <section className="px-0 min-[1200px]:px-10">
      <div className="my-[6rem] sm:my-[8rem] md:my-[12rem] lg:my-[16rem] xl:my-[20rem]" />
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold mb-10 sm:mb-14 md:mb-20 lg:mb-24 xl:mb-28 text-center ">
        <span className="bracket-box">Our Best o2</span>
      </h2>

     <BestOfPlantsCard/>  
    </section>
  );
};

export default BestOf;
