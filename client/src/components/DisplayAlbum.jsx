import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  if (!albumData) return null;

  return (
    <>
      <Navbar />

      {/* Gradient Background */}
      <div
        className="min-h-screen pt-1"
        style={{
          background: `linear-gradient(180deg, ${albumData.bgColor} 0%, #020617 65%)`,
        }}
      >
        {/* Header */}
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end px-6">
          <img
            className="w-48 rounded shadow-lg"
            src={albumData.image}
            alt={albumData.name}
          />

          <div className="flex flex-col text-white">
            <p className="uppercase text-sm">Playlist</p>

            <h2 className="text-5xl font-bold mb-4 md:text-7xl">
              {albumData.name}
            </h2>

            <h4 className="text-gray-200">{albumData.desc}</h4>

            <p className="mt-2 text-sm text-gray-300">
              <b>Melody Plus</b> • <b>1,232,123 saves</b> • <b>50 songs</b>
              <span className="text-gray-400">, about 2hr 30 min</span>
            </p>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-8 text-[#d1d1d1]">
          <p><b className="mr-4">#</b>Title</p>
          <p>Album</p>
          <p className="hidden sm:block">Date Added</p>
          <img className="m-auto w-4" src={assets.clock_icon} alt="" />
        </div>

        <hr className="border-white/20 mx-6" />

        {/* Songs */}
        {songsData.map((item, index) => (
          <div
            key={item.id}
            onClick={() => playWithId(item.id)}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 px-6 py-3 items-center
            text-gray-200 hover:bg-white/10 cursor-pointer transition"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-6">{index + 1}</span>
              <img className="w-10 h-10 rounded" src={item.image} alt={item.name} />
              <div>
                <div className="text-white">{item.name.slice(0, 20)}</div>
                <div className="text-gray-400 text-sm">
                  {item.desc.slice(0, 20)}
                </div>
              </div>
            </div>

            <p className="text-sm">{albumData.name}</p>
            <p className="text-sm hidden sm:block">5 days ago</p>
            <p className="text-sm text-center">{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayAlbum;
