import React from 'react'

const Achievement = () => {
  return (
    <div className='my-10 '>
      <h1 className='text-4xl text-center font-bold'>India's Achievement</h1>
      <div className='px-10 flex gap-10 justify-center mt-10'>
        <div className='h-40 w-50 p-10 relative border items-center flex flex-col justify-center rounded-lg'>
            <img src="https://cdn-icons-png.flaticon.com/128/3112/3112946.png" className='w-10' alt="" />
            <h2 className='text-3xl text-gray-100 mb-9 font-semibold'>40+</h2>
            <h2 className='text-xl  absolute bottom-5 font-semibold'>
                Olympics
            </h2>    
        </div>
        <div className='h-40 w-50 p-10 relative border items-center flex flex-col justify-center rounded-lg'>
            <img src="https://cdn-icons-png.flaticon.com/128/3112/3112946.png" className='w-10' alt="" />
            <h2 className='text-3xl text-gray-100 mb-9 font-semibold'>40+</h2>
            <h2 className='text-xl absolute bottom-5 font-semibold'>
                Paralympics
            </h2>    
        </div>
        <div className='h-40 w-50 p-10 relative border items-center flex flex-col justify-center rounded-lg'>
            <img src="https://cdn-icons-png.flaticon.com/128/3112/3112946.png" className='w-10' alt="" />
            <h2 className='text-3xl text-gray-100 mb-9 font-semibold'>40+</h2>
            <h2 className='text-xl absolute text-center bottom-3 font-semibold'>
                Commonwealth Games
            </h2>    
        </div>
        <div className='h-40 w-50 p-10 relative border items-center flex flex-col justify-center rounded-lg'>
            <img src="https://cdn-icons-png.flaticon.com/128/3112/3112946.png" className='w-10' alt="" />
            <h2 className='text-3xl text-gray-100 mb-9 font-semibold'>40+</h2>
            <h2 className='text-xl absolute bottom-5 font-semibold'>
                Asian Games
            </h2>    
        </div>
      </div>
    </div>
  )
}

export default Achievement
