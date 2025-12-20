
import React, { useState } from 'react';
import { GalleryItem, ImageAsset } from '../types';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  items: GalleryItem[];
  bgColor?: string;
  columns?: 2 | 3 | 4;
}

const GallerySection: React.FC<Props> = ({ id, title, subtitle, items, bgColor = "bg-[#F9F8F6]", columns = 3 }) => {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [] as ImageAsset[], index: 0 });

  const openLightbox = (images: ImageAsset[], index: number) => {
    setLightbox({ isOpen: true, images, index });
  };

  const getGridCols = () => {
    if (columns === 2) return "md:grid-cols-2";
    if (columns === 4) return "md:grid-cols-2 lg:grid-cols-4";
    return "md:grid-cols-2 lg:grid-cols-3";
  }

  return (
    <section id={id} className={`py-32 ${bgColor} border-t border-[#E7E5E4]`}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl md:text-5xl font-serif text-[#1C1917] mb-4">
                {title}
            </h2>
            {subtitle && <p className="text-[#C5A059] tracking-[0.2em] uppercase text-xs font-bold">{subtitle}</p>}
        </motion.div>

        <div className={`grid grid-cols-1 ${getGridCols()} gap-16 items-start`}>
          {items.map((item, itemIdx) => (
            <motion.div 
                key={item.id} 
                className="flex flex-col group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: itemIdx * 0.1 }}
                onClick={() => openLightbox(item.images, 0)}
            >
              <div className="mb-6 overflow-hidden flex justify-center">
                {item.images.slice(0, 1).map((img, idx) => (
                   /* 固定高度容器，宽度随比例 */
                   <div key={idx} className="relative h-[300px] md:h-[400px] bg-white border border-[#E7E5E4] shadow-sm overflow-hidden flex items-center justify-center">
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="h-full w-auto block grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                         <span className="px-6 py-2 bg-white/90 backdrop-blur-sm text-[#1C1917] text-[10px] tracking-widest uppercase font-sans border border-[#E7E5E4]">VIEW FULL SIZE</span>
                      </div>
                   </div>
                ))}
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-xl font-serif text-[#292524] mb-2">{item.title}</h3>
                <div className="w-6 h-[1px] bg-[#C5A059]/40 mx-auto mb-3"></div>
                <p className="text-[10px] text-[#78716c] uppercase tracking-widest">{item.medium}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox 
        isOpen={lightbox.isOpen}
        images={lightbox.images}
        currentIndex={lightbox.index}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
        onPrev={() => setLightbox(prev => ({ ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }))}
        onNext={() => setLightbox(prev => ({ ...prev, index: (prev.index + 1) % prev.images.length }))}
      />
    </section>
  );
};

export default GallerySection;
