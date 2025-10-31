import React from 'react'
import Played from '../games/Played'
import GameFooter from '../components/Footer'

const Sport = () => {
  const data = [
    {
      id: 1,
      sport: "Olympics",
      gold: 10,
      silver: 10,
      bronze: 21
    },
    {
      id: 2,
      gold: 16,
      silver: 21,
      bronze: 23,
      sport: "Paralympics",
    },
    {
      id: 3,
      sport: "Commonwealth",
      gold: 203,
      silver: 189,
      bronze: 172
    }
  ]
  return (
    < >
      <img src="../src/assets/gemini.png" alt="" className='h-100 object-cover w-full mt-21' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-121'></div>
      <div className='absolute z-10 lg:top-40 top-30 w-full px-10 items-center'>
        <div className='items-center justify-center w-full '>
          <h1 className='lg:text-5xl text-3xl md:text-5xl text-white  font-semibold text-center lg:my-10 my-5 md:my-20 '>Sport</h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 justify-items-center lg:gap-10 gap-5'>
            {data.map((items) => (
              <div key={items.id} className='text-white items-center lg:py-5 lg:gap-5 gap-2 flex md:flex-col lg:flex-col rounded-lg text-xl md:shadow md:p-4 font-semibold lg:p-5 p-1 lg:shadow-md shadow-white lg:w-50 '>
                <h1 className='lg:text-2xl font-medium text-xl'>{items.sport}</h1>
                <div className='flex'>
                  <div className='items-center justify-center flex flex-col'>

                    <img src="https://cdn-icons-png.flaticon.com/128/5406/5406792.png" alt="" className='w-9' />
                    <h5 className='lg:text-md text-sm mt-1'>{items.gold}</h5>
                  </div>
                  <div className='items-center justify-center flex flex-col'>

                    <img src="https://cdn-icons-png.flaticon.com/128/7795/7795418.png" alt="" className='w-10' />
                    <h5 className='lg:text-md text-sm p-1'>{items.silver}</h5>
                  </div>
                  <div className='items-center justify-center flex flex-col'>

                    <img src="https://cdn-icons-png.flaticon.com/128/14458/14458264.png" className='w-9' alt="" />
                    <h5 className='lg:text-md text-sm mt-1'>{items.bronze}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Played />
      <GameFooter />

    </>
  )
}

export default Sport
