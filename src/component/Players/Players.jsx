import { useState } from "react";
import Player from "./Player";

const Players = ({ players }) => {
  const [active, setActive] = useState("available");

  return (
    <>
      {/* available player section */}
      <div className="flex items-center justify-between mt-24 mb-8">
        <h2 className="text-2xl font-semibold">Available Players</h2>

        <div>
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
            Selected (0)
          </button>
        </div>
      </div>

      {/* player section */}
      <div className="grid grid-cols-4 gap-4 mb-44">
        {players.map((player) => (
          <Player player={player} key={player.id} />
        ))}
      </div>
    </>
  );
};

export default Players;
