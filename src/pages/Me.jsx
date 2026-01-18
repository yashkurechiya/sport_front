import { useEffect, useState } from "react";
import axios from "axios";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";

const ME = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };


    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const res = await api.get(
                    "/api/users/me");

                setUsers(res.data.users);
                setTournaments(res.data.tournaments);
            } catch (err) {
                console.error(err);
                setError("Failed to load dashboard data");
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) {
        return <div className="p-6">Loading dashboard...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-500">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 lg:px-10">

            {/* 🔝 Top Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
                    Super Admin Dashboard
                </h1>

                <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg text-sm font-semibold
                     bg-red-500 text-white hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>

            {/* 📊 Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-white shadow rounded-xl p-6">
                    <h2 className="text-gray-500 text-sm font-medium">Total Users</h2>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                        {users.length}
                    </p>
                </div>

                <div className="bg-white shadow rounded-xl p-6">
                    <h2 className="text-gray-500 text-sm font-medium">
                        Total Tournaments
                    </h2>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                        {tournaments.length}
                    </p>
                </div>
            </div>

            {/* 👥 Users Table */}
            <div className="bg-white shadow rounded-xl p-6 mb-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Registered Users
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                                    Email
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                                    Role
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                                    Joined
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user._id}
                                    className="border-t hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-3">{user.name}</td>
                                    <td className="px-4 py-3">{user.email}</td>
                                    <td className="px-4 py-3 capitalize font-medium">
                                        {user.role}
                                    </td>
                                    <td className="px-4 py-3">
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 🏆 Tournaments Table */}
            <div className="bg-white shadow rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Tournaments
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                                    Title
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                                    Created By
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                                    Role
                                </th>
                                <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                                    Created At
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tournaments.map((t) => (
                                <tr
                                    key={t._id}
                                    className="border-t hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-3">{t.title}</td>
                                    <td className="px-4 py-3">
                                        {t.createdBy?.name || "N/A"}
                                    </td>
                                    <td className="px-4 py-3 capitalize font-medium">
                                        {t.createdBy?.role || "N/A"}
                                    </td>
                                    <td className="px-4 py-3">
                                        {new Date(t.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ME;
