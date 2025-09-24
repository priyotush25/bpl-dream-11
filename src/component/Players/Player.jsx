const Player = ({ player, chosePlayerHandle, selectPlayer }) => {
  const { name, image, role, battingStyle, bowlingStyle, team, price } = player;

  const isDisabled = selectPlayer.some((p) => p.id === player.id);

  const clickHandle = () => {
    chosePlayerHandle({ player });
  };

  return (
    <>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure className="p-6">
          <img
            src={image}
            className="h-72 w-full object-cover object-top rounded-lg"
          />
        </figure>
        <div className="card-body mt-0 pt-0">
          <div>
            <h2 className="card-title text-xl">{name}</h2>
            <div className="flex items-center justify-between py-4 border-b-2 border-gray-400 font-semibold">
              <p>{team}</p>
              <p>{battingStyle}</p>
            </div>
            <div className="flex items-center justify-between mt-4 font-semibold">
              <p>{role}</p>
              <p>{bowlingStyle}</p>
            </div>
          </div>
          <div className="card-actions flex items-center justify-between mt-4 font-semibold">
            <p>Price : ${price}</p>
            <button
              className={`btn ${isDisabled ? "btn-disabled" : ""}`}
              onClick={clickHandle}
              disabled={isDisabled}
            >
              {isDisabled ? "Chosen" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
