import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isopenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <header>
      <div className="flex w-full items-center justify-between">
        <img src="./assets/Logo.svg" alt="little lemon logo" className="mx-6 mt-6" />
        <button className="cursor-pointer">
          {isopenMenu ? (
            <img
              src="./assets/close-icon.png"
              alt="close-icon"
              onClick={closeMenu}
              className="w-10 mx-6 mt-6"
            />
          ) : (
            <img
              src="./assets/🦆 icon _hamburger menu.svg"
              alt="hamburger menu"
              onClick={openMenu}
              className="w-10 mx-6 mt-6"
            />
          )}
        </button>
      </div>
      <Navbar/>
    </header>
  );
};

export default Header;
