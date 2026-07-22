import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Film, Building2 } from 'lucide-react';

const Navbar = ({ scrolled, activeDepartment, onDepartmentChange }) => {
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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSideMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

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
          scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' : ''
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              className="flex items-center space-x-3 group relative" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
            >
              <div className="relative">
                <img
                  src={activeDepartment === 'vfx' 
                    ? "https://customer-assets.emergentagent.com/job_ripple-fx-studio/artifacts/w6fuawec_ripplelogohovfx.png.png"
                    : "https://customer-assets.emergentagent.com/job_ripple-fx-studio/artifacts/pucs5x0a_ripplelogohodigital.png.png"
                  }
                  alt={activeDepartment === 'vfx' ? "Ripple VFX" : "Ripple Digital"}
                  className="h-16 w-auto"
                />
              </div>
            </a>

            {/* Department Switcher - Center */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <div className="inline-flex bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-1 gap-1">
                <button
                  onClick={() => onDepartmentChange('vfx')}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                    activeDepartment === 'vfx'
                      ? 'bg-white text-black shadow-2xl shadow-white/20'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Film size={16} />
                  <span>Ripple VFX</span>
                </button>
                <button
                  onClick={() => onDepartmentChange('digital')}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                    activeDepartment === 'digital'
                      ? 'bg-white text-black shadow-2xl shadow-white/20'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Building2 size={16} />
                  <span>Ripple Digital</span>
                </button>
              </div>
            </div>

            {/* Menu Button - Right Side */}
            <button
              onClick={() => setSideMenuOpen(true)}
              className="text-white hover:text-white/70 transition-all duration-300 relative group p-2"
            >
              <div className="flex flex-col items-center gap-1">
                <Menu size={28} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs uppercase tracking-wider">Menu</span>
              </div>
              <div className="absolute inset-0 blur-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </button>
          </div>

          {/* Mobile Department Switcher */}
          <div className="md:hidden mt-4 flex justify-center">
            <div className="inline-flex bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-1 gap-1">
              <button
                onClick={() => onDepartmentChange('vfx')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-500 ${
                  activeDepartment === 'vfx'
                    ? 'bg-white text-black shadow-2xl shadow-white/20'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Film size={14} />
                <span>Ripple VFX</span>
              </button>
              <button
                onClick={() => onDepartmentChange('digital')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-500 ${
                  activeDepartment === 'digital'
                    ? 'bg-white text-black shadow-2xl shadow-white/20'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Building2 size={14} />
                <span>Ripple Digital</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-500 z-50 ${
          sideMenuOpen ? 'opacity-40 backdrop-blur-md pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSideMenuOpen(false)}
      />

      {/* Side Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[600px] z-50 transition-all duration-700 ease-out ${
          sideMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="h-full bg-black/60 backdrop-blur-2xl border-l border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative h-full flex flex-col p-8 md:p-12">
            <button
              onClick={() => setSideMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-white/70 transition-all duration-300 group"
            >
              <div className="relative">
                <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
                <div className="absolute inset-0 blur-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </button>

            <div className="mb-12 animate-in fade-in slide-in-from-right-10 duration-700">
              <img
                src={activeDepartment === 'vfx' 
                  ? "https://customer-assets.emergentagent.com/job_ripple-fx-studio/artifacts/k0ro4bgp_ripplelogovfx.png"
                  : "https://customer-assets.emergentagent.com/job_ripple-fx-studio/artifacts/kzqbmomq_ripplelogodigital.png"
                }
                alt={activeDepartment === 'vfx' ? "Ripple VFX" : "Ripple Digital"}
                className="h-[106px] w-auto"
              />
            </div>

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
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

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
                <a
                  href="https://www.linkedin.com/company/ripple-vfx-studios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-all duration-300 hover:scale-110 text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;