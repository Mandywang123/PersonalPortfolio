import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-[#F9F8F6]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
            <span className="inline-block mb-6 text-xs font-sans font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                个人简介
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917] mb-12 leading-tight">
             探索 <span className="italic text-[#78716c]">传统</span> 与 <span className="italic text-[#78716c]">创新</span> 的交汇
            </h2>
            
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-12"></div>

            <p className="text-lg md:text-xl text-[#44403C] leading-loose font-serif font-light mb-16 max-w-2xl mx-auto">
            {PERSONAL_INFO.intro}
            </p>

            <div className="inline-flex flex-col items-center">
                <span className="text-[#A8A29E] text-xs tracking-widest uppercase mb-2">教育背景</span>
                <h3 className="text-xl font-serif text-[#1C1917]">{PERSONAL_INFO.education}</h3>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;