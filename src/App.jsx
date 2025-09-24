import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./component/Footer/Footer";
import Banner from "./component/Header/Banner";
import Header from "./component/Header/Header";
import Players from "./component/Players/Players";
import SelectPlayer from "./component/SelectPlayer/SelectPlayer";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [coin, setCoin] = useState(0);
  const [selectPlayer, setSelectPlayer] = useState([]);
  const [active, setActive] = useState(true);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // coin claim and function
  const [coinClaim, setCoinClaim] = useState(false);

  const coinAddHandle = () => {
    if (!coinClaim) {
      setCoin(coin + 450000);
      setCoinClaim(true);
      toast("Coin Added Successfully");
    } else {
      toast("You already claimed!");
    }
  };

  // chose player btn
  const chosePlayerHandle = ({ player }) => {
    if (coin > player.price) {
      const newCoin = coin - player.price;
      setCoin(newCoin);
    } else {
      toast("Not Available Coin");
      return;
    }

    const newSelectPlayer = selectPlayer.find((p) => p.id === player.id);
    if (newSelectPlayer) {
      toast("Players already Selected!");
      return;
    }

    setSelectPlayer([...selectPlayer, player]);
  };

  // deleted player
  const deletePlayer = (player) => {
    const delPlayer = selectPlayer.filter((p) => p.id !== player);

    setSelectPlayer(delPlayer);
  };

  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-md shadow ">
        <Header coin={coin} />
      </div>

      <main className="container mx-auto">
        <Banner coinAddHandle={coinAddHandle} />

        <div className="flex items-center my-10 justify-between p-5">
          <h2 className="text-xl  md:text-2xl font-semibold">
            Available Players
          </h2>
          {/* Available Button */}
          <div className="w-full flex items-center justify-end">
            <button
              className={`py-6 btn rounded-l-xl rounded-r-none border-r-0 
              ${active ? "bg-[#E7FE29]" : ""}`}
              onClick={() => setActive(true)}
            >
              Available
            </button>

            {/* Selected Button */}
            <button
              className={`py-6 btn rounded-l-none rounded-r-xl border-l-0 
              ${active ? "" : "bg-[#E7FE29]"}`}
              onClick={() => setActive(false)}
            >
              Selected {selectPlayer.length}
            </button>
          </div>
        </div>

        {active ? (
          <Players
            players={players}
            chosePlayerHandle={chosePlayerHandle}
            selectPlayer={selectPlayer}
          />
        ) : (
          <div className="mb-56">
            <SelectPlayer
              selectPlayer={selectPlayer}
              deletePlayer={deletePlayer}
            />
          </div>
        )}
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
