import { reviews } from "../../data/reviews";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  return (
    <section>
      <div className="my-[20rem]" />

      <h2 className="text-[55px] font-semibold mb-28 text-center ">
        <span className="bracket-box">Customer Review</span>
      </h2>

      {/* card */}
      <div className="flex justify-evenly">
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
