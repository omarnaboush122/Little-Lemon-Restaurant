import { Link } from "react-router-dom";

const SingleSpecial = ({ imgSrc, alt, title, price, description }) => {
  return (
    <article>
      <img src={imgSrc} alt={alt} className="w-full h-[25vh] object-cover" />
      <div className="pt-4 pb-8 px-6 bg-[#edefee]">
        <h3 className="text-2xl font-bold">{title}</h3>
        <h4 className="text-xl font-bold">{price}</h4>
        <p className="my-4 md:text-lg">{description}</p>
        <Link
          to={"/order"}
          className="bg-[#f4ce14] font-bold block w-fit py-3 px-6 rounded-md border hover:bg-[#495e57] hover:text-white transition-colors duration-300 md:text-lg lg:text-xl"
        >
          Order for Delivery
        </Link>
      </div>
    </article>
  );
};

export default SingleSpecial;
