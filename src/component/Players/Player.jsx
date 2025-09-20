const Player = ({ player }) => {
  const { name, image } = player;

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
          <h2 className="card-title text-xl">{name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
