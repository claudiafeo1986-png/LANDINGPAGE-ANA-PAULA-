
import React from 'react';
import { Sparkles, Heart, Crown, Award } from 'lucide-react';
import { ServiceCard, Testimonial, PortfolioImage, CourseCard } from './types';

export const LINKS = {
  WHATSAPP: "https://api.whatsapp.com/message/TDGKXML4RVOFO1?autoload=1&app_absent=0&utm_source=ig",
  INSTAGRAM: "https://www.instagram.com/anapaulafeo.nails/",
};

export const SERVICES: ServiceCard[] = [
  {
    title: "Alongamento Premium",
    description: "Técnicas avançadas para unhas resistentes, naturais e impecáveis.",
    icon: <Crown className="w-6 h-6 text-brand-gold" />
  },
  {
    title: "Esmaltação em Gel",
    description: "Brilho intenso e durabilidade superior para o seu dia a dia.",
    icon: <Sparkles className="w-6 h-6 text-brand-gold" />
  },
  {
    title: "Nail Art Exclusiva",
    description: "Designs personalizados que refletem sua personalidade e elegância.",
    icon: <Heart className="w-6 h-6 text-brand-gold" />
  },
  {
    title: "Mentoria Profissional",
    description: "Capacitação técnica para manicures que buscam o próximo nível.",
    icon: <Award className="w-6 h-6 text-brand-gold" />
  }
];

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  { url: "https://imgur.com/Uvw82eH.jpg", alt: "Trabalho 1" },
  { url: "https://imgur.com/35qa7ng.jpg", alt: "Trabalho 2" },
  { url: "https://imgur.com/9zy53Fa.jpg", alt: "Trabalho 3" },
  { url: "https://imgur.com/mBKZi8a.jpg", alt: "Trabalho 4" },
  { url: "https://imgur.com/cPahMLt.jpg", alt: "Trabalho 5" },
];

export const COURSES: CourseCard[] = [
  {
    url: "https://imgur.com/Tp7cwyN.jpg",
    title: "Master em Alongamento",
    description: "Domine as técnicas mais requisitadas do mercado."
  },
  {
    url: "https://imgur.com/o8I3sVj.jpg",
    title: "Esmaltação Blindada",
    description: "Aprenda o segredo da durabilidade extrema."
  },
  {
    url: "https://imgur.com/pkkEoCB.jpg",
    title: "Design de Formatos",
    description: "Almond, Coffin e Stiletto com perfeição."
  },
  {
    url: "https://imgur.com/15RXYBW.jpg",
    title: "Biossegurança Estética",
    description: "O padrão ouro em saúde e higiene."
  },
  {
    url: "https://imgur.com/lRlXfVq.jpg",
    title: "Marketing para Manicures",
    description: "Como lotar sua agenda e valorizar seu trabalho."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Juliana Mendes",
    role: "Cliente Fiel",
    content: "O trabalho da Ana é impecável. Nunca tive unhas tão lindas e saudáveis. O atendimento é uma experiência de luxo."
  },
  {
    name: "Carla Silveira",
    role: "Aluna de Mentoria",
    content: "Mudei minha visão profissional depois do curso. Ana Paula ensina com alma e precisão técnica."
  },
  {
    name: "Beatriz Lopes",
    role: "Empresária",
    content: "Elegância define. Cada detalhe é pensado para nos sentirmos únicas. Recomendo de olhos fechados."
  }
];
