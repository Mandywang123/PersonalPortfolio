
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, PanInfo, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioModule, ArtworkGroup } from '../types';
import Lightbox from './Lightbox';

interface GroupSliderProps {
  group: ArtworkGroup;
}

const GroupSlider: React.FC<GroupSliderProps> = ({ group }) => {
  const artworks = group.artworks;
  const count = artworks.length;

  // 使用三倍缓冲区实现真正的环形无限循环 [Set A, Set B, Set C]
  // 用户主要在 Set B (中间组) 活动
  const displayItems = [...artworks, ...artworks, ...artworks];

  // 初始索引设在中间组的第一个 (即第 count 个索引)
  const [currentIndex, setCurrentIndex] = useState(count);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  // 当图片组 60% 进入视口时触发单次滑动
  const isInView = useInView(containerRef, { amount: 0.6, once: false });
  const hasTriggeredScroll = useRef(false);

  // 处理无限循环的跳转归位
  const handleAnimationComplete = () => {
    // 如果已经滑出了中间组（Set B），则静默跳回中间组
    if (currentIndex < count) {
      // 从 A 组 跳回 B 组对应位置
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + count);
    } else if (currentIndex >= count * 2) {
      // 从 C 组 跳回 B 组对应位置
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - count);
    }
  };

  // 恢复过渡状态
  useEffect(() => {
    if (!isTransitioning) {
      // 必须确保在重绘之后恢复过渡，以免跳转过程产生位移动画
      const timer = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // 滚动自动触发逻辑
  useEffect(() => {
    if (isInView) {
      if (!hasTriggeredScroll.current) {
        nextSlide();
        hasTriggeredScroll.current = true;
      }
    } else {
      hasTriggeredScroll.current = false;
    }
  }, [isInView, nextSlide]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  const handleManualNav = (direction: 'next' | 'prev') => {
    if (direction === 'next') nextSlide();
    else prevSlide();
  };

  const handleImageClick = () => {
    if (!isDragging) {
      setIsLightboxOpen(true);
    }
  };

  // 映射回原始数据的索引，供 Lightbox 和分页符使用
  const originalIndex = currentIndex % count;

  const lightboxImages = artworks.map(art => ({
    src: art.image,
    alt: art.title,
    caption: art.description
  }));

  return (
    <div className="mb-24 md:mb-40 last:mb-0" ref={containerRef}>
      <div className="relative group/slider">
        {/* 桌面端导航按钮 */}
        <div className="absolute top-[40%] left-4 md:left-12 z-30 -translate-y-1/2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-700 hidden md:block">
            <button 
              onClick={(e) => { e.stopPropagation(); handleManualNav('prev'); }} 
              className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-white/40 backdrop-blur-xl hover:bg-[#C5A059]/10 border border-white/30 text-[#1C1917]/60 hover:text-[#C5A059] transition-all rounded-full shadow-xl"
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </button>
        </div>
        <div className="absolute top-[40%] right-4 md:right-12 z-30 -translate-y-1/2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-700 hidden md:block">
            <button 
              onClick={(e) => { e.stopPropagation(); handleManualNav('next'); }} 
              className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-white/40 backdrop-blur-xl hover:bg-[#C5A059]/10 border border-white/30 text-[#1C1917]/60 hover:text-[#C5A059] transition-all rounded-full shadow-xl"
            >
              <ChevronRight size={32} strokeWidth={1} />
            </button>
        </div>

        {/* 滚动轨道 */}
        <div className="relative overflow-hidden pt-4 pb-8 md:pb-12 touch-pan-y">
          <motion.div 
            className="flex items-center cursor-grab active:cursor-grabbing" 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            dragDirectionLock
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onAnimationComplete={handleAnimationComplete}
            animate={{ x: `calc(-${currentIndex * 100}vw)` }}
            transition={isTransitioning ? { type: "spring", stiffness: 70, damping: 20, mass: 1 } : { duration: 0 }}
            style={{ width: `${displayItems.length * 100}vw` }}
          >
            {displayItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="w-screen flex flex-col items-center px-4 md:px-0 select-none"
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
                    className="h-full w-auto max-w-full object-contain drop-shadow-2xl pointer-events-none"
                    initial={false}
                    animate={{ scale: index === currentIndex ? 1 : 1.05 }}
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
      
      {/* 分页点指示器 */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <div className="flex gap-3">
          {artworks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(idx + count);
              }}
              className={`h-[1px] transition-all duration-700 ${idx === originalIndex ? 'w-12 bg-[#C5A059]' : 'w-3 bg-[#D6D3D1]'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <Lightbox 
        images={lightboxImages}
        currentIndex={originalIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={() => handleManualNav('prev')}
        onNext={() => handleManualNav('next')}
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
