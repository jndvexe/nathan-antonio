import { Navigation } from './Components/Navigation';
import { Hero } from './Components/Hero';
import { Projects } from './Components/Projects';
import { AboutMe } from './Components/AboutMe';
import { Footer } from './Components/Footer';
import './App.css';

function App() {
  return (
    <body className='bg-purple text-white px-12'>
      <Navigation />
      <Hero />
      <Projects />
      
      <Footer />
    </body>
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