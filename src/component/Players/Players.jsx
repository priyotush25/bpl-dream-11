import Player from "./Player";

const Players = ({ players, chosePlayerHandle }) => {
  return (
    <>
      {/* available player section */}

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
