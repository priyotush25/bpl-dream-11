import { RxHamburgerMenu } from "react-icons/rx";
import { TbCoinFilled } from "react-icons/tb";
import logo from "../../assets/logo.png";


const Header = ({ coin }) => {
  return (
    <>
      <div className="navbar mb-6 bg-white/70 container mx-auto">
        <div className="flex-1">
          <a>
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <ul className="hidden md:flex">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>

            <li>
              <p className="border border-gray-200 py-3 px-5 rounded-xl font-semibold ml-8">
                <span>{coin}</span> Coin
                <TbCoinFilled className="text-xl text-amber-400" />
              </p>
            </li>

            <li className="md:hidden">
              <details>
                <summary className="text-3xl ml-2">
                  <RxHamburgerMenu />
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2 absolute right-0">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Fixture</a>
                  </li>
                  <li>
                    <a>Teams</a>
                  </li>
                  <li>
                    <a>Schedules</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
       
    </>
  );
};

export default Header;
