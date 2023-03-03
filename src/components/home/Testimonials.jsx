

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-2xl text-center font-bold md:text-3xl lg:text-4xl">Testimonials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <article className="bg-[#edefee] p-4">
            <img src="./assets/star.png" alt="star" />
            <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">Micheal Caldwell</h3>
            <p className="md:text-lg">This is the best Mediterranean food that I've ever had!</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
