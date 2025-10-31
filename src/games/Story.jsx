import React from 'react'
import StoryCard from '../components/StoryCard'
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

const Story = ({ limit, showbutton }) => {


  const [storyData, setStoryData] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/v1/getstory", {});
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
        <h1 className='flex text-center justify-center py-10 lg:text-4xl md:text-3xl text-xl font-semibold lg:my-5'>Stories of Athletes</h1>
        <div className='  grid lg:grid-cols-4 grid-cols-2 lg:px-60 px-5 gap-2'>
          {
            displayedStories.map((items) => (
              <StoryCard key={items._id} name={items.name} sport={items.sport} description={items.description} link={items.link} img={items.img} />
            ))
          }
        </div>
      </div>
      {showbutton && (

        <div className='justify-center text-center'>

          <a href="http://localhost:5173/story " className='justify-center w-full text-center'>
            <button className='lg:p-3 p-1 text-center cursor-pointer md:text-xl md:p-2 lg:text-medium justify-center my-10 bg-red-600 hover:bg-red-700 font-semibold rounded-lg text-xs text-white'>Know More</button></a>
        </div>
      )}

    </>
  )
}

export default Story
