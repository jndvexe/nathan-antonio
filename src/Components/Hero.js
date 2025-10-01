import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faShare } from '@fortawesome/free-solid-svg-icons';
import { Footer } from './Footer';

export const Hero = () => {
    return (
      <section className='px-6'>
          <div /* Hero */ className='mt-6 text-center py-20 lg:py-32 bg-hero-red-spine bg-center bg-cover bg-no-repeat rounded-2xl'>
            <h1 className='text-7xl lg:text-6xl max-sm:text-[20px]'>Hello!</h1>
            <p className='text-md lg:text-3xl italic'>I'm Nathan Antonio</p>
            <h1 className=''>Design, Mockups + Development</h1>

            <div className='mt-4 hidden'>
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => {const externalLink = "https://www.linkedin.com/in/jonathan-david-antonio-77a525219/"; window.location.href = externalLink;}} />
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => { const externalLink = "https://www.instagram.com/jndv.code/"; window.location.href = externalLink;}}/>
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => { const externalLink = "https://github.com/jndvexe"; window.location.href = externalLink;}}/>
              <FontAwesomeIcon icon={faBehance} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => { const externalLink = "https://behance.com/jndvexe"; window.location.href = externalLink;}}/>
            </div>
          </div>

          <div /* Browse My Works*/ className='mt-14 text-center'>
            <h1 className='text-3xl lg:text-5xl text-black'>Browse My Works</h1>
              <div /* Website Mockups */ className='flex flex-wrap items-center justify-center mt-14 h-full lg:h-[440px] rounded-tr-xl rounded-tl-xl overflow-hidden'>
                <div className="w-full lg:w-1/2 bg-blue bg-cover bg-no-repeat bg-center flex items-center justify-center h-full">
                  <div className='photo py-20 lg:py-0'>
                    <img src='img_placeholder.PNG' className='w-24' alt='icon placeholder'></img>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-light-brown h-full">
                  <div className='flex flex-col justify-center text-black h-full px-8 py-10 lg:py-0 lg:px-20'>
                    <div>
                      <h2 className='leading-none text-center lg:text-left text-4xl lowercase'>website mockups</h2>
                      <p className='text-center lg:text-left text-sm lg:text-md uppercase'>SELF PORTFOLIOS, BIO WEBSITES AND DESIGNS</p>
                    </div>
                    <div className='leading-wide text-center lg:text-left text-md md:text-xl my-10'>
                      <p>I design and develop clean, user-friendly website mockups tailored for clients across different industries. Each layout is crafted with a balance of functionality and aesthetics. My process ensures responsive designs that look great on any device.</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start'>
                      <button className='w-40 py-4 bg-red rounded-xl text-white hover:text-black hover:bg-transparent hover:border-2 hover:border-black'>
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div /* Mobile Apps */ className='flex flex-wrap flex-row-reverse items-center justify-center h-full lg:h-[440px]'>
                <div className="w-full lg:w-1/2 bg-blue bg-cover bg-no-repeat bg-center flex items-center justify-center h-full">
                  <div className='photo py-20 lg:py-0'>
                    <img src='img_placeholder.PNG' className='w-24' alt='icon placeholder'></img>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-light-brown h-full">
                  <div className='flex flex-col justify-center text-black h-full  px-8 py-10 lg:py-0 lg:px-20'>
                    <div>
                      <h2 className='leading-none text-center lg:text-left text-4xl lowercase mb-2'>Mobile Applications</h2>
                      <p className='text-center lg:text-left text-sm lg:text-md uppercase'>MOCKUP APP FUNCTIONALITIES FOR FUN</p>
                    </div>
                    <div className='leading-wide text-center lg:text-left text-md md:text-xl my-10'>
                      <p>I create mobile app designs and bring them to life through development. The focus is always on intuitive user experiences and modern visual styles. My goal is to make apps that are both functional and engaging.</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start'>
                      <button className='w-40 py-4 bg-red rounded-xl text-white hover:text-black hover:bg-transparent hover:border-2 hover:border-black'>
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div /* Pixel Arts */ className='flex flex-wrap items-center justify-centerh-full lg:h-[440px]'>
                <div className="w-full lg:w-1/2 bg-blue bg-cover bg-no-repeat bg-center flex items-center justify-center h-full">
                  <div className='photo py-20 lg:py-0'>
                    <img src='img_placeholder.PNG' className='w-24' alt='icon placeholder'></img>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-light-brown h-full">
                  <div className='flex flex-col justify-center text-black h-full  px-8 py-10 lg:py-0 lg:px-20'>
                    <div>
                      <h2 className='leading-none text-center lg:text-left text-4xl lowercase mb-2'>Pixel Arts</h2>
                      <p className='text-center lg:text-left text-sm lg:text-md uppercase'>GAME ASSETS AND PORTRAITS</p>
                    </div>
                    <div className='leading-wide text-center lg:text-left text-md md:text-xl my-10'>
                      <p>I design pixel art game assets as well as unique self and pet portraits. Each piece is carefully detailed to capture character and personality. My pixel work blends nostalgia with modern creativity.</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start'>
                      <button className='w-40 py-4 bg-red rounded-xl text-white hover:text-black hover:bg-transparent hover:border-2 hover:border-black'>
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div /* Apparel Designs */ className='flex flex-wrap flex-row-reverse items-center justify-center h-full lg:h-[440px] rounded-br-xl rounded-bl-xl overflow-hidden'>
                <div className="w-full lg:w-1/2 bg-blue bg-cover bg-no-repeat bg-center flex items-center justify-center h-full">
                  <div className='photo py-20 lg:py-0'>
                    <img src='img_placeholder.PNG' className='w-24' alt='icon placeholder'></img>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-light-brown h-full">
                  <div className='flex flex-col justify-center text-black h-full  px-8 py-10 lg:py-0 lg:px-20'>
                    <div>
                      <h2 className='leading-none text-center lg:text-left text-4xl lowercase mb-2'>Apparel Designs</h2>
                      <p className='text-center lg:text-left text-sm lg:text-md uppercase'>MERCHANDISE KPOP MOCKUPS</p>
                    </div>
                    <div className='leading-wide text-center lg:text-left text-md md:text-xl my-10'>
                      <p>I create apparel designs inspired by K-pop music videos and comeback concepts. Each design reflects bold visuals and storytelling through fashion. My goal is to merge style, culture, and creativity in wearable art.</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start'>
                      <button className='w-40 py-4 bg-red rounded-xl text-white hover:text-black hover:bg-transparent hover:border-2 hover:border-black'>
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div /*CTA Box*/ className='bg-blue bg-center bg-cover rounded-xl my-14 shadow-md shadow-white'>
            <div className='flex flex-wrap items-center justify-between py-24 mx-auto max-w-4xl'>
              <div className='w-full lg:w-1/2'>
                <div>
                  <h2 className='leading-none text-center lg:text-left text-md md:text-7xl lowercase mb-2'>portfolio</h2>
                  <p className='text-center lg:text-left text-sm lg:text-md uppercase'>GRAPHIC DESIGN, MOCKUPS & DEVELOPMENT</p>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                  <p className='text-center text-sm lg:text-md uppercase mb-4 tracking-widest'>Contact Me</p>
                  <div className='flex justify-center'>
                    <a target='_blank' rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faPhone} size="2x" style={{ marginRight: '15px'}} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out bg-white p-4 rounded-full text-purple' onClick={() => {window.open('https://www.google.com', '_blank');}} />
                    </a>
                    <a target='_blank' rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ marginRight: '15px'}} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out bg-white p-4 rounded-full text-purple' onClick={() => {window.open('https://www.google.com', '_blank');}} />
                    </a>
                    <a target='_blank' rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faShare} size="2x" style={{ marginRight: '15px'}} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out bg-white p-4 rounded-full text-purple' onClick={() => {window.open('https://www.google.com', '_blank');}} />
                    </a>
                  </div>
              </div>
            </div>
          </div>
          
          <Footer />
      </section>
    );
};