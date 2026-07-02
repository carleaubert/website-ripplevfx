import React, { useState, useEffect } from 'react';
import { Building2, Film } from 'lucide-react';
import VFXDepartment from '../components/departments/VFXDepartment';
import DigitalDepartment from '../components/departments/DigitalDepartment';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [activeDepartment, setActiveDepartment] = useState('vfx'); // 'vfx' or 'digital'
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

  const switchDepartment = (dept) => {
    setActiveDepartment(dept);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar 
        scrolled={scrolled} 
        activeDepartment={activeDepartment}
        onDepartmentChange={switchDepartment}
      />
      
      {/* Department Switcher - Fixed below navbar */}
      <div className="fixed top-20 left-0 right-0 z-30 flex justify-center pt-4">
        <div className="inline-flex bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-2 gap-2">
          <button
            onClick={() => switchDepartment('vfx')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ${
              activeDepartment === 'vfx'
                ? 'bg-white text-black shadow-2xl shadow-white/20'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Film size={18} />
            <span>Ripple VFX</span>
          </button>
          <button
            onClick={() => switchDepartment('digital')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ${
              activeDepartment === 'digital'
                ? 'bg-white text-black shadow-2xl shadow-white/20'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Building2 size={18} />
            <span>Ripple Digital</span>
          </button>
        </div>
      </div>

      {/* Department Content */}
      <div className="transition-all duration-500">
        {activeDepartment === 'vfx' ? (
          <VFXDepartment />
        ) : (
          <DigitalDepartment />
        )}
      </div>

      <Footer activeDepartment={activeDepartment} />
    </div>
  );
};

export default Home;