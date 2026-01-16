import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Coach = () => {
  const navigate = useNavigate();
  const [coaches, setCoaches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TEMP DATA (replace with API later)
    setTimeout(() => {
      setCoaches([
        {
          _id: "1",
          name: "Rahul Sharma",
          sport: "Cricket",
          experience: 8,
          image: "https://i.pravatar.cc/300?img=12",
          isAvailableForChat: true
        },
        {
          _id: "2",
          name: "Amit Verma",
          sport: "Football",
          experience: 6,
          image: "https://i.pravatar.cc/300?img=32",
          isAvailableForChat: false
        },
        {
          _id: "3",
          name: "Neha Singh",
          sport: "Badminton",
          experience: 5,
          image: "https://i.pravatar.cc/300?img=47",
          isAvailableForChat: true
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl mt-20 font-bold text-gray-900">
          Professional Coaches
        </h1>
        <p className="text-gray-600 mt-2">
          Connect with experienced coaches and take your game to the next level
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center text-gray-500 text-lg">
            Loading coaches...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <div
                key={coach._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="h-56 w-full object-cover"
                />

                {/* Info */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {coach.name}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    {coach.sport} Coach
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Experience: {coach.experience} years
                  </p>

                  {/* Status */}
                  <div className="mt-4">
                    {coach.isAvailableForChat ? (
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                        Available for chat
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-600">
                        Offline
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => navigate(`/coach/${coach._id}`)}
                      className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      View Profile
                    </button>

                    <button
                      disabled={!coach.isAvailableForChat}
                      onClick={() => navigate(`/chat/${coach._id}`)}
                      className={`flex-1 py-2 rounded-lg text-white transition
                        ${
                          coach.isAvailableForChat
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                      Chat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Coach;
