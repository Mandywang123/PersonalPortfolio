
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-48 bg-[#F9F8F6]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center flex flex-col items-center"
        >
            <span className="inline-block mb-6 md:mb-8 text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] md:tracking-[0.3em] text-[#C5A059] uppercase">
                个人简介 · About
            </span>
            
            {/* 确保在移动端移除所有可能导致溢出的类，并强制居中 */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#1C1917] mb-8 md:mb-12 leading-snug md:leading-tight px-2 max-w-4xl mx-auto text-center break-words">
             探索 <span className="text-[#C5A059]">传统艺术</span> 与 <span className="text-[#C5A059]">现代设计</span> 的教学方向
            </h2>
            
            <div className="w-12 md:w-16 h-[1px] bg-[#C5A059] mx-auto mb-8 md:mb-12 opacity-40"></div>

            <p className="text-base md:text-xl text-[#44403C] leading-loose font-serif font-light mb-12 md:mb-20 max-w-3xl mx-auto px-2">
            {PERSONAL_INFO.intro}
            </p>

            <div className="flex flex-col items-center">
                <span className="text-[#A8A29E] text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-3 md:mb-4">教育背景 · Education</span>
                <h3 className="text-lg md:text-2xl font-serif text-[#1C1917]">{PERSONAL_INFO.education}</h3>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
