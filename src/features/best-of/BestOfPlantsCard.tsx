import plant from "../../assets/plants/best-plant/best-plant1.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestOfPlantsCard() {
  return (
    <div
      className={`
        flex flex-row  border border-white/15  rounded-[92px] h-[755px] w-full blur-style p-20
      `}
    >
      <div className="relative w-1/2">
        <img
          src={plant}
          alt={"Plant image"}
          className="absolute top-[-16rem] scale-125 left-[-5rem] s-translate-x-1/2  z-20"
        />
      </div>

      {/* Card Contents */}
      <div className="w-1/2 p-8 flex flex-col justify-center gap-8 text-white/75">
        <h3 className="text-[38px] font-semibold ">
          We Have Small And Best O2 Plants Collection’s
        </h3>

        <p className="text-[28px] font-semibold ">
          Oxygen-producing plants, often referred to as "O2 plants," are those
          that release oxygen into the atmosphere through the process of
          photosynthesis.
        </p>
        <p className="text-[28px] font-semibold">
          Many plants can help filter out pollutants and toxins from the air,
          such as formaldehyde, benzene, and trichloroethylene. This makes the
          air cleaner and healthier to breathe.
        </p>

        <div className="flex flex-row justify-between gap-3">
          <button className="text-[28px] font-semibold rounded-[12px] p-3 border-2 px-14 w-fit">
            Explore
          </button>
          <div className="flex items-center justify-between">
            <ChevronLeft size={35} className="text-white/35" />
            <span className="text-[20px] mx-10 font-bold">
              01/<span className="text-[15px]">04</span>
            </span>
            <ChevronRight size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
