import { useEffect, useState } from "react";
import TournamentCard from "../components/TournamentCard";
import api from "../api/axios";
import { toast } from "react-toastify";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          toast.error("Please login again");
          return;
        }

        const res = await api.get("/api/users/user", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(res.data.user);
        setTournaments(res.data.tournaments);
      } catch (error) {
        toast.error("Failed to load profile");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // ⏳ Loading state
  if (loading) {
    return (
      <div className="mt-32 text-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-white py-12 sm:py-20">
  <div className="max-w-6xl mt-15 mx-auto px-4 sm:px-6">

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Left Profile Card */}
      <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        <div className="flex flex-col items-center text-center">

          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-100 flex items-center justify-center text-2xl sm:text-3xl font-semibold text-slate-600">
            {user?.username?.charAt(0).toUpperCase()}
          </div>

          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-slate-900">
            {user?.username}
          </h2>

          <p className="text-slate-500 mt-1 text-sm sm:text-base break-all">
            {user?.email}
          </p>

          <span className="mt-3 inline-block px-4 py-1 rounded-full text-sm bg-slate-100 text-slate-700 capitalize">
            {user?.role}
          </span>

        </div>
      </div>

      {/* Right Content */}
      <div className="lg:col-span-2 space-y-8">

        {/* Account Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-6">
            Account Information
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Username
              </p>
              <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">
                {user?.username || "N/A"}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Email
              </p>
              <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900 break-all">
                {user?.email || "N/A"}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Role
              </p>
              <span className="mt-2 inline-block rounded-full bg-white px-4 py-1 text-sm font-medium capitalize text-slate-800 shadow-sm">
                {user?.role || "N/A"}
              </span>
            </div>

          </div>
        </div>

        {/* Tournaments */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-6">
            My Tournaments
          </h3>

          {tournaments.length === 0 ? (
            <p className="text-slate-500 text-sm sm:text-base">
              You haven’t enrolled in any tournaments yet.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {tournaments.map((tour) => (
                <TournamentCard key={tour._id} title={tour.title} />
              ))}
            </div>
          )}
        </div>

        {/* Logout Button */}
        <div className="flex justify-center sm:justify-end">
          <button
            onClick={handleLogout}
            className="px-6 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition w-full sm:w-auto"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  </div>
</div>

  );

}
