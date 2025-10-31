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
        <div className="w-full overflow-hidden gap-30 flex relative">
            <div className="flex animate-scroll items-center gap-20 space-x-4">
                {items.map((item, idx) => (
                    <div key={idx} className="w-20 rounded-lg flex items-center gap-2">
                        <img src={item.img} alt="" className="w-10" /><span>{item.label}</span>
                    </div>
                ))}
            </div>
            <div
                aria-hidden
                className="flex animate-scroll items-center gap-20 space-x-4 absolute top-0 left-full"
                style={{ animationDelay: '1.5s' }} // adjust delay to match animation duration
            >
                {items.map((item, idx) => (
                    <div key={idx} className="w-20 rounded-lg flex items-center gap-2">
                        <img src={item.img} alt="" className="w-10" /><span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollHori;
