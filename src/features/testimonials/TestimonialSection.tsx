import { reviews } from "../../data/reviews";
import TestimonialCard from "./TestimonialCard";

export const TestimonialSection = () => {
  return (
    <section>
      <div className="my-[6rem] sm:my-[8rem] md:my-[12rem] lg:my-[16rem] xl:my-[20rem]" />

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold mb-10 sm:mb-14 md:mb-20 lg:mb-24 xl:mb-28 text-center ">
        <span className="bracket-box">Customer Review</span>
      </h2>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 md:gap-y-20 lg:gap-y-24 gap-x-8 place-items-center">
        {reviews.length > 0 &&
          reviews.map((review) => (
            <TestimonialCard
              key={review.id}
              name={review.name}
              content={review.comment}
              image={review.image}
            />
          ))}
      </div>
    </section>
  );
};
 
