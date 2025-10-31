import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logosport.png'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Fixed Navbar */}
      <div className=' fixed top-0 left-0 w-full shadow z-100  flex h-1 '> {/* add top margin to prevent overlap */}
        <div className='bg-orange-500 h-1 w-1/3'></div>
        <div className='bg-white h-1 w-1/3'></div>
        <div className='bg-green-600 h-1 w-1/3'></div>
      </div>
      <div className="fixed top-0 left-0 w-full z-50 flex lg:px-20 py-5 px-5 md:px-10 justify-between items-center shadow-[9px_1px_2px_0_rgba(0,0,0,0.2)] bg-white">
        <div className='flex justify-between w-70 md:w-85'>
          <Link to={'/'}>
            <img src={logo} alt="logo" className='lg:h-13 h-10' />
          </Link>
          <img onClick={()=> setMenuOpen(!menuOpen)} src={ !menuOpen ? "https://cdn-icons-png.flaticon.com/128/2976/2976215.png": "https://cdn-icons-png.flaticon.com/128/4347/4347434.png"} className='h-8 lg:hidden md:hidden absolute right-5' alt="menu" />
          
        </div>

        <div className='flex lg:gap-10'>
          <ul className='lg:flex hidden md:flex md:pr-15 items-center cursor-pointer lg:gap-20 md:gap-8 font-semibold'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/sport"><li>Sport</li></Link>
            <Link to="/tournament"><li>Tournament</li></Link>
            <Link to="/academy"><li>Academy</li></Link>
            <Link to="/story"><li>Stories</li></Link>
          </ul>
          {/* <Link to="/profile">
          <div className='h-10 w-10 rounded-full bg-blue-500'></div>
          </Link> */}
           {menuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg h-screen w-screen rounded-lg p-4 flex flex-col items-start gap-3 border border-gray-100 lg:hidden md:hidden z-50">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <span className="block  w-full hover:text-orange-500">Home</span>
          </Link>
          <Link to="/sport" onClick={() => setMenuOpen(false)}>
            <span className="block w-full hover:text-orange-500">Sport</span>
          </Link>
          <Link to="/tournament" onClick={() => setMenuOpen(false)}>
            <span className="block w-full hover:text-orange-500">Tournament</span>
          </Link>
          <Link to="/academy" onClick={() => setMenuOpen(false)}>
            <span className="block w-full hover:text-orange-500">Academy</span>
          </Link>
          <Link to="/story" onClick={() => setMenuOpen(false)}>
            <span className="block w-full hover:text-orange-500">Stories</span>
          </Link>
        </div>
      )}
        </div>
      </div>

      {/* Color bar below navbar */}

    </>
  )
}

export default Navbar
