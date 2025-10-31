import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import GsapEffect from '../components/GsapEffect';

const FlipCard = ({ title, details }) => {

   const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    // Toggle only on mobile (touch devices)
    if (window.innerWidth < 1024) {
      setFlipped(!flipped);
    }
  };


  return ( <motion.div
    className="group lg:w-64 lg:h-40 h-30 [perspective:1000px]"
    whileHover={{ scale: 1.05 }}
    onClick={handleFlip}
  >
    <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]  ${flipped ? "[transform rotateY(180deg)]" : ""}`}>
      <div className="absolute inset-0 flex text-center items-center justify-center rounded-2xl bg-orange-600 text-white font-bold lg:text-lg [backface-visibility:hidden] shadow-xl">
        {title}
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-4 rounded-2xl bg-white text-gray-800 text-sm font-medium [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
        {details}
      </div>
    </div>
  </motion.div>
  )
};

const SportsPage = ({ data }) => {
  const { name, medals, description, image, rules, videoId, pathData, scholarships } = data;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        {/* Header Section */}
        <div className="h-100 lg:flex relative">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-black lg:p-12">
            <div className="lg:px-20">
              <h1 className="text-3xl lg:text-5xl font-extrabold text-white">{name}</h1>
              <h3 className="mt-3 text-lg lg:text-xl font-medium text-indigo-400">
                {medals} Medals in Internationals
              </h3>
              <p className="mt-4 text-slate-300">{description}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-b from-black/100 via-black/0 to-black/10"></div>
          </div>
        </div>

        {/* Rules Section */}
        <div className="m-6 sm:m-10 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl lg:font-extrabold font-semibold text-center text-gray-700 mt-35 lg:mt-0 lg:py-8">
            How to Play?
          </h1>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 gap-10">

            {/* Rules List */}
            <div className="w-full lg:w-1/2">
              <ul className="list-disc list-inside lg:space-y-4 space-y-2 text-gray-800 text-sm sm:text-lg leading-relaxed">
                {rules.map((rule, i) => (
                  <li
                    key={i}
                    className="hover:text-indigo-600 transition-colors duration-300"
                  >
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* YouTube Video */}
            <div className="flex justify-center items-center w-1/2"> 
            <YouTube videoId={videoId} className="rounded-lg" /> 
            </div>
          </div>
        </div>


        {/* Path to Olympics */}
        <div className="lg:flex flex-col lg:my-10 lg:justify-between justify-center items-center lg:gap-10 gap-5 lg:flex-row flex">
          <div className="flex flex-col w-1/2  items-center">
            <h1 className="lg:text-3xl text-xl text-center lg:text-start mb-5 font-bold p-2">Path to Olympics</h1>
            {pathData.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="flex items-center mb-8 relative"
              >
                {index !== pathData.length - 1 && (
                  <div className="lg:absolute lg:flex hidden left-4 top-20 h-20 border-l-5 border-dotted border-gray-400"></div>
                )}
                <div className={`w-10 h-10 m-3 lg:m-0 rounded-full flex items-center justify-center text-white font-bold ${step.color}`}>
                  {index + 1}
                </div>
                <div className="lg:ml-6 p-4 bg-white rounded-lg shadow-lg lg:w-72 w-50">
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.subtitle}</p>
                  <p className="text-xs mt-1 text-gray-500 italic">{step.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scholarships Section */}
          <div className="w-1/2 lg:px-20 lg:py-10">
            <h2 className="lg:text-3xl text-xl text-center font-bold mb-6">Eligibility</h2>
            <ul className="list-disc lg:pl-6 ml-[-25px] lg:mb-10 w-60 lg:w-full space-y-2 text-gray-700">
              <li>Players must be registered with a recognized sports authority or association.</li>
              <li>Age categories are divided into Juniors, Seniors, and Veterans (depending on tournament rules).</li>
              <li>Both men and women can participate; some tournaments are mixed doubles.</li>
              <li>For international events, players must represent their country with official approval.</li>
              <li>Medical fitness clearance may be required for participation.</li>
            </ul>
            <h2 className="lg:text-3xl text-xl mt-10 lg:mt-0 text-center font-bold mb-6">{name} Scholarships & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-2">
              {scholarships.map((item, index) => (
                <FlipCard key={index} title={item.title} details={item.details} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className='bg-red-600 h-100'>
        <GsapEffect />
      </div>
    </>
  );
};

export default SportsPage;
