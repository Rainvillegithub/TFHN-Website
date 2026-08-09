import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

interface StageDetails {
  id: number;
  label: string;
  phase: string;
  title: string;
  poeticTitle: string;
  description: string;
  colorClass: string;
  accentColor: string;
}

export const MetamorphosisShowcase: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Biological & Emotional stages of Chrysalis Practice Partners
  const stages: StageDetails[] = [
    {
      id: 0,
      label: 'Caterpillar',
      phase: 'The Era of Growth',
      title: 'Building & Nourishing',
      poeticTitle: 'Nourishing the Foundation',
      description: 'You poured your heart and soul into building your practice — segment by segment, patient by patient. This is the caterpillar stage: active growth, relentless care, and gathering the resources of a lifetime of hard work.',
      colorClass: 'from-emerald-500 to-green-400',
      accentColor: '#10B981'
    },
    {
      id: 1,
      label: 'Chrysalis',
      phase: 'The Metamorphosis',
      title: 'Silent Structure',
      poeticTitle: 'The Quiet Metamorphosis',
      description: 'When it is time for change, you enter the chrysalis. Behind closed doors, we secure and wrap your practice in our structured, confidential care. This is a silent, protected transformation — optimizing your financials, schedules, and systems without disturbing your staff or patients.',
      colorClass: 'from-amber-500 to-yellow-400',
      accentColor: '#F59E0B'
    },
    {
      id: 2,
      label: 'Butterfly',
      phase: 'The Emergence',
      title: 'Ultimate Flight',
      poeticTitle: 'The Joy of Flight',
      description: 'The final, magnificent emergence. Spreading your wings with absolute freedom, you hand over a thriving, optimized legacy to a new owner, while you soar into your next life chapter fully rewarded and unburdened.',
      colorClass: 'from-cyan-400 to-emerald-400',
      accentColor: '#22D3EE'
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused, stages.length]);

  return (
    <div 
      className="relative max-w-[480px] w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer glowing halo corresponding to active stage */}
      <div className={`absolute -inset-1.5 bg-gradient-to-r ${stages[activeStage].colorClass} rounded-[36px] blur-xl opacity-15 transition-all duration-1000`}></div>

      <div className="relative bg-slate-950/45 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 md:p-8 shadow-2xl flex flex-col gap-6">
        
        {/* Progress Timeline Header */}
        <div className="relative flex justify-between items-center px-2">
          {/* Background Connector Line */}
          <div className="absolute left-6 right-6 h-0.5 bg-slate-800 top-[18px] -z-10"></div>
          {/* Active Colored Connector Line */}
          <div 
            className="absolute left-6 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 top-[18px] -z-10 transition-all duration-1000"
            style={{ width: `${(activeStage / (stages.length - 1)) * 88}%` }}
          ></div>

          {stages.map((stage) => {
            const isActive = activeStage === stage.id;
            const isCompleted = activeStage >= stage.id;

            return (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(stage.id);
                  setIsPaused(true);
                }}
                className="flex flex-col items-center gap-2 group outline-none"
              >
                {/* Step indicator node */}
                <div 
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 border-2
                    ${isActive 
                      ? `bg-slate-900 border-emerald-500 text-emerald-400 scale-110 shadow-lg shadow-emerald-500/20` 
                      : isCompleted
                        ? 'bg-emerald-500 border-emerald-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'
                    }`}
                >
                  {isCompleted && !isActive ? (
                    <Icons.CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <span>{stage.id + 1}</span>
                  )}
                </div>
                {/* Step label */}
                <span 
                  className={`text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-300
                    ${isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'}`}
                >
                  {stage.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Biological Visualization Area */}
        <div className="h-48 md:h-52 bg-slate-900/40 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden p-4 group">
          {/* Stage 0: Caterpillar Animation */}
          {activeStage === 0 && (
            <svg viewBox="0 0 200 100" className="w-44 h-auto animate-fade-in">
              <defs>
                <linearGradient id="caterpillarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#047857" />
                  <stop offset="50%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
              {/* Ground line */}
              <path d="M 20 85 L 180 85" stroke="#1E293B" strokeWidth="2" strokeDasharray="4 4" />
              {/* Stylized segment caterpillar crawl loop */}
              <g className="animate-pulse" style={{ animationDuration: '2.5s' }}>
                {/* Crawling body segments */}
                <circle cx="50" cy="72" r="10" fill="url(#caterpillarGrad)" opacity="0.6" />
                <circle cx="68" cy="68" r="11" fill="url(#caterpillarGrad)" opacity="0.7" />
                <circle cx="86" cy="64" r="12" fill="url(#caterpillarGrad)" opacity="0.8" />
                <circle cx="104" cy="62" r="13" fill="url(#caterpillarGrad)" opacity="0.9" />
                <circle cx="122" cy="66" r="12" fill="url(#caterpillarGrad)" />
                <circle cx="138" cy="72" r="10" fill="url(#caterpillarGrad)" />
                {/* Antennas */}
                <path d="M 138 65 Q 146 52 144 48" stroke="#34D399" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M 134 65 Q 140 50 148 50" stroke="#34D399" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Little feet */}
                <path d="M 50 82 L 48 87" stroke="#10B981" strokeWidth="2" />
                <path d="M 68 79 L 66 84" stroke="#10B981" strokeWidth="2" />
                <path d="M 86 76 L 84 81" stroke="#10B981" strokeWidth="2" />
                <path d="M 104 75 L 102 80" stroke="#10B981" strokeWidth="2" />
                <path d="M 122 78 L 120 83" stroke="#10B981" strokeWidth="2" />
              </g>
              {/* Growth sparkles */}
              <circle cx="145" cy="30" r="2" fill="#6EE7B7" className="animate-ping" />
              <circle cx="35" cy="45" r="1.5" fill="#34D399" />
            </svg>
          )}

          {/* Stage 1: Chrysalis Cocoa/Pupa Animation */}
          {activeStage === 1 && (
            <svg viewBox="0 0 200 100" className="w-44 h-auto animate-fade-in">
              <defs>
                <linearGradient id="chrysalisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#78350F" />
                  <stop offset="40%" stopColor="#F59E0B" />
                  <stop offset="80%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#451A03" />
                </linearGradient>
              </defs>
              {/* Branch of the tree */}
              <path d="M 40 15 Q 100 20 160 15" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
              {/* Attachment silk */}
              <path d="M 100 18 Q 100 35 100 40" stroke="#94A3B8" strokeWidth="2" />
              {/* Hanging cocoon shape representing structure and protection */}
              <g className="animate-pulse" style={{ animationDuration: '2s' }}>
                <path 
                  d="M 100 40 C 85 50, 75 75, 100 95 C 125 75, 115 50, 100 40 Z" 
                  fill="url(#chrysalisGrad)" 
                  filter="drop-shadow(0px 4px 10px rgba(245,158,11,0.25))"
                />
                {/* Structural wrapping lines representing frameworks */}
                <path d="M 87 54 Q 100 58 113 54" stroke="#FBBF24" strokeWidth="1" opacity="0.6" fill="none" />
                <path d="M 83 66 Q 100 71 117 66" stroke="#FBBF24" strokeWidth="1" opacity="0.6" fill="none" />
                <path d="M 82 78 Q 100 83 118 78" stroke="#FBBF24" strokeWidth="1" opacity="0.6" fill="none" />
              </g>
              {/* Sparkles of alchemy */}
              <circle cx="65" cy="50" r="1.5" fill="#FBBF24" />
              <circle cx="135" cy="70" r="2" fill="#F59E0B" className="animate-ping" />
            </svg>
          )}

          {/* Stage 2: Butterfly Flight Animation */}
          {activeStage === 2 && (
            <svg viewBox="0 0 200 100" className="w-44 h-auto animate-fade-in">
              <defs>
                <linearGradient id="butterflyWing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="50%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
              <g className="transition-transform duration-500 hover:scale-105">
                {/* Flying abstract butterfly */}
                <g className="animate-bounce" style={{ animationDuration: '3.5s' }}>
                  {/* Left Wings */}
                  <g className="origin-right" style={{ animation: 'wingFlapLeft 0.5s ease-in-out infinite alternate' }}>
                    <path d="M 100 50 C 70 20, 50 25, 60 50 C 70 70, 95 65, 100 50 Z" fill="url(#butterflyWing)" />
                    <path d="M 100 50 C 75 60, 60 75, 70 85 C 80 90, 95 70, 100 50 Z" fill="url(#butterflyWing)" opacity="0.8" />
                  </g>
                  {/* Right Wings */}
                  <g className="origin-left" style={{ animation: 'wingFlapRight 0.5s ease-in-out infinite alternate' }}>
                    <path d="M 100 50 C 130 20, 150 25, 140 50 C 130 70, 105 65, 100 50 Z" fill="url(#butterflyWing)" />
                    <path d="M 100 50 C 125 60, 140 75, 130 85 C 120 90, 105 70, 100 50 Z" fill="url(#butterflyWing)" opacity="0.8" />
                  </g>
                  {/* Butterfly Body */}
                  <ellipse cx="100" cy="50" rx="3" ry="22" fill="#0F172A" stroke="#22D3EE" strokeWidth="1.5" />
                  {/* Antennas */}
                  <path d="M 99 29 Q 94 15 88 12" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M 101 29 Q 106 15 112 12" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </g>
              </g>
              {/* Legacy particles flying away */}
              <circle cx="60" cy="20" r="2" fill="#22D3EE" className="animate-ping" style={{ animationDuration: '1.2s' }} />
              <circle cx="150" cy="30" r="1" fill="#6EE7B7" />
              <circle cx="140" cy="75" r="1.5" fill="#34D399" />
              {/* CSS keyframe animations embedded inside SVG styles */}
              <style>{`
                @keyframes wingFlapLeft {
                  0% { transform: scaleX(1); }
                  100% { transform: scaleX(0.15); }
                }
                @keyframes wingFlapRight {
                  0% { transform: scaleX(1); }
                  100% { transform: scaleX(0.15); }
                }
              `}</style>
            </svg>
          )}

          {/* Holographic style stage overlay */}
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/5 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-wider text-slate-400">
            {stages[activeStage].phase}
          </div>
        </div>

        {/* Text descriptions displaying biological and business alignment */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-white tracking-tight">
              {stages[activeStage].poeticTitle}
            </h4>
            <span className="text-[10px] font-extrabold px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              {stages[activeStage].title}
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed min-h-[110px]">
            {stages[activeStage].description}
          </p>
        </div>

        {/* Manual navigation controls */}
        <div className="flex justify-between items-center pt-2 border-t border-white/5 text-[11px] text-slate-500 font-semibold">
          <span>Hover to Pause Metamorphosis</span>
          <div className="flex gap-1.5">
            {stages.map((s) => (
              <div 
                key={s.id} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
                  ${activeStage === s.id ? 'w-4 bg-emerald-500' : 'bg-slate-700'}`}
              ></div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
