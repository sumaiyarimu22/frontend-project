import heroImage from "../assets/hero.6865951df6ceab277647.jpg";
const Home = () => {
  return (
    <div className=" min-h-[calc(100vh-5rem)] flex flex-col gap-3 items-center justify-center relative">
      <div className="flex flex-col gap-3 items-center p-32 bg-gray-100 w-full h-[calc(100vh-5rem)]">
        <h1 className="text-6xl font-bold text-gray-800 leading-none">
          {" "}
          Welcome To Smart Home
        </h1>
        <p>
          Best E-commerce platform for buying high quality Smart Home Appliances
          at extremely affordable Price.
        </p>
        <div className="flex gap-5">
          <a href="/shop">
            <button className="px-8 py-3  font-medium rounded-full text-gray-900 hover:bg-cyan-400 bg-cyan-200">
              Shop Now
            </button>
          </a>
          <a href="/about">
            <button className="px-8 py-3 rounded-full text-gray-900 border border-cyan-200">
              Learn more
            </button>
          </a>
        </div>
      </div>
      <div className="-mt-28 rounded overflow-hidden px-32">
        <img src={heroImage} alt="heroImage" className="h-full  rounded-xl" />
      </div>
    </div>
  );
};

export default Home;
