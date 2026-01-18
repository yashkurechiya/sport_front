import React from "react";
import { Link } from "react-router-dom";
import HomeSportCard from "../components/HomeSportCard";

const GetDetail = () => {
  const data = [
    { id: 1, logo: "https://cdn-icons-png.flaticon.com/128/1099/1099535.png", name: "Table Tennis", link: "/sport/tabletennis" },
    { id: 2, logo: "https://cdn-icons-png.flaticon.com/128/177/177413.png", name: "Hockey", link: "/sport/hockey" },
    { id: 3, logo: "https://cdn-icons-png.flaticon.com/128/2910/2910816.png", name: "Archery", link: "/sport/archery" },
    { id: 4, logo: "https://cdn-icons-png.flaticon.com/128/1267/1267761.png", name: "Running", link: "/sport/running" },
    { id: 5, logo: "https://cdn-icons-png.flaticon.com/128/2633/2633874.png", name: "Badminton", link: "/sport/badminton" },
    { id: 6, logo: "https://cdn-icons-png.flaticon.com/128/934/934640.png", name: "Shooting", link: "/sport/shooting" },
    { id: 7, logo: "https://cdn-icons-png.flaticon.com/128/33/33838.png", name: "BasketBall", link: "/sport/basketball" },
    { id: 8, logo: "https://cdn-icons-png.flaticon.com/128/17366/17366326.png", name: "Deadlifting", link: "/sport/deadlifting" }
  ];

  return (
    <section className="py-10 bg-gradient-to-br ">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="lg:text-4xl text-2xl font-bold text-slate-900">Choose Your Sport</h1>
        <p className="text-slate-600 mt-3 mb-14">
          Select a sport to get personalized training recommendations
        </p>

          <HomeSportCard />
         

        <div className="flex justify-center mt-16">
          <Link to="/sport">
            <button className="lg:px-10 cursor-pointer lg:py-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
              Know More →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GetDetail;
