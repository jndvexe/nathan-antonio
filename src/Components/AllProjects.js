import { Footer } from "./Footer"

export const AllProjects = () => {
    return (
        <div className="px-16 pb-4">
            <div className="border-2 border-cyan bg-hero-bubbles flex justify-center items-center">
                <h1 className="text-3xl my-4 ">Browse my works!</h1>
                    <div>
                    </div>
            </div>
            <nav className='grid grid-cols-4 content-center my-12 mx-14'>
                <button className='hover:border-b-4 hover:border-cyan'>All</button>
                <button className='hover:border-b-4 hover:border-cyan'>Design</button>
                <button className='hover:border-b-4 hover:border-cyan'>Development</button>
                <button className='hover:border-b-4 hover:border-cyan'>Graphics</button>
            </nav>

            <div /* Card First Row */ className='flex flex-wrap items-center justify-center gap-16 mb-14'>
                <iframe title="E-logbook-Project" src="https://www.behance.net/embed/project/181202399?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                <iframe title="Palista-Project" src="https://www.behance.net/embed/project/182696837?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                <iframe title="Beautiful Monster STAYC stickersheet ver 1" src="https://www.behance.net/embed/project/178201071?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                <iframe title="Beautiful Monster STAYC stickersheet ver 2"  src="https://www.behance.net/embed/project/178201179?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            </div>

            <div  className="flex justify-center items-center mb-4">
                 <button 
                    className="bg-yellow p-4 rounded-md text-black"
                    onClick={() => {
                        const externalLink = "https://www.behance.net/jndvexe";
                        window.location.href = externalLink;
                    }}
                    >Browse More on Behance</button>
            </div>
          
           <Footer />
      </div>
    )
}