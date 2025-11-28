import React, { useState } from "react";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminCreateTournament() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: "",
        date: "",
        registrationDeadline: "",
        location: "",
        venue: "",
        image: "",
        entryFee: "",
        prizePool: "",
        rewardsFirst: "",
        rewardsSecond: "",
        rewardsThird: "",
        type: "",
        skillLevel: "",
        gender: "",
        ageCategory: "",
        sponsor: "",
        scheduleLink: "",
        category: "",
        state: "Upcoming",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.title || !form.date || !form.location || !form.category) {
            return alert("Please fill all required fields");
        }

        console.log("FORM SENDING:", form);

        // Convert reward fields into nested object
        const payload = {
            ...form,
            rewards: {
                first: form.rewardsFirst,
                second: form.rewardsSecond,
                third: form.rewardsThird,
            }
        };

        try {
            const res = await api.post("/api/tour/create", payload);
            console.log("RESPONSE:", res.data);

            toast.success("Tournament created successfully 🎉");

            navigate("/admin/tournaments");
        } catch (error) {
            console.log("ERROR:", error);
            alert(error.response?.data?.message || "Failed to create tournament");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-white border border-gray-200 
               rounded-2xl p-10 space-y-8"
            >
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-900">Create Tournament</h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Fill in the required details to create a new tournament
                    </p>
                </div>

                {/* Title */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Tournament Title</label>
                    <input
                        name="title"
                        onChange={handleChange}
                        className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-black transition"
                        placeholder="Enter tournament name"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-black transition"
                        placeholder="Write a short tournament description"
                    />
                </div>

                {/* Dates */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Tournament Date</label>
                        <input
                            type="date"
                            name="date"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Registration Deadline</label>
                        <input
                            type="date"
                            name="registrationDeadline"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                    </div>
                </div>

                {/* Location & Venue */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Location</label>
                        <input
                            name="location"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="City / Area"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Venue</label>
                        <input
                            name="venue"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="Venue details"
                        />
                    </div>
                </div>

                {/* Image URL */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        name="image"
                        onChange={handleChange}
                        className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-black transition"
                        placeholder="Paste image URL"
                    />
                </div>

                {/* Entry Fee / Prize Pool */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Entry Fee (₹)</label>
                        <input
                            name="entryFee"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="0"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Prize Pool (₹)</label>
                        <input
                            name="prizePool"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="Prize amount"
                        />
                    </div>
                </div>

                {/* Rewards */}
                <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">1st Prize</label>
                        <input
                            name="rewardsFirst"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="First place reward"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">2nd Prize</label>
                        <input
                            name="rewardsSecond"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="Second place reward"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">3rd Prize</label>
                        <input
                            name="rewardsThird"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="Third place reward"
                        />
                    </div>
                </div>

                {/* Type & Skills */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Tournament Type</label>
                        <input
                            name="type"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="Singles, Doubles, Knockout"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Skill Level</label>
                        <input
                            name="skillLevel"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="Beginner, Intermediate, Pro"
                        />
                    </div>
                </div>

                {/* Gender & Age Category */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Gender</label>
                        <input
                            name="gender"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="Male, Female, Mixed"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Age Category</label>
                        <input
                            name="ageCategory"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="U-16, U-19, Open"
                        />
                    </div>
                </div>

                {/* Sponsor */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Sponsor</label>
                    <input
                        name="sponsor"
                        onChange={handleChange}
                        className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-black transition"
                        placeholder="Sponsor Name"
                    />
                </div>

                {/* Schedule Link */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Schedule Link</label>
                    <input
                        name="scheduleLink"
                        onChange={handleChange}
                        className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-black transition"
                        placeholder="URL to match schedule"
                    />
                </div>

                {/* State & Category */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">State</label>
                        <select
                            name="state"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-white
          focus:outline-none focus:ring-2 focus:ring-black transition"
                        >
                            <option value="Upcoming">Upcoming</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Category</label>
                        <input
                            name="category"
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-black transition"
                            placeholder="Cricket, Football, Badminton"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="
        w-full py-3 bg-black text-white rounded-xl font-semibold 
        hover:bg-gray-900 transition
      "
                >
                    Create Tournament
                </button>
            </form>
        </div>

    );
}
