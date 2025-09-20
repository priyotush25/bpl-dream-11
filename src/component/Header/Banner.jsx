import banner from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <>
      <div className="w-full bg-black p-8 text-center md:p-16 md:rounded-3xl flex flex-col items-center justify-center">
        <img src={banner} alt="" />
        <h1 className="text-white text-4xl mt-6 mb-4 font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h3 className="font-medium text-2xl text-gray-500 mb-8">
          Beyond Boundaries Beyond Limits
        </h3>
        <button className="bg-[#E7FE29] btn outline outline-amber-300 border-none  text-black font-semibold py-6 px-10 rounded-lg">
          Claim Free Credit
        </button>
      </div>
    </>
  );
};

export default Banner;
