import React, { useState } from "react";
import axios from "axios";
import aiadvisor from '../assets/advisor.png'

const SportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    hobbies: "",
    anyDisability: "",
    goals: "",
  });
  const [loading, setLoading] = useState(false);
  const [sports, setSports] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSports([]);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/suggest-sport",
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
      <h1 className="lg:text-4xl md:text-3xl text-xl text-center font-semibold mb-6 text-gray-900"> AI Sports Advisor</h1>
      <div className="flex lg:h-100 h-100  overflow-hidden ">
         <img src={aiadvisor} alt="" className="lg:rounded-r-3xl lg:h-100 h-100 lg:w-full  shadow-r-lg shadow-2xl shadow-blue-900" />
  
          <form
            onSubmit={handleSubmit}
            className="text-white p-6  absolute py-2 lg:right-50 grid grid-cols-2 gap-5  w-full max-w-lg space-y-4"
          >
            {Object.keys(formData).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="mb-1 text-sm font-semibold capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required={key === "name"}
                  className="p-2 rounded bg-white   shadow-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="lg:w-30  bg-red-600 shadow-md hover:bg-red-700 lg:h-13  text-xs md:text-sm lg:text-sm text-center lg:m-3 m-4 text-white cursor-pointer font-semibold rounded lg:py-2 transition-all"
            >
              {loading ? "Analyzing..." : "Get Sports Suggestion"}
            </button>
          </form>
        </div> 

          {sports.length > 0 && (
            <div className="lg:mt-8 mt-4 w-full grid lg:mx-30 px-5  lg:grid-cols-2 gap-6 max-w-7xl">
              {sports.map((sport, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 p-6 rounded-2xl shadow-lg shadow-gray-400  border-red-400"
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
