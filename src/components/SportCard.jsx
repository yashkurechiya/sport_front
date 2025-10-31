import React from 'react'

const SportCard = ( {title, image} ) => {
    return (
        <div className="card lg:h-50  lg:w-70 h-30 mmd:h-40  shadow-md shadow-black relative  overflow-hidden border-white rounded-lg cursor-pointer   group">
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h1 className='text-2xl z-20  w-full text-center bottom-5 font-bold text-white absolute opacity-0 transition-opacity duration-500 group-hover:opacity-100'>{ title}</h1>
        </div>
    )
}

export default SportCard;
