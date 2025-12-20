
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-[#1C1917] text-[#F9F8F6]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C5A059] text-xs font-sans font-bold tracking-[0.3em] uppercase mb-8 inline-block">
              联系合作
            </span>
            <h2 className="text-4xl md:text-7xl font-serif mb-12 leading-tight">
              让我们共同开启<br /><span className="italic text-[#A8A29E]">美学探索之旅</span>
            </h2>
            
            <p className="text-lg md:text-xl text-[#A8A29E] font-serif font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              如果您对我的作品感兴趣，或者有教学、设计相关的合作意向，欢迎随时通过邮件与我联系。
            </p>

            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group relative inline-flex items-center gap-4 px-12 py-6 border border-[#C5A059] overflow-hidden transition-all duration-500 hover:border-white"
            >
              <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <Mail className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-500" />
              <span className="text-sm font-sans tracking-[0.2em] uppercase relative z-10 group-hover:text-white transition-colors duration-500">发送邮件给我们</span>
              <ArrowRight className="w-5 h-5 relative z-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 group-hover:text-white" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
