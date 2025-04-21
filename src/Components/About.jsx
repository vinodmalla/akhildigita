import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { BsLinkedin, BsYoutube } from 'react-icons/bs';

export default function About() {
  return (
    <div className="m-6 md:m-10 bg-gray-50 p-6 rounded-lg shadow-lg">
      <div className="text-center space-y-6">
        {/* Heading Section */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Welcome to Akhil Digital Vault – where innovation, collaboration, and excellence converge.
        </h1>

        {/* About Text */}
        <p className="text-lg text-gray-700">
          At Akhil Digital Vault, we’re not just a service provider; we’re a catalyst for digital transformation. Founded by Akhil, a visionary entrepreneur with a passion for shaping the future of work, our mission is to empower businesses and individuals to thrive in the fast-evolving digital landscape.
        </p>
        <p className="text-lg text-gray-700">
          We are a dynamic community of top-tier freelancers, designers, developers, and digital professionals who come together to craft innovative solutions tailored to your unique needs.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're a startup founder in need of a cutting-edge website, a job seeker looking for a standout resume, or a brand aiming to optimize your online presence—Akhil Digital Vault is your one-stop shop for all things digital.
        </p>
        <p className="text-lg text-gray-700">
          Join us on this journey to build the digital future, and let's make things happen—together.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-8">
        <a
          href="mailto:akhilworks4u@gmail.com"
          className="px-8 py-4 bg-blue-600 text-white rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Get In Touch
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-10 mt-8 text-gray-700">
        <a
          href="https://www.linkedin.com/in/akhil-kumar-ponnam-4b680b2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          <BsLinkedin size={40} />
        </a>
        <a
          href="https://www.instagram.com/akhildigitalvault?utm_source=qr&igsh=dGdvbW5ldnV3d2Mx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-all duration-300 transform hover:scale-105"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://youtube.com/@akhildigitalvault?si=5U4Q48Niq5j4jnta"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 transition-all duration-300 transform hover:scale-105"
        >
          <BsYoutube size={40} />
        </a>
      </div>
    </div>
  );
}
