import {
  FiHome,
  FiPlusSquare,
  FiCompass,
  FiRadio,
  FiDisc,
  FiClock,
  FiHeart,
  FiMusic,
  FiPlus,
} from "react-icons/fi";
// import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleclick=()=>{
    navigate("/");
  }

  const navItem =
    "flex items-center gap-3 px-6 py-2 cursor-pointer text-sm text-gray-300 hover:text-white hover:bg-[#1b2560] transition rounded-md";

  const sectionTitle =
    "px-6 mt-6 mb-2 text-xs uppercase tracking-wide text-gray-400";

  return (
    <div className="w-[17%] h-screen p-2 text-white hidden lg:flex">
      <div className="w-full bg-[#000825] rounded-xl flex flex-col py-4">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="textgradient text-3xl font-extrabold">Mealody Plus</h1>
        </div>

        {/* Main Navigation */}
        <div className="flex flex-col gap-1">
          <div className={navItem} onClick={handleclick} >
            <FiHome size={18} />
            <span>Home</span>
          </div>

          <div className={navItem}>
            <FiPlusSquare size={18} />
            <span>Create</span>
          </div>

          <div className={navItem}>
            <FiCompass size={18} />
            <span>Discover</span>
          </div>

          <div className={navItem}>
            <FiRadio size={18} />
            <span>Radio</span>
          </div>

          <div className={navItem}>
            <FiDisc size={18} />
            <span>Albums</span>
          </div>
        </div>

        {/* Library */}
        <p className={sectionTitle}>The Library</p>
        <div className="flex flex-col gap-1">
          <div className={navItem}>
            <FiClock size={18} />
            <span>Recently Added</span>
          </div>
        </div>

        {/* Playlists */}
        <p className={sectionTitle}>Playlists</p>
        <div className="flex flex-col gap-1">
          <div className={navItem}>
            <FiHeart size={18} />
            <span>Your Favorites</span>
          </div>

          <div className={navItem}>
            <FiMusic size={18} />
            <span>Your Playlists</span>
          </div>

          <div className={`${navItem} text-[#38BDF8] fornt-bold text-lg `}>
            <FiPlus size={18} />
            <span>Add Playlist</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
