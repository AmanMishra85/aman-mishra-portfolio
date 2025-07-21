import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'glightbox/dist/css/glightbox.min.css';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;