import { useState } from "react";

const Navbar = () => {
  const [isopenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <nav className="mx-6 mt-6">
      <div className="flex w-full items-center justify-between">
        <img src="./assets/Logo.svg" alt="little lemon logo" />
        <button className="cursor-pointer">
          {isopenMenu ? (
            <img
              src="./assets/close-icon.png"
              alt="close-icon"
              onClick={closeMenu}
              className="w-10 h-10"
            />
          ) : (
            <img
              src="./assets/🦆 icon _hamburger menu.svg"
              alt="hamburger menu"
              onClick={openMenu}
              className="w-10 h-10"
            />
          )}
        </button>
      </div>
      <ul className="hidden">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Menu">Menu</a>
        </li>
        <li>
          <a href="#Reservations">Reservations</a>
        </li>
        <li>
          <a href="#Order Online">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
