
import React, { useRef } from 'react';
import { COURSES, LINKS } from '../constants';
import { GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

const Courses: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="cursos" className="py-32 px-6 bg-brand-graphite text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-rosegold/10 rounded-full blur-[120px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-rosegold/20 text-brand-rosegold px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-rosegold/30">
              <GraduationCap className="w-3 h-3" /> Metodologia Féo
            </div>
            <h3 className="font-serif text-4xl md:text-6xl">Cursos do Iniciante ao Avançado 🎓</h3>
            <p className="text-brand-beige/60 text-lg">
              Transforme sua carreira com técnicas de alto padrão.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border-2 border-brand-rosegold text-brand-rosegold flex items-center justify-center hover:bg-brand-rosegold hover:text-white transition-all bg-white/5 backdrop-blur shadow-xl"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border-2 border-brand-rosegold text-brand-rosegold flex items-center justify-center hover:bg-brand-rosegold hover:text-white transition-all bg-white/5 backdrop-blur shadow-xl"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto pb-12 snap-x no-scrollbar"
        >
          {COURSES.map((course, index) => (
            <div 
              key={index} 
              className="flex-none w-[300px] md:w-[420px] bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 overflow-hidden snap-center flex flex-col group hover:border-brand-rosegold/50 transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={course.url} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-10 space-y-6 flex-grow flex flex-col">
                <h4 className="font-serif text-3xl text-brand-rosegold leading-tight">{course.title}</h4>
                <p className="text-brand-beige/70 leading-relaxed flex-grow text-sm">
                  {course.description}
                </p>
                <a 
                  href={LINKS.WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine-effect mt-4 bg-brand-rosegold text-white text-center py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
                >
                  Quero me Especializar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
