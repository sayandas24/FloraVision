import { trendyPlants } from "../../data/plants";
import TrendyPlantCard from "./TrendyPlantCard";

const TrendyPlants = () => {
  return (
    <section className="w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold mb-10 sm:mb-14 md:mb-20 lg:mb-24 xl:mb-28 text-center ">
        <span className="bracket-box">
          Our Trendy plants
        </span>
      </h2>

      <div className="flex flex-col gap-[10rem] sm:gap-[10rem] md:gap-[12rem] lg:gap-[12rem]">
        {trendyPlants.map((plant) => (
          <TrendyPlantCard
            key={plant.id}
            plant={plant}
            imageReverse={plant.imageReverse}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendyPlants;
