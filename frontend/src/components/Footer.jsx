import React from 'react';
import { Linkedin } from 'lucide-react';
import { contactInfo } from '../mockData';

const Footer = ({ activeDepartment }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img
              src={activeDepartment === 'vfx' 
                ? "https://customer-assets.emergentagent.com/job_ripple-fx-studio/artifacts/k0ro4bgp_ripplelogovfx.png"
                : "https://customer-assets.emergentagent.com/job_ripple-fx-studio/artifacts/kzqbmomq_ripplelogodigital.png"
              }
              alt={activeDepartment === 'vfx' ? "Ripple VFX Studios" : "Ripple Digital Studios"}
              className="h-[68px] w-auto mb-4"
            />
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Creating stunning visual effects and building modern digital solutions.
              Bringing imagination to reality through cutting-edge technology and artistic excellence.
            </p>
            {/* Social Links - LinkedIn only */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>{contactInfo.address.street}</li>
              <li>{contactInfo.address.city}, {contactInfo.address.province}</li>
              <li>{contactInfo.address.postal}</li>
              <li>{contactInfo.address.country}</li>
              <li className="pt-3">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ripple VFX Studios. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Careers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
