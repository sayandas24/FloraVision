import TopSellingPlantCard from "./TopSellingPlantCard";
import { topSellingPlants } from "../../data/plants";  

export const TopSelling = () => {
  return (
    <section className=""> 

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold text-center 
      my-[5rem] md:my-[8rem] lg:my-[10rem] xl:my-[12rem] 2xl:my-[15rem]
      ">
        <span className="bracket-box">Our Top Selling Plants</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-[4rem] sm:gap-y-[8rem] md:gap-y-[10rem] lg:gap-y-[12rem] xl:gap-y-[14rem] gap-x-4">
        {topSellingPlants.map((plant) => (
          <TopSellingPlantCard
            key={plant.id}
            name={plant.name}
            description={plant.description}
            image={plant.image}
            price={plant.price}
          />
        ))}
      </div>
    </section>
  );
};
 
