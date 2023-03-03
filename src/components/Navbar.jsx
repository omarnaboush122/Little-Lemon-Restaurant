import { Link } from "react-router-dom";

const Navbar = ({ isopenMenu }) => {
  return (
    <nav className="my-5 md:my-0">
      {isopenMenu && (
        <ul className="flex flex-col justify-center items-center md:hidden">
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <a href="#Home">Home</a>
          </li>
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <a href="#About">About</a>
          </li>
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <a href="#Menu">Menu</a>
          </li>
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <a href="#Reservations">Reservations</a>
          </li>
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <a href="#Order Online">Order Online</a>
          </li>
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <a href="#">Login</a>
          </li>
        </ul>
      )}
      <div className="hidden md:grid md:grid-cols-7 md:w-full md:items-center">
      <Link to={"/"} className="px-2 text-center">
      <img src="./assets/log.png" alt="little lemon logo" className="max-h-16 ml-5 pr-4 h-16 cursor-pointer" />
      </Link>
      <Link to={"/"} className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">Home</Link>
      <Link to={"/about"}  className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">About</Link>
      <Link to={"/static/media/menu.9b7e092be47f16ae049f.webp"} target="_blank" className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">Menu</Link>
      <Link to={"/reservations"} className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">Reservations</Link>
      <Link to={"/order"} className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">Order</Link>
      <Link to={"/login"} className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
