import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#495e57] text-white flex flex-col">
      <div className="container mx-auto p-8 text-center grid grid-cols-1 md:grid-cols-4 md:text-left">
      <img src="./assets/footer-logo.png" alt="footer-logo" className="w-24 mx-auto md:m-0" />
      <div className="mt-4 md:mt-0">
        <h3 className="text-2xl md:text-3xl font-bold">Navigation</h3>
      <ul className="my-2">
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300"><Link to={"/home"}>Home</Link></li>
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300"><Link to={"/about"}>About</Link></li>
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300"><Link to={"/public/assets/menu.9b7e092be47f16ae049f.webp"} target="_blank">Menu</Link></li>
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300"><Link to={"/reservations"}>Reservations</Link></li>
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300"><Link to={"/order"}>Order Online</Link></li>
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300"><Link to={"/login"}>Login</Link></li>
      </ul>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold">Contact</h3>
      <ul className="my-2">
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">2395 Maldove Way,<br />
Chicago Illinois</li>
        <li className="my-4 md:text-lg hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">(629)-243-6827</li>
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">info@littlelemon.com</li>
      </ul>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold">Connect</h3>
      <ul className="my-2">
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">Facebook</li>
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">Instagram</li>
        <li className="md:text-lg hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">Join us!</li>
      </ul>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
