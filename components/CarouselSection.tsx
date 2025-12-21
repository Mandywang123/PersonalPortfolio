
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, PanInfo, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioModule, ArtworkGroup } from '../types';
import Lightbox from './Lightbox';

interface GroupSliderProps {
  group: ArtworkGroup;
}

const GroupSlider: React.FC<GroupSliderProps> = ({ group }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.6, once: false });

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % group.artworks.length);
  }, [group.artworks.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + group.artworks.length) % group.artworks.length);
  }, [group.artworks.length]);

  useEffect(() => {
    if (isInView && !isDragging) {
      // Auto-focus move when scrolled into view
      // nextSlide(); // Optional: user asked for "happens once", but maybe just let them control it
    }
  }, [isInView]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  const handleImageClick = () => {
    if (!isDragging) {
      setIsLightboxOpen(true);
    }
  };

  const lightboxImages = group.artworks.map(art => ({
    src: art.image,
    alt: art.title,
    caption: art.description
  }));

  return (
    <div className="mb-24 md:mb-40 last:mb-0" ref={containerRef}>
      <div className="relative group/slider">
        {/* Navigation Buttons */}
        <div className="absolute top-[40%] left-4 md:left-12 z-30 -translate-y-1/2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-700 hidden md:block">
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }} 
              className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-white/40 backdrop-blur-xl hover:bg-[#C5A059]/10 border border-white/30 text-[#1C1917]/60 hover:text-[#C5A059] transition-all rounded-full shadow-xl"
              aria-label="Previous slide"
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </button>
        </div>
        <div className="absolute top-[40%] right-4 md:right-12 z-30 -translate-y-1/2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-700 hidden md:block">
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }} 
              className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-white/40 backdrop-blur-xl hover:bg-[#C5A059]/10 border border-white/30 text-[#1C1917]/60 hover:text-[#C5A059] transition-all rounded-full shadow-xl"
              aria-label="Next slide"
            >
              <ChevronRight size={32} strokeWidth={1} />
            </button>
        </div>

        {/* The Track */}
        <div className="relative overflow-hidden pt-4 pb-8 md:pb-12 cursor-grab active:cursor-grabbing">
          <motion.div 
            className="flex items-center" 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            animate={{ x: `calc(-${currentIndex * 100}vw)` }}
            transition={{ type: "spring", stiffness: 60, damping: 22 }}
            style={{ width: `${group.artworks.length * 100}vw` }}
          >
            {group.artworks.map((item, index) => (
              <div 
                key={item.id} 
                className="w-screen flex flex-col items-center px-4 md:px-0"
              >
                <div 
                  className={`
                    relative flex justify-center items-center mx-auto
                    h-[45vh] md:h-[75vh] w-[85vw] md:w-full md:max-w-6xl
                    transition-all duration-1000 ease-out cursor-zoom-in
                    ${index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-20'}
                  `}
                  onClick={handleImageClick}
                >
                  <motion.img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-auto max-w-full object-contain drop-shadow-2xl pointer-events-none transition-all duration-1000"
                    initial={false}
                    animate={{ scale: index === currentIndex ? 1 : 1.1 }}
                    transition={{ duration: 1.2 }}
                  />
                </div>

                <div className={`mt-10 md:mt-16 text-center transition-all duration-1000 max-w-3xl mx-auto px-6 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                   <h3 className="text-xl md:text-4xl font-serif text-[#1C1917] mb-2 md:mb-4 tracking-tighter">
                     {item.title}
                   </h3>
                   <p className="text-[#C5A059] font-serif italic text-base md:text-xl font-light">{item.year}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <div className="flex gap-3">
          {group.artworks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentIndex(idx); }}
              className={`h-[1px] transition-all duration-700 ${idx === currentIndex ? 'w-12 bg-[#C5A059]' : 'w-3 bg-[#D6D3D1]'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <Lightbox 
        images={lightboxImages}
        currentIndex={currentIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </div>
  );
};

interface Props {
  module: PortfolioModule;
}

const CarouselSection: React.FC<Props> = ({ module }) => {
  return (
    <section id={module.id} className="py-20 md:py-48 bg-[#F9F8F6] border-t border-[#E7E5E4] overflow-hidden first:border-t-0">
      <div className="container mx-auto px-6 mb-16 md:mb-32 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#C5A059] text-[9px] font-bold uppercase tracking-[0.5em] mb-6 block"
        >
          {module.moduleEnTitle}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[2rem] md:text-[6.5rem] font-serif text-[#1C1917] tracking-tighter leading-tight"
        >
          {module.moduleTitle}
        </motion.h2>
      </div>

      <div className="space-y-24 md:space-y-32">
        {module.groups.map((group, idx) => (
          <GroupSlider key={idx} group={group} />
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
