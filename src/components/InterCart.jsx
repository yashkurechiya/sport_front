import React from "react";

const InterCart = () => {
  const items = [
    {
      title: "Olympics",
      image:
        "https://cdn.britannica.com/55/235355-050-2CE9732E/Usain-Bolt-Jamaica-gold-medal-breaking-world-record-200m-Beijing-Summer-Olympics-August-20-2008.jpg",
    },
    {
      title: "Commonwealth Games",
      image:
        "https://cdn.mos.cms.futurecdn.net/epJpgLY2h2TnuT8WoS5ZZN-1280-80.jpg.webp",
    },
    {
      title: "Asian Games",
      image:
        "https://indianexpress.com/wp-content/uploads/2018/08/asian-games-pv-sindhu-759.jpg",
    },
  ];

  return (
    <div className="mt-6 m-2">
    
      

      {/* Horizontal scroll */}
      <div
        className="
          flex gap-4 px-4
          overflow-x-auto
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="
              relative flex-shrink-0
              w-[75%] sm:w-[60%] md:w-[45%] lg:w-[320px]
              h-44 sm:h-48 lg:h-56
              rounded-2xl overflow-hidden
              snap-start
              shadow-md
              active:scale-[0.98]
              transition
            "
          >
            {/* Image */}
            <img
              loading="lazy"
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-center text-xl font-bold leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterCart;
