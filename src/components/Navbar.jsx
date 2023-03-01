import React from "react";

const Navbar = () => {
  return (
    <nav className="my-5">
      <ul className="flex flex-col justify-center items-center">
        <li className="px-3 py-5 w-full text-center text-2xl font-bold hover:bg-[#f4ce14] transition-colors duration-300">
          <a href="#Home">Home</a>
        </li>
        <li className="px-3 py-5 w-full text-center text-2xl font-bold hover:bg-[#f4ce14] transition-colors duration-300">
          <a href="#About">About</a>
        </li>
        <li className="px-3 py-5 w-full text-center text-2xl font-bold hover:bg-[#f4ce14] transition-colors duration-300">
          <a href="#Menu">Menu</a>
        </li>
        <li className="px-3 py-5 w-full text-center text-2xl font-bold hover:bg-[#f4ce14] transition-colors duration-300">
          <a href="#Reservations">Reservations</a>
        </li>
        <li className="px-3 py-5 w-full text-center text-2xl font-bold hover:bg-[#f4ce14] transition-colors duration-300">
          <a href="#Order Online">Order Online</a>
        </li>
        <li className="px-3 py-5 w-full text-center text-2xl font-bold hover:bg-[#f4ce14] transition-colors duration-300">
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
