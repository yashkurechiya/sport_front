import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import GsapEffect from '../components/GsapEffect';
import { motion, AnimatePresence } from "framer-motion";

const ExpandableCard = ({ title, details }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="w-full lg:w-72 bg-white shadow rounded-2xl border border-gray-200 cursor-pointer select-none overflow-hidden transition-all duration-300"
    >
      {/* Header */}
      <div className="p-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="text-gray-500"
        >
          ▼
        </motion.span>
      </div>

      {/* Expandable Section */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="px-5 pb-5 text-gray-700 text-sm leading-relaxed"
          >
            {details}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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
        <div className="m-6 sm:m-10 mt-20 lg:mt-0 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl   overflow-hidden">

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 py-10 tracking-tight">
            How to Play?
          </h1>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-8 sm:p-12 gap-12">

            {/* Rules List */}
            <div className="w-full lg:w-1/2">
              <ul className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                {rules.map((rule, i) => (
                  <li
                    key={i}
                    className="pl-4 border-l-4 border-indigo-500 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 cursor-default"
                  >
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* YouTube Video */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-300">
                <YouTube videoId={videoId} className="w-full h-full" />
              </div>
            </div>

          </div>
        </div>



        {/* Path to Olympics */}
        <div className="lg:flex flex-col lg:my-10 lg:justify-between justify-center items-center lg:px-10 gap-5 lg:flex-row flex">
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
                <div className="lg:ml-6 p-4 bg-white rounded-lg shadow-sm lg:w-72 w-50">
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.subtitle}</p>
                  <p className="text-xs mt-1 text-gray-500 italic">{step.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scholarships Section */}
          <div className="w-1/2 lg:px-20 px-0 lg:mt-[-10rem]">
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
             <ExpandableCard key={index} title={item.title} details={item.details} />

              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className='bg-blue-600 h-100'>
        <GsapEffect />
      </div>
    </>
  );
};

export default SportsPage;
