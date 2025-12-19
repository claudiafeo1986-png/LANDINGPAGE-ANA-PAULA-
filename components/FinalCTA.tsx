
import React from 'react';
import { LINKS } from '../constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brand-beige relative overflow-hidden">
      {/* Decorative floral elements could go here if available */}
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl md:text-6xl text-brand-graphite leading-tight">
            Elevando sua Autoestima ao <br />
            <span className="text-brand-gold italic">Nível de Arte.</span>
          </h2>
          <p className="text-brand-graphite/70 text-lg">
            Seja para agendar seu momento de cuidado ou para iniciar sua jornada profissional, Ana Paula Féo é sua guia para a excelência.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-graphite text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-gold transition-all shadow-2xl flex items-center justify-center gap-2"
          >
            Falar com Ana Paula no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
