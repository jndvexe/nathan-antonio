
export const Navigation = () => {
    return (
        <header className='flex justify-center items-center text-white pt-8 pb-2 px-12'>

          <div className='w-20 h-20'>
            <img src="/nathan-logo.png" alt='nathan logo'></img>
          </div>

          <nav className='grow'>
            <ul className='flex justify-center items-center gap-48 mx-14'>
              <li className="hover:border-b-4 hover:border-cyan">Home</li>
              <li className="hover:border-b-4 hover:border-cyan">Projects</li>
              <li className="hover:border-b-4 hover:border-cyan">About</li>
            </ul>
          </nav>
          
          <button className='w-40 h-10 rounded-md bg-yellow text-purple font-bold '
        
          >Contact Me</button>
      </header>
    );
};