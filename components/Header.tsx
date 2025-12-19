
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-nude/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="font-serif text-2xl font-bold tracking-widest text-brand-graphite uppercase">
          Ana Paula <span className="text-brand-gold">Féo</span>
        </h1>
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium text-brand-graphite">
          <a href="#inicio" className="hover:text-brand-gold transition-colors">Início</a>
          <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a>
          <a href="#portfolio" className="hover:text-brand-gold transition-colors">Portfólio</a>
          <a href="#cursos" className="hover:text-brand-gold transition-colors">Cursos</a>
        </nav>
        <a 
          href="#contato" 
          className="bg-brand-gold text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-graphite transition-all"
        >
          Agendar
        </a>
      </div>
    </header>
  );
};

export default Header;
