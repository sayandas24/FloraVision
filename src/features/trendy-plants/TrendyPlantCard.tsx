import bag from '../../assets/icons/bag.png'


const TrendyPlantCard = ({ plant, imageReverse = true }) => {
  return (
    <div
      className={`
        flex flex-row  border border-white/15  rounded-[151px] h-[526px] w-full blur-style
          
      `}
    >
      {imageReverse ? (
        <>
          <div className="relative w-1/2 ">
            <PlantImage plant={plant} />
          </div>

          {/* Card Contents */}
          <div className="w-1/2 p-8 flex flex-col justify-center gap-4">
            <CardContent plant={plant} />
          </div>
        </>
      ) : (
        <>
          {/* Card Contents */}
          <div className="w-1/2 p-20 flex flex-col justify-center gap-4">
            <CardContent plant={plant} />
          </div>

          <div className="relative w-1/2 ">
            <PlantImage plant={plant} />
          </div>
        </>
      )}
    </div>
  );
};

export default TrendyPlantCard;

const PlantImage = ({ plant }) => {
  return (
    <img
      src={plant.image}
      alt={plant.title || "Plant image"}
      className="absolute top-[-16rem] left-1/2 -translate-x-1/2  z-20"
    />
  );
};

const CardContent = ({ plant }: any) => {
  return (
    <>
      <h3 className="text-[38px] font-semibold text-white">
        {plant.title || "Unnamed Plant"}
      </h3>

      <p className="text-[20px] font-semibold">{plant.description || ""}</p>

      <p className="text-[38px] font-semibold text-white">
        {plant.price ? `Rs. ${plant.price}/-` : "Price not available"}
      </p>

      <div className="flex flex-row gap-3 mt-4">
        <button className="text-[28px] font-semibold rounded-[12px] p-3 border-2 px-14 w-fit">
          Explore
        </button>

        <button className=" font-semibold rounded-[12px] p-3 border-2 px-4">
          <img src={bag} alt="shopping bag" />
        </button>
      </div>
    </>
  );
};
