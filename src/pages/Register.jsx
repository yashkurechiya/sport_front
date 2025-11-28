import React, { useState, useContext } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const backend = import.meta.env.VITE_BACKEND_URL ?? "";

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Register user
      await api.post("api/auth/register", form);

      // Auto-login
      const res = await api.post("api/auth/login", {
        username: form.username,
        password: form.password,
      });

      // Save user & token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setUser(res.data.user);

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-200 
               rounded-2xl p-8 space-y-6"
      >
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Create Account</h2>
          <p className="text-gray-500 text-sm mt-1">Register to get started</p>
        </div>

        {/* Username */}
        <div>
          <label className="text-sm font-medium text-gray-700">Username</label>
          <input
            name="username"
            onChange={handleChange}
            className="
          w-full mt-1 px-4 py-3 rounded-xl border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-black focus:border-black
          transition
        "
            placeholder="Enter your username"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="
          w-full mt-1 px-4 py-3 rounded-xl border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-black focus:border-black
          transition
        "
            placeholder="Create a password"
          />
        </div>

        {/* Role */}
        <div>
          <label className="text-sm font-medium text-gray-700">Role</label>
          <select
            name="role"
            onChange={handleChange}
            className="
          w-full mt-1 px-4 py-3 rounded-xl border border-gray-300
          bg-white
          focus:outline-none focus:ring-2 focus:ring-black focus:border-black
          transition
        "
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
        w-full bg-black text-white py-3 rounded-xl font-semibold
        hover:bg-gray-900 transition
      "
        >
          Register
        </button>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer font-medium hover:underline"
          >
            Login Instead
          </span>
        </p>
      </form>
    </div>

  );
}
