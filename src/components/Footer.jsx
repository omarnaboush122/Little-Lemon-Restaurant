

const Footer = () => {
  return (
    <footer className="bg-[#495e57] text-white flex flex-col">
      <div className="container mx-auto p-8 text-center grid grid-cols-1 md:grid-cols-4 md:text-left">
      <img src="./assets/footer-logo.png" alt="footer-logo" className="w-24 mx-auto md:m-0" />
      <div className="mt-4 md:mt-0">
        <h3 className="text-2xl md:text-3xl font-bold">Navigation</h3>
      <ul className="my-2">
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300"><a href="#Home">Home</a></li>
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300"><a href="#About">About</a></li>
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300"><a href="#Menu">Menu</a></li>
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300"><a href="#Reservations">Reservations</a></li>
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300"><a href="#Order Online">Order Online</a></li>
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300"><a href="#">Login</a></li>
      </ul>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold">Contact</h3>
      <ul className="my-2">
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">Address</li>
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">Phone Number</li>
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">Email</li>
      </ul>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold">Social Media Links</h3>
      <ul className="my-2">
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">Address</li>
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">Phone Number</li>
        <li className="md:text-lg hover:dec hover:text-[#f4ce14] transition-colors duration-300 cursor-pointer">Email</li>
      </ul>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
