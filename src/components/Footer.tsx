
import React from 'react';
import { Icons } from './Icons';
import { BrandLogo } from './BrandLogo';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
               <BrandLogo className="h-16" isDark={true} />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering Canadian podiatrists and foot health professionals with world-class consulting, training, and operational strategies.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <span className="font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <span className="font-bold">x</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <button onClick={() => onNavigate(PageView.HOME)} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate(PageView.ABOUT)} className="hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate(PageView.SERVICES)} className="hover:text-white transition-colors">Our Services</button>
              </li>
              <li>
                <button onClick={() => onNavigate(PageView.CONTACT)} className="hover:text-white transition-colors">Contact</button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">Practice Optimization</li>
              <li className="hover:text-white transition-colors cursor-pointer">Staff Training</li>
              <li className="hover:text-white transition-colors cursor-pointer">Compliance Audits</li>
              <li className="hover:text-white transition-colors cursor-pointer">Marketing Strategy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <Icons.MapPin className="mt-1 text-emerald-500 shrink-0" size={18} />
                <span>123 Bay Street, Suite 400<br/>Toronto, ON M5J 2R8</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.Phone className="text-emerald-500 shrink-0" size={18} />
                <span>+1 (416) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.Mail className="text-emerald-500 shrink-0" size={18} />
                <span>info@foothealthnetwork.ca</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} The Foot Health Network. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
