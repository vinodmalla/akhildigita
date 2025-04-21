import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative p-4 shadow-md bg-yellow-300 rounded-lg md:m-4 md:flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} className="w-12 md:w-20 rounded-2xl" alt="Logo" />
      </div>
      <div className="md:hidden z-50 relative">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>
      <div
        className={`absolute md:static top-0 left-0 w-full md:w-auto md:text-lg transition-all duration-300 ease-in-out shadow-md md:shadow-none md:bg-transparent ${
          isOpen ? 'block' : 'hidden'
        } md:flex md:flex-row bg-[#1d232a] md:bg-transparent`}
      >
        <ul className="flex flex-col md:flex-row justify-center md:space-x-6 p-6 md:p-0 text-lg font-semibold text-white md:bg-transparent m-4 md:m-0 space-y-4 md:space-y-0">
          <li
            className="p-3 font-semibold m-2 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer"
            onClick={() => setIsOpen(false)}
          ><Link to='/about'>About</Link>
            
          </li>
          <li
            className="p-3 m-2 font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Our Services
          </li>
          <li
            className="p-3 m-2 font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </li>
        </ul>
      </div>
    </div>
  );
}
