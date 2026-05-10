import { Star } from "lucide-react";
import reviewerImg from "../../assets/reviewImages/review1.png";

export const HeroReview = () => {
  return (
    <div
      className="w-[409px] blur-style h-[237px] rounded-[45px] p-7 pr-10 flex justify-center flex-col gap-4"
      style={{
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      {/* Reviewer info */}
      <div className="flex items-center gap-3">
        <img
          src={reviewerImg}
          alt="Ronnie Hamill"
          className="w-14 h-14 rounded-full"
          style={{
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        />
        <div className="flex flex-col gap-1">
          <span className="text-white font-normal text-[22px]">Ronnie Hamill</span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} size={16} fill="#FFD700" stroke="none" />
            ))}
            <div className="relative w-4 h-4">
              <Star size={16}  stroke="none" className="absolute" />
              <div className="absolute overflow-hidden w-[8px]">
                <Star size={16} fill="#FFD700" stroke="none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white opacity-75 text-[17px]">
        I can't express how thrilled I am with my new natural plants! They bring such a
        fresh and vibrant energy to my home.
      </p>
    </div>
  );
};
