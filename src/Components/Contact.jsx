import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
import { MdAddCall } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

export default function Contact() {
  return (
  <div className="m-6 mx-4 pr-4 md:m-4 md:mx-auto">
      <h1 className="text-center text-3xl font-bold mb-8">
        CONTACT ME
      </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">CONTACT ME HERE</h2>
            <p className="text-lg mb-6 text-center">
              Coming together is a beginning, staying together is progress, and working together is success.
            </p>
            <div className="space-y-4 text-xs md:text-lg">
              <div className="flex items-center gap-3"><FaLocationDot size={20} /> : Hyderabad</div>
              <div className="flex items-center gap-3"><IoMail size={20} />:akhilworks4u@gmail.com</div>
              <div className="flex items-center gap-3"><MdAddCall size={20} />:
              +91 83328 96316</div>
            </div>
            <div className="flex gap-6 mt-6 justify-center">
              <a href="https://youtube.com/@akhildigitalvault?si=5U4Q48Niq5j4jnta" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                <BsYoutube size={35} />
              </a>
              <a href="https://www.linkedin.com/in/akhil-kumar-ponnam-4b680b2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaLinkedin size={35} />
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}


