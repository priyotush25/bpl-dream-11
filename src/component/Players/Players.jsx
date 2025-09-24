import Player from "../Players/Player";

const Players = ({ players, chosePlayerHandle, selectPlayer }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-52">
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          chosePlayerHandle={chosePlayerHandle}
          selectPlayer={selectPlayer}
        />
      ))}
    </div>
  );
};

export default Players;
