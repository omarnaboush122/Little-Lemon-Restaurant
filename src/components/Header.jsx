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
      <div className="flex w-full items-center justify-between md:hidden">
        <img src="./assets/log.png" alt="little lemon logo" className="max-h-16 ml-4 mr-0 mt-4 cursor-pointer" />
        <button className="cursor-pointer md:hidden">
          {isopenMenu ? (
            <img
              src="./assets/close-icon.png"
              alt="close-icon"
              onClick={closeMenu}
              className="w-10 mx-4 mt-4"
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
      <Navbar isopenMenu={isopenMenu}/>
    </header>
  );
};

export default Header;
