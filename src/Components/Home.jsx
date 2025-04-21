import React from 'react';
import { GiRobotGolem } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-8 m-10 md:m-[110px]">
      
      {/* Heading Section */}
      <div className="text-center md:text-left px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Changing the world <br className="hidden md:block" />
          <span className="text-blue-500">one app at a time</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
          At Akhil Digital Vault, we are driven by the mission to innovate and revolutionize the digital landscape.
          With a focus on cutting-edge technologies and strategic solutions, we create high-impact digital experiences.
        </p>
        <button
         
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        ><Link to="/services">Explore Our Services</Link>
          
        </button>
      </div>

      {/* Robot Icon Section */}
      <div className="flex justify-center md:justify-start">
        <GiRobotGolem className="animate-pulse text-blue-500" size={200} />
      </div>
    </div>
  );
}
