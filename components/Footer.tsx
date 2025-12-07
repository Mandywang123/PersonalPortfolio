import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-[#A8A29E] py-24 border-t border-[#C5A059]/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-[#E7E5E4] mb-8 tracking-tight">{PERSONAL_INFO.enName}</h2>
        
        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-serif italic text-[#C5A059] hover:text-[#fff] transition-colors mb-12 block">
            {PERSONAL_INFO.email}
        </a>
        
        <div className="flex justify-center gap-8 mb-12">
            <span className="text-xs uppercase tracking-widest hover:text-[#C5A059] cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs uppercase tracking-widest hover:text-[#C5A059] cursor-pointer transition-colors">Behance</span>
            <span className="text-xs uppercase tracking-widest hover:text-[#C5A059] cursor-pointer transition-colors">LinkedIn</span>
        </div>

        <p className="text-[10px] text-[#57534E] uppercase tracking-widest">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. 版权所有.
        </p>
      </div>
    </footer>
  );
};

export default Footer;