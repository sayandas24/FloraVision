import { trendyPlants } from "../../data/plants";
import TrendyPlantCard from "./TrendyPlantCard";

const TrendyPlants = () => {
  return (
    <section className="w-full">
      <h2 className="text-[55px] font-semibold mb-28 text-center ">
        <span className="bracket-box">
          Our Trendy plants
        </span>
      </h2>

      <div className="flex flex-col gap-[12rem]">
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
