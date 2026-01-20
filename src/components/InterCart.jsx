import React from "react";
import { Link } from "react-router-dom";

const InterCart = () => {
  return (
    <div
      className="
        flex 
        gap-4 
        px-4 
        py-3
        overflow-x-auto 
        flex-nowrap
        lg:flex-wrap 
        lg:overflow-visible
        lg:justify-center
        lg:gap-10
        scrollbar-hide
      "
    >
      
        <div className="relative cursor-pointer h-40 sm:h-44 lg:h-56 w-64 lg:w-80 overflow-hidden rounded-lg group">
          <img
          loading="lazy"
            src="https://cdn.britannica.com/55/235355-050-2CE9732E/Usain-Bolt-Jamaica-gold-medal-breaking-world-record-200m-Beijing-Summer-Olympics-August-20-2008.jpg"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            alt="Olympics"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <h1 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xl lg:text-2xl font-bold">
            Olympics
          </h1>
        </div>
       

      {/* Commonwealth */}
    
        <div className="relative cursor-pointer h-40 sm:h-44 lg:h-56 w-64 lg:w-80 overflow-hidden rounded-lg group">
          <img
            src="https://cdn.mos.cms.futurecdn.net/epJpgLY2h2TnuT8WoS5ZZN-1280-80.jpg.webp"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            alt="Commonwealth Games"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <h1 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white text-lg lg:text-xl font-bold">
            Commonwealth <br /> Games
          </h1>
        </div>
  

      {/* Asian Games */}
      
        <div className="relative cursor-pointer h-40 sm:h-44 lg:h-56 w-64 lg:w-80 overflow-hidden rounded-lg group">
          <img
            src="https://indianexpress.com/wp-content/uploads/2018/08/asian-games-pv-sindhu-759.jpg"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            alt="Asian Games"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <h1 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xl lg:text-2xl font-bold">
            Asian Games
          </h1>
        </div>
   
    </div>
  );
};

export default InterCart;
