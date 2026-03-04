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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}>
            <img
              src="https://customer-assets.emergentagent.com/job_52f5f95f-336b-4a77-a760-c8c98d488dc8/artifacts/yt7c9ahv_b6f6364c-a487-49e5-a865-d75768bb5256.png"
              alt="Ripple VFX"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-white/70 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10 animate-in fade-in slide-in-from-top-5 duration-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="block py-3 text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="w-full mt-4 bg-white text-black hover:bg-white/90"
            >
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;