import React from 'react'
import { Link } from 'react-router-dom';

const GetDetail = () => {
  const backend = import.meta.env.VITE_BACKEND_URL;
  const data = [
    {
      id: 1,
      logo: "https://cdn-icons-png.flaticon.com/128/1099/1099535.png",
      name: "Table Tennis",
      link: "/sport/tabletennis"
    },
    {
      id: 2,
      logo: "https://cdn-icons-png.flaticon.com/128/177/177413.png",
      name: "Hockey",
      link: "/sport/hockey"
    },
    {
      id: 3,
      logo: "https://cdn-icons-png.flaticon.com/128/2910/2910816.png",
      name: "Archery",
      link: "/sport/archery"
    },
    {
      id: 4,
      logo: "https://cdn-icons-png.flaticon.com/128/1267/1267761.png",
      name: "Running",
      link: "/sport/running"
    },
    {
      id: 5,
      logo: "https://cdn-icons-png.flaticon.com/128/2633/2633874.png",
      name: "Badminton",
      link: "/sport/badminton"
    },
    {
      id: 6,
      logo: "https://cdn-icons-png.flaticon.com/128/934/934640.png",
      name: "Shooting",
      link: "/sport/shooting"
    },
    {
      id: 7,
      logo: "https://cdn-icons-png.flaticon.com/128/33/33838.png",
      name: "BasketBall",
      link: "/sport/basketball"
    },
    {
      id: 8,
      logo: "https://cdn-icons-png.flaticon.com/128/17366/17366326.png",
      name: "Deadlifting",
      link: "/sport/deadlifting"
    },


  ];
  return (
    <div className='lg:my-20 mb-10 justify-center items-center text-center space-y-10 '>
      <h1 className='lg:text-4xl md:text-3xl text-2xl my-10 font-semibold text-center'>Get Your Sport</h1>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-5 md:gap-5 gap-5 lg:px-70 px-10 justify-items-center  '>
        {data.map((item) => (
          <Link to={item.link}>
            <div key={item.id} className='lg:h-50 flex p-10  flex-col items-center group'>
              <img
                src={item.logo}
                alt={item.name}
                className='lg:w-20 lg:h-20 h-15 object-contain mb-5 group-hover:scale-110 transition-transform duration-200 '
              />
              <h2 className='lg:text-lg font-semibold text-center '>{item.name}</h2>
            </div>
          </Link>

        ))}
      </div>
      <Link to='/sport'>
        <button className='lg:p-3 p-2 text-center cursor-pointer justify-center bg-red-600 hover:bg-red-700 font-semibold rounded-lg text-white'>Know More</button>
      </Link>
    </div>

  )
}

export default GetDetail
