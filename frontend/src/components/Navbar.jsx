import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center space-x-3 group relative" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
          >
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_52f5f95f-336b-4a77-a760-c8c98d488dc8/artifacts/yt7c9ahv_b6f6364c-a487-49e5-a865-d75768bb5256.png"
                alt="Ripple VFX"
                className="h-10 w-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 blur-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="text-sm font-medium text-white/70 hover:text-white transition-all duration-300 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-300 group-hover:w-full"></span>
                {/* Glow effect */}
                <span className="absolute inset-0 blur-md bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
              </a>
            ))}
            <Button
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/20 relative overflow-hidden group"
            >
              {/* Button shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative">Get in Touch</span>
            </Button>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-white/70 transition-all duration-300 relative z-50"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu size={24} />
              </div>
              <div className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
                <X size={24} />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu with enhanced animations */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-white/10">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="block py-4 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 hover:pl-2"
                style={{
                  animation: mobileMenuOpen ? `slideInFromRight 0.4s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <span className="text-lg font-medium">{item.label}</span>
              </a>
            ))}
            <Button
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="w-full mt-4 bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105"
              style={{
                animation: mobileMenuOpen ? `slideInFromRight 0.4s ease-out ${navItems.length * 0.1}s both` : 'none'
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
          onClick={() => setMobileMenuOpen(false)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        />
      )}
    </nav>
  );
};

export default Navbar;