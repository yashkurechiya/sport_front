import React from 'react'
import chart from '../assets/chart.png'
const Chart = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl font-bold w-full text-black text-center'> Performance</h1>
      <div className='  flex w-190'>

        <img className='scale-80 ' src={chart} alt="" />
        <img className='scale-80  ' src={chart} alt="" />
      </div>
    </div>
  )
}

export default Chart
