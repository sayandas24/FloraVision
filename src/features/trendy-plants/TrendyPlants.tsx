import { trendyPlants } from "../../data/plants";
import TrendyPlantCard from "./TrendyPlantCard";

export const TrendyPlants = () => {
  return (
    <section className="w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold text-center
      my-[4rem]
      ">
        <span className="bracket-box">
          Our Trendy plants
        </span>
      </h2>

      <div className="flex flex-col gap-[3rem] md:gap-[5rem] min-[900px]:gap-[8rem]! min-[1000px]:gap-[9rem]!">
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
 