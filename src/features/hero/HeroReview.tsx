import { Star } from "lucide-react";
import reviewerImg from "../../assets/reviewImages/review1.png";

export const HeroReview = () => {
  return (
    <div
      className="w-full md:w-[400px] xl:w-[409px] blur-style h-auto min-h-[180px] xl:h-[237px] rounded-[24px] sm:rounded-[35px] xl:rounded-[45px] p-5 sm:p-7 pr-6 sm:pr-10 flex justify-center flex-col gap-3 sm:gap-4 transition-all duration-500 hover:-translate-y-2"
      style={{
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      {/* Reviewer info */}
      <div className="flex items-center gap-3">
        <img
          src={reviewerImg}
          alt="Ronnie Hamill"
          className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-full"
          style={{
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        />
        <div className="flex flex-col gap-1">
          <span className="text-white font-normal text-base sm:text-lg xl:text-[22px]">
            Ronnie Hamill
          </span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} size={16} fill="#FFD700" stroke="none" />
            ))}
            <div className="relative w-4 h-4">
              <Star size={16} stroke="none" className="absolute" />
              <div className="absolute overflow-hidden w-[8px]">
                <Star size={16} fill="#FFD700" stroke="none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white opacity-75 text-sm sm:text-[15px] xl:text-[17px]">
        I can't express how thrilled I am with my new natural plants! They bring
        such a fresh and vibrant energy to my home.
      </p>
    </div>
  );
};
