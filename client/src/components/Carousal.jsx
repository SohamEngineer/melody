import { useEffect, useState, useRef } from "react";
import { assets } from "../assets/assets";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";


const slides = [
  {
    id: 1,
    title: "Ed Sheeran",
    subtitle: "Verified Artist",
    listeners: "82,736,050 monthly listeners",
    image: assets.hrn,
  },
  {
    id: 2,
    title: "Arijit Singh",
    subtitle: "Verified Artist",
    listeners: "96,000,000 monthly listeners",
    image: assets.arijit,
  },
  {
    id: 3,
    title: "The Weeknd",
    subtitle: "Verified Artist",
    listeners: "112,000,000 monthly listeners",
    image: assets.shreya,
  },
];

const SLIDE_INTERVAL = 4000;

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    resetAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const slide = slides[current];

  return (
    <div className="relative w-full h-[340px] rounded-xl overflow-hidden bg-carousel-violet px-10">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row justify-around items-center px-8 text-white transition-all duration-700 delay-300">
        {/* Text */}
        <div className="max-w-xl">
          <p className="text-sm text-blue-400 font-semibold">
            ✔ {slide.subtitle}
          </p>

          <h1 className="text-4xl font-bold mt-1">
            {slide.title}
          </h1>

          <p className="text-sm text-gray-300 mt-2">
            {slide.listeners}
          </p>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 bg-[#38BDF8] text-black font-semibold rounded-full hover:scale-105 transition">
              Play
            </button>
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              Following
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-6 md:mt-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-48 md:w-96 h-auto rounded-xl transition-opacity duration-700 delay-300"
          />
        </div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20
        w-12 h-12 rounded-full  text-white
        flex items-center justify-center  transition"
      >
        <FaCircleChevronLeft className="w-full h-full" />

      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20
        w-12 h-12 rounded-full text-white
        flex items-center justify-center transition"
      >
        <FaCircleChevronRight  className="w-full h-full" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
