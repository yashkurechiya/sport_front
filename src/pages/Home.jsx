import React from 'react'
import Hero from '../components/Hero'
import Inter from '../games/Inter'
import Scroll from '../games/Scroll'
import Achievement from '../games/Achievement'
import Chart from '../games/Chart' 
// import HoriScroll from '../components/HoriScroll'
import GameFooter from '../components/Footer'
import ScrollHori from '../components/ScrollHori'
import Form from '../components/Form'
import EligibilityHome from '../games/EligibilityHome'
import Story from '../games/Story'
import GetDetail from '../games/GetDetail'
import NewsSection from '../games/NewsSection'

const Home = () => {
  return (
    <div>
        <div  className=' lg:mt-20 mt-18'>
        <Hero />
      </div>
        <Inter  />
        <div className='my-1 lg:my-10'>
             <ScrollHori />
        </div>
         
        <div>

          <GetDetail />
          <Form />
         {/* <HoriScroll /> */}
          <EligibilityHome />
        </div>
        <Story limit={8} showbutton={true} />
        <NewsSection />
        <GameFooter />
        

    </div>
  )
}

export default Home
