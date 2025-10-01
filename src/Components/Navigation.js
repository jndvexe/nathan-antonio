/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Icon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu';

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
        <header className='z-999 absolute sticky top-0 z-999 py-4 flex flex justify-center items-center md:gap-20 max-sm:flex-col max-sm:items-center max-sm:gap-4 shadow-sm bg-white'>
              <div className='max-sm:flex max-sm:align-center max-sm:justify-center w-20 h-15'>
                <img 
                  src="/nathan-logo.png" 
                  alt='nathan logo'
                  className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out'
                  onClick={() => {
                    navigate('/');
                  }}/>
              </div>
              
              <div className='hidden'>
                <MenuIcon className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out'
                        onClick={toggleDropdown}>         
                </MenuIcon>
                {isDropdownOpen && (
                  <nav className='z-99 absolute bg-black border-2 border-white p-10 max-sm:flex max-sm:flex-col max-sm:gap-10'>
                  <ul className=' gap-12 mx-[10px]'>
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
                )}
              </div>
              

              <nav className='text-black'>
                <ul className='flex gap-12 mx-[10px]
                              max-sm:gap-8'>
                  <li className="hover:text-red">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-red">
                    <Link to="/all-projects">All Projects</Link>
                  </li>
                  <li className="hover:text-red">
                    <Link to="/aboutme">About Me</Link>
                  </li>
                </ul>
              </nav>

              
              <button className=' z-0 w-40 h-10 rounded-md bg-red text-white font-normal cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out'
                onClick={handleEmailClick}
              >Contact Me</button>
      </header>
    );
};