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
      colorClass: 'from-cyan-400 to-amber-400',
      accentColor: '#02D4DB'
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
          {/* Stage 0: Caterpillar — Higgsfield-rendered cartoon */}
          {activeStage === 0 && (
            <video
              src="/video/caterpillar.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="A friendly cartoon caterpillar crawling along the ground"
              className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            />
          )}

          {/* Stage 1: Chrysalis — Higgsfield-rendered cartoon */}
          {activeStage === 1 && (
            <video
              src="/video/chrysalis.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="A glowing golden chrysalis hanging from a branch"
              className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            />
          )}

          {/* Stage 2: Butterfly Flight — Higgsfield-rendered cartoon in the logo palette */}
          {activeStage === 2 && (
            <video
              src="/video/butterfly.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="A cartoon butterfly in the Chrysalis colours flapping its wings in flight"
              className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            />
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
