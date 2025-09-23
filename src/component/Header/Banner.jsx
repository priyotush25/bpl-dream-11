import banner from "../../assets/banner-main.png";
import overlay from "../../assets/bg-shadow.png";

const Banner = ({ coinAddHandle }) => {
  return (
    <>
      <div className="w-full bg-black p-8 text-center md:p-16 md:rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
        <img src={banner} alt="" />

        {/* overlay img 1 */}
        <img
          src={overlay}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <h1 className="text-white text-4xl mt-6 mb-4 font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h3 className="font-medium text-2xl text-gray-500 mb-8">
          Beyond Boundaries Beyond Limits
        </h3>
        <button
          onClick={coinAddHandle}
          className="bg-[#E7FE29] z-10 btn outline outline-amber-300 border-none  text-black font-semibold py-6 px-10 rounded-lg"
        >
          Claim Free Credit
        </button>
      </div>
    </>
  );
};

export default Banner;
