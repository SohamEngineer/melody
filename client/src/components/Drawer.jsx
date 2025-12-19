import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const MobileDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#1f1f1f] z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-white text-lg font-semibold">Menu</h2>
          <IoClose
            className="text-white text-2xl cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">

         

          {/* Links */}
          <div className="flex flex-col gap-4 text-gray-300 text-lg">
            <p className="hover:text-white cursor-pointer">About</p>
            <p className="hover:text-white cursor-pointer">Contact</p>
            <p className="hover:text-white cursor-pointer">Login</p>
          </div>

          {/* CTA */}
          <button className="w-full buttongradient text-black text-lg py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
