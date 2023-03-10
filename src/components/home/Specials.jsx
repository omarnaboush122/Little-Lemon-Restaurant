import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";
import SingleSpecial from "./SingleSpecial";

const Specials = () => {
  const [specialsData, setSepcialsData] = useState(data.specials);

  const allSpecialsElements = specialsData.map((special) => (
    <SingleSpecial key={special.id} {...special} />
  ));
  return (
    <section>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-2xl font-bold mb-4 sm:mb-8 sm:text-3xl md:text-4xl md:mb-12">
          This weeks specials
        </h1>
        <Link
          to={"/assets/menu.9b7e092be47f16ae049f.webp"}
          target="_blank"
          className="bg-[#f4ce14] font-bold py-2 px-4 rounded-md border hover:bg-[#495e57] hover:text-white transition-colors duration-300 sm:py-3 sm:px-6 md:py-4 md:px-8 md:text-2xl lg:px-10 lg:text-3xl"
        >
          Online Menu
        </Link>
        <div className="grid grid-cols-1 mt-12 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allSpecialsElements}
        </div>
      </div>
    </section>
  );
};

export default Specials;
