import { RxHamburgerMenu } from "react-icons/rx";
import { TbCoinFilled } from "react-icons/tb";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="navbar bg-base-100 mb-6">
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
                  <span>0</span> Coin{" "}
                  <TbCoinFilled className="text-xl text-amber-400" />
                </p>
              </li>

              <li className="md:hidden">
                <details>
                  <summary>
                    <RxHamburgerMenu />
                  </summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
