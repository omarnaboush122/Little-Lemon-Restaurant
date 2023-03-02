

const Specials = () => {
  return (
    <section>
    <div className="container mx-auto py-5 px-8">
    <h1 className="text-2xl font-bold mb-4 sm:text-3xl md:text-4xl md:mb-8">This weeks specials</h1>
      <a href="https://guileless-boba-06cad0.netlify.app/static/media/menu.9b7e092be47f16ae049f.webp" className="bg-[#f4ce14] font-bold py-2 px-4 rounded-md border hover:bg-[#495e57] hover:text-white transition-colors duration-300 sm:py-3 sm:px-6 md:py-4 md:px-8 md:text-2xl lg:px-10 lg:text-3xl">Online Menu</a>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2">
        <article>
          <img src="./assets/greek salad.jpg" alt="greek-salad" className="w-full h-[25vh]" />
          <div className="pt-4 pb-8 px-6 bg-[#edefee]">
            <h3 className="text-2xl font-bold">Greek Salad</h3>
            <h4 className="text-xl font-bold">$12.99</h4>
            <p className="my-4">Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.</p>
            <a href="#order" className="bg-[#f4ce14] font-bold block w-fit py-2 px-4 rounded-md border hover:bg-[#495e57] hover:text-white transition-colors duration-300 sm:py-3 sm:px-6 md:py-4 md:px-8 md:text-2xl lg:px-10 lg:text-3xl">Order for Delivery</a>
          </div>
        </article>
        <article>
          <img src="./assets/greek salad.jpg" alt="greek-salad" className="w-full h-[25vh]" />
          <div className="pt-4 pb-8 px-6 bg-[#edefee]">
            <h3 className="text-2xl font-bold">Greek Salad</h3>
            <h4 className="text-xl font-bold">$12.99</h4>
            <p className="my-4">Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.</p>
            <a href="#order" className="bg-[#f4ce14] font-bold block w-fit py-2 px-4 rounded-md border hover:bg-[#495e57] hover:text-white transition-colors duration-300 sm:py-3 sm:px-6 md:py-4 md:px-8 md:text-2xl lg:px-10 lg:text-3xl">Order for Delivery</a>
          </div>
        </article>
      </div>
    </div>
    </section>
  );
}

export default Specials;
