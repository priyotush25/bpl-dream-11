import overlay from "../../assets/bg-shadow.png";
import logo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#06091A] flex flex-col items-center pt-72">
        {/* news letter */}
        <div className="-mt-96 border border-gray-100 outline-1 relative overflow-hidden outline-white  outline-offset-8 bg-white rounded-3xl px-64 py-24 flex flex-col items-center justify-center gap-5">
          <img
            src={overlay}
            alt=""
            className="w-full h-full object-cover absolute"
          />

          <h1 className="text-xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text-gray-600">
            Get the latest updates and news right in your inbox!
          </p>
          <div>
            <input
              className="p-3 rounded-xl border border-gray-200"
              type="text"
              name=""
              placeholder="Enter your email"
            />
            <button className="p-3 font-semibold rounded-xl bg-amber-200 px-7 ml-4">
              Subscribe
            </button>
          </div>
        </div>

        <img src={logo} alt="" className="mt-8" />

        <div className="container mx-auto text-white  flex md:flex-row flex-col items-start justify-between mt-14 p-4 gap-10">
          <div className="flex-1">
            <h4 className="text-xl font-semibold">About Us</h4>
            <p className="w-2/4 text-gray-400 mt-4">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="flex-1  ">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="list-disc list-inside text-base text-gray-400 mt-4">
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
              <li>Contract</li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="text-xl  font-semibold">Subscribe</h4>
            <p className="text-gray-400 mt-4 w-2/4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div>
              <input
                className="bg-white p-3 border-none rounded-l-xl"
                type="text"
              />
              <button className="bg-amber-200 hover:bg-amber-300 text-black font-bold px-7 rounded-r-xl py-3 mt-5">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center py-8 text-[#FFFFFF99]  border-t border-gray-400 w-full mt-16">
          <p>@2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
