
import React, { useState } from 'react';
import { ProjectPhase as ProjectPhaseType } from '../types';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';

interface Props {
  phase: ProjectPhaseType;
  index: number;
}

const ProjectPhase: React.FC<Props> = ({ phase, index }) => {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  return (
    <motion.div 
      className="mb-24 last:mb-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
        {/* Text Side */}
        <div className="lg:w-1/3 lg:sticky lg:top-40">
          <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-serif text-[#C5A059]/20 font-bold leading-none">{(index + 1).toString().padStart(2, '0')}</span>
              <h4 className="text-2xl font-serif font-bold text-[#1C1917]">{phase.title.split(' ')[1] || phase.title}</h4>
          </div>
          <div className="w-12 h-[2px] bg-[#C5A059] mb-6"></div>
          <p className="text-[#57534E] leading-loose text-base font-light font-serif">{phase.description}</p>
        </div>
        
        {/* Image Side */}
        <div className="lg:w-2/3 w-full grid grid-cols-1 gap-12">
          {phase.images.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-white shadow-sm border border-[#E7E5E4] cursor-zoom-in flex justify-center items-center"
              onClick={() => setLightbox({ isOpen: true, index: idx })}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto max-h-[80vh] object-contain transition-all duration-1000 group-hover:opacity-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-4 p-2 bg-white/80 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
                 <p className="text-[10px] text-[#A8A29E] tracking-widest uppercase font-sans">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox 
        isOpen={lightbox.isOpen}
        images={phase.images}
        currentIndex={lightbox.index}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
        onPrev={() => setLightbox(prev => ({ ...prev, index: (prev.index - 1 + phase.images.length) % phase.images.length }))}
        onNext={() => setLightbox(prev => ({ ...prev, index: (prev.index + 1) % phase.images.length }))}
      />
    </motion.div>
  );
};

export default ProjectPhase;
