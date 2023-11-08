import { Link, useNavigate } from "react-router-dom";

export const Design = () => {
    const navigate = useNavigate();
    return (
        <section className="px-16 pb-4">
            <div className="border-2 border-cyan bg-hero-bubbles flex justify-center items-center">
                <h1 className="text-3xl my-4 ">Design</h1>
                    <div>
                    </div>
            </div>
            <nav className='grid grid-cols-4 content-center my-12 mx-14'>
                <button 
                    className='hover:border-b-4 hover:border-cyan'
                    onClick={() => {
                        navigate('/all-projects');
                    }}>All</button>
                <button 
                    className='hover:border-b-4 hover:border-cyan'
                    onClick={() => {
                        navigate('/all-projects/design');
                    }}>Design</button>
                <button 
                    className='hover:border-b-4 hover:border-cyan'
                    onClick={() => {
                        navigate('/all-projects/development')
                    }}>Development</button>
                <button 
                    className='hover:border-b-4 hover:border-cyan'
                    onClick={() => {
                        navigate('/all-projects/graphics')
                    }}>Graphics</button>
            </nav>

        <div /* Card First Row */ className='flex flex-wrap items-center justify-center gap-16 mb-14'>
                <iframe title="Omsimity" src="https://www.behance.net/embed/project/183797165?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                <iframe title="E-logbook-Project" src="https://www.behance.net/embed/project/181202399?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                <iframe title="Palista-Project" src="https://www.behance.net/embed/project/182696837?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                
        </div>
        </section>
        
    );
};