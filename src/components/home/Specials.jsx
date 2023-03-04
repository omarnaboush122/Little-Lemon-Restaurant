import { Link } from "react-router-dom";

const Specials = () => {
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
          <article>
            <img
              src="./assets/greek salad.jpg"
              alt="greek-salad"
              className="w-full h-[25vh] object-cover"
            />
            <div className="pt-4 pb-8 px-6 bg-[#edefee]">
              <h3 className="text-2xl font-bold">Greek Salad</h3>
              <h4 className="text-xl font-bold">$12.99</h4>
              <p className="my-4 md:text-lg">
                Refreshing salad, made with tomato, lettuce, feta cheese, and
                olives. Dressed with salt, hot pepper, and olive oil.
              </p>
              <a
                href="#order"
                className="bg-[#f4ce14] font-bold block w-fit py-3 px-6 rounded-md border hover:bg-[#495e57] hover:text-white transition-colors duration-300 md:text-lg lg:text-xl"
              >
                Order for Delivery
              </a>
            </div>
          </article>
          <article>
            <img
              src="./assets/bruchetta.svg"
              alt="bruschetta"
              className="w-full h-[25vh] object-cover"
            />
            <div className="pt-4 pb-8 px-6 bg-[#edefee]">
              <h3 className="text-2xl font-bold">Bruschetta</h3>
              <h4 className="text-xl font-bold">$16.99</h4>
              <p className="my-4 md:text-lg">
                Toasted bread, topped with tomato, prosciutto, and cheese.
                Seasoned with salt and olive oil.
              </p>
              <a
                href="#order"
                className="bg-[#f4ce14] font-bold block w-fit py-3 px-6 rounded-md border hover:bg-[#495e57] hover:text-white transition-colors duration-300 md:text-lg lg:text-xl"
              >
                Order for Delivery
              </a>
            </div>
          </article>
          <article>
            <img
              src="./assets/lemon dessert.jpg"
              alt="lemon-dessert"
              className="w-full h-[25vh] object-cover"
            />
            <div className="pt-4 pb-8 px-6 bg-[#edefee]">
              <h3 className="text-2xl font-bold">Lemon Dessert</h3>
              <h4 className="text-xl font-bold">$8.50</h4>
              <p className="my-4 md:text-lg">
                Fresh baked lemon bread coated in salt and sugar. Powdered in
                citrus and lemon zest.
              </p>
              <a
                href="#order"
                className="bg-[#f4ce14] font-bold block w-fit py-3 px-6 rounded-md border hover:bg-[#495e57] hover:text-white transition-colors duration-300 md:text-lg lg:text-xl"
              >
                Order for Delivery
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Specials;
