import React, { useEffect, useState } from "react";

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsdata.io/api/1/latest?apikey=pub_92e26c4f50064d3eb78607a84bdec706&q=sports&country=in&category=sports"
      );
      const data = await response.json();
      setNews(data.results); // 'results' contains the news items
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div className="lg:my-15 lg:px-20 px-5">
      <h1 className="lg:text-4xl md:text-3xl text-xl lg:my-10 mb-5 font-semibold text-center">Sports News</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-start">
        {news.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start lg:p-1 p-1 rounded-lg border border-gray-200  "
          >
            <img
              src={item.image_url || "https://via.placeholder.com/150"}
              alt={item.title}
              className=" object-cover mb-4 rounded"
            />
            <h2 className="lg:text-lg text-sm font-semibold text-start">{item.title?.slice(0,50)}</h2>
            <p className="text-xs lg:text-sm mt-2 text-start">
              {item.description?.slice(0, 90)}...
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 text-sm  underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
