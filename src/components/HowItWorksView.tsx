import React from 'react';
import { Icons } from './Icons';
import { PageView } from '../types';

interface HowItWorksViewProps {
  onNavigate: (page: PageView) => void;
}

export const HowItWorksView: React.FC<HowItWorksViewProps> = ({ onNavigate }) => {
  const steps = [
    {
      icon: 'MessageCircle',
      title: '1. Confidential conversation',
      text: 'It starts with a private call. We learn about your practice, your timeline, and what a good exit looks like for you. Nothing is shared with anyone — your staff and patients hear nothing.'
    },
    {
      icon: 'BarChart3',
      title: '2. Valuation preparation',
      text: 'Our transition team helps you structure your financials, clean up clinical scheduling, and make your practice transition-ready under buyer scrutiny.'
    },
    {
      icon: 'Users',
      title: '3. Matching with qualified buyers',
      text: 'We present your practice as an anonymized profile — public or fully confidential, your choice — and match it against our registered buyer network, including vetted capital partners.'
    },
    {
      icon: 'ShieldCheck',
      title: '4. The professional team',
      text: 'When there is a serious match, we bring in the licensed professionals: your accountant and lawyer (or ours, if you need referrals) formalize and paper the transaction.'
    },
    {
      icon: 'CheckCircle2',
      title: '5. Negotiation & closing support',
      text: 'We support both parties through negotiation to a fair close — and we stay involved afterward, helping the new owner take over smoothly so your legacy and team are protected.'
    }
  ];

  const renderIcon = (iconName: string, className?: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-slate-50 min-h-screen">
      <div className="bg-black text-white py-20 mb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How a Sale Works With Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A clear, confidential process — built around the licensed professionals
            who make each transaction official.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Straight talk box */}
        <div className="max-w-3xl mx-auto mb-16 bg-white rounded-3xl p-8 border-l-4 border-emerald-600 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Straight talk: we are not brokers</h2>
          <p className="text-slate-600 leading-relaxed">
            Chrysalis Practice Partners is an operating brand of The Foot Health Network, a practice transformation advisory and consulting firm.
            We are not a licensed real estate or business brokerage.
            We don't list properties or execute transactions. What we do is connect the people:
            the seller, the buyer, the accountant, and the lawyer — and guide everyone through
            negotiation to a successful succession. The licensed professionals handle the paperwork;
            we make sure the deal actually comes together.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto space-y-6 mb-20">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex gap-6 items-start">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                {renderIcon(step.icon, 'w-7 h-7')}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* After the sale */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">And after the sale?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Every succession creates a new owner. Our team supports them through the integration and profitability coaching stages, using our trademarked Foundational Schedule and Four Pillars methods — so sellers leave a thriving legacy and buyers get a running start.
          </p>
          <button
            onClick={() => onNavigate(PageView.SERVICES)}
            className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:gap-3 transition-all"
          >
            See what our support includes <Icons.ArrowRight size={20} />
          </button>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto bg-emerald-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for step one?</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            The confidential conversation costs nothing and commits you to nothing.
          </p>
          <button
            onClick={() => onNavigate(PageView.CONTACT)}
            className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Book a Confidential Call
          </button>
        </div>
      </div>
    </div>
  );
};
