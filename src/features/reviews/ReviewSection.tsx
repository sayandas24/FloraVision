import { reviews } from "../../data/reviews";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  return (
    <section>
      <div className="my-[6rem] sm:my-[8rem] md:my-[12rem] lg:my-[16rem] xl:my-[20rem]" />

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold mb-10 sm:mb-14 md:mb-20 lg:mb-24 xl:mb-28 text-center ">
        <span className="bracket-box">Customer Review</span>
      </h2>

      {/* card */}
      <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center gap-6 md:gap-4 lg:gap-6">
        {reviews.length > 0 &&
          reviews.map((review) => (
            <ReviewCard
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

export default ReviewSection;
