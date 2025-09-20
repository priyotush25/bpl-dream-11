import logo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#06091A] flex flex-col items-center pt-56">
        <img src={logo} alt="" />

        <div className="container mx-auto text-white  flex md:flex-row flex-col items-start justify-between mt-14 p-4 gap-10">
          <div className="">
            <h4>About Us</h4>
            <p className="w-2/4">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h4>About Us</h4>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h4>About Us</h4>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
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
