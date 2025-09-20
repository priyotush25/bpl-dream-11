import { useEffect, useState } from "react";
import Footer from "./component/Footer/Footer";
import Banner from "./component/Header/Banner";
import Header from "./component/Header/Header";
import Players from "./component/Players/Players";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [coin, setCoin] = useState(0);
  const [selectPlayer, setSelectPlayer] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const coinAddHandle = () => {
    if (coin == 0) {
      setCoin(coin + 1200000);
    }
  };

  // chose player btn
  const chosePlayerHandle = ({ player }) => {
    console.log(player);

    if (coin > 0) {
      const newCoin = coin - player.price;
      setCoin(newCoin);
    } else {
      alert("Not Available Coin");
    }

    const newSelectPlayer = selectPlayer.find((p) => p.id === player.id);
    if (newSelectPlayer) {
      alert("Players already Selected!");
      return;
    }

    setSelectPlayer([...selectPlayer, player]);
  };

  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-md shadow ">
        <Header coin={coin} />
      </div>
      <main className="container mx-auto">
        <Banner coinAddHandle={coinAddHandle} />
        <Players
          players={players}
          chosePlayerHandle={chosePlayerHandle}
          selectPlayer={selectPlayer}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
