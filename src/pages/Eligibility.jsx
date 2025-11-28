import YouTube from 'react-youtube'
import { motion } from "framer-motion";
import GsapEffect from '../components/GsapEffect';
import { useEffect, useState } from 'react';

const pathData = [
    {
        title: "Local Wins",
        subtitle: "Play Locally",
        contact: "Local Sports Club / District Sports Association",
        color: "bg-blue-500",
    },
    {
        title: "State Champs",
        subtitle: "Win 3–5 Local Events",
        contact: "State Sports Authority / Federation",
        color: "bg-green-500",
    },
    {
        title: "National Qualifier",
        subtitle: "Compete in Nationals",
        contact: "National Sports Federation / Sports Ministry Portal",
        color: "bg-orange-500",
    },
    {
        title: "International Stage",
        subtitle: "Participate Globally",
        contact: "International Federation / Olympic Committee",
        color: "bg-purple-500",
    },
    {
        title: "Olympics Goal",
        subtitle: "Qualify & Compete",
        contact: "Indian Olympic Association / National Olympic Committee",
        color: "bg-yellow-500",
    },
];

const tennisScholarships = [
    {
        title: " Govt Schemes",
        details: "Khelo India (₹5L/yr), TOPS (Olympic support), SAI Training Centers (free coaching & facilities).",
    },
    {
        title: " AITA & State",
        details: "All India Tennis Association camps, junior travel grants, State Tennis Associations financial aid.",
    },
    {
        title: " International",
        details: "ITF Grand Slam Development grants, US College Tennis Scholarships (NCAA full/partial).",
    },
    {
        title: " Career & Awards",
        details: "Sports quota in jobs & colleges, Arjuna Award, cash prizes from states.",
    },
];



// Detect mobile / tablet screens



const FlipCard = ({ title, details }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleClick = () => {
    if (isMobile) setIsActive((prev) => !prev);
  };

  return (
    <motion.div
      className="group w-64 h-40 [perspective:1000px] cursor-pointer"
      whileHover={!isMobile ? { scale: 1.05 } : {}}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isActive
            ? "[transform:rotateY(180deg)]"
            : "group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 text-white font-bold text-lg [backface-visibility:hidden] shadow-xl">
          {title}
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center p-4 rounded-2xl bg-white text-gray-800 text-sm font-medium [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
          {details}
        </div>
      </div>
    </motion.div>
  );
};


const Eligibility = () => {

    const steps = [
        { id: 1, label: "Local Tournaments" },
        { id: 2, label: "State Championships" },
        { id: 3, label: "National Level" },
        { id: 4, label: "International Qualifiers" },
        { id: 5, label: "Olympics" },
    ];

    return (
        <div className='mt-20 '>
            <div className='h-100 flex relative'>

                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-black lg:p-12">
                    <div className="px-20">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
                            Tennis
                        </h1>
                        <h3 className="mt-3 text-lg lg:text-xl font-medium text-indigo-600 dark:text-indigo-400">
                            31 Medals in Internationals
                        </h3>
                        <p className="mt-4 text-slate-600 dark:text-slate-300">
                            A legacy of precision, power, and passion on the court. Celebrating decades of victories and the relentless spirit of a true champion.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <img
                        src="https://www.atptour.com/-/media/images/news/2024/05/10/16/54/humbert-tokyo-olympics-2021-return.jpg"
                        alt="A tennis player in action, hitting a backhand."
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/30 to-black/10"></div>
                </div>
            </div>

            <div className="h-150  border border-gray-200 rounded-lg shadow-lg m-15">
                <h1 className="text-3xl py-5 font-bold text-center text-black">How to Play ?</h1>
                <div className="flex justify-between p-5 text-black">
                    <div>
                        <div className="p-8 text-black rounded-lg">
                            <h1 className="text-2xl font-bold text-center mb-6">Rules & Regulations</h1>
                            <ul className="list-disc list-inside space-y-3 text-lg">
                                <li>Played on a rectangular court divided by a net, in singles (1v1) or doubles (2v2).</li>
                                <li>Players serve diagonally, each point allows two serve attempts maximum.</li>
                                <li>A rally ends if ball lands out, hits net, or player misses return.</li>
                                <li>Scoring system goes 0–15–30–40; must win game by two clear points.</li>
                                <li>A set is won by six games with two-game lead or tiebreaker at 6–6.</li>
                                <li>Double faults, interference, or misconduct lead to penalties, warnings, or point loss.</li>
                                <li>Victory requires winning majority sets with skill, teamwork, and fair play discipline.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='justify-center flex flex-col items-center w-1/2'>

                        <div className="mt-4">
                            <YouTube videoId="WgmzdLQ4hdQ" className='rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-200 my-10 justify-between'>
                <div className="flex flex-col w-1/2 items-center ">
                    <h1 className='text-2xl mb-5 font-bold p-2'>Path to Olympics</h1>
                    {pathData.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            className="flex items-center mb-8 relative"
                        >
                            {/* Vertical connector line */}
                            {index !== pathData.length - 1 && (
                                <div className="absolute left-4 top-18 h-20 border-l-4 border-dotted border-gray-400"></div>
                            )}

                            {/* Step circle */}
                            <div
                                className={`w-10 h-10 rounded-full flex z-7 items-center justify-center text-white font-bold ${step.color}`}
                            >
                                {index + 1}
                            </div>

                            {/* Step content */}
                            <div className="ml-6 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-72">
                                <h3 className="font-bold text-lg">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.subtitle}</p>
                                <p className="text-xs mt-1 text-gray-500 italic">{step.contact}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <section className="px-20 py-10  ">

                    <h2 className="text-3xl text-center font-bold mb-6">Eligibility</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Players must be registered with a recognized sports authority or association.</li>
                        <li>Age categories are divided into Juniors, Seniors, and Veterans (depending on tournament rules).</li>
                        <li>Both men and women can participate; some tournaments are mixed doubles.</li>
                        <li>For international events, players must represent their country with official approval.</li>
                        <li>Medical fitness clearance may be required for participation.</li>
                    </ul>

                    <div className="min-h-screen flex flex-col items-center py-12">
                        <h2 className="text-3xl font-bold mb-10 ">
                            Tennis Scholarships & Benefits
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {tennisScholarships.map((item, index) => (
                                <FlipCard key={index} title={item.title} details={item.details} />
                            ))}
                        </div>
                    </div>
                </section>

            </div>

            <div className='bg-red-600 h-100'>
                <GsapEffect />
            </div>

        </div>
    )
}

export default Eligibility
