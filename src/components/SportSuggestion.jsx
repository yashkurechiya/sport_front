import React from "react";

const SportSuggestions = ({ data }) => {
  if (!data || !data.sports) return <p>No suggestions available.</p>;

  return (
    <div className="space-y-6">
      {data.sports.map((sport, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-xl shadow-lg text-white"
        >
          <h2 className="text-2xl font-bold mb-2 text-blue-400">
            {index + 1}. {sport.name}
          </h2>

          <div className="mb-2">
            <h3 className="font-semibold text-lg text-yellow-400">Why it suits you:</h3>
            <ul className="list-disc list-inside">
              {sport.why.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-2">
            <h3 className="font-semibold text-lg text-yellow-400">Beginner Roadmap:</h3>
            <ol className="list-decimal list-inside">
              {sport.roadmap.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="mb-2">
            <h3 className="font-semibold text-lg text-yellow-400">Training Tips:</h3>
            <ul className="list-disc list-inside">
              {sport.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>

          <p className="mt-2 font-semibold text-green-300">
            Motivation: {sport.motivation}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SportSuggestions;
