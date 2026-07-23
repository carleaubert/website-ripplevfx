import React, { useState, useEffect, useCallback } from 'react';
import { Menu } from 'lucide-react';
import DepartmentSwitcher from './navbar/DepartmentSwitcher';
import MobileMenu from './navbar/MobileMenu';

const NAV_ITEMS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = ({ scrolled, activeDepartment, onDepartmentChange }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSideMenuOpen(false);
    }
  };

  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') setSideMenuOpen(false);
  }, [setSideMenuOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [handleEscape]);

  useEffect(() => {
    document.body.style.overflow = sideMenuOpen ? 'hidden' : 'unset';
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
                    ? "/assets/logos/ripple-vfx-logo-horizontal.png"
                    : "/assets/logos/ripple-digital-logo-horizontal.png"
                  }
                  alt={activeDepartment === 'vfx' ? "Ripple VFX" : "Ripple Digital"}
                  className="h-16 w-auto"
                />
              </div>
            </a>

            {/* Department Switcher - Desktop */}
            <DepartmentSwitcher 
              activeDepartment={activeDepartment}
              onDepartmentChange={onDepartmentChange}
            />

            {/* Menu Button */}
            <button
              onClick={() => setSideMenuOpen(true)}
              className="text-white hover:text-white/70 transition-all duration-300 relative group p-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
              <span className="absolute top-0 right-0 w-full h-full bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={sideMenuOpen}
        onClose={() => setSideMenuOpen(false)}
        navItems={NAV_ITEMS}
        scrollToSection={scrollToSection}
        activeDepartment={activeDepartment}
        onDepartmentChange={onDepartmentChange}
      />
    </>
  );
};

export default Navbar;
