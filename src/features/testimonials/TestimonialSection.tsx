import { reviews } from "../../data/reviews";
import TestimonialCard from "./TestimonialCard";

export const TestimonialSection = () => {
  return (
    <section>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold text-center
          my-[5rem] md:my-[8rem] lg:my-[10rem] xl:my-[12rem] 2xl:my-[15rem]
          "
      >
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
