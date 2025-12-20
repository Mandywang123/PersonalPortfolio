
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CarouselSection from './components/CarouselSection';
import Footer from './components/Footer';
import { PORTFOLIO_DATA } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1917] antialiased selection:bg-[#C5A059] selection:text-white">
      <Navbar />
      
      <main>
        {/* Intro Section */}
        <Hero />
        
        {/* Bio & Education */}
        <About />
        
        {/* Portfolio Modules */}
        {PORTFOLIO_DATA.map((module) => (
          <CarouselSection key={module.id} module={module} />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
