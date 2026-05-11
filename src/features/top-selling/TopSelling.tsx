import TopSellingPlantCard from "./TopSellingPlantCard";
import { topSellingPlants } from "../../data/plants";  

const TopSelling = () => {
  return (
    <section className="">
      <div className="my-[6rem] sm:my-[8rem] md:my-[12rem] lg:my-[16rem] xl:my-[20rem]" />

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold mb-10 sm:mb-14 md:mb-20 lg:mb-24 xl:mb-28 text-center ">
        <span className="bracket-box">Our Top Selling Plants</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-[6rem] sm:gap-y-[8rem] md:gap-y-[10rem] lg:gap-y-[12rem] xl:gap-y-[14rem] gap-x-4">
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

export default TopSelling;
