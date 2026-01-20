import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

export default function AdminCreateTournament() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    api.get("/api/tour/my-tournaments", {})
      .then(res => setTournaments(res.data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-10 mt-20">

      <h1 className="text-3xl font-bold">My Tournaments</h1>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((t) => (
          <div key={t._id} className="p-5 shadow rounded bg-white">
            <h2 className="text-xl font-semibold">{t.title}</h2>
            <p>{t.description}</p>
            <p className="text-gray-600">Date: {t.date.split("T")[0]}</p>
            <p className="text-gray-600">Location: {t.location}</p>
            <p className="text-blue-600">Enrolled: {t.enrolled}</p>

          <Link to={`/admin/tournaments/${t._id}/participants`}>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
              View Enrollments
            </button>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
