import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import About from '../components/About';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
      
      // Calculate scroll progress for dissolve effect
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollProgress);

      // Dissolve effect on scroll
      const sections = document.querySelectorAll('.dissolve-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate opacity based on scroll position
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const progress = Math.min(Math.max((windowHeight - elementTop) / (windowHeight * 0.5), 0), 1);
          section.style.opacity = progress;
          section.style.transform = `translateY(${(1 - progress) * 50}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar scrolled={scrolled} />
      <Hero />
      
      {/* Sections with dissolve effect */}
      <div className="dissolve-section">
        <Projects />
      </div>
      <div className="dissolve-section">
        <Services />
      </div>
      <div className="dissolve-section">
        <About />
      </div>
      <div className="dissolve-section">
        <Team />
      </div>
      <div className="dissolve-section">
        <Clients />
      </div>
      <div className="dissolve-section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;