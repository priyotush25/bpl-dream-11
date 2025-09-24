import { MdDeleteForever } from "react-icons/md";

const SelectPlayer = ({ selectPlayer, deletePlayer }) => {
  if (selectPlayer > 6) {
    alert("6 player already added");
    return;
  }
  return (
    <>
      <div className="my-6 p-2">
        {selectPlayer.length > 0 ? (
          selectPlayer.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between border rounded-xl p-3 border-gray-200 mt-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={p.image}
                  alt=""
                  className="h-20 w-20 rounded-xl object-top"
                />
                <div>
                  <p className="text-xl font-semibold">{p.name}</p>
                  <p>{p.battingStyle}</p>
                </div>
              </div>
              <button className="text-4xl" onClick={() => deletePlayer(p.id)}>
                <MdDeleteForever />
              </button>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center p-12 mb-64">
            No player selected!
          </div>
        )}
      </div>
    </>
  );
};

export default SelectPlayer;
