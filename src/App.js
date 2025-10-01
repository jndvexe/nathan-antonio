import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './Components/Navigation';
import { Hero } from './Components/Hero';
import { AllProjects } from './Components/AllProjects';
import { AboutMe } from './Components/AboutMe';
import { Footer } from './Components/Footer';
import './App.css';
import { Design } from './Components/Categories/Design';
import { Graphics } from './Components/Categories/Graphics';
import { Development } from './Components/Categories/Development';

function App() {
  return (
    
    <BrowserRouter>
      <body className='bg-white text-white'>
      <Navigation />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/all-projects/design" element={<Design/>} />
            <Route path="/all-projects/development" element={<Development/>} />
            <Route path="/all-projects/graphics" element={<Graphics/>} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
      </body>
    
    
    </BrowserRouter>
    
  );
}

export default App;

/*
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div> */