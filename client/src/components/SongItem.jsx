import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="group min-w-[180px] p-4 rounded-lg cursor-pointer
      bg-[#181818] hover:bg-[#242424]
      transition-all duration-300"
    >
      <div className="relative">
        <img
          className="w-full h-40 object-cover rounded-md"
          src={image}
          alt={name}
        />

        {/* Play Button */}
        <button
          className="absolute bottom-2 right-2 w-10 h-10 rounded-full
          bg-sky-400 text-black
          flex items-center justify-center
          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 shadow-lg"
        >
          ▶
        </button>
      </div>

      <p className="font-semibold text-white mt-4 truncate">
        {name}
      </p>
      <p className="text-slate-400 text-sm truncate">
        {desc}
      </p>
    </div>
  );
};

export default SongItem;
