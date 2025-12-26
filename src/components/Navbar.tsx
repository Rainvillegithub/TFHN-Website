
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { BrandLogo } from './BrandLogo';
import { PageView } from '../types';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logic to determine if logo should be visible in navbar
  // We hide it on HOME page when NOT SCROLLED to avoid "Double Logo" with Hero section
  const isLogoVisible = !(currentPage === PageView.HOME && !isScrolled);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Container - uses opacity to maintain layout stability */}
          <div 
            className={`flex items-center gap-2 cursor-pointer group transition-opacity duration-500 ${
              isLogoVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => onNavigate(PageView.HOME)}
          >
            {/* Using BrandLogo component */}
            <BrandLogo 
              className={`h-12 md:h-14 transition-all ${isScrolled ? 'scale-90' : 'scale-100'}`} 
              isDark={!isScrolled} 
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.value}
                onClick={() => onNavigate(link.value as PageView)}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  currentPage === link.value 
                    ? 'text-emerald-500' 
                    : isScrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate(PageView.CONTACT)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                isScrolled 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                  : 'bg-white text-emerald-900 hover:bg-slate-100'
              }`}
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Icons.Menu size={24} className={isScrolled ? 'text-slate-900' : 'text-white'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <BrandLogo className="h-10" isDark={false} />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-500 hover:text-slate-900"
            >
              <Icons.X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  onNavigate(link.value as PageView);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg font-medium text-left ${
                  currentPage === link.value ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <hr className="border-slate-100" />
            <button 
              onClick={() => {
                  onNavigate(PageView.CONTACT);
                  setIsMobileMenuOpen(false);
              }}
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
