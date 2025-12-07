import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#hero' },
    { name: '简介', href: '#about' },
    { name: '项目', href: '#projects' },
    { name: '国画', href: '#chinese-painting' },
    { name: '素描', href: '#sketches' },
    { name: '设计', href: '#design' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#F9F8F6]/90 backdrop-blur-md py-4 border-b border-[#E7E5E4]' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleClick(e, '#hero')} 
          className="text-2xl font-serif font-bold tracking-tight text-[#1C1917]"
        >
          {PERSONAL_INFO.enName}
          <span className="text-[#C5A059]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-sans tracking-[0.15em] text-[#57534E] hover:text-[#C5A059] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6 text-[#1C1917]" /> : <Menu className="w-6 h-6 text-[#1C1917]" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#F9F8F6] z-40 transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center space-y-8`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-3xl font-serif text-[#1C1917] hover:text-[#C5A059] transition-colors"
              >
                {link.name}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;