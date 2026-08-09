import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Icons } from './components/Icons';
import { BrandLogo } from './components/BrandLogo';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { OpportunitiesView } from './components/OpportunitiesView';
import { BuyersView } from './components/BuyersView';
import { HowItWorksView } from './components/HowItWorksView';
import { MetamorphosisShowcase } from './components/MetamorphosisShowcase';
import { PageView } from './types';
import { DIVISIONS, TESTIMONIALS, PILLARS, HERO_CONTENT, OPPORTUNITIES, MARKET_STATS, TRANSFORMATION_STAGES } from './constants';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  // Helper to render icon dynamically
  const renderIcon = (iconName: string, className?: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  const HeroSection = () => (
    <div className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-16 overflow-hidden bg-black">
      {/* Background with Hallway photo and gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_CONTENT.backgroundImage}
          alt="Clinic Background" 
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        {/* Subtle decorative glows behind the logo */}
        <div className="absolute right-[10%] top-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              {HERO_CONTENT.title} <span className="text-emerald-500">{HERO_CONTENT.highlight}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
               {HERO_CONTENT.description}
            </p>

            <div className="flex items-center gap-2 text-emerald-500/90 font-medium text-sm md:text-base animate-fade-in">
              <Icons.ShieldCheck size={18} />
              <span>Confidential practice successions, coast to coast</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setCurrentPage(PageView.CONTACT)}
                className="px-6 py-3.5 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 group"
              >
                <Icons.Key size={18} />
                {HERO_CONTENT.buttonPrimary}
                <Icons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                 onClick={() => setCurrentPage(PageView.BUYERS)}
                className="px-6 py-3.5 bg-white text-emerald-900 rounded-full font-semibold hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <Icons.Briefcase size={18} />
                {HERO_CONTENT.buttonSecondary}
                <Icons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Metamorphosis Showcase (Caterpillar -> Pupa/Chrysalis -> Butterfly) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in delay-200">
            <MetamorphosisShowcase />
          </div>
        </div>
      </div>
    </div>
  );

  const TransformationLifecycle = () => (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
            The Transformation Window
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Guiding You Through Every Phase
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A successful practice sale is not a single event — it is a multi-year journey. 
            We focus on the 3-to-5 years either side of a transaction to secure your legacy and ensure long-term clinical and financial success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
          {TRANSFORMATION_STAGES.map((stage) => (
            <div key={stage.id} className="relative group">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    {renderIcon(stage.iconName, "w-8 h-8")}
                  </div>
                  <span className="text-sm font-extrabold text-slate-300 group-hover:text-emerald-500 transition-colors uppercase tracking-widest">
                    Stage {stage.step}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">{stage.title}</h3>
                <p className="text-emerald-600 font-bold text-sm mb-4">{stage.subtitle}</p>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{stage.summary}</p>
                
                <div className="space-y-3 mt-auto pt-6 border-t border-slate-200/60">
                   {stage.points.map((point, idx) => (
                     <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Icons.CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{point}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => setCurrentPage(PageView.SERVICES)}
            className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all shadow-lg flex items-center justify-center gap-2 mx-auto group"
          >
            <span>Learn How We Support Your Transformation</span>
            <Icons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );

  const FeaturedOpportunities = () => (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Featured Opportunities</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Confidential, anonymized profiles of Canadian foot care practices in transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {OPPORTUNITIES.filter(o => o.status === 'available').slice(0, 3).map((opp) => (
            <div key={opp.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                  {opp.visibility === 'gated' ? <Icons.Lock className="w-5 h-5" /> : <Icons.MapPin className="w-5 h-5" />}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{opp.region}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Ref. {opp.id}</div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{opp.highlight}</p>
              <div className="text-sm font-semibold text-emerald-700 mb-1">
                {opp.visibility === 'public' ? `Revenue: ${opp.revenueBand}` : 'Details for qualified buyers'}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setCurrentPage(PageView.OPPORTUNITIES)}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all"
          >
            View All Opportunities <Icons.ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );

  const HomeView = () => (
    <div className="animate-fade-in">
      <HeroSection />
      <FeaturedOpportunities />
      <TransformationLifecycle />

      <div className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {MARKET_STATS.map((stat, idx) => (
              <div key={idx} className="text-center border-r border-slate-800 last:border-0">
                <div className="text-3xl md:text-5xl font-bold text-emerald-500 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                  Your Practice Is Your Legacy.<br/>Exit It Right.
                </h2>
                <p className="text-lg text-slate-600">
                  We're not brokers — we're practice owners and operators who have lived every stage of this business. We connect you with the right buyer, the right accountant, and the right lawyer, then guide the deal home.
                </p>
                <div className="space-y-6">
                  {[
                    "Confidential from the first call — your staff and patients hear nothing until you decide.",
                    "Coast-to-coast: podiatry practices across every province.",
                    "Support beyond the sale: we set the new owner up to protect your legacy."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1 shrink-0">
                        <Icons.CheckCircle2 size={16} />
                      </div>
                      <p className="text-slate-700 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
                <button 
                   onClick={() => setCurrentPage(PageView.ABOUT)}
                   className="px-8 py-3 bg-black text-white rounded-full hover:bg-emerald-600 transition-all font-medium"
                >
                  Meet The Team
                </button>
             </div>
             <div className="relative">
                <div className="absolute -inset-4 bg-emerald-500 rounded-3xl -rotate-2 opacity-10"></div>
                <img 
                  src="/images/pat-with-clients.png" 
                  alt="Patrick Rainville with clinic clients" 
                  className="relative rounded-2xl shadow-2xl w-full border border-slate-200 hover:scale-[1.02] transition-all duration-500"
                />
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
           <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Results That Speak</h2>
           <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-5 h-5 text-emerald-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic flex-grow">"{t.content}"</p>
                  <div className="border-t border-slate-100 pt-4">
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-emerald-600">{t.role}</div>
                    <div className="text-xs text-slate-400">{t.clinic}</div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );

  const ServicesView = () => (
    <div className="pt-24 pb-20 animate-fade-in bg-slate-50">
       <div className="bg-black text-white py-24 mb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Coordinated Transformation Frameworks</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              While our transformation team operates as a single unified unit, we draw on these three trademarked internal frameworks to structure our operational support throughout the practice lifecycle.
            </p>
          </div>
       </div>

       <div className="container mx-auto px-4 lg:px-8 space-y-24">
          {DIVISIONS.map((division, index) => (
            <div key={division.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-start`}>
               <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20">
                       <span className="text-3xl font-bold">{division.step}</span>
                    </div>
                    <div>
                       <h2 className="text-4xl font-bold text-slate-900">{division.title} Module</h2>
                       <p className="text-emerald-600 font-medium text-lg">{division.summary}</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-6">
                    {division.services.map((service, sIndex) => (
                      <div key={sIndex} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-4">
                           <div className="mt-1">
                              <Icons.CheckCircle2 className="text-emerald-500 w-6 h-6" />
                           </div>
                           <div>
                             <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                             <p className="text-slate-600 leading-relaxed">{service.description}</p>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                     onClick={() => setCurrentPage(PageView.CONTACT)}
                     className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:gap-3 transition-all"
                  >
                    Get started with {division.title} support <Icons.ArrowRight size={20} />
                  </button>
               </div>

               <div className="flex-1 w-full sticky top-32">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/5] md:aspect-square flex items-center justify-center p-8 border border-slate-100">
                      <div className="absolute inset-0 bg-slate-50"></div>
                      <div className="relative z-10 text-center">
                         <div className="w-32 h-32 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-8">
                           {renderIcon(division.iconName, "w-16 h-16 text-emerald-600")}
                         </div>
                         <h3 className="text-3xl font-bold text-slate-900 mb-4">{division.title} Operational Support</h3>
                         <p className="text-slate-500 max-w-sm mx-auto">
                            {division.id === 'building' && "For buyers and new owners: licensing, team setup, and patient acquisition to bring your acquired clinic online smoothly."}
                            {division.id === 'renovating' && "For new owners and operating partners: our internal Four Pillars framework — scheduling, marketing, money management, staffing."}
                            {division.id === 'selling' && "For sellers: valuation audit, exit strategy, gated buyer matching, and clean succession planning."}
                         </p>
                         {division.id === 'selling' && (
                           <div className="absolute top-8 right-8 rotate-12 bg-red-600 text-white px-6 py-2 font-bold text-xl rounded-lg border-2 border-white shadow-xl">
                             SOLD
                           </div>
                         )}
                      </div>
                  </div>
               </div>
            </div>
          ))}
       </div>

       <div className="container mx-auto px-4 lg:px-8 mt-24">
          <div className="bg-emerald-600 rounded-3xl p-12 text-center text-white">
             <h2 className="text-3xl font-bold mb-6">Not sure which stage you're in?</h2>
             <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
               Most practices have elements of all three. Schedule a free practice audit to identify your biggest opportunities.
             </p>
             <button 
                onClick={() => setCurrentPage(PageView.CONTACT)}
                className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg"
             >
               Book Your Free Audit
             </button>
          </div>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        {currentPage === PageView.HOME && <HomeView />}
        {currentPage === PageView.SERVICES && <ServicesView />}
        {currentPage === PageView.ABOUT && <AboutView onNavigate={setCurrentPage} />}
        {currentPage === PageView.CONTACT && <ContactView />}
        {currentPage === PageView.OPPORTUNITIES && <OpportunitiesView onNavigate={setCurrentPage} />}
        {currentPage === PageView.BUYERS && <BuyersView onNavigate={setCurrentPage} />}
        {currentPage === PageView.HOW_IT_WORKS && <HowItWorksView onNavigate={setCurrentPage} />}
      </main>

      <Footer onNavigate={setCurrentPage} />
      <ChatWidget />
    </div>
  );
}

export default App;