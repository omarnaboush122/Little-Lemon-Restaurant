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
    <header className="md:flex md:justify-between md:gap-4">
      <div className="flex w-full items-center justify-between md:block md:w-auto md:flex-[0.3]">
        <img src="./assets/Logo.svg" alt="little lemon logo" className="ml-6 mr-0 mt-6 md:mt-4 cursor-pointer" />
        <button className="cursor-pointer md:hidden">
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
      <Navbar isopenMenu={isopenMenu}/>
    </header>
  );
};

export default Header;
