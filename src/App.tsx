import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Icons } from './components/Icons';
import { BrandLogo } from './components/BrandLogo';
import { PageView } from './types';
import { DIVISIONS, TESTIMONIALS, TEAM_MEMBERS, PILLARS, HERO_CONTENT } from './constants';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  // Helper to render icon dynamically
  const renderIcon = (iconName: string, className?: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

 const HeroSection = () => (
  <div className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-16 overflow-hidden bg-black">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src={HERO_CONTENT.backgroundImage}
        alt="Clinic Background" 
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      {/* Reduced max-width and spacing to keep elements compact */}
      <div className="max-w-2xl space-y-6 animate-fade-in-up">
        <div className="inline-block mb-2">
           {/* Fixed: Reduced logo height from h-32 to h-16/20 */}
           <BrandLogo className="h-16 md:h-20 w-auto" isDark={true} />
        </div>
        
        {/* Fixed: Scaled down from 6xl to 5xl for better desktop balance */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
          {HERO_CONTENT.title} <span className="text-emerald-500">{HERO_CONTENT.highlight}</span>
        </h1>
        
        {/* Fixed: Reduced description size for better hierarchy */}
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
           {HERO_CONTENT.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={() => setCurrentPage(PageView.SERVICES)}
            className="px-6 py-3.5 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 group"
          >
            {HERO_CONTENT.buttonPrimary}
            <Icons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
             onClick={() => setCurrentPage(PageView.CONTACT)}
            className="px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center"
          >
            {HERO_CONTENT.buttonSecondary}
          </button>
        </div>
      </div>
    </div>
  </div>
);

  const DivisionsPreview = () => (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The Three Stages of Success</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't just offer random advice. We utilize structured, trademarked frameworks designed for the three critical stages of a practice owner's journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

          {DIVISIONS.map((division) => (
            <div key={division.id} className="relative group">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="absolute -top-6 bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-white">
                  {division.step}
                </div>
                
                {/* Icon */}
                <div className="mt-8 mb-6 p-4 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  {renderIcon(division.iconName, "w-10 h-10")}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">{division.title}</h3>
                <p className="text-slate-500 font-medium mb-6 uppercase text-xs tracking-wider">{division.summary}</p>
                
                <div className="space-y-3 w-full text-left mt-auto">
                   {division.services.slice(0, 2).map((s, idx) => (
                     <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <Icons.CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{s.title}</span>
                     </div>
                   ))}
                   {division.services.length > 2 && (
                     <div className="text-center pt-2 text-sm text-slate-400 italic">
                       + {division.services.length - 2} more modules
                     </div>
                   )}
                </div>

                <button 
                  onClick={() => setCurrentPage(PageView.SERVICES)}
                  className="mt-8 w-full py-3 rounded-xl bg-slate-50 text-slate-900 font-semibold group-hover:bg-black group-hover:text-white transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const PillarsSection = () => (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The 4 Pillars of a Thriving Practice</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Regardless of your stage—whether building, renovating, or selling—we ensure your success by solidifying these four foundational pillars of business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div key={pillar.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="mb-6 p-3 bg-emerald-50 rounded-xl inline-block text-emerald-600">
                {renderIcon(pillar.iconName, "w-8 h-8")}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {pillar.description}
              </p>
              <ul className="space-y-3">
                {pillar.objectives.map((obj, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700">
                    <Icons.CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const HomeView = () => (
    <div className="animate-fade-in">
      <HeroSection />
      <DivisionsPreview />
      
      {/* New 4 Pillars Section */}
      <PillarsSection />
      
      {/* Stats Section */}
      <div className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Clinics Optimized', value: '150+' },
              { label: 'Frameworks Deployed', value: '12' },
              { label: 'Average Growth', value: '2.5x' },
              { label: 'Successful Exits', value: '$50M+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center border-r border-slate-800 last:border-0">
                <div className="text-3xl md:text-5xl font-bold text-emerald-500 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                  Stop Guessing.<br/>Start Executing.
                </h2>
                <p className="text-lg text-slate-600">
                  Most clinic owners struggle because they lack a system. We provide the operating system for your entire business journey, from the first patient to the final sale.
                </p>
                <div className="space-y-6">
                  {[
                    "Trademarked methodologies proven in the Canadian market.",
                    "Focus on both profitability and life balance.",
                    "End-to-end support for every stage of business maturity."
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
                  src="https://picsum.photos/seed/businessmeeting/800/600" 
                  alt="Consulting Team" 
                  className="relative rounded-2xl shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-500"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Trademarked Frameworks</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We guide you through 3 distinct phases. Choose the stage that matches your current practice needs.
            </p>
          </div>
       </div>

       <div className="container mx-auto px-4 lg:px-8 space-y-24">
          {DIVISIONS.map((division, index) => (
            <div key={division.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-start`}>
               {/* Description Side */}
               <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20">
                       <span className="text-3xl font-bold">{division.step}</span>
                    </div>
                    <div>
                       <h2 className="text-4xl font-bold text-slate-900">{division.title}</h2>
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
                    Get started with {division.title} <Icons.ArrowRight size={20} />
                  </button>
               </div>

               {/* Visual Side (Concept) */}
               <div className="flex-1 w-full sticky top-32">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/5] md:aspect-square flex items-center justify-center p-8 border border-slate-100">
                      {/* Abstract Visual Representation */}
                      <div className="absolute inset-0 bg-slate-50"></div>
                      <div className="relative z-10 text-center">
                         <div className="w-32 h-32 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-8">
                           {renderIcon(division.iconName, "w-16 h-16 text-emerald-600")}
                         </div>
                         <h3 className="text-3xl font-bold text-slate-900 mb-4">{division.title} Phase</h3>
                         <p className="text-slate-500 max-w-sm mx-auto">
                            {division.id === 'building' && "Focus on foundation, patient acquisition, and initial team setup."}
                            {division.id === 'renovating' && "Focus on systems, efficiency, and financial optimization."}
                            {division.id === 'selling' && "Focus on valuation, exit strategy, and succession planning."}
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

  const AboutView = () => (
     <div className="pt-24 pb-20 animate-fade-in bg-white">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="max-w-4xl mx-auto mb-16 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About The Foot Health Network</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We are the premier consulting firm for Canadian podiatrists and chiropodists, dedicated to transforming clinical excellence into business success.
              </p>
           </div>
           
           {/* Team Photo Hero */}
           <div className="relative w-full rounded-3xl overflow-hidden mb-24 shadow-2xl bg-slate-100">
               {/* Note: Replace this src with your specific team photo URL */}
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                 alt="The Foot Health Network Team" 
                 className="w-full h-[500px] object-cover" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                  <div className="p-8 md:p-12 text-white">
                     <h2 className="text-3xl font-bold mb-2">Meet Our Consultants</h2>
                     <p className="text-emerald-300 font-medium">The experts behind your success</p>
                  </div>
               </div>
           </div>
           
           <div className="max-w-5xl mx-auto">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {TEAM_MEMBERS.map((member) => (
                 <div key={member.id} className="group bg-slate-50 rounded-2xl p-6 transition-all hover:bg-white hover:shadow-xl border border-slate-100 hover:border-emerald-100">
                    <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 bg-slate-200">
                       <img 
                         src={member.image} 
                         alt={member.name} 
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                       />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between items-start">
                         <div>
                            <h3 className="font-bold text-xl text-slate-900 group-hover:text-emerald-600 transition-colors">{member.name}</h3>
                            <p className="text-emerald-600 font-medium text-sm">{member.role}</p>
                         </div>
                       </div>
                       <p className="text-slate-500 text-sm leading-relaxed pt-2">
                          {member.bio}
                       </p>
                    </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="max-w-4xl mx-auto mt-24 prose prose-lg text-slate-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Mission</h3>
              <p className="mb-6">
                Founded in 2010, The Foot Health Network was born from a simple observation: excellent clinical skills don't always translate to excellent business management. We saw brilliant practitioners struggling with operational bottlenecks, compliance stress, and growth plateaus.
              </p>
              <p className="mb-6">
                Our mission is to bridge that gap using our proprietary <strong>Building, Renovating, and Selling</strong> frameworks. We provide the infrastructure, strategic guidance, and tools that allow foot health professionals to focus on what they do best: patient care.
              </p>
           </div>
        </div>
     </div>
  );

  const ContactView = () => (
    <div className="pt-24 pb-20 animate-fade-in bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
           {/* Info Side */}
           <div className="bg-black text-white p-12 md:w-2/5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                <p className="text-slate-300 mb-12">
                  Ready to optimize your practice using our proven frameworks? Schedule a discovery call today.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                       <Icons.Phone size={20} className="text-emerald-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Phone</div>
                      <div className="font-medium">+1 (416) 555-0199</div>
                    </div>
                  </div>
                   <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                       <Icons.Mail size={20} className="text-emerald-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Email</div>
                      <div className="font-medium">consult@foothealthnetwork.ca</div>
                    </div>
                  </div>
                   <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                       <Icons.MapPin size={20} className="text-emerald-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Headquarters</div>
                      <div className="font-medium">Toronto, Ontario</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-slate-800">
                 <div className="flex gap-4">
                   {/* Social Icons Placeholder */}
                   <div className="w-10 h-10 bg-slate-900 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors cursor-pointer text-sm font-bold">in</div>
                   <div className="w-10 h-10 bg-slate-900 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors cursor-pointer text-sm font-bold">x</div>
                   <div className="w-10 h-10 bg-slate-900 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors cursor-pointer text-sm font-bold">f</div>
                 </div>
              </div>
           </div>

           {/* Form Side */}
           <div className="p-12 md:w-3/5 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
              <p className="text-slate-500 mb-8">Tell us which stage your practice is in.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-semibold text-slate-700">First Name</label>
                       <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Jane" />
                    </div>
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-slate-700">Last Name</label>
                       <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Doe" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="jane@clinic.com" />
                 </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Interest Area</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white">
                      <option>Building (New Practice)</option>
                      <option>Renovating (Optimization)</option>
                      <option>Selling (Exit Strategy)</option>
                      <option>Other Inquiry</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">How can we help?</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Tell us about your practice needs..."></textarea>
                 </div>
                 <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 shadow-xl shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5">
                    Send Message
                 </button>
              </form>
           </div>
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
        {currentPage === PageView.ABOUT && <AboutView />}
        {currentPage === PageView.CONTACT && <ContactView />}
      </main>

      <Footer onNavigate={setCurrentPage} />
      
      {/* AI Consultant Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;
