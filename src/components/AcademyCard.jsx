import React from 'react'

const AcademyCard = ({ logo, Title, Rating, sports, location, contact, email, description, training }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8 space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-600">
            {logo}
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">{Title}</h1>
            <p className="text-yellow-500 font-medium text-sm sm:text-base">{Rating}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>

      {/* Info Section */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6 text-gray-700 text-sm sm:text-base">
        <p><span className="font-semibold">📍 Location:</span> {location}</p>
        <p><span className="font-semibold">📞 Contact:</span> {contact}</p>
        <p><span className="font-semibold">✉️ Email:</span> {email}</p>
      </div>

      {/* Training + Sports Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        
        {/* Training Overview */}
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Training Overview</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
            {training.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Sports Offered */}
        <div className="flex-1 md:border-l-2 md:pl-4 border-gray-300">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Sports Offered</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
            {sports.map((sport, index) => (
              <li key={index}>{sport}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default AcademyCard
