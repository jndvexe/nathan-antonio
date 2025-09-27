import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faShare } from '@fortawesome/free-solid-svg-icons';
import { Footer } from './Footer';

export const Hero = () => {
    return (
      <section /* Hero */ className='px-12'>
          <div className='max-sm:pt-[200px] pt-[300px] pb-[50px] max-sm:pl-[30px] max-lg:pl-[30px] pl-[100px] border-2 border-cyan bg-hero-bubbles '>
            <img className='h-24 w-24 rounded-full' src='PFP.PNG' alt='Profile'></img>
            <p className=''>Hello! I'm Nathan and I do:</p>
            <h1 className='text-6xl max-sm:text-[20px]  max-sm:pl-0'>GRAPHICS, DESIGN<br />AND DEVELOPMENT</h1>

            <div className='mt-4 hidden'>
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => {const externalLink = "https://www.linkedin.com/in/jonathan-david-antonio-77a525219/"; window.location.href = externalLink;}} />
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => { const externalLink = "https://www.instagram.com/jndv.code/"; window.location.href = externalLink;}}/>
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => { const externalLink = "https://github.com/jndvexe"; window.location.href = externalLink;}}/>
              <FontAwesomeIcon icon={faBehance} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => { const externalLink = "https://behance.com/jndvexe"; window.location.href = externalLink;}}/>
            </div>
          </div>

          <div /* Browse My Works*/ className='mt-14 text-center'>
            <h1 className='text-5xl '>Browse My Works</h1>
              <div /* Website Mockups */ className='flex flex-wrap items-center justify-center mt-14 h-[440px] rounded-tr-xl rounded-tl-xl overflow-hidden'>
                <div className="w-full lg:w-1/2 bg-hero-bubbles bg-cover bg-no-repeat bg-center flex items-center justify-center h-full">
                  <div className='photo'>
                    <img src='img_placeholder.PNG' className='w-64' alt='icon placeholder'></img>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-light-purple h-full">
                  <div className='flex flex-col justify-center text-primary-text h-full px-20'>
                    <div>
                      <h2 className='leading-none text-center lg:text-left text-md md:text-4xl lowercase'>website mockups</h2>
                      <p className='text-center lg:text-left text-sm lg:text-md uppercase'>SELF PORTFOLIOS, BIO WEBSITES AND DESIGNS</p>
                    </div>
                    <div className='leading-none text-center lg:text-left text-md md:text-xl my-10'>
                      <p>I design and develop clean, user-friendly website mockups tailored for clients across different industries. Each layout is crafted with a balance of functionality and aesthetics. My process ensures responsive designs that look great on any device.</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start'>
                      <button className='w-40 py-4 bg-white rounded-xl text-gray-700 hover:text-white hover:bg-transparent hover:border-2 hover:border-primary-text'>
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div /* Mobile Apps */ className='flex flex-wrap flex-row-reverse items-center justify-center h-[440px]'>
                <div className="w-full lg:w-1/2 bg-hero-bubbles bg-cover bg-no-repeat bg-center flex items-center justify-center h-full">
                  <div className='photo p-20'>
                    <img src='img_placeholder.PNG' className='w-64 w-64' alt='icon placeholder'></img>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-light-purple h-full">
                  <div className='flex flex-col justify-center text-primary-text h-full px-20'>
                    <div>
                      <h2 className='leading-none text-center lg:text-left text-md md:text-4xl lowercase mb-2'>Mobile Applications</h2>
                      <p className='text-center lg:text-left text-sm lg:text-md uppercase'>MOCKUP APP FUNCTIONALITIES FOR FUN</p>
                    </div>
                    <div className='leading-none text-center lg:text-left text-md md:text-xl my-10'>
                      <p>I create mobile app designs and bring them to life through development. The focus is always on intuitive user experiences and modern visual styles. My goal is to make apps that are both functional and engaging.</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start'>
                      <button className='w-40 py-4 bg-white rounded-xl text-gray-700 hover:text-white hover:bg-transparent hover:border-2 hover:border-primary-text'>
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div /* Pixel Arts */ className='flex flex-wrap items-center justify-center h-[440px]'>
                <div className="w-full lg:w-1/2 bg-hero-bubbles bg-cover bg-no-repeat bg-center flex items-center justify-center h-full">
                  <div className='photo p-20'>
                    <img src='img_placeholder.PNG' className='w-64 w-64' alt='icon placeholder'></img>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-light-purple h-full">
                  <div className='flex flex-col justify-center text-primary-text h-full px-20'>
                    <div>
                      <h2 className='leading-none text-center lg:text-left text-md md:text-4xl lowercase mb-2'>Pixel Arts</h2>
                      <p className='text-center lg:text-left text-sm lg:text-md uppercase'>GAME ASSETS AND PORTRAITS</p>
                    </div>
                    <div className='leading-none text-center lg:text-left text-md md:text-xl my-10'>
                      <p>I design pixel art game assets as well as unique self and pet portraits. Each piece is carefully detailed to capture character and personality. My pixel work blends nostalgia with modern creativity.</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start'>
                      <button className='w-40 py-4 bg-white rounded-xl text-gray-700 hover:text-white hover:bg-transparent hover:border-2 hover:border-primary-text'>
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div /* Apparel Designs */ className='flex flex-wrap flex-row-reverse items-center justify-center h-[440px] rounded-br-xl rounded-bl-xl overflow-hidden'>
                <div className="w-full lg:w-1/2 bg-hero-bubbles bg-cover bg-no-repeat bg-center flex items-center justify-center h-full">
                  <div className='photo p-20'>
                    <img src='img_placeholder.PNG' className='w-64 w-64' alt='icon placeholder'></img>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 bg-light-purple h-full">
                  <div className='flex flex-col justify-center text-primary-text h-full px-20'>
                    <div>
                      <h2 className='leading-none text-center lg:text-left text-md md:text-4xl lowercase mb-2'>Apparel Designs</h2>
                      <p className='text-center lg:text-left text-sm lg:text-md uppercase'>MERCHANDISE KPOP MOCKUPS</p>
                    </div>
                    <div className='leading-none text-center lg:text-left text-md md:text-xl my-10'>
                      <p>I create apparel designs inspired by K-pop music videos and comeback concepts. Each design reflects bold visuals and storytelling through fashion. My goal is to merge style, culture, and creativity in wearable art.</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start'>
                      <button className='w-40 py-4 bg-white rounded-xl text-gray-700 hover:text-white hover:bg-transparent hover:border-2 hover:border-primary-text'>
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div /*CTA Box*/ className='bg-hero-bubbles bg-center bg-cover rounded-xl my-14 shadow-lg shadow-white '>
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