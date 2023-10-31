export const Projects = () => {
    return (
        <div className="mb-12 px-16">
            <nav className='grid grid-cols-4 content-center my-12'>
            <button className='hover:border-2 hover:border-cyan'>All</button>
            <button className='hover:border-2 hover:border-cyan'>Design</button>
            <button className='hover:border-2 hover:border-cyan'>Development</button>
            <button className='hover:border-2 hover:border-cyan'>Graphics</button>
            </nav>

            <div /* Card First Row */ className='flex flex-wrap items-center justify-center gap-16 mb-14'>
                <iframe title="E-logbook-Project" src="https://www.behance.net/embed/project/181202399?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                <iframe title="Palista-Project" src="https://www.behance.net/embed/project/182696837?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                <iframe src="https://www.behance.net/embed/project/178201071?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                <iframe src="https://www.behance.net/embed/project/178201179?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            </div>


           
      </div>
    )
}