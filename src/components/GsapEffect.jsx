import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GameFooter from "./Footer";
import { useState } from "react";
import axios from "axios";
import {motion} from 'framer-motion'
import { data, useParams } from "react-router-dom";
import Loader from "./Loader";

gsap.registerPlugin(ScrollTrigger);

const tennisTimeline = [
  {
    year: "1996",
    player: "Leander Paes",
    achievement: "Bronze Medal – Atlanta Olympics",
    story:
      "Leander Paes made history by winning India’s first individual Olympic medal in over 40 years, defeating Fernando Meligeni.",
    img: "https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/8653f278fd4ddcd1/6c951af0afbc/v/e5b1efb7895d/79a721ae-a856-4ed0-a878-fa756be24d86.JPG",
  },
  {
    year: "1997",
    player: "Mahesh Bhupathi",
    achievement: "French Open Mixed Doubles Champion",
    story:
      "Mahesh Bhupathi became the first Indian to win a Grand Slam title, lifting the French Open mixed doubles trophy.",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpPPk4n3OxIGdW8ubnl1Kj7yJJCFbwKMqsxV8piLPruCcfqBUioS1ZGJ6DxV27o2lNgZnhJjkvJGtc1c3wSAA1PlhLSdi7-EjelYiv6CQLgCiAoHG0fl9bMg7UnQDJiSt389uXAZWBw3w/s400/6rloofkyt3ycolfc.jpg",
  },
  {
    year: "1999",
    player: "Paes & Bhupathi",
    achievement: "French Open & Wimbledon Doubles Champions",
    story:
      "The 'Indian Express' pair reached all 4 Slam finals in 1999, winning French Open and Wimbledon doubles titles.",
    img: "https://static.toiimg.com/thumb/msid-86479764,imgsize-85744,width-400,resizemode-4/86479764.jpg",
  },
  {
    year: "2005",
    player: "Sania Mirza",
    achievement: "WTA Hyderabad Open Champion",
    story:
      "Sania became the first Indian woman to win a WTA singles title, inspiring a new generation of athletes.",
    img: "https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2023-02/J%26T%20Banka%20Ostrava%20Open%202021%20-%20Day%20Six.jpg?itok=TIBMcP65",
  },
  {
    year: "2017",
    player: "Rohan Bopanna",
    achievement: "French Open Mixed Doubles Champion",
    story:
      "Rohan Bopanna, with Gabriela Dabrowski, secured the French Open mixed doubles crown, continuing India’s success.",
    img: "https://images.timesnownews.com/thumb/msid-107191416,thumbsize-52448,width-1280,height-720,resizemode-75/107191416.jpg",
  },
];

const TennisTimeline = () => {
  const containerRef = useRef([]);
  const { id } = useParams();
  const [sportD, setSportD] = useState([]);
  const backend = import.meta.env.VITE_BACKEND_URL ?? '';
  const base = backend.replace(/\/$/, ''); // remove trailing slash if present

  const handleData = async () => {
    try {
      console.log(id);
      const response = await axios.get(`${base}/api/sportget`, {});
      const data = response.data.find((sport) => sport.id === id);
      setSportD(data?.gsaptime || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleData()
  }, [id]);

  useEffect(() => {

    if (sportD.length === 0) return;

    containerRef.current.forEach((el, index) => {

      if (!el) return;

      // gsap.from(
      //   el.querySelector(".timeline-image"),
      //   { x: index % 2 === 0 ? -150 : 150, opacity: 0 },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: el,
      //       start: "top 85%",
      //     },
      //   }
      // );

      gsap.to(
        el.querySelector(".timeline-image"),
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "'top 80%",
          }
        }
      )

      // gsap.fromTo(
      //   el.querySelector(".timeline-content"),
      //   { y: 50, opacity: 0 },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 1,
      //     delay: 0.2,
      //     scrollTrigger: {
      //       trigger: el,
      //       start: "top 85%",
      //     },
      //   }
      // );
    });
  }, [sportD]);



  return (
    <div className="w-full bg-white ">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-16 text-gray-900 tracking-tight">
        Indian Champions
      </h2>

      {data.length > 0 ? (
        <div className="flex flex-col gap-20 max-w-6xl mx-auto px-6">

          {sportD.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (containerRef.current[index] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
            >

              {/* Player Image */}
              <motion.img
                src={item.img}
                alt={item.player}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-auto lg:h-80 object-cover rounded-xl shadow-lg ring-1 ring-slate-200"
              />

              {/* Content */}
              <div className="bg-white shadow-xl rounded-2xl p-6 lg:p-8 border border-slate-200 max-w-xl">
                <h3 className="text-xl lg:text-2xl font-bold text-indigo-600">
                  {item.year} – {item.player}
                </h3>

                <p className="text-gray-800 font-medium mt-2 text-sm lg:text-lg">
                  {item.achievement}
                </p>

                <p className="text-gray-600 mt-4 text-sm lg:text-base leading-relaxed">
                  {item.story}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      ) : (
        <div className="flex justify-center py-20">
          <Loader />
        </div>
      )}

      <div className="mt-20">
        <GameFooter />
      </div>
    </div>



  );
};

export default TennisTimeline;
