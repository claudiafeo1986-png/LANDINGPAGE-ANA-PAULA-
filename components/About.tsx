
import React from 'react';
import { MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="md:w-5/12 order-2 md:order-1">
          <div className="relative group">
             <img 
              src="https://imgur.com/uOfi4CI.jpg" 
              alt="Ana Paula Féo Institucional" 
              className="rounded-[2rem] shadow-2xl max-w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-rosegold/10 rounded-full blur-3xl -z-10 group-hover:bg-brand-rosegold/20 transition-colors"></div>
          </div>
        </div>
        
        <div className="md:w-7/12 space-y-8 order-1 md:order-2">
          <div className="space-y-2">
            <h2 className="text-brand-rosegold font-bold tracking-[0.3em] uppercase text-xs">Alta Performance</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-graphite leading-tight">Excelência em Cada Detalhe</h3>
          </div>
          
          <div className="space-y-6 text-brand-graphite/80 leading-relaxed text-lg">
            <p className="font-medium text-brand-graphite">
              Sediada em <span className="text-brand-rosegold font-bold">Teresópolis - RJ</span>, Ana Paula Féo é a escolha definitiva para quem busca alongamentos que unem <span className="italic">naturalidade extrema</span> e <span className="italic">resistência inabalável.</span>
            </p>
            <p>
              Com mais de uma década de experiência, Ana desenvolveu uma metodologia própria que prioriza a saúde da unha natural enquanto entrega um acabamento estético digno de premiações. O atendimento de alto padrão é o pilar que sustenta sua marca.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 pt-6">
            <div className="space-y-1">
              <p className="font-serif text-4xl text-brand-rosegold">10+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-graphite/50">Anos de Domínio</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-4xl text-brand-rosegold">RJ</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-graphite/50">Referência Regional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
