import React from 'react'
import Story from '../games/Story'
import GameFooter from '../components/Footer'

const Stories = () => {
  return (
    <div className='mt-10'>
      <Story showbutton={false} />
      <GameFooter />
    </div>
  )
}

export default Stories
