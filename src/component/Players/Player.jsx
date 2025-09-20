const Player = ({ player, chosePlayerHandle }) => {
  const { id, name, image, role, battingStyle, bowlingStyle, team, price } =
    player;

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
              <p className="flex-grow-0">{team}</p>
              <p className="flex-grow-0">{battingStyle}</p>
            </div>
            <div>
              <div className="flex items-center justify-between mt-4  font-semibold">
                <p className="flex-grow-0">{role}</p>
                <p className="flex-grow-0">{bowlingStyle}</p>
              </div>
            </div>
          </div>
          <div className="card-actions flex items-center justify-between mt-4 font-semibold">
            <p>Price : ${price}</p>
            <button
              className="btn "
              onClick={() => chosePlayerHandle({ player })}
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
