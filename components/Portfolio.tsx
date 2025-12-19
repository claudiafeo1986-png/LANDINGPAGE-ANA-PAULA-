
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_IMAGES } from '../constants';

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <h2 className="text-brand-rosegold font-bold tracking-[0.2em] uppercase text-sm">Galeria Exclusiva</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-graphite">Trabalhos que Representam Excelência</h3>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-brand-rosegold text-brand-rosegold flex items-center justify-center hover:bg-brand-rosegold hover:text-white transition-all shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-brand-rosegold text-brand-rosegold flex items-center justify-center hover:bg-brand-rosegold hover:text-white transition-all shadow-lg"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar"
          >
            {PORTFOLIO_IMAGES.map((img, index) => (
              <div 
                key={index} 
                className="flex-none w-[280px] md:w-[400px] snap-center rounded-[2rem] overflow-hidden shadow-2xl border-4 border-brand-nude hover:border-brand-rosegold/30 transition-all duration-500"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-[450px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
