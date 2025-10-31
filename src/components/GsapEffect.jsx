import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GameFooter from "./Footer";
import { useState } from "react";
import axios from "axios";
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
    <div className="w-full bg-slate-100 lg:py-16 my-5 lg:my-0 py-5 ">
      <h2 className="lg:text-3xl text-xl font-bold text-center mb-12 text-black">
        Indian Champions
      </h2>
    {
      data.length > 0 ? 
      <div className="flex flex-col  gap-16 max-w-6xl mx-auto px-6">
        {sportD.map((item, index) => (
          <div
            key={index}
            ref={(el) => (containerRef.current[index] = el)}
            className={`flex flex-col md:flex-row  items-center gap-10 ${index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse"
              }`}
          >
            {/* Player Image */}
            <img
              src={item.img}
              alt={item.player}
              className="timeline-image  w-auto lg:h-84 object-cover rounded-lg"
            />

            {/* Content */}
            <div className="timeline-content shadow-lg max-w-md bg-white p-6 rounded-lg border-l-4 border-indigo-500">
              <h3 className="lg:text-xl text-lg font-bold text-indigo-600">
                {item.year} – {item.player}
              </h3>
              <p className="lg:text-lg text-sm font-semibold mt-2">{item.achievement}</p>
              <p className="text-gray-700 mt-3 lg:text-base text-xs leading-relaxed">{item.story}</p>
            </div>
          </div>
        ))}
      </div>
      : 
      <div>
        <Loader />
      </div>
    } 
      <GameFooter />
    </div>

  );
};

export default TennisTimeline;
