import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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

            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-2 py-1 transition 
     ${isActive ? "  text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-500 "}`
              }
            >
              Home
              
            </NavLink>

            <NavLink
              to="/sport"
              className={({ isActive }) =>
                `relative px-2 py-1 transition 
     ${isActive ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-500"}`
              }
            >
              Sport
            </NavLink>

            <NavLink
              to="/tournament"
              className={({ isActive }) =>
                `relative px-2 py-1 transition 
     ${isActive ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-500"}`
              }
            >
              Tournament
            </NavLink>

            <NavLink
              to="/academy"
              className={({ isActive }) =>
                `relative px-2 py-1 transition 
     ${isActive ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-500"}`
              }
            >
              Academy
            </NavLink>

            <NavLink
              to="/story"
              className={({ isActive }) =>
                `relative px-2 py-1 transition 
     ${isActive ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-500"}`
              }
            >
              Stories
            </NavLink>
 
                  {user?.role === "admin" && (
                    <NavLink to="/admin" className={({ isActive }) => `relative px-2 py-1 transition ${isActive ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-500"}`}>
                    <li>Admin</li>
                    </NavLink>
                  )}

                  {/* USER PROFILE LINK */}
                  {user?.role === "user" && (
                    <NavLink to="/profile" className={({ isActive }) => `relative px-2 py-1 transition ${isActive ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-500"}`}>
                    <li>Profile</li>
                    </NavLink>
                  )}
 
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
                <span className="text-xl hover:text-blue-500">Home</span>
              </Link>
              <Link to="/sport" onClick={() => setMenuOpen(false)}>
                <span className="text-xl hover:text-blue-500">Sport</span>
              </Link>
              <Link to="/tournament" onClick={() => setMenuOpen(false)}>
                <span className="text-xl hover:text-blue-500">Tournament</span>
              </Link>
              <Link to="/academy" onClick={() => setMenuOpen(false)}>
                <span className="text-xl hover:text-blue-500">Academy</span>
              </Link>
              <Link to="/story" onClick={() => setMenuOpen(false)}>
                <span className="text-xl hover:text-blue-500">Stories</span>
              </Link>

              {/* ADMIN ONLY */}
              {user?.role === "admin" && (
                <NavLink
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-xl ${isActive ? "text-blue-700 font-semibold" : "text-blue-600 hover:text-blue-500"}`
                  }
                >
                  Admin
                </NavLink>
              )}

              {/* USER / ADMIN PROFILE */}
              {user && (
                <NavLink
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-xl ${isActive ? "text-blue-700 font-semibold" : "hover:text-blue-500"}`
                  }
                >
                  Profile
                </NavLink>
              )}

            
              {!user ? (
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <span className="text-xl hover:text-blue-500">Login</span>
                </Link>
              ) : (
                <span
                  className="text-xl text-blue-600 cursor-pointer"
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
