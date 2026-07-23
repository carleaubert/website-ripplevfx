import React from 'react';
import { Link } from 'react-router-dom';
import { X, Film, Building2 } from 'lucide-react';

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  navItems, 
  scrollToSection, 
  activeDepartment, 
  onDepartmentChange 
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Side Menu */}
      <div className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 animate-in slide-in-from-right duration-300 shadow-2xl">
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors p-2"
          >
            <X size={24} />
          </button>

          {/* Department Switcher - Mobile */}
          <div className="mt-12 mb-8">
            <p className="text-sm text-gray-400 mb-4">Department</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { onDepartmentChange('vfx'); onClose(); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeDepartment === 'vfx'
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Film size={18} />
                <span>Ripple VFX</span>
              </button>
              <button
                onClick={() => { onDepartmentChange('digital'); onClose(); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeDepartment === 'digital'
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Building2 size={18} />
                <span>Ripple Digital</span>
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-1">
            <p className="text-sm text-gray-400 mb-4">Navigation</p>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
              >
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Additional Links */}
          <div className="mt-8 pt-8 border-t border-white/10 space-y-2">
            <Link
              to="/careers"
              onClick={onClose}
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              Careers
            </Link>
            <a
              href="https://www.linkedin.com/company/ripplevfxstudios/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
