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
      <img src="../src/assets/gemini.png" alt="" className='h-100 bottom-0 object-cover w-full mt-0' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-100'></div>
      <div className='absolute z-10 lg:top-40 top-30 w-full px-10 items-center'>
        <div className='items-center justify-center w-full '>
          <h1 className='lg:text-5xl text-3xl md:text-5xl text-white  font-semibold text-center lg:my-10 my-5 md:my-20 '>Sport</h1>
          
        </div>
      </div>
      <Played />
      <GameFooter />

    </>
  )
}

export default Sport
