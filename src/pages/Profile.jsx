import React from 'react'

const Profile = () => {
  return (
     <>
        <div className='my-20'>
            <div className='border flex justify-  items-center text-center border-gray-300 bg-blue-100 shadow-lg'>
                <div className='h-50 w-50 m-15 ml-30 rounded-full bg-red-600'></div>
                <div className='text-3xl items-start justify-start flex flex-col'>
                    <h2>Name</h2>
                    <h3>Status</h3>
                    <h3>Sport</h3>
                    <h3>Hobbies</h3>
                </div>
            </div>
        </div>
     </>
  )
}

export default Profile
