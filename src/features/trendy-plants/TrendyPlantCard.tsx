import bag from "../../assets/icons/bag.png";

const TrendyPlantCard = ({ plant, imageReverse = true }) => {
  return (
    <div
      className={`
        flex flex-col min-[600px]:flex-row border border-white/15 rounded-[30px] sm:rounded-[50px] md:rounded-[80px] lg:rounded-[120px] xl:rounded-[151px] h-auto min-[900px]:h-[380px]! min-[1100px]:h-[470px]! min-[1500px]:h-[500px]! w-full blur-style overflow-visible transition-all duration-500 hover:-translate-y-2 hover:border-white/30
      `}
    >
      {imageReverse ? (
        <>
          {/* Image — always on top on mobile, left on desktop */}
          <div className="relative w-full min-[600px]:w-1/2 h-[180px] min-[600px]:h-0 lg:h-auto">
            <PlantImage plant={plant} />
          </div>

          {/* Card Contents */}
          <div className="w-full min-[600px]:w-1/2 p-4 sm:p-6 md:p-8 lg:pt-8 flex flex-col justify-center gap-3 sm:gap-4">
            <CardContent plant={plant} />
          </div>
        </>
      ) : (
        <>
          {/* Image — on top on mobile (order-first), right on desktop */}
          <div className="relative w-full min-[600px]:w-1/2 h-[180px] min-[600px]:h-auto order-first min-[600px]:order-last">
            <PlantImage plant={plant} />
          </div>

          {/* Card Contents */}
          <div className="w-full min-[600px]:w-1/2 p-4 sm:p-6 md:p-8 lg:p-20 lg:pt-20 flex flex-col justify-center gap-3 sm:gap-4">
            <CardContent plant={plant} />
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
      className="absolute pointer-events-none top-[-2rem] sm:top-[-12rem] min-[600px]:top-[-5rem]! min-[800px]:top-[-7rem]! min-[900px]:top-[-10rem]! min-[1500px]:top-[-15rem]!
      
      left-1/2 -translate-x-1/2 z-20 max-w-[220px] sm:max-w-[280px] min-[600px]:max-w-[300px]! min-[700px]:max-w-[350px]! min-[800px]:max-w-[450px]! min-[900px]:max-w-[550px]! min-[1100px]:max-w-[650px]! min-[1500px]:max-w-none!"
    />
  );
};

const CardContent = ({ plant }: any) => {
  return (
    <>
      <h3 className="text-[20px] min-[700px]:text-[20px]! min-[800px]:text-[23px]! min-[900px]:text-[27px]!  min-[1000px]:text-[32px]! min-[1200px]:text-[38px]! font-semibold text-white">
        {plant.title || "Unnamed Plant"}
      </h3>

      <p className="text-sm sm:text-base lg:text-lg xl:text-[20px] lg:font-semibold lg:text-white text-white/75">
        {plant.description || ""}
      </p>

      <p
        className="min-[800px]:text-[23px]! min-[900px]:text-[27px]!  min-[1000px]:text-[32px]! min-[1200px]:text-[38px]!
       font-semibold text-white"
      >
        {plant.price ? `Rs. ${plant.price}/-` : "Price not available"}
      </p>

      <div className="flex flex-row gap-3 mt-2 sm:mt-4 flex-wrap">
        <button className="text-base min-[800px]:text-[18px]! min-[1000px]:text-[22px]! min-[1200px]:text-[28px]! font-semibold rounded-[12px] p-2 sm:p-3 border-2 min-[800px]:px-10! min-[1200px]:px-14! w-fit transition-all duration-300 hover:bg-white hover:text-black active:scale-95 cursor-pointer">
          Explore
        </button>

        <button className="font-semibold rounded-[12px] p-2 sm:p-3 border-2 px-3 sm:px-4 transition-all duration-300 hover:bg-white active:scale-95 cursor-pointer group/bag">
          <img 
            src={bag} 
            alt="shopping bag" 
            className="h-6 min-[800px]:h-8 transition-all duration-300 group-hover/bag:[filter:invert(1)]" 
          />
        </button>
      </div>
    </>
  );
};
