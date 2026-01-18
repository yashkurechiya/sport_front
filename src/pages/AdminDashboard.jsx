import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function AdminDashboard() {
  const [tournaments, setTournaments] = useState([]);
  const [totalEnrollments, setTotalEnrollments] = useState(0);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
 

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload(); // refresh page to update navbar
  };


  const tokeN = localStorage.getItem("token");

  // Fetch tournaments
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/api/tour/my-tournaments");
        setTournaments(res.data.data);
        setCount(res.data)
        

        // Count total enrollments across all tournaments
       
        
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!tokeN) {
      navigate("/login");
    }
  }, [tokeN, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-28 pb-20">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 
                 rounded-xl font-medium transition"
        >
          Logout
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

        {/* Total Tournaments */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
          <h2 className="text-gray-600 text-sm font-medium">Total Tournaments</h2>
          <p className="text-4xl font-semibold text-blue-600 mt-3">
            {count.count}
          </p>
        </div>

        {/* Total Enrollments */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
          <h2 className="text-gray-600 text-sm font-medium">Total Enrollments</h2>
          <p className="text-4xl font-semibold text-green-600 mt-3">
            {totalEnrollments.data?.enrolled || 0}
          </p>
        </div>

        {/* Upcoming Events */}
        {/* <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
          <h2 className="text-gray-600 text-sm font-medium">Upcoming Events</h2>
          <p className="text-4xl font-semibold text-purple-600 mt-3">
            {tournaments.filter((t) => new Date(t.date) > new Date()).length}
          </p>
        </div> */}
      </div>

      {/* Actions */}
      <div className="mt-14 flex flex-wrap gap-4">
        <button
          onClick={() => navigate("/admin/create-tournament")}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 
                 rounded-xl font-medium transition"
        >
          + Create Tournament
        </button>

        <button
          onClick={() => navigate("/admin/tournaments")}
          className="bg-gray-900 hover:bg-black text-white py-3 px-6 
                 rounded-xl font-medium transition"
        >
          View All Tournaments
        </button>
      </div>

      {/* Recent Tournaments */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Recent Tournaments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tournaments.map((t) => (
            <div
              key={t._id}
              className="bg-white border border-gray-200 rounded-2xl p-6 
                     transition hover:border-gray-300"
            >
              <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>

              <p className="text-gray-600 mt-1 line-clamp-2">
                {t.description}
              </p>

              <div className="mt-4 space-y-1 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(t.date).toLocaleDateString("en-IN")}
                </p>

                <p>
                  <span className="font-medium">Enrolled:</span>{" "}
                  {t.enrolled || 0}
                </p>
              </div>

              <button
                onClick={() =>
                  navigate(`/admin/tournaments/${t._id}/enrollments`)
                }
                className="w-full mt-5 py-2.5 bg-blue-600 hover:bg-blue-700 
                       text-white rounded-xl font-medium transition"
              >
                View Enrollments
              </button>
            </div>
          ))}

          {tournaments.length === 0 && (
            <p className="text-gray-500 text-lg mt-4">
              No tournaments created yet.
            </p>
          )}
        </div>
      </div>
    </div>



  );
}
