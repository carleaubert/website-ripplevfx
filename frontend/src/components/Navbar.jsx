import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = ({ scrolled }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

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
      setSideMenuOpen(false);
    }
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSideMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (sideMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sideMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
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
                  src="https://customer-assets.emergentagent.com/job_ripple-fx-studio/artifacts/4dx0bgm4_e0804916-7e47-4dc6-b7f7-acdc88203459.png"
                  alt="Ripple VFX"
                  className="h-16 w-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
                  style={{ 
                    mixBlendMode: 'screen'
                  }}
                />
                <div className="absolute inset-0 blur-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </a>

            {/* Menu Button - Right Side */}
            <button
              onClick={() => setSideMenuOpen(true)}
              className="text-white hover:text-white/70 transition-all duration-300 relative group p-2"
            >
              <div className="flex flex-col items-center gap-1">
                <Menu size={28} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs uppercase tracking-wider">Menu</span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 blur-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay - Semi-transparent background */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-500 z-50 ${
          sideMenuOpen ? 'opacity-40 backdrop-blur-md pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSideMenuOpen(false)}
      />

      {/* Side Menu Panel - WIDER */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[600px] z-50 transition-all duration-700 ease-out ${
          sideMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Glass morphism menu with transparency */}
        <div className="h-full bg-black/60 backdrop-blur-2xl border-l border-white/10 relative overflow-hidden">
          {/* Animated background gradients */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col p-8 md:p-12">
            {/* Close Button */}
            <button
              onClick={() => setSideMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-white/70 transition-all duration-300 group"
            >
              <div className="relative">
                <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
                <div className="absolute inset-0 blur-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </button>

            {/* Logo in menu */}
            <div className="mb-12 animate-in fade-in slide-in-from-right-10 duration-700">
              <img
                src="https://customer-assets.emergentagent.com/job_ripple-fx-studio/artifacts/4dx0bgm4_e0804916-7e47-4dc6-b7f7-acdc88203459.png"
                alt="Ripple VFX"
                className="h-28 w-auto"
                style={{ 
                  mixBlendMode: 'screen'
                }}
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex-1">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li
                    key={item.label}
                    className="animate-in fade-in slide-in-from-right-10"
                    style={{
                      animationDelay: `${(index + 1) * 100}ms`,
                      animationDuration: '700ms',
                      animationFillMode: 'both'
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                      className="group flex items-center justify-between py-4 px-6 text-3xl md:text-4xl font-bold text-white/70 hover:text-white transition-all duration-500 rounded-lg hover:bg-white/5 hover:translate-x-2"
                    >
                      <span className="relative">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full" />
                      </span>
                      <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2" size={32} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div
              className="mt-8 animate-in fade-in slide-in-from-right-10"
              style={{
                animationDelay: `${(navItems.length + 1) * 100}ms`,
                animationDuration: '700ms',
                animationFillMode: 'both'
              }}
            >
              <Button
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                size="lg"
                className="w-full bg-white text-black hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 text-lg py-6 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Start Your Project</span>
              </Button>
            </div>

            {/* Social Links or Additional Info */}
            <div
              className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-right-10"
              style={{
                animationDelay: `${(navItems.length + 2) * 100}ms`,
                animationDuration: '700ms',
                animationFillMode: 'both'
              }}
            >
              <p className="text-sm text-gray-400 mb-2">Follow Us</p>
              <div className="flex gap-4">
                {['Instagram', 'Twitter', 'LinkedIn'].map((social, i) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white/50 hover:text-white transition-all duration-300 hover:scale-110 text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;