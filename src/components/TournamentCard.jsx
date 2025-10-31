import React from 'react';

const TournamentCard = ({ logo, status, title, date, description, location, enrolled, state }) => {
  return (
    <div className="
      border border-gray-200 rounded-lg shadow-md bg-white 
      hover:scale-[1.02] transition-transform duration-300 
      flex flex-col justify-between 
      w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm 
      p-4 sm:p-5 md:p-6
    ">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-lg sm:text-xl font-bold">{logo}</h1>
        <span className="text-[10px] sm:text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
          {status}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-base sm:text-lg md:text-xl font-semibold mb-2 line-clamp-2">{title}</h1>

      {/* Description */}
      <p className="text-gray-700 text-sm sm:text-base mb-3 line-clamp-3">{description}</p>

      {/* Info Section */}
      <div className="space-y-1 text-gray-500 text-xs sm:text-sm">
        <p><span className="font-medium">Date:</span> {date}</p>
        <p><span className="font-medium">Location:</span> {location}</p>
        <p>Enrolled: <span className="font-semibold text-gray-700">{enrolled}</span></p>
      </div>

      {/* State */}
      <div className="mt-3">
        <h3 className="text-green-700 text-sm sm:text-md text-center italic font-semibold">{state}</h3>
      </div>

      {/* Button */}
      <button className="
        bg-orange-500 text-white py-2 px-3 sm:px-4 rounded-md 
        hover:bg-orange-600 transition-colors 
        w-full mt-4 text-sm sm:text-base
      ">
        View Details
      </button>
    </div>
  );
};

export default TournamentCard;
