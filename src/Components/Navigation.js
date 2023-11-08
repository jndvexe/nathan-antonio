import { Link, NavigationType, useNavigate } from "react-router-dom";

export const Navigation = () => {
    const navigate = useNavigate();
    const email = 'antoniojonathan71@gmail.com';
    const handleEmailClick = () => {
      const mailtoLink = `mailto:${email}`;
      window.location.href = mailtoLink;
    };

    return (
        <header className='flex justify-center items-center text-white pt-8 pb-2 px-12 mb-4'>
          <div className='w-20 h-15'>
            <img 
              src="/nathan-logo.png" 
              alt='nathan logo'
              className='cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out'
              onClick={() => {
                navigate('/');
              }}/>
          </div>

          <nav className='grow'>
            <ul className='flex justify-center items-center gap-48 mx-14'>
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