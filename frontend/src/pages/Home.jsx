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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;