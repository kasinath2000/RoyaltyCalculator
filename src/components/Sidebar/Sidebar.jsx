import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Sidebar for larger screens */}
      <div
        className={`w-64 h-screen bg-[#72BF78] text-white fixed top-0 left-0 flex flex-col p-4 space-y-4 sm:block ${isSidebarOpen ? 'block' : 'hidden'}`}
      >
        <h2 className="text-2xl font-bold">Roylty Calcu</h2>
        <nav className="flex flex-col space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${isActive ? 'text-orange-500' : 'hover:text-red-400'}`
            }
          >
            <HomeIcon className="mr-2" /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${isActive ? 'text-orange-500' : 'hover:text-orange-500'}`
            }
          >
            <InfoIcon className="mr-2" /> About
          </NavLink>
        </nav>
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="text-white">
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="sm:hidden fixed inset-0 bg-black opacity-50 z-40"
        />
      )}

      {/* Bottom Navbar for mobile screens */}
      <div className={`sm:hidden fixed bottom-0 left-0 w-full bg-[#72BF78] text-white flex justify-between items-center p-4 z-50 ${isSidebarOpen ? 'hidden' : 'block'}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center p-2 ${isActive ? 'text-orange-500' : 'hover:text-red-400'}`
          }
        >
          <HomeIcon />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center p-2 ${isActive ? 'text-orange-500' : 'hover:text-orange-500'}`
          }
        >
          <InfoIcon />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
