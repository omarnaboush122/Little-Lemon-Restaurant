

const SingleTestimonial = ({title, description}) => {
  return (
    <article className="bg-[#edefee] p-4 mx-auto hover:scale-105 transition-all duration-300 ease-in-out">
      <img src="./assets/star.png" alt="star" className="w-12 h-12 object-contain" />
      <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">{title}</h3>
      <p className="md:text-lg">{description}</p>
    </article>
  );
};

export default SingleTestimonial;
