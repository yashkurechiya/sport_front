import React from 'react'

const InterCart = () => {
    return (
        <div className='lg:flex  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5 justify-items-center ms-10 lg:gap-10 lg:p-5 lg:my-0 p-3 items-center justify-center'>
            <div className="relative cursor-pointer lg:h-50 lg:w-80 h-30 w-50 overflow-hidden rounded-lg group">
                <img
                    src="https://cdn.britannica.com/55/235355-050-2CE9732E/Usain-Bolt-Jamaica-gold-medal-breaking-world-record-200m-Beijing-Summer-Olympics-August-20-2008.jpg"
                    className="absolute group-hover:scale-110 transition-transform duration-300 inset-0 h-full w-full object-cover"
                    alt="Olympics"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent"></div>
                <h1 className="absolute lg:bottom-22 bottom-10 text-center lg:left-1/3 left-1/5 text-white lg:text-3xl text-2xl lg:font-bold font-semibold">
                    Olympics
                </h1>
            </div>
            <div className="relative cursor-pointer lg:my-0 lg:h-50 h-30  lg:w-80 w-50 overflow-hidden rounded-lg group">
                <img
                    src="https://media.licdn.com/dms/image/v2/D4E12AQEOsl54LrokLw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1704897997470?e=1761782400&v=beta&t=3dSqYA1eAMaXN8wB4LjoJIWcwfMLot5SvWMVGj2R8U4"
                    className="absolute group-hover:scale-110 transition-transform duration-300 inset-0 h-full w-full object-cover"
                    alt="Olympics"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent"></div>
                <h1 className="absolute lg:bottom-20 bottom-10 lg:left-1/5 left-1/14 text-center text-white lg:text-2xl text-xl lg:font-bold font-semibold">
                    Common Wealth <br /> Games
                </h1>
            </div>
       
            <div className='lg:h-50 h-30  ht cursor-pointer overflow-hidden relative lg:w-80 w-50 bg-red-600 rounded-lg group'>
                <img src="https://indianexpress.com/wp-content/uploads/2018/08/asian-games-pv-sindhu-759.jpg" className='group-hover:scale-110 transition-transform duration-300 absolute z-0 object-cover w-100 rounded-lg' alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent"></div>
                <h1 className="absolute lg:bottom-23 bottom-10 lg:left-1/4 left-1/7 text-white lg:text-2xl text-xl lg:font-bold font-semibold">
                    Asian Games
                </h1>
            </div>
        </div>
    )
}

export default InterCart
