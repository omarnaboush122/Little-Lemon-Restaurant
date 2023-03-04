const Info = () => {
  return (
    <section className="bg-[#f4ce14] min-h-[22rem]">
      <div className="container mx-auto px-8 py-12 grid grid-cols-2">
        <article>
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Little Lemon
          </h1>
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Chicago
          </h2>
          <p className="text-sm max-w-xs mt-4 md:text-base md:max-w-sm lg:text-lg">
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
        </article>
        <article className="relative max-h-[18rem] top-16 left-4 md:left-8">
          <img
            src="./assets/food3.jpeg"
            alt="food3"
            className="h-full w-[60%] object-cover  relative left-0 top-0"
          />
          <img
            src="./assets/food2.jpeg"
            alt="food2"
            className="h-full w-[60%] object-cover absolute -top-14 left-20"
          />
        </article>
      </div>
    </section>
  );
};

export default Info;
