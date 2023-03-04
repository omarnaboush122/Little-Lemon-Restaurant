import { Link } from "react-router-dom";

const Navbar = ({ isopenMenu }) => {
  return (
    <nav className="my-5 md:my-0">
      {isopenMenu && (
        <ul className="flex flex-col justify-center items-center md:hidden">
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <Link to={"/public/assets/menu.9b7e092be47f16ae049f.webp"} target="_blank" >Menu</Link>
          </li>
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <Link to={"/reservations"}>Reservations</Link>
          </li>
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <Link to={"/order"}>Order Online</Link>
          </li>
          <li className="px-3 py-5 w-full text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      )}
      <div className="hidden md:grid md:grid-cols-7 md:w-full md:items-center">
      <Link to={"/"} className="px-2 text-center">
      <img src="./assets/log.png" alt="little lemon logo" className="ml-5 pr-4 h-16 cursor-pointer" />
      </Link>
      <Link to={"/"} className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">Home</Link>
      <Link to={"/about"}  className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">About</Link>
      <Link to={"/assets/menu.9b7e092be47f16ae049f.webp"} target="_blank" className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">Menu</Link>
      <Link to={"/reservations"} className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">Reservations</Link>
      <Link to={"/order"} className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">Order</Link>
      <Link to={"/login"} className="py-5 text-center text-xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300 lg:text-2xl">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
