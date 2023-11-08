import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import { Footer } from './Footer';

export const Hero = () => {
    return (
      <section /* Hero */ className=''>
          <div className='pt-[300px] pb-[50px] pl-[100px] border-2 border-cyan bg-hero-bubbles'>
            <img className='h-24 w-24 rounded-full' src='PFP.PNG' alt='Profile'></img>
            <p className=''>Hello! I'm Nathan and I do:</p>
            <h1 className='text-6xl'>GRAPHICS, DESIGN<br />AND DEVELOPMENT</h1>

            <div className='mt-4'>
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => {const externalLink = "https://www.linkedin.com/in/jonathan-david-antonio-77a525219/"; window.location.href = externalLink;}} />
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => { const externalLink = "https://www.instagram.com/jndv.code/"; window.location.href = externalLink;}}/>
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => { const externalLink = "https://github.com/jndvexe"; window.location.href = externalLink;}}/>
              <FontAwesomeIcon icon={faBehance} size="2x" style={{ marginRight: '15px' }} className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => { const externalLink = "https://behance.com/jndvexe"; window.location.href = externalLink;}}/>
            </div>
          </div>

          <div className='mt-14 text-center'>
            <h1 className='text-3xl '>Overview</h1>
            <p>My most recent works</p>
              <div /* Card First Row */ className='flex flex-wrap items-center justify-center gap-16 mt-14 mb-14'>
                  <iframe title="Omsimity" src="https://www.behance.net/embed/project/183797165?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                  <iframe title="E-logbook-Project" src="https://www.behance.net/embed/project/181202399?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                  <iframe title="Palista-Project" src="https://www.behance.net/embed/project/182696837?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
              </div>
          </div>

          
          <Footer />
      </section>
    );
};