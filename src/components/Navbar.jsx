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
      <a href="#" className="px-2 text-center">
      <img src="./assets/log.png" alt="little lemon logo" className="max-h-16 ml-5 h-16 cursor-pointer" />
      </a>
      <a href="#Home" className="py-5 text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">Home</a>
      <a href="#About" className="py-5 text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">About</a>
      <a href="#Menu" className="py-5 text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">Menu</a>
      <a href="#Reservations" className="py-5 text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">Reservations</a>
      <a href="#Order Online" className="py-5 text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">Order</a>
      <a href="#" className="py-5 text-center text-2xl font-bold cursor-pointer hover:bg-[#f4ce14] transition-colors duration-300">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
