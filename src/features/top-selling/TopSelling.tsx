import TopSellingPlantCard from "./TopSellingPlantCard";
import { topSellingPlants } from "../../data/plants";  

const TopSelling = () => {
  return (
    <section className="">
      <div className="my-[20rem]" />

      <h2 className="text-[55px] font-semibold mb-28 text-center ">
        <span className="bracket-box">Our Top Selling Plants</span>
      </h2>

      <div className="grid grid-cols-3 place-items-center gap-y-[14rem]">
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
