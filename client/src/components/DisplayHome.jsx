import Navbar from "./Navbar";
// import HeroCarousel from "./";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import HeroCarousel from "./Carousal";

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      {/* Hero Carousel */}
      <HeroCarousel />

     

      {/* Biggest Hits */}
      <div className="mb-6 bg-violet-depth mt-10 p-4">
        <h1 className="py-6 font-bold text-4xl text-center">Today&apos;s <span className="text-gradient">Biggest Hits</span>  </h1>
        <div className="flex gap-4 overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

       {/* Featured Charts */}
      <div className="mb-6 mt-8 bg-violet-depth p-4">
        <h1 className="py-6 font-bold text-4xl text-center">Featured <span className="text-gradient">Charts</span> </h1>
        <div className="flex gap-4 overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
