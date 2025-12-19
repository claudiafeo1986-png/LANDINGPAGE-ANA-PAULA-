
import React from 'react';
import { MapPin, Award } from 'lucide-react';
import { LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-24 pb-12 px-6 bg-brand-nude relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-beige/50 -z-10 hidden lg:block" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-rosegold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-fade-in relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-brand-rosegold font-bold tracking-[0.3em] uppercase text-xs">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Teresópolis, RJ</span>
              <span className="w-8 h-px bg-brand-rosegold/30"></span>
              <span className="flex items-center gap-1"><Award className="w-3 h-3" /> Atendimento 🏆</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-8xl text-brand-graphite leading-[1.1]">
              Onde o <span className="text-brand-rosegold italic">Luxo</span> encontra a <span className="text-brand-rosegold underline decoration-brand-rosegold/20">Perfeição.</span>
            </h1>
            
            <p className="text-brand-graphite/80 text-xl max-w-xl leading-relaxed">
              Alongamentos com naturalidade e resistência incomparáveis. Um atendimento de alto padrão para mulheres que exigem o extraordinário.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-effect bg-brand-rosegold text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-rosegold/30 text-center"
            >
              Agendar Experiência
            </a>
            <a 
              href="#portfolio"
              className="border-2 border-brand-rosegold text-brand-rosegold px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-rosegold hover:text-white transition-all text-center"
            >
              Ver Portfólio
            </a>
          </div>

          <div className="pt-4 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-beige"></div>
              ))}
            </div>
            <p className="text-sm font-medium text-brand-graphite/60">
              <span className="text-brand-rosegold font-bold">5000+</span> Clientes satisfeitas em Teresópolis
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-brand-rosegold/10 rounded-[3rem] blur-2xl"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(183,110,121,0.2)] border-8 border-white/50 backdrop-blur-sm">
            <img 
              src="https://imgur.com/X0KmXpH.jpg" 
              alt="Ana Paula Féo" 
              className="w-full h-auto object-cover scale-[1.01] hover:scale-105 transition-transform duration-1000"
            />
          </div>
          {/* Status Badge */}
          <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur p-8 shadow-2xl rounded-3xl border border-brand-rosegold/10">
            <div className="space-y-1">
              <p className="font-serif text-3xl text-brand-rosegold">TOP 1%</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-graphite">Especialista em RJ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
