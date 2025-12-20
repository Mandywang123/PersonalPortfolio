
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: '首页', href: '#hero' },
    { name: '简介', href: '#about' },
    { name: '国画', href: '#module-chinese-painting' },
    { name: '插画', href: '#module-illustration' },
    { name: '素描', href: '#module-sketch' },
    { name: '设计', href: '#module-design' },
    { name: '3D项目', href: '#module-3d' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#F9F8F6]/95 backdrop-blur-xl py-3 border-b border-[#E7E5E4]' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="container mx-auto px-5 md:px-12 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleClick(e, '#hero')} 
          className="group text-xl md:text-2xl font-serif font-bold tracking-tight text-[#1C1917]"
        >
          {PERSONAL_INFO.enName}
          <span className="text-[#C5A059] group-hover:ml-1 transition-all duration-300">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="relative text-[9px] font-sans font-bold tracking-[0.2em] text-[#57534E] hover:text-[#1C1917] transition-colors duration-300 uppercase overflow-hidden group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A059] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-[60] focus:outline-none p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-6 h-[1.5px] bg-[#1C1917] transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-[1.5px]' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-[1.5px] bg-[#1C1917] transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-[0px]' : 'translate-y-1'}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#F9F8F6] z-50 transform transition-all duration-700 ease-[cubic-bezier(0.83, 0, 0.17, 1)] ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} lg:hidden flex flex-col items-center justify-center`}>
            <div className="flex flex-col items-center space-y-6 md:space-y-8">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-2xl md:text-3xl font-serif text-[#1C1917] hover:text-[#C5A059] transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${isOpen ? idx * 50 + 200 : 0}ms` }}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className={`absolute bottom-12 text-center transition-all duration-700 delay-500 ${isOpen ? 'opacity-30' : 'opacity-0'}`}>
               <p className="text-[10px] tracking-[0.5em] uppercase text-[#1C1917]">{PERSONAL_INFO.portfolioTitle}</p>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
