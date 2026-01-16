import React from "react";
import { Link } from "react-router-dom";

const TournamentCard = ({
  id,
  logo,
  state,
  title,
  date,
  description,
  location,
  enrolled,
  computedState,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className={`
    w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm
    bg-white rounded-2xl border border-gray-100 
    shadow-sm hover:shadow-lg 
    transition-all duration-300 
    flex flex-col gap-3 p-5
    ${computedState === "Outdated" ? "opacity-60 grayscale" : ""}
  `}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        {state && (
          <p className="text-blue-700 text-sm font-semibold text-start pt-2">
            {state}
          </p>
        )}

        <span
          className="
            text-xs px-2 py-1 rounded-full font-medium
            bg-yellow-100 text-yellow-700
          "
        >
          {computedState}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Info Section */}
      <div className="text-sm text-gray-500 space-y-1 pt-1">
        <p>
          <span className="font-medium text-gray-700">Date:</span>{" "}
          {formattedDate}
        </p>
        <p>
          <span className="font-medium text-gray-700">Location:</span>{" "}
          {location}
        </p>
        <p>
          <span className="font-medium text-gray-700">Enrolled:</span>{" "}
          {enrolled}
        </p>
      </div>

      {/* State */}


      {/* Button */}
      <Link to={`/tournament/${id}`} className="mt-2">
        <button
          disabled={computedState === "outdated"}
          className="
            w-full py-2.5 
            bg-blue-600 hover:bg-blue-700 
            text-white rounded-xl cursor-pointer
            font-medium transition-all duration-200
          "
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default TournamentCard;
