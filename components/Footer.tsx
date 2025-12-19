
import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import { LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-nude py-24 px-6 border-t border-brand-rosegold/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="font-serif text-3xl font-bold tracking-widest text-brand-graphite uppercase">
            Ana Paula <span className="text-brand-rosegold">Féo</span>
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-2 text-brand-graphite/50 text-xs uppercase tracking-widest font-bold">
            <MapPin className="w-3 h-3 text-brand-rosegold" /> Teresópolis, RJ
          </div>
        </div>

        <div className="space-y-8 text-center">
          <p className="text-brand-graphite/60 text-sm leading-relaxed max-w-xs mx-auto">
            Referência em alongamentos de alta resistência e naturalidade. Atendimento premium e formação profissional.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <a 
              href={LINKS.INSTAGRAM} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-xl hover:shadow-2xl hover:text-brand-rosegold hover:-translate-y-1 transition-all text-brand-graphite"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href={LINKS.WHATSAPP} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-rosegold text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="text-center md:text-right space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-graphite/20">
            Premium Experience
          </p>
          <div className="text-xs text-brand-graphite/40 font-medium tracking-widest uppercase leading-loose">
            © {new Date().getFullYear()} Ana Paula Féo.<br />
            Built for Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
