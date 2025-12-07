import React from 'react';
import { ProjectPhase as ProjectPhaseType } from '../types';
import { motion } from 'framer-motion';

interface Props {
  phase: ProjectPhaseType;
  index: number;
}

const ProjectPhase: React.FC<Props> = ({ phase, index }) => {
  return (
    <motion.div 
      className="mb-20 last:mb-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Text Side */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-amber-600"></div>
              <h4 className="text-xl font-serif font-bold text-gray-900">{phase.title}</h4>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base font-light">{phase.description}</p>
        </div>
        
        {/* Image Side */}
        <div className="lg:w-2/3 w-full grid grid-cols-1 gap-8">
          {phase.images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-gray-50 shadow-sm border border-gray-100">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full p-3 bg-white/90 backdrop-blur-sm border-t border-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                 <p className="text-xs text-gray-600 text-center">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPhase;