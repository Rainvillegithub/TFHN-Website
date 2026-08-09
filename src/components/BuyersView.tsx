import React from 'react';
import { Icons } from './Icons';
import { PageView } from '../types';
import { MARKET_STATS } from '../constants';

interface BuyersViewProps {
  onNavigate: (page: PageView) => void;
}

export const BuyersView: React.FC<BuyersViewProps> = ({ onNavigate }) => {
  const thesisPoints = [
    {
      icon: 'GraduationCap',
      title: 'A constrained supply of providers',
      text: 'Across Canadian healthcare disciplines, provider supply is capped by limited training seats and licensing barriers. Foot care is the starkest example: only two schools in the country — the Michener Institute in Toronto and UQTR in Trois-Rivières — and no licensing pathway for internationally trained podiatrists.'
    },
    {
      icon: 'TrendingUp',
      title: 'Demand far exceeds capacity',
      text: 'An aging population keeps demand for private healthcare growing while the provider base shrinks. In foot care alone, Ontario has roughly 850–900 practices against an estimated capacity for 3,000.'
    },
    {
      icon: 'Users',
      title: 'A generation of owners retiring',
      text: 'A large share of Canadian practice owners are at the end of their career lifecycle. Profitable, recurring-revenue clinics with loyal patient bases are coming to market across the country.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Recurring healthcare revenue',
      text: 'Private healthcare is need-based and repeat-visit by nature — whether diabetic foot care, dental hygiene, physiotherapy, or vision care, ongoing treatment creates predictable revenue streams that are resilient through economic cycles.'
    }
  ];

  const renderIcon = (iconName: string, className?: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-white min-h-screen">
      <div className="bg-black text-white py-20 mb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Canadian Private Healthcare?</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A supply-constrained, recurring-revenue healthcare market —
            and a partner who can take you from acquisition to profitable operation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Market stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
          {MARKET_STATS.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-emerald-600 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Thesis */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {thesisPoints.map((point, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <div className="mb-6 p-3 bg-emerald-100 rounded-xl inline-block text-emerald-600">
                {renderIcon(point.icon, 'w-8 h-8')}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Beyond the deal */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">You don't need a clinical background</h2>
            <p className="text-slate-300">
              Many of our buyers come from outside the industry — private equity groups, healthcare investors,
              and entrepreneurs. Our transformation team stays with you after the purchase.
            </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Bringing It Online</h3>
              <p className="text-slate-600 leading-relaxed">
                From licensing and staffing to scheduling and patient communication, our team
                gets your newly acquired clinic operating smoothly under new ownership.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Transformation Coaching</h3>
              <p className="text-slate-600 leading-relaxed">
                Hands-on coaching for your operators across our internal four pillars of clinic performance:
                scheduling, marketing, money management, and staffing.
              </p>
            </div>
          </div>
        </div>

        {/* Buyer CTA */}
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Register your acquisition criteria</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Tell us your target geography, investment range, and whether you'll operate or invest.
            When a matching practice comes to market, you'll hear about it first — confidentially.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate(PageView.CONTACT)}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Register as a Buyer
            </button>
            <button
              onClick={() => onNavigate(PageView.OPPORTUNITIES)}
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              View Current Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
