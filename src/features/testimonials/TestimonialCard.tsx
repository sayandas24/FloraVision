import { Star } from "lucide-react";
import { useDynamicScale } from "../../hooks/useDynamicScale";

export default function TestimonialCard({ image, name, content }) {
  const { wrapperRef, innerRef } = useDynamicScale(512, 480);

  return (
    <div className="review-card-wrapper" ref={wrapperRef}>
      <div
        className="review-card-inner transition-all duration-500 hover:-translate-y-2 relative w-[512px] h-[480px]"
        ref={innerRef}
      >
        <SVGShadow />

        {/* Main Card Content */}
        <div
          className="relative w-full h-full blur-style review-curvy-card p-12 flex flex-col gap-8 z-10"
          
        >
          {/* Reviewer info */}
          <div className="flex items-center gap-10">
            <img
              src={image}
              alt={name}
              className="w-[72px] h-[72px] rounded-full flex-shrink-0 object-cover"
              style={{
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            />
            <div className="flex flex-col gap-1">
              <span className="text-white font-semibold text-[32px]">
                {name}
              </span>
              <div className="flex items-center gap-2">
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

          <p className="text-white/75 text-[22px] leading-tight">{content}</p>

          {/* SVG border only */}
          <SVGBorder />
        </div>
      </div>
    </div>
  );
}



const SVGBorder = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 512 481"
    >
      <path
        d="M 144 9 C 118 3 113 1 92 0 C 33 0 0 30 0 108 L 0 370 C -1 446 48 480 122 480 L 378 480 C 478 480 510 444 510 368 L 513 94 C 513 35 484 0 418 0 C 392 1 379 6 352 10 L 320 16 C 270 24 218 25 174 15"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth=".4"
      />
    </svg>
  );
};

const SVGShadow = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      viewBox="0 0 512 480"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 144 9 C 118 3 113 1 92 0 C 33 0 0 30 0 108 L 0 370 C -1 446 48 480 122 480 L 378 480 C 478 480 510 444 510 368 L 513 94 C 513 35 484 0 418 0 C 392 1 379 6 352 10 L 320 16 C 270 24 218 25 174 15"
        fill="black"
        className="[filter:blur(5px)] opacity-10 translate-y-3"
      />
    </svg>
  );
};
