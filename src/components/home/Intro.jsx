import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="bg-[#495e57] text-white">
      <div className="container mx-auto py-12 px-8 grid grid-cols-2">
        <div>
          <h1 className="text-2xl text-[#f4ce14] font-bold sm:text-3xl md:text-4xl">
            Little Lemon
          </h1>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Chicago
          </h2>
          <p className="my-4 text-sm max-w-lg sm:text-base md:text-lg">
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
          <Link
            to={"/reservations"}
            className="bg-[#f4ce14] text-black font-bold block w-fit py-1 px-2 mt-4 rounded-sm border hover:bg-transparent border-[#f4ce14] hover:text-white hover:border-white transition-colors duration-300 sm:py-2 sm:px-6 md:py-3 md:px-8 md:text-xl lg:py-4 lg:px-10 lg:text-3xl"
          >
            Reserve a table
          </Link>
        </div>
        <img
          src="./assets/food1.png"
          alt="food1"
          className="w-full h-[17rem] pl-8 object-cover"
        />
      </div>
    </section>
  );
};

export default Intro;
