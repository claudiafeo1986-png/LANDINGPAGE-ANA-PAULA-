
import React from 'react';
import { PORTFOLIO_IMAGES } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">Galeria Exclusiva</h2>
            <h3 className="font-serif text-4xl text-brand-graphite">Trabalhos que Representam Excelência</h3>
          </div>
          <p className="text-brand-graphite/60 max-w-md md:text-right">
            Cada clique revela a precisão, o brilho e a elegância de unhas projetadas para impactar.
          </p>
        </div>

        <div className="relative group">
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
            {PORTFOLIO_IMAGES.map((img, index) => (
              <div 
                key={index} 
                className="flex-none w-[300px] md:w-[400px] snap-center rounded-2xl overflow-hidden shadow-lg border-4 border-white"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          {/* Scroll hint for mobile */}
          <div className="md:hidden text-center text-xs text-brand-gold font-bold uppercase tracking-widest animate-pulse mt-4">
            Arraste para o lado →
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
