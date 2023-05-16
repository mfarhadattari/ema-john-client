import person from "../../assets/person.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto my-20 z-0">
      <div className="hero w-3/4 mx-auto">
        <div className="hero-content w-full flex-col lg:flex-row-reverse justify-between">
          <div className="w-3/4">
            <img src={person} className="w-3/4 mx-auto rounded-lg shadow-2xl" />
          </div>
          <div className="w-full">
            <h1 className="text-5xl font-bold">New Collection For Fall</h1>
            <p className="py-6">
              Discover all the new arrivals of ready-to-wear collection.
            </p>
            <button className="btn bg-orange-500 text-black hover:text-white border-0">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
