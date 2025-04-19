import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and nav items */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <span className="text-blue-400 text-2xl font-bold">🌊</span>
            <h1 className="text-white text-xl font-bold">DarkNav</h1>
          </div>
          <ul className="flex gap-6 text-sm font-semibold">
            <li className="text-blue-300 border-b-2 border-blue-400 pb-1">Dashboard</li>
            <li className="hover:text-blue-300 cursor-pointer">Team</li>
            <li className="hover:text-blue-300 cursor-pointer">Projects</li>
            <li className="hover:text-blue-300 cursor-pointer">Calendar</li>
          </ul>
        </div>

        {/* Search and profile */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-sm text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <FiBell className="text-xl text-gray-400 hover:text-white cursor-pointer" />
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
