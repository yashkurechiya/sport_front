import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios.js";
import Loader from "./Loader.jsx";
import { toast } from "react-toastify";

export default function ViewTour() {
  const { id } = useParams();
  const [tournament, setTournament] = useState(null);

  // Fetch tournament by ID
  const fetchTournament = async () => {
    try {
      const res = await api.get(`/api/tour/${id}`);
      setTournament(res.data.data);
    } catch (err) {
      console.log("FETCH ERROR:", err);
    }
  };

  // Enroll user
  const handleEnroll = async () => {

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to enroll");
      // alert("Please log in to enroll");
      return;
    }
    try {
      const res = await api.post(`/api/tour/enroll/${id}`);
      toast.success("Enrolled successfully!");
      fetchTournament();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to enroll");
    }
  };

  useEffect(() => {
    fetchTournament();
  }, []);

  if (!tournament)
    return <div className="p-10 mt-20 text-xl text-center"><Loader /></div>;

  return (
    <div className="max-w-6xl mx-auto mt-30 lg:px-30 px-4 pb-16">

      

      {/* Banner Image */}
      {tournament.image && (
        <div className="mt-6">
          <img
            src={tournament.image}
            alt={tournament.title}
            className="w-full h-64 rounded-xl object-cover border border-gray-200"
          />
        </div>
      )}

      {/* Content Sections */}
      <div className="mt-10 space-y-8">

        {/* Title */}
        <div>
          <label className="text-sm font-medium text-gray-700">Tournament Name</label>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            {tournament.title}
          </p>
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-700">Description</label>
          <p className="mt-1 text-gray-600 leading-relaxed">
            {tournament.description}
          </p>
        </div>

        {/* Category & State */}
        <div>
          <label className="text-sm font-medium text-gray-700">Category</label>
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="px-3 py-1 text-sm rounded-full border border-blue-300 bg-blue-50 text-blue-700">
              {tournament.category}
            </span>
            <span className="px-3 py-1 text-sm rounded-full border border-green-300 bg-green-50 text-green-700">
              {tournament.state}
            </span>
          </div>
        </div>

        {/* Grid Details */}
        <div className="grid sm:grid-cols-2 gap-6 pt-3">
          <Detail label="Date" value={tournament.date?.split("T")[0]} />
          <Detail label="Registration Deadline" value={tournament.registrationDeadline?.split("T")[0] || "N/A"} />

          <Detail label="Location" value={tournament.location} />
          <Detail label="Venue" value={tournament.venue || "N/A"} />

          <Detail label="Entry Fee" value={`₹ ${tournament.entryFee || "0"}`} />
          <Detail label="Prize Pool" value={`₹ ${tournament.prizePool || "0"}`} />

          <Detail label="Tournament Type" value={tournament.type || "N/A"} />
          <Detail label="Skill Level" value={tournament.skillLevel || "N/A"} />

          <Detail label="Gender Category" value={tournament.gender || "N/A"} />
          <Detail label="Age Category" value={tournament.ageCategory || "N/A"} />

          <Detail label="Sponsor" value={tournament.sponsor || "N/A"} />

          <Detail
            label="Schedule Link"
            value={
              tournament.scheduleLink ? (
                <a
                  href={tournament.scheduleLink}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Schedule
                </a>
              ) : "N/A"
            }
          />

          <Detail label="Enrolled Players" value={tournament.enrolled} />
        </div>

        {/* Rewards */}
        <div>
          <label className="text-sm font-medium text-gray-700">Rewards</label>
          <div className="mt-2 border border-gray-200 rounded-xl p-4 space-y-2 bg-gray-50">
            {tournament.rewards?.first && <p><strong>1st Prize:</strong> {tournament.rewards.first}</p>}
            {tournament.rewards?.second && <p><strong>2nd Prize:</strong> {tournament.rewards.second}</p>}
            {tournament.rewards?.third && <p><strong>3rd Prize:</strong> {tournament.rewards.third}</p>}
            {!tournament.rewards?.first && (
              <p className="text-gray-500">No reward information available</p>
            )}
          </div>
        </div>

      </div>

      {/* CTA Button */}
      <button
        onClick={handleEnroll}
        className="
      w-full mt-12 py-3 text-white text-lg
      bg-black rounded-xl font-medium
      hover:bg-gray-900 transition
    "
      >
        Enroll Now
      </button>
    </div>


  );
}

/* Reusable Detail Component */
function Detail({ label, value }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-500">{label}</label>
      <p className="mt-1 text-gray-900 font-medium">{value}</p>
    </div>
  );
}
