import React, { useState } from "react";
import axios from "axios";
import aiadvisor from '../assets/advisor.png'
import api from "../api/axios";

const SportForm = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    hobbies: "",
    goals: "",
  });
  const [loading, setLoading] = useState(false);
  const [sports, setSports] = useState([]);

  const backend = import.meta.env.VITE_BACKEND_URL ?? '';
  const base = backend.replace(/\/$/, ''); // remove trailing slash if present

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSports([]);

    try {
      const response = await api.post(
        `/api/suggest-sport`,
        formData
      );

      const aiText = response.data;
      const jsonMatch = aiText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        setSports(parsed.sports || []);
      } else {
        console.warn("No JSON found in AI response");
      }
    } catch (err) {
      console.error("Error fetching sports:", err);
    }

    setLoading(false);
  };

  return (
    <>
          <h1 className="lg:text-4xl text-2xl text-center my-10 font-bold text-slate-900"> AI Sports Advisor</h1>
      <div className="flex lg:h-100 h-auto lg:bg-white rounded-lg bg-zinc-100 lg:p-0 p-5 overflow-hidden lg:m-20 m-10 ">

        <form
          onSubmit={handleSubmit}
          className="
    relative lg:max-w-6xl mx-auto 
    grid grid-cols-1 lg:grid-cols-2 
    gap-10 lg:gap-16 
     sm:px-6 lg:px-8
    items-center "
        >
          {/* Left Hero Text */}
          <div className="space-y-5 text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Your Personal <br className="hidden sm:block" /> AI Sports Coach
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Get personalized training, nutrition, and sport recommendations based on your body, goals, and interests.
            </p>

            {/* <button
              type="button"
              className="
        bg-blue-600 hover:bg-blue-700 transition 
        text-white font-semibold 
        px-7 py-3 sm:px-8 sm:py-4 
        rounded-xl shadow-lg
      "
            >
              Get My AI Plan →
            </button> */}
          </div>

          {/* Right AI Advisor Card */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-xl p-5 border border-white/80 shadow rounded-2xl lg:p-6 sm:p-8">

              {/* Card Title */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-5">
                  <p className="lg:text-4xl text-xl text-center font-bold text-slate-900">
                  AI Sports Advisor
                </p>
              </div>

              {/* Inputs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-5">
                {Object.keys(formData).map((key) => (
                  <div key={key} className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-700 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>

                    <input
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      required={key === "name"}
                      className="
                w-full px-3 py-2 
                rounded-lg border border-slate-200 
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
                      placeholder={key}
                    />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="submit"
                disabled={loading}
                className="
          mt-6 sm:mt-8 w-full 
          bg-blue-600 hover:bg-blue-700 transition 
          text-white lg:text-lg text-xs font-semibold py-3 
          rounded-xl shadow-lg disabled:opacity-60
        "
              >
                {loading ? "Analyzing..." : "Generate My Training Plan →"}
              </button>
            </div>
          </div>
        </form>




      </div>

      {sports.length > 0 && (
        <div className="lg:mt-8 mt-4 w-full grid lg:mx-30 px-5  lg:grid-cols-2 gap-6 max-w-7xl">
          {sports.map((sport, idx) => (
            <div
              key={idx}
              className="bg-gray-200 p-6 rounded-2xl shadow-lg shadow-gray-400  border-blue-400"
            >
              <h2 className="lg:text-2xl text-xl font-bold mb-2">{sport.name}</h2>

              <div className="mb-2">
                <h3 className="font-semibold lg:text-lg text-sm text-black">Why:</h3>
                <ul className="list-disc  lg:text-sm text-sm list-inside">
                  {sport.why.map((item, i) => (
                    <li key={i} >{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-2">
                <h3 className="font-semibold lg:text-lg text-sm text-black">Roadmap:</h3>
                <ul className="list-disc lg:text-sm text-sm list-inside">
                  {sport.roadmap.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-2">
                <h3 className="font-semibold lg:text-lg text-sm text-black">Tips:</h3>
                <ul className="list-disc lg:text-sm text-sm list-inside">
                  {sport.tips.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-2 lg:text-lg text-sm italic text-blue-600">
                Motivation: {sport.motivation}
              </p>
            </div>
          ))}
        </div>
      )}

    </>
  );
};

export default SportForm;
