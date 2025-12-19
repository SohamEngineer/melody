import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./Drawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold mb-10 px-4">

        {/* Search */}
        <div className="relative w-full max-w-md">
          <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl pointer-events-none" />
          <input
            type="text"
            placeholder="Search songs, artists, albums..."
            className="w-full bg-[#474545] text-white pl-11 pr-4 py-3 rounded-full outline-none placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 ml-6">
          <p className="cursor-pointer text-lg text-gray-300 hover:text-white">About</p>
          <p className="cursor-pointer text-lg text-gray-300 hover:text-white">Contact</p>
          <p className="cursor-pointer text-lg text-gray-300 hover:text-white">Login</p>
          <button className="buttongradient text-black text-lg px-4 py-1.5 rounded-full hover:scale-105 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-4">
          <GiHamburgerMenu 
            onClick={() => setOpen(true)}
            className="text-white text-3xl cursor-pointer"
          />
        </div>
      </div>

      {/* Drawer */}
      <Drawer isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
