/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    }

    const navigate = useNavigate();
    const email = 'antoniojonathan71@gmail.com';
    const handleEmailClick = () => {
      const mailtoLink = `mailto:${email}`;
      window.location.href = mailtoLink;
    };

    return (
        <header className='z-999 relative sticky top-0 z-999 mb-10 py-10 flex flex justify-center items-center bg-purple border-b-4 border-cyan
                          md:gap-20
                          max-sm:flex-col max-sm:items-center'>

              
              <div className='max-sm:flex max-sm:align-center max-sm:justify-center w-20 h-15'>
                <img 
                  src="/nathan-logo.png" 
                  alt='nathan logo'
                  className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out'
                  onClick={() => {
                    navigate('/');
                  }}/>
              </div>
              
              
              <nav className=''>
                <ul className='flex gap-12 mx-[10px]'>
                  <li className="hover:border-b-4 hover:border-cyan">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:border-b-4 hover:border-cyan">
                    <Link to="/all-projects">All Projects</Link>
                  </li>
                  <li className="hover:border-b-4 hover:border-cyan">
                    <Link to="/aboutme">About Me</Link>
                  </li>
                </ul>
              </nav>

              
              <button className='w-40 h-10 rounded-md bg-yellow text-purple font-bold cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out'
                onClick={handleEmailClick}
              >Contact Me</button>
      </header>
    );
};