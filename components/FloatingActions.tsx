
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { LINKS } from '../constants';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-[9999]">
      {/* Instagram Button */}
      <a 
        href={LINKS.INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 group relative"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6" />
        <span className="absolute right-16 bg-brand-graphite text-white text-[10px] px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest font-bold">
          Instagram
        </span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={LINKS.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 group relative animate-bounce"
        style={{ animationDuration: '3s' }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-16 bg-brand-graphite text-white text-[10px] px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest font-bold">
          Agendar no WhatsApp
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
