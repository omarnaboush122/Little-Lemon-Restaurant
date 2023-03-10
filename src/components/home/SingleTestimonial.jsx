

const SingleTestimonial = ({title, description}) => {
  return (
    <article className="bg-[#edefee] p-4">
      <img src="./assets/star.png" alt="star" />
      <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">{title}</h3>
      <p className="md:text-lg">{description}</p>
    </article>
  );
};

export default SingleTestimonial;
