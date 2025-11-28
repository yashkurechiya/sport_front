import React from 'react'

const items = [
    {
        img: "https://cdn-icons-png.flaticon.com/128/2651/2651298.png",
        label: "Cycling"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/1165/1165187.png",
        label: "Football"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/55/55243.png",
        label: "Basketball"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/5023/5023365.png",
        label: "Tennis"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/9391/9391402.png",
        label: "Hockey"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/55/55240.png",
        label: "Running"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/1974/1974196.png",
        label: "Golf"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/566/566958.png",
        label: "Archery"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/17762/17762738.png",
        label: "Volleyball"
    }
];

const ScrollHori = () => {
    return (
        <div className="w-full relative overflow-hidden py-4 bg-white">
  {/* MAIN TRACK */}
  <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
    {items.map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-3 px-4 py-2 rounded-xl   
                   transition-all     "
      >
        <img
          src={item.img}
          alt={item.label}
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
        />
        <span className="text-sm sm:text-base font-medium text-gray-700">
          {item.label}
        </span>
      </div>
    ))}
  </div>

  {/* DUPLICATE TRACK FOR INFINITE LOOP */}
  <div
    aria-hidden="true"
    className="flex items-center gap-10 animate-marquee2 whitespace-nowrap absolute top-4 left-0"
  >
    {items.map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-3 px-4 py-2 rounded-xl  
                   transition-all   "
      >
        <img
          src={item.img}
          alt={item.label}
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
        />
        <span className="text-sm sm:text-base font-medium text-gray-700">
          {item.label}
        </span>
      </div>
    ))}
  </div>
</div>

    );
};

export default ScrollHori;
