import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logosport.png";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/');
    window.location.reload(); // refresh page to update navbar
  };

  return (
    <>
      {/* Color bar */}
      <div className="fixed top-0 left-0 w-full shadow z-100 flex h-1">
        <div className="bg-orange-500 h-1 w-1/3"></div>
        <div className="bg-white h-1 w-1/3"></div>
        <div className="bg-green-600 h-1 w-1/3"></div>
      </div>

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 flex lg:px-10 py-5 px-5 md:px-10 justify-between items-center shadow bg-white">
        {/* Logo */}
        <div className="flex pl-5 justify-between w-70 md:w-85">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="lg:h-13 h-10" />
          </Link>

          {/* Mobile menu icon */}
          <img
            onClick={() => setMenuOpen(!menuOpen)}
            src={
              !menuOpen
                ? "https://cdn-icons-png.flaticon.com/128/2976/2976215.png"
                : "https://cdn-icons-png.flaticon.com/128/4347/4347434.png"
            }
            className="h-8 lg:hidden md:hidden absolute right-5 cursor-pointer"
            alt="menu"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="flex lg:gap-10">
          <ul className="lg:flex hidden md:flex md:pr-15 items-center cursor-pointer lg:gap-20 md:gap-8 font-semibold">

            <Link to="/"><li>Home</li></Link>
            <Link to="/sport"><li>Sport</li></Link>
            <Link to="/tournament"><li>Tournament</li></Link>
            <Link to="/academy"><li>Academy</li></Link>
            <Link to="/story"><li>Stories</li></Link>

            {/* ADMIN LINK */}
            {user?.role === "admin" && (
              <Link to="/admin"><li>Admin</li></Link>
            )}

            {/* USER PROFILE LINK */}
            {user?.role === "user" && (
              <Link to="/profile"><li>Profile</li></Link>
            )}

            {/* IF NO USER → SHOW LOGIN */}
            {!user && (
              <Link to="/login">
                <li className="text-blue-600 hover:underline">Login</li>
              </Link>
            )}
          </ul>


          {/* MOBILE SCREEN MENU */}
          {menuOpen && (
            <div className="absolute top-16 right-0 bg-white shadow-lg h-screen w-screen rounded-lg p-7 flex flex-col items-start gap-6 border border-gray-200 lg:hidden md:hidden z-50">

              {/* PUBLIC LINKS */}
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <span className="text-xl hover:text-orange-500">Home</span>
              </Link>
              <Link to="/sport" onClick={() => setMenuOpen(false)}>
                <span className="text-xl hover:text-orange-500">Sport</span>
              </Link>
              <Link to="/tournament" onClick={() => setMenuOpen(false)}>
                <span className="text-xl hover:text-orange-500">Tournament</span>
              </Link>
              <Link to="/academy" onClick={() => setMenuOpen(false)}>
                <span className="text-xl hover:text-orange-500">Academy</span>
              </Link>
              <Link to="/story" onClick={() => setMenuOpen(false)}>
                <span className="text-xl hover:text-orange-500">Stories</span>
              </Link>

              {/* ADMIN ONLY */}
              {user?.role === "admin" && (
                <Link to="/admin" onClick={() => setMenuOpen(false)}>
                  <span className="text-xl text-red-600">Admin</span>
                </Link>
              )}

              {/* USER / ADMIN PROFILE */}
              {user && (
                <Link to="/profile" onClick={() => setMenuOpen(false)}>
                  <span className="text-xl hover:text-orange-500">Profile</span>
                </Link>
              )}

              {/* AUTH BUTTONS */}
              {!user ? (
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <span className="text-xl hover:text-orange-500">Login</span>
                </Link>
              ) : (
                <span
                  className="text-xl text-red-600 cursor-pointer"
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                >
                  Logout
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
