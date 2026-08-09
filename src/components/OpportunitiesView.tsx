import React from 'react';
import { Icons } from './Icons';
import { PageView, OpportunityProfile } from '../types';
import { OPPORTUNITIES } from '../constants';

interface OpportunitiesViewProps {
  onNavigate: (page: PageView) => void;
}

const StatusBadge: React.FC<{ status: OpportunityProfile['status'] }> = ({ status }) => {
  if (status === 'under-discussion') {
    return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">In Discussion</span>;
  }
  if (status === 'closed') {
    return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-600">Succession Complete</span>;
  }
  return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">Available</span>;
};

export const OpportunitiesView: React.FC<OpportunitiesViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 animate-fade-in bg-slate-50 min-h-screen">
      <div className="bg-black text-white py-20 mb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Practice Opportunities</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Confidential profiles of Canadian foot care practices in transformation.
            Every profile is anonymized to protect the seller, their staff, and their patients.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {OPPORTUNITIES.map((opp) => (
            <div
              key={opp.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                    {opp.visibility === 'gated'
                      ? <Icons.Lock className="w-6 h-6" />
                      : <Icons.MapPin className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{opp.region}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Ref. {opp.id}</div>
                  </div>
                </div>
                <StatusBadge status={opp.status} />
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">{opp.highlight}</p>

              {opp.visibility === 'public' ? (
                <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">Revenue Band</div>
                    <div className="font-semibold text-slate-900">{opp.revenueBand}</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">Team</div>
                    <div className="font-semibold text-slate-900">{opp.rooms} rooms · {opp.staff} staff</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 col-span-2">
                    <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">Premises</div>
                    <div className="font-semibold text-slate-900">{opp.premises}</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 col-span-2">
                    <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">Succession</div>
                    <div className="font-semibold text-slate-900">{opp.successionPreference}</div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 rounded-xl p-6 mb-8 flex items-center gap-4 text-slate-500">
                  <Icons.Lock className="w-5 h-5 shrink-0" />
                  <span className="text-sm">
                    At the seller's request, details on this opportunity are shared with qualified buyers only.
                  </span>
                </div>
              )}

              <button
                onClick={() => onNavigate(PageView.CONTACT)}
                disabled={opp.status !== 'available'}
                className="mt-auto w-full py-3.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
              >
                {opp.status === 'available' ? `Inquire About ${opp.id}` : 'Currently In Discussion'}
              </button>
            </div>
          ))}
        </div>

        {/* Seller CTA */}
        <div className="max-w-5xl mx-auto mt-16 bg-emerald-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Thinking about selling your practice?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Your profile appears here only how you want it to — fully public, fully confidential, or anywhere in between.
            You decide what buyers see. Your staff and patients hear nothing until you choose.
          </p>
          <button
            onClick={() => onNavigate(PageView.CONTACT)}
            className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Start a Confidential Conversation
          </button>
        </div>

        {/* Advisory disclaimer */}
        <p className="max-w-3xl mx-auto mt-12 text-center text-sm text-slate-400 leading-relaxed">
          Chrysalis Practice Partners is an operating brand of The Foot Health Network, a practice transformation advisory firm, not a licensed real estate or business brokerage.
          We connect sellers and buyers, coordinate the accountants and lawyers who formalize each transaction,
          and support both parties through negotiation.
        </p>
      </div>
    </div>
  );
};
