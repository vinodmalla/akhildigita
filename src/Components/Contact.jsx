import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { MdAddCall } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

export default function Contact() {
  return (
    <div className="m-6 mx-4 pr-4 md:m-8 md:mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-900">
        CONTACT ME
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Section: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            CONTACT ME HERE
          </h2>
          <p className="text-lg text-center text-gray-600">
            Coming together is a beginning, staying together is progress, and working together is success.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 text-lg text-gray-700">
            <div className="flex items-center gap-3">
              <FaLocationDot size={20} className="text-blue-600" />
              <span>Hyderabad</span>
            </div>
            <div className="flex items-center gap-3">
              <IoMail size={20} className="text-blue-600" />
              <span>akhilworks4u@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MdAddCall size={20} className="text-blue-600" />
              <span>+91 83328 96316</span>
            </div>
          </div>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-xl text-center text-gray-600">
            Connect with me on social platforms!
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://youtube.com/@akhildigitalvault?si=5U4Q48Niq5j4jnta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              <BsYoutube size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-kumar-ponnam-4b680b2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin size={35} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
