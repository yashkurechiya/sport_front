import React from 'react';

const StoryCard = ({ name ,sport,link, description ,img  }) => {
  return (
    <div className="relative overflow-hidden lg:h-80 h-50 md:h-70 shadow-md p-4 lg:w-64  group">
      {/* Dummy image */}
      <img
        className="absolute top-0 left-0 w-full   object-cover  h-full group-hover:scale-105 transition-transform duration-300"
        src= {img}  alt={name}
      />
      <div className='inset-0 absolute z-10 bg-gradient-to-t from-black/100 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-transform duration-200 '></div>

      {/* Card content */}
      <div className=" absolute top-20 z-10 text-start text-white hidden transition-transform group-hover:flex duration-200 group-hover:flex-col">
        <p className='font-semibold text-yellow-200'>{sport}</p>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="mt-2 my-1 text-sm">{description}</p>
       <a href={link}> <button className='lg:p-2 bg-red-600 cursor-pointer hover:bg-red-800 font-semibold rounded-lg'>Know</button></a>
      </div>
    </div>
  );
};

export default StoryCard;
