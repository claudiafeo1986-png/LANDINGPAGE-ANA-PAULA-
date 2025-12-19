
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">Feedback</h2>
          <h3 className="font-serif text-4xl text-brand-graphite">Relatos de Satisfação</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-brand-nude p-10 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-gold/20" />
              <div className="space-y-6">
                <p className="text-brand-graphite/80 italic leading-relaxed">
                  "{t.content}"
                </p>
                <div className="pt-6 border-t border-brand-beige">
                  <p className="font-serif text-lg text-brand-graphite">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gold font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
