import React from 'react'
import badminton from '../assets/badminton.jpg'
import archey from '../assets/archery.webp'
import table from '../assets/table.jpg'
import { Link } from 'react-router-dom'

const HomeSportCard = () => {
   return (
  <div className="grid gap-6 px-4 sm:px-8 lg:px-20 
                  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">

    {/* Card */}
    <Link to={'/sport/badminton'}>
    <div className="group overflow-hidden rounded-xl bg-black shadow-md">
      {/* Content */}
      <div className="p-6 lg:p-10">
        <h1 className="text-xl lg:text-3xl font-extrabold text-white">
          Badminton
        </h1>
        <h3 className="mt-2 text-sm lg:text-lg font-medium text-indigo-400">
          Explore More
        </h3>
      </div>

      {/* Image */}
      <div className="relative h-52 sm:h-60 lg:h-64">
        <img
          src={badminton}
          alt="Badminton"
          className="h-full w-full object-cover  "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/20 to-black/10" />
      </div>
    </div>
    </Link>

    {/* Card */}
    <Link to={'/sport/archery'}>
    <div className="group overflow-hidden rounded-xl bg-black shadow-md">
      <div className="p-6 lg:p-10">
        <h1 className="text-xl lg:text-3xl font-extrabold text-white">
          Archery
        </h1>
        <h3 className="mt-2 text-sm lg:text-lg font-medium text-indigo-400">
          Explore More
        </h3>
      </div>

      <div className="relative h-52 sm:h-60 lg:h-64">
        <img
          src={archey}
          alt="Archery"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/20 to-black/10" />
      </div>
    </div>
    </Link>

    {/* Card */}
    <Link to={'/sport/tennis'}>
    <div className="group overflow-hidden rounded-xl bg-black shadow-md">
      <div className="p-6 lg:p-10">
        <h1 className="text-xl lg:text-3xl font-extrabold text-white">
          Tennis
        </h1>
        <h3 className="mt-2 text-sm lg:text-lg font-medium text-indigo-400">
          Explore More
        </h3>
      </div>

      <div className="relative h-52 sm:h-60 lg:h-64">
        <img
          src={table}
          alt="Tennis"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/20 to-black/10" />
      </div>
    </div>
    </Link>

  </div>
);

}

export default HomeSportCard
