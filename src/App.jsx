import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sport from './pages/Sport';
import Eligibility from './pages/Eligibility';
import GameFooter from './components/Footer';
import Tournament from './pages/Tournament';
import Academy from './pages/Academy';
import ScrollToTop from './components/ScrollToTop';
 
import { SportsPageWrapper } from './components/SportsPageWrapper';
import Profile from './pages/Profile';
import Stories from './pages/Stories';

const App = () => {
  return (
    <div>
       
        <Navbar />
      <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sport' element={<Sport />}/>
          <Route path='/tournament' element={<Tournament />} />
          {/* <Route path='/sport/tennis' element={<Eligibility />}/> */}
          <Route path='/sport/:id' element={<SportsPageWrapper />}/>
          <Route path='/academy' element={<Academy />} />
          <Route path='/profile' element={<Profile />}/>
          <Route path='/story' element={< Stories />}/>
        </Routes>

    </div>
  );
};



export default App;
