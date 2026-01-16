import React from 'react'
import StoryCard from '../components/StoryCard'
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

const Story = ({ limit, showbutton }) => {


  const [storyData, setStoryData] = useState([]);
  const backend = import.meta.env.VITE_BACKEND_URL ?? '';
  const base = backend.replace(/\/$/, ''); // remove trailing slash if present


  const handleData = async () => {
    try {
      const response = await axios.get(`${base}/admin/v1/getstory`, {});
      setStoryData(response.data)
    } catch (error) {
      console.log(error.message);

    }
  }

  useEffect(() => {
    handleData()
  }, [])

  const displayedStories = limit ? storyData.slice(0, limit) : storyData;

  return (
    <>
      <div className='justify-center text-center flex flex-col '>
          <h1 className="lg:text-4xl text-2xl my-10 font-bold text-slate-900">Stories of Athletes</h1>
        {
          storyData && storyData.length > 0 ? 
        
        <div className='  grid lg:grid-cols-4 grid-cols-2 lg:px-60 px-5 gap-2'>
          {
            displayedStories.map((items) => (
              <StoryCard key={items._id} name={items.name} sport={items.sport} description={items.description} link={items.link} img={items.img} />
            ))
          }
        </div> :
        <div className='mt-30 justify-center text-center px-40 ' >
          <Loader />

        </div>
    }
      </div>
      {showbutton && (

        <div className='justify-center text-center'>

          <Link to="/story " className='justify-center w-full text-center'>
           <button className="lg:px-10 lg:py-4 px-5 py-2 lg:mt-10 mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">Know More</button></Link>
        </div>
      )}

    </>
  )
}

export default Story
