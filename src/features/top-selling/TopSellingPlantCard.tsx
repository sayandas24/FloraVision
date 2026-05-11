import bag from "../../assets/icons/bag.png";
import { useDynamicScale } from "../../hooks/useDynamicScale";

export default function TopSellingPlantCard({
  image,
  name,
  description,
  price,
}) {
  const { wrapperRef, innerRef } = useDynamicScale(512, 646);

  return (
    <section 
      className="top-selling-card-wrapper"
      ref={wrapperRef}
    >
      <div className="top-selling-card-inner relative w-[512px]" ref={innerRef}>
        <img
          className="absolute top-[-6rem] left-1/2 -translate-x-1/2 z-20 pointer-events-none object-cover"
          src={image}
          alt={name}
        />

        {/* Card */}
        <div className="relative w-[513px] trending-curvy-card h-[646px] blur-style ">
          <div className="w-full p-16 pt-0 flex flex-col space-y-3 absolute bottom-0 left-0 right-0">
            <p className="text-white/75 text-[38px]">{name}</p>

            <div className="flex items-center justify-between">
              <h2 className="text-white/75 text-[24px] leading-tight">
                {description}
              </h2>
            </div>

            {/* price */}
            <div className="flex justify-between text-white/75 items-center">
              <p className="text-[38px] font-normal ">
                {price ? `Rs. ${price}/-` : "Price not available"}
              </p>

              <button className=" font-normal rounded-[15px] p-3 border-white/50 border-2 px-3">
                <img src={bag} alt="shopping bag" className="opacity-75" />
              </button>
            </div>
          </div>
        </div>

      {/* SVG border only */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 513 646"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 145 13 C 118 3 113 1 92 0 C 33 0 0 30 0 108 L 0 523 C 0 605 49 645 133 645 L 373 645 C 474 645 512 609 512 518 L 513 94 C 513 34 490 0 418 0 C 396 1 379 6 357 11 L 320 20 C 271 32 217 31 169 19"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />
      </svg>
      </div>
    </section>
  );
}
