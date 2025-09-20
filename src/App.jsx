import { useEffect, useState } from "react";
import Footer from "./component/Footer/Footer";
import Banner from "./component/Header/Banner";
import Header from "./component/Header/Header";
import Players from "./component/Players/Players";

const App = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <>
      <main className="container mx-auto">
        <Header />
        <Banner />
        <Players players={players} />
      </main>
      <Footer />
    </>
  );
};

export default App;
