
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CarouselSection from './components/CarouselSection';
import Footer from './components/Footer';
import { PORTFOLIO_DATA } from './constants';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1917] antialiased selection:bg-[#C5A059] selection:text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#C5A059] z-[60] origin-left"
        style={{ scaleX }}
      />
      
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
