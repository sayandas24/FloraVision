import { Star } from "lucide-react";

export default function ReviewCard({ image, name, content }) {
  return (
    <div
      className="w-[512px] blur-style h-[480px] review-curvy-card rounded-[45px] p-18 flex flex-col gap-10"
      style={{
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      {/* Reviewer info */}
      <div className="flex items-center gap-10">
        <img
          src={image}
          alt={name}
          className="w-18 h-18 rounded-full"
          style={{
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        />
        <div className="flex flex-col gap-1">
          <span className="text-white font-semibold text-[38px]">{name}</span>
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

      <p className="text-white/75 text-[24px] leading-tight">{content}</p>

      {/* SVG border only */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 512 480" 
      >
        <path
          d="M 144 9 C 118 3 113 1 92 0 C 33 0 0 30 0 108 L 0 370 C -1 446 48 480 122 480 L 378 480 C 478 480 510 444 510 368 L 513 94 C 513 35 484 0 418 0 C 392 1 379 6 352 10 L 320 16 C 270 24 218 25 174 15"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
