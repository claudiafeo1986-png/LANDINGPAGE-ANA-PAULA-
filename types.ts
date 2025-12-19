
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  content: string;
  role: string;
}

export interface PortfolioImage {
  url: string;
  alt: string;
}

export interface CourseCard {
  url: string;
  title: string;
  description: string;
}