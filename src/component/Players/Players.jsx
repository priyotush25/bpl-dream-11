import { useState } from "react";
import Player from "./Player";

const Players = ({ players, chosePlayerHandle, selectPlayer }) => {
  const [active, setActive] = useState("available");

  return (
    <>
      {/* available player section */}
      <div className="flex items-center justify-between mt-12 md:mt-24 mb-4 md:mb-8 p-4">
        <h2 className="text-xl  md:text-2xl font-semibold">
          Available Players
        </h2>

        <div className="w-4/6 flex justify-end">
          {/* Available Button */}
          <button
            className={`py-6 btn rounded-l-xl rounded-r-none border-r-0 
              ${active === "available" ? "bg-[#E7FE29]" : "bg-gray-100"}`}
            onClick={() => setActive("available")}
          >
            Available
          </button>

          {/* Selected Button */}
          <button
            className={`py-6 btn rounded-l-none rounded-r-xl border-l-0 
              ${active === "selected" ? "bg-[#E7FE29]" : "bg-gray-100"}`}
            onClick={() => setActive("selected")}
          >
            Selected {selectPlayer.length}
          </button>
        </div>
      </div>

      {/* player section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-44 p-4">
        {players.map((player) => (
          <Player
            player={player}
            key={player.id}
            chosePlayerHandle={chosePlayerHandle}
          />
        ))}
      </div>
    </>
  );
};

export default Players;
