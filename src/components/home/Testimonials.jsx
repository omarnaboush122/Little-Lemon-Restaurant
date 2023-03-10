import { useState } from "react";
import data from "../../data.json";
import SingleTestimonial from "./SingleTestimonial";
const Testimonials = () => {
  const [reviews, setReviews] = useState(data.reviews);

  const allReviews = reviews.map((review) => (
    <SingleTestimonial key={review.id} {...review} />
  ));
  
  return (
    <section>
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-2xl text-center font-bold md:text-3xl lg:text-4xl">
          Testimonials
        </h1>
        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {allReviews}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
