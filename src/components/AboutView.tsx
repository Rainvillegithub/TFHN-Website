import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Icons } from './Icons';
import { LucideIcon } from 'lucide-react';

interface AboutViewProps {
  onNavigate?: (page: any) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  // Group team members by their roles/divisions
  const buildTeam = TEAM_MEMBERS.filter(m => m.role.includes('Build'));
  const renovateTeam = TEAM_MEMBERS.filter(m => m.role.includes('Renovate'));
  const sellTeam = TEAM_MEMBERS.filter(m => m.role.includes('Sell'));

  const TeamSection = ({ title, members, description, icon: Icon }: { title: string, members: typeof TEAM_MEMBERS, description: string, icon: LucideIcon }) => (
    <div className="mb-24">
      <div className="flex flex-col items-center mb-12">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
          <Icon size={32} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 font-medium text-center max-w-2xl">{description}</p>
        <div className="h-1 w-20 bg-emerald-500 mt-6 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center px-4 lg:px-0">
          {members.map((member) => (
            <div key={member.id} className="group rounded-[24px] p-8 bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-[20px] overflow-hidden bg-slate-100 shrink-0 border-4 border-white shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110
                    ${member.id === 'peter-ferguson' ? 'object-[center_15%] scale-[1.12] origin-top' : ''}
                    ${member.id === 'kathy-ferguson' ? 'object-[center_20%] scale-[1.00]' : ''}
                    ${member.id === 'jodi-simard' ? 'object-[center_12%] scale-[1.22] origin-top' : ''}
                    ${member.id === 'dave-simard' ? 'object-[center_10%] scale-[1.24] origin-top' : ''}
                    ${member.id === 'tina-rainville' ? 'object-[center_12%] scale-[1.25] origin-top' : ''}
                    ${member.id === 'patrick-rainville' ? 'object-[center_15%] scale-[1.28] origin-top' : ''}
                  `}
                />
              </div>
              <div className="space-y-3 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                  <div className="flex flex-col mt-1">
                    <span className="text-emerald-600 font-bold tracking-tight">{member.role}</span>
                    {member.credibility && (
                      <span className="text-[0.75rem] uppercase tracking-widest text-slate-400 font-extrabold mt-1">
                        {member.credibility}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-[0.95rem]">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold tracking-wider uppercase mb-6">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">Expertise Born from <span className="text-emerald-600">Experience.</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            We are Canada's dedicated consulting firm for foot health professionals, providing the operational frameworks needed to transition clinical excellence into lasting business success.
          </p>
        </div>
        
        {/* Hero Image Section */}
        <div className="relative w-full rounded-[40px] overflow-hidden mb-32 shadow-2xl bg-slate-900 group">
          <img 
            src="/images/hero-bg.jpg" 
            alt="The Foot Health Network Leadership" 
            className="w-full h-[600px] object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end">
            <div className="p-12 md:p-20 w-full">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Strategic Guidance for Every Stage of Your Practice</h2>
                <p className="text-emerald-400 text-xl font-semibold italic border-l-4 border-emerald-500 pl-6 py-2">
                  "Our mission is to help clinic owners regain control of their time and maximize the value of their life's work."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Clinical First",
              desc: "We understand the unique demands of patient care because we've lived them. Our systems support, never hinder, clinical excellence.",
              icon: Icons.Heart
            },
            {
              title: "Structured Success",
              desc: "Random advice doesn't scale. We use trademarked, repeatable frameworks that bring order to even the most chaotic practices.",
              icon: Icons.LayoutGrid
            },
            {
              title: "Value Focused",
              desc: "Whether building or selling, we focus on creating enterprise value that provides freedom and security for the owner.",
              icon: Icons.BarChart3
            }
          ].map((value, i) => {
            const Icon = value.icon;
            return (
              <div key={i} className="p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            );
          })}
        </div>
        
        {/* Build Division */}
        <TeamSection 
          title="The Build Division" 
          description="Laying the foundation for new clinic success through structured launches and ideal scheduling."
          members={buildTeam} 
          icon={Icons.Home}
        />

        {/* Renovate Division */}
        <TeamSection 
          title="The Renovate Division" 
          description="Optimizing established practices to increase profitability while restoring work-life balance."
          members={renovateTeam} 
          icon={Icons.Hammer}
        />

        {/* Sell Division */}
        <TeamSection 
          title="The Sell Division" 
          description="Maximizing practice valuation and ensuring seamless career transitions for clinic owners."
          members={sellTeam} 
          icon={Icons.Key}
        />

        {/* Final Mission Statement */}
        <div className="max-w-4xl mx-auto mt-32 py-20 px-8 rounded-[48px] bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              The Foot Health Network was born from a simple observation: <strong>excellent clinical skills don't always translate to excellent business management.</strong>
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
              We saw brilliant practitioners struggling with operational bottlenecks and growth plateaus. Our goal is to bridge that gap using our proprietary frameworks, allowing you to focus on what you do best: patient care.
            </p>
            {onNavigate && (
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
              >
                Let's Transform Your Practice
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
