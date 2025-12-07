import React from 'react';
import { GalleryItem } from '../types';
import { motion } from 'framer-motion';

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  items: GalleryItem[];
  bgColor?: string;
  columns?: 2 | 3 | 4;
}

const GallerySection: React.FC<Props> = ({ id, title, subtitle, items, bgColor = "bg-[#F9F8F6]", columns = 3 }) => {
  
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

        <div className={`grid grid-cols-1 ${getGridCols()} gap-12`}>
          {items.map((item, index) => (
            <motion.div 
                key={item.id} 
                className="flex flex-col group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-6 overflow-hidden">
                {item.images.map((img, idx) => (
                   <div key={idx} className="relative overflow-hidden bg-[#E7E5E4]">
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                        loading="lazy"
                      />
                   </div>
                ))}
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-xl font-serif text-[#292524] mb-2">{item.title}</h3>
                <div className="w-8 h-[1px] bg-[#C5A059] mx-auto mb-3 opacity-50"></div>
                <p className="text-xs text-[#78716c] uppercase tracking-widest">{item.medium}</p>
                {item.description && <p className="text-sm text-[#57534E] mt-3 max-w-xs mx-auto font-light leading-relaxed">{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;