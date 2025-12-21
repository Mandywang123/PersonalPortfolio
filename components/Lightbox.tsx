
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface LightboxProps {
  images: { src: string; alt: string; caption?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, isOpen, onClose, onPrev, onNext }) => {
  const [scale, setScale] = useState(1);
  const [dragEnabled, setDragEnabled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartDist = useRef<number>(0);
  const touchStartScale = useRef<number>(1);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setDragEnabled(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, currentIndex]);

  // Handle pinch-to-zoom on mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        touchStartDist.current = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );
        touchStartScale.current = scale;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && touchStartDist.current > 0) {
        const currentDist = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );
        const newScale = Math.min(Math.max(touchStartScale.current * (currentDist / touchStartDist.current), 1), 4);
        setScale(newScale);
        setDragEnabled(newScale > 1);
      }
    };

    const handleTouchEnd = () => {
      touchStartDist.current = 0;
    };

    if (isOpen) {
      window.addEventListener('touchstart', handleTouchStart, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, scale]);

  const handleZoomIn = () => {
    setScale(prev => {
      const next = Math.min(prev + 0.5, 4);
      setDragEnabled(next > 1);
      return next;
    });
  };

  const handleZoomOut = () => {
    setScale(prev => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setDragEnabled(false);
      return next;
    });
  };

  const resetZoom = () => {
    setScale(1);
    setDragEnabled(false);
  };

  if (!images.length) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center select-none"
          onClick={onClose}
        >
          {/* Top Bar Controls */}
          <div className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-[110]">
             <div className="flex gap-4 items-center">
                <button 
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md"
                  onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
                  title="Zoom In"
                >
                  <ZoomIn size={20} />
                </button>
                <button 
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md"
                  onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
                  title="Zoom Out"
                >
                  <ZoomOut size={20} />
                </button>
                {scale > 1 && (
                  <button 
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md"
                    onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                    title="Reset Zoom"
                  >
                    <RotateCcw size={20} />
                  </button>
                )}
             </div>

             <button 
               className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md"
               onClick={(e) => { e.stopPropagation(); onClose(); }}
             >
               <X size={24} />
             </button>
          </div>

          {/* Navigation Controls */}
          {images.length > 1 && scale === 1 && (
            <>
              <button 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-[110] p-4 hidden md:block"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
              >
                <ChevronLeft size={64} strokeWidth={1} />
              </button>
              <button 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-[110] p-4 hidden md:block"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
              >
                <ChevronRight size={64} strokeWidth={1} />
              </button>
            </>
          )}

          {/* Image Container */}
          <div 
            ref={containerRef}
            className="w-full h-full flex items-center justify-center overflow-hidden touch-none"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: scale,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              drag={dragEnabled}
              dragConstraints={{ top: -800, bottom: 800, left: -800, right: 800 }}
              className={`relative max-w-[90vw] max-h-[85vh] flex flex-col items-center ${dragEnabled ? 'cursor-move' : 'cursor-default'}`}
            >
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].alt}
                className="max-w-full max-h-[75vh] object-contain shadow-2xl pointer-events-none"
              />
              
              {/* Info Overlay */}
              <AnimatePresence>
                {scale === 1 && (
                   <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-8 text-center px-4"
                  >
                    <p className="text-white text-xl md:text-2xl font-serif mb-1">{images[currentIndex].alt}</p>
                    <div className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
                      {currentIndex + 1} / {images.length}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Mobile Swipe Indicators */}
          {scale === 1 && images.length > 1 && (
            <div className="absolute bottom-8 left-0 w-full flex justify-center gap-2 md:hidden">
              {images.map((_, idx) => (
                <div key={idx} className={`h-[2px] transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#C5A059]' : 'w-2 bg-white/20'}`} />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
