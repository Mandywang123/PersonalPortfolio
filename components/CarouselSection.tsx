
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, PanInfo, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioModule, ArtworkGroup } from '../types';

interface GroupSliderProps {
  group: ArtworkGroup;
}

const GroupSlider: React.FC<GroupSliderProps> = ({ group }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 使用 useInView 监听组件是否进入视野
  // amount: 0.6 表示当组件 60% 面积进入视野时触发
  const isInView = useInView(containerRef, { amount: 0.6, once: false });

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % group.artworks.length);
  }, [group.artworks.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + group.artworks.length) % group.artworks.length);
  }, [group.artworks.length]);

  // 当 isInView 变为 true 时（即滑动到这一行并“聚焦”时），执行一次切换
  useEffect(() => {
    if (isInView && !isDragging) {
      // 为了避免页面加载瞬间全部触发，这里可以稍微加一点逻辑或直接执行
      // 用户明确要求“逐渐聚焦到某一行时，这一行发生一次滚动切换”
      nextSlide();
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

  return (
    <div className="mb-24 md:mb-40 last:mb-0" ref={containerRef}>
      <div className="relative group/slider">
        {/* Desktop Navigation Buttons */}
        <div className="absolute top-[40%] left-4 md:left-12 z-30 -translate-y-1/2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-700 hidden md:block">
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }} 
              className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white/40 backdrop-blur-xl hover:bg-[#C5A059]/10 border border-white/30 text-[#1C1917]/60 hover:text-[#C5A059] transition-all rounded-full shadow-xl group/btn"
              aria-label="Previous slide"
            >
              <ChevronLeft size={48} strokeWidth={1} className="group-hover/btn:-translate-x-1 transition-transform" />
            </button>
        </div>
        <div className="absolute top-[40%] right-4 md:right-12 z-30 -translate-y-1/2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-700 hidden md:block">
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }} 
              className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white/40 backdrop-blur-xl hover:bg-[#C5A059]/10 border border-white/30 text-[#1C1917]/60 hover:text-[#C5A059] transition-all rounded-full shadow-xl group/btn"
              aria-label="Next slide"
            >
              <ChevronRight size={48} strokeWidth={1} className="group-hover/btn:translate-x-1 transition-transform" />
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
                <div className={`
                    relative flex justify-center items-center mx-auto
                    h-[45vh] md:h-[75vh] w-[70vw] md:w-full md:max-w-none
                    transition-all duration-1000 ease-out
                    ${index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-20'}
                `}>
                  <motion.img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-auto max-w-full object-contain shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-white pointer-events-none transition-all duration-1000"
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
      
      {/* Pagination Bar */}
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
