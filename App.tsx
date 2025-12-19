
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-rosegold/30 selection:text-brand-rosegold">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Courses />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;
