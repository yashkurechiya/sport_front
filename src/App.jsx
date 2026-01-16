import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sport from './pages/Sport';
import Tournament from './pages/Tournament';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import { SportsPageWrapper } from './components/SportsPageWrapper';
import Stories from './pages/Stories';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import AdminTournaments from './pages/AdminTournament';
import AdminCreateTournament from './pages/CreateTournament';
import UserProfile from './pages/UserProfile';
import ViewTour from './components/ViewTour';
import TourParticipants from './pages/TourParticipants';
import Olympics from './games/Olympics';
import Common from './games/Common';
import AsianGames from './games/AsianGames';
import {ToastContainer} from 'react-toastify'
import Coach from './pages/Coach';

const App = () => {
  return (
    <div>
        <ToastContainer />
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sport' element={<Sport />} />
        <Route path='/olympics' element={<Olympics />} />
        <Route path='/commonwg' element={<Common />}/>
        <Route path='/asian' element={<AsianGames />}/>
        <Route path='/tournament' element={<Tournament />} />
        {/* <Route path='/sport/tennis' element={<Eligibility />}/> */}
        <Route path='/sport/:id' element={<SportsPageWrapper />} />
        <Route path='/coach' element={<Coach />} />
        <Route path='/story' element={< Stories />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/admin/create-tournament'
          element={
            <ProtectedRoute role="admin">
              <AdminCreateTournament />
            </ProtectedRoute>
          } />

        <Route path='/admin/tournaments' element={
          <ProtectedRoute role="admin">
            <AdminTournaments />
          </ProtectedRoute>
        } />
        <Route path='/:id/participants' element={
          <ProtectedRoute role={["admin"]}>
            <TourParticipants />
          </ProtectedRoute>
        } />

        <Route path='/tournament/:id' element={<ViewTour />} />

        <Route path='admin' element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route
          path="/admin/tournament/:id/participants"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <TourParticipants />
            </ProtectedRoute>
          }
        />


        <Route
          path='/profile'
          element={
            <ProtectedRoute role="user">
              <UserProfile />
            </ProtectedRoute>
          } />
      </Routes>

    </div>
  );
};



export default App;
