import plant from "../../assets/plants/best-plant/best-plant1.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestOfPlantsCard() {
  return (
    <div
      className={`
        flex flex-col min-[600px]:flex-row border border-white/15 rounded-[30px] sm:rounded-[50px] md:rounded-[80px] lg:rounded-[92px] h-auto min-[900px]:h-auto! min-[1100px]:h-[580px]! min-[1500px]:h-[680px]! w-full blur-style p-4 sm:p-6 md:p-8 lg:p-10 overflow-visible 
      `}
    >
      {/* Image - on top for mobile, left for desktop */}
      <div className="relative w-full min-[600px]:w-1/2 h-[180px] min-[600px]:h-auto">
        <img
          src={plant}
          alt={"Plant image"}
          className="absolute top-[-10rem] min-[300px]:top-[-7rem]! min-[600px]:top-[-2rem]! min-[800px]:top-[-10rem]! min-[1000px]:top-[-12rem]! min-[1100px]:top-[-13rem]! min-[1300px]:top-[-18rem]! min-[1500px]:top-[-22rem]!
          left-1/2 -translate-x-1/2 z-20 
          max-w-[220px] min-[300px]:max-w-[270px]! min-[600px]:max-w-[320px]! min-[700px]:max-w-[350px]! min-[800px]:max-w-[480px]! min-[1000px]:max-w-[550px]! min-[1100px]:max-w-[650px]! min-[1300px]:max-w-[750px]! min-[1500px]:max-w-[880px]! "
        />
      </div>

      {/* Card Contents */}
      <div className="w-full min-[600px]:w-1/2  flex flex-col justify-center gap-2 lg:gap-8 text-white/75">
        <h3 className="text-[20px] min-[700px]:text-[20px]! min-[800px]:text-[23px]! min-[900px]:text-[27px]!  min-[1000px]:text-[28px]! min-[1300px]:text-[38px]! font-semibold text-white">
          We Have Small And Best O2 Plants Collection's
        </h3>

        <p className="text-sm sm:text-base lg:text-lg xl:text-[20px] lg:font-semibold lg:text-white text-white/75">
          Oxygen-producing plants, often referred to as "O2 plants," are those
          that release oxygen into the atmosphere through the process of
          photosynthesis.
        </p>
        <p className="text-sm sm:text-base lg:text-lg xl:text-[20px] lg:font-semibold lg:text-white text-white/75">
          Many plants can help filter out pollutants and toxins from the air,
          such as formaldehyde, benzene, and trichloroethylene. This makes the
          air cleaner and healthier to breathe.
        </p>

        <div className="flex justify-between gap-3  mt-2 sm:mt-4">
          <button
            className="text-base  border-2 min-[800px]:text-[18px]! min-[1000px]:text-[22px]! min-[1300px]:text-[28px]! font-semibold rounded-[12px] 
             p-2 sm:p-3  px-6 min-[800px]:px-10! min-[1300px]:px-14! w-fit"
          >
            Explore
          </button>
          <div className="flex items-center justify-between sm:justify-start">
            <ChevronLeft size={35} className="text-white/35" />
            <span className="text-base sm:text-lg xl:text-[20px] mx-4 sm:mx-6 lg:mx-10 font-bold">
              01/<span className="text-xs sm:text-sm xl:text-[15px]">04</span>
            </span>
            <ChevronRight size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
