import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b mt-10  text-black">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          About <span className="text-blue-400">Goindia</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-700 text-lg md:text-xl">
          A modern sports platform built to connect players, teams, and tournaments
          through technology.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-12 md:grid-cols-2">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Goindia is designed for sports enthusiasts who want a simple and
            reliable way to explore tournaments, participate in events, and
            stay updated with real-time match information.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you are a casual player, competitive athlete, or an event
            organizer, Goindia brings everything together in one powerful platform.
          </p>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to digitize the sports ecosystem by providing a
            centralized platform that improves visibility, engagement, and
            accessibility for players and organizers alike.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe technology should empower sports communities and make
            participation easier for everyone.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="  py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            What We <span className="text-blue-400">Offer</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {[
              {
                title: "Tournament Discovery",
                desc: "Explore international, national, and local tournaments effortlessly.",
              },
              {
                title: "Easy Participation",
                desc: "Join tournaments and manage participation with a few clicks.",
              },
              {
                title: "Real-Time Updates",
                desc: "Stay updated with live schedules, match status, and results.",
              },
              {
                title: "Secure Platform",
                desc: "Role-based access for players, organizers, and admins.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Technology Behind <span className="text-blue-400">Goindia</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          Built using modern technologies to ensure speed, security, and scalability.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["React", "Node.js", "Express", "MongoDB", "WebSockets"].map(
            (tech, i) => (
              <span
                key={i}
                className="px-6 py-2 bg-gray-200 rounded-full text-sm text-black  "
              >
                {tech}
              </span>
            )
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-500 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Play. Compete. Connect.
        </h2>
        <p className="font-medium">
          Goindia is shaping the future of sports management.
        </p>
      </section>

    </div>
  );
};

export default About;
