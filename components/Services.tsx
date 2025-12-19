
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brand-nude">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">Especialidades</h2>
          <h3 className="font-serif text-4xl text-brand-graphite">Serviços de Alta Performance</h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className="mb-6 inline-flex p-4 rounded-full bg-brand-beige group-hover:bg-brand-gold group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="font-serif text-xl mb-4 text-brand-graphite">{service.title}</h4>
              <p className="text-sm text-brand-graphite/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
