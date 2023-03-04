import { Link } from "react-router-dom";


const Confirmation = () => {
  return (
    <section className="confirmation w-full h-80 flex flex-col justify-center items-center">
      <article className="flex flex-col justify-center items-center text-center p-4 bg-[#495e57] md:p-8 rounded-lg text-white">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        Your Reservation is Confirmed!
        </h1>
        <h3 className="my-6 text-xl font-bold md:text-2xl">A confirmation message has been sent to your email.</h3>
        <h4 className="text-lg font-bold md:text-xl">Thanks for dining with us!</h4>
      </article>
      <article className="flex justify-between items-center gap-4 my-4 sm:gap-8 md:gap-10">
        <Link to={"/assets/menu.9b7e092be47f16ae049f.webp"} target="_blank" className="bg-[#464646] text-sm  text-white py-2 px-4 rounded-md sm:py-3 sm:px-6 sm:text-base md:text-lg md:py-4 md:px-10 hover:bg-[#f4ce14] hover:text-[#464646] transition-colors duration-300">Browse Menu</Link>
        <Link to={"/order"} className="bg-[#464646] text-sm text-white py-2 px-4 rounded-md sm:py-3 sm:px-6 sm:text-base md:text-lg md:py-4 md:px-10 hover:bg-[#f4ce14] hover:text-[#464646] transition-colors duration-300">Order Online</Link>
        <Link to={"/"} className="bg-[#464646] text-sm text-white py-2 px-4 rounded-md sm:py-3 sm:px-6 sm:text-base md:text-lg md:py-4 md:px-10 hover:bg-[#f4ce14] hover:text-[#464646] transition-colors duration-300">Home Page</Link>
      </article>
    </section>
  );
}

export default Confirmation;
