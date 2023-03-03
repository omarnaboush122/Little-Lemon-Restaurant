

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-2xl text-center font-bold md:text-3xl lg:text-4xl">Testimonials</h1>
        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          <article className="bg-[#edefee] p-4">
            <img src="./assets/star.png" alt="star" />
            <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">Micheal Caldwell</h3>
            <p className="md:text-lg">This is the best Mediterranean food that I've ever had!</p>
          </article>
          <article className="bg-[#edefee] p-4">
            <img src="./assets/star.png" alt="star" />
            <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">Alan Chen</h3>
            <p className="md:text-lg">My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.</p>
          </article>
          <article className="bg-[#edefee] p-4">
            <img src="./assets/star.png" alt="star" />
            <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">Casey Lau</h3>
            <p className="md:text-lg">I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.</p>
          </article>
          <article className="bg-[#edefee] p-4">
            <img src="./assets/star.png" alt="star" />
            <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">John Rosenblum</h3>
            <p className="md:text-lg">Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.</p>
          </article>
          <article className="bg-[#edefee] p-4">
            <img src="./assets/star.png" alt="star" />
            <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">Jim Reynor</h3>
            <p className="md:text-lg">The food here really refreshed me after a late night shift at the local supply depot.</p>
          </article>
          <article className="bg-[#edefee] p-4">
            <img src="./assets/star.png" alt="star" />
            <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">Brian Dean</h3>
            <p className="md:text-lg">I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.</p>
          </article>
          <article className="bg-[#edefee] p-4">
            <img src="./assets/star.png" alt="star" />
            <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">Tyler Tohmine</h3>
            <p className="md:text-lg">The food here was fire!! Everyone should try this place out at least once if they live in Chicago.</p>
          </article>
          <article className="bg-[#edefee] p-4">
            <img src="./assets/star.png" alt="star" />
            <h3 className="text-lg font-bold my-4 md:text-xl md:my-6">Jack Hu</h3>
            <p className="md:text-lg">This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
