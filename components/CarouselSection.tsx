
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioModule, ArtworkGroup } from '../types';

interface GroupSliderProps {
  group: ArtworkGroup;
}

const GroupSlider: React.FC<GroupSliderProps> = ({ group }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % group.artworks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + group.artworks.length) % group.artworks.length);
  };

  return (
    <div className="mb-40 last:mb-0">
      <div className="relative group/slider">
        {/* Navigation Buttons */}
        <div className="absolute top-[35%] left-4 md:left-12 z-30 -translate-y-1/2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-700 hidden md:block">
            <button 
              onClick={prevSlide} 
              className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl hover:from-[#C5A059]/30 hover:to-[#C5A059]/5 border border-white/30 text-[#1C1917]/60 hover:text-[#C5A059] transition-all rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] group/btn"
              aria-label="Previous slide"
            >
              <ChevronLeft size={64} strokeWidth={0.5} className="group-hover/btn:-translate-x-2 transition-transform duration-500" />
            </button>
        </div>
        <div className="absolute top-[35%] right-4 md:right-12 z-30 -translate-y-1/2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-700 hidden md:block">
            <button 
              onClick={nextSlide} 
              className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl hover:from-[#C5A059]/30 hover:to-[#C5A059]/5 border border-white/30 text-[#1C1917]/60 hover:text-[#C5A059] transition-all rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] group/btn"
              aria-label="Next slide"
            >
              <ChevronRight size={64} strokeWidth={0.5} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
            </button>
        </div>

        {/* The Track */}
        <div className="relative overflow-hidden pt-4 pb-12">
          <motion.div 
            className="flex items-start" /* Changed to items-start to allow dynamic heights */
            animate={{ x: `calc(-${currentIndex * 80}vw + 10vw)` }}
            transition={{ type: "spring", stiffness: 60, damping: 22 }}
            style={{ width: `${group.artworks.length * 80}vw` }}
          >
            {group.artworks.map((item, index) => (
              <div 
                key={item.id} 
                className={`px-4 md:px-8 transition-all duration-1000 ease-out ${index === currentIndex ? 'scale-100 opacity-100' : 'scale-[0.9] opacity-10'}`}
                style={{ width: '80vw' }}
                onClick={() => index !== currentIndex && setCurrentIndex(index)}
              >
                {/* Image Container - Removed fixed aspect ratios */}
                <div className="w-full bg-white shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)] overflow-hidden border border-[#E7E5E4]">
                  <motion.img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto block" /* Height is now dynamic based on image */
                    initial={false}
                    animate={{ scale: index === currentIndex ? 1.04 : 1.2 }}
                    transition={{ duration: 25, ease: "linear" }}
                  />
                </div>

                {/* Info Panel */}
                <div className={`mt-20 text-center transition-all duration-1000 max-w-3xl mx-auto ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                   <div className="mb-10">
                      <h3 className="text-4xl md:text-6xl font-serif text-[#1C1917] mb-4 tracking-tighter">
                        {item.title}
                      </h3>
                      <p className="text-[#C5A059] font-serif italic text-2xl font-light opacity-80">{item.year}</p>
                      <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mt-10 opacity-30"></div>
                   </div>
                   
                   <div className="px-6">
                      <p className="text-base md:text-xl text-[#57534E] leading-loose font-serif font-light text-center max-w-2xl mx-auto italic opacity-90">
                        {item.description}
                      </p>
                   </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Pagination Bar */}
      <div className="flex justify-center items-center gap-8 mt-16">
        <button onClick={prevSlide} className="md:hidden p-5 bg-white/60 backdrop-blur-md border border-[#D6D3D1] rounded-full text-[#1C1917]"><ChevronLeft size={28}/></button>
        <div className="flex gap-5">
          {group.artworks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-[1px] transition-all duration-1000 ${idx === currentIndex ? 'w-24 bg-[#C5A059]' : 'w-4 bg-[#D6D3D1]'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="md:hidden p-5 bg-white/60 backdrop-blur-md border border-[#D6D3D1] rounded-full text-[#1C1917]"><ChevronRight size={28}/></button>
      </div>
    </div>
  );
};

interface Props {
  module: PortfolioModule;
}

const CarouselSection: React.FC<Props> = ({ module }) => {
  return (
    <section id={module.id} className="py-32 md:py-56 bg-[#F9F8F6] border-t border-[#E7E5E4] overflow-hidden first:border-t-0">
      <div className="container mx-auto px-6 mb-36 text-center">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.8em' }}
          viewport={{ once: true }}
          className="text-[#C5A059] text-[10px] font-bold uppercase mb-10 block"
        >
          {module.moduleEnTitle}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-[10rem] font-serif text-[#1C1917] tracking-tighter leading-none"
        >
          {module.moduleTitle}
        </motion.h2>
        <div className="flex items-center justify-center gap-8 mt-16 opacity-20">
           <div className="w-20 h-[1px] bg-[#C5A059]"></div>
           <div className="w-2 h-2 rotate-45 border border-[#C5A059]"></div>
           <div className="w-20 h-[1px] bg-[#C5A059]"></div>
        </div>
      </div>

      <div className="space-y-40">
        {module.groups.map((group, idx) => (
          <GroupSlider key={idx} group={group} />
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
