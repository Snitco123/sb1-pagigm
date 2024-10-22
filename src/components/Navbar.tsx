import React from 'react';
import { Bell } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              APKA FITNESS DEKHO
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors relative">
              <Bell size={24} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=40&h=40"
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-indigo-600"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;