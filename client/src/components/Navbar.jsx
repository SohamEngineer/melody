// import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  // const naviagte = useNavigate()
  return (
    <>
      <div className="w-full flex justify-around items-center font-semibold mb-10">

  {/* Left: Search */}
  <div className="relative w-full max-w-md">
  <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl font-bold pointer-events-none " />

  <input
    type="text"
    placeholder="Search songs, artists, albums..."
    className="w-full bg-[#474545] text-white pl-11 pr-4 py-3 rounded-full outline-none placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
  />
</div>


  {/* Right: Actions */}
  <div className="flex justify-around
  items-center gap-4 ml-6">

    <p className="cursor-pointer text-lg text-gray-300 hover:text-white">
      About
    </p>

    <p className="cursor-pointer text-lg text-gray-300 hover:text-white">
      Contact
    </p>

    <p className="cursor-pointer text-lg text-gray-300 hover:text-white">
      Login
    </p>

    <button className="buttongradient text-black text-lg px-4 py-1.5 rounded-full hover:scale-105 transition">
      Sign Up
    </button>

  </div>
</div>

    </>
  );
};

export default Navbar;
