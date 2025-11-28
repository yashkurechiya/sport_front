import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import Loader from "../components/Loader";

export default function TourParticipants() {
  const { id } = useParams();
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchParticipants = async () => {
    try {
      const res = await api.get(`/api/tour/${id}/participants`);
      setParticipants(res.data.participants);
    } catch (err) {
      console.log("FETCH ERROR:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  if (loading)
    return <div className="mt-20 p-10 text-center text-xl"><Loader /></div>;

  return (
    <div className="pt-32 pb-20 px-6 flex justify-center">
  <div className="w-full max-w-4xl bg-white border border-gray-200 
                  rounded-2xl p-10 shadow-sm">

    {/* Header */}
    <h1 className="text-3xl font-semibold text-gray-900 text-center tracking-tight">
      Enrolled Participants
    </h1>
    <p className="mt-2 text-center text-gray-500 text-sm">
      List of all users registered for this tournament
    </p>

    {/* Empty State */}
    {participants.length === 0 && (
      <div className="mt-10 text-center text-gray-500 text-lg">
        No participants yet.
      </div>
    )}

    {/* Participants List */}
    <div className="mt-10 space-y-4">
      {participants.map((p) => {
        const username = p.userId?.username || "Unknown User";
        const initials = username
          .split(" ")
          .map((n) => n[0]?.toUpperCase())
          .slice(0, 2)
          .join("");

        return (
          <div
            key={p._id}
            className="
              group relative flex items-center justify-between 
              border border-gray-200 bg-gray-50 
              rounded-xl py-4 px-5 transition
              hover:bg-white hover:border-gray-300
            "
          >
            {/* Spotlight Hover Effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 
                            rounded-xl transition"></div>

            {/* Left Section */}
            <div className="relative flex items-center gap-4">

              {/* Avatar */}
              <div
                className="
                  w-12 h-12 rounded-full bg-gray-900 text-white 
                  flex items-center justify-center text-lg font-semibold
                "
              >
                {initials}
              </div>

              {/* User Details */}
              <div className="space-y-1">
                <p className="text-base font-medium text-gray-900">
                  {username}
                </p>
                <p className="text-gray-500 text-sm">
                  Enrolled At:{" "}
                  {new Date(p.enrolledAt).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Role Badge */}
            <span
              className={`
                relative text-sm px-3 py-1 rounded-full font-medium
                ${
                  p.userId?.role === "admin"
                    ? "bg-purple-100 text-purple-700 border border-purple-200"
                    : "bg-green-100 text-green-700 border border-green-200"
                }
              `}
            >
              {p.userId?.role}
            </span>
          </div>
        );
      })}
    </div>
  </div>
</div>

  );
}
