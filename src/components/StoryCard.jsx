import React, { useState, useEffect } from "react";

const StoryCard = ({ name, sport, link, description, img }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile / tablet screens
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Handle click only for mobile
  const handleClick = () => {
    if (isMobile) setIsActive((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative overflow-hidden lg:h-80 h-50 md:h-70 shadow-md p-4 lg:w-64 group transition-transform duration-300 ${
        isActive ? "scale-105" : ""
      }`}
    >
      {/* Background image */}
      <img
        className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ${
          isActive ? "scale-105" : "group-hover:scale-105"
        }`}
        src={img}
        alt={name}
      />

      {/* Gradient overlay */}
      <div
        className={`inset-0 absolute z-10 bg-gradient-to-t from-black/100 via-black/70 to-transparent transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      ></div>

      {/* Content */}
      <div
        className={`absolute lg:top-20 z-10 text-start text-white transition-all duration-300 ${
          isActive
            ? "flex flex-col opacity-100 translate-y-0"
            : "hidden group-hover:flex group-hover:flex-col group-hover:opacity-100 group-hover:translate-y-0"
        }`}
      >
        <p className="lg:font-semibold lg:text-lg text-sm text-yellow-200">{sport}</p>
        <h2 className="lg:text-xl font-bold">{name}</h2>
        <p className="lg:mt-2 lg:my-1 lg:text-sm text-xs">{description.slice(0, 90)}...</p>
        <a href={link}>
          <button className="lg:p-2 p-[4px] bg-blue-600 cursor-pointer hover:bg-blue-800 text-sm lg:font-semibold rounded-lg">
            Know
          </button>
        </a>
      </div>
    </div>
  );
};

export default StoryCard;
