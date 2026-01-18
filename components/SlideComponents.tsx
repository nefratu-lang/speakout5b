import React, { useState, useEffect } from 'react';
import { SlideData, KeyPoint, SentencePart, FlipCardData } from '../types';

// --- COVER SLIDE (EKLENDİ: Tıklayınca Başlar) ---
export const CoverSlide: React.FC<{ data: SlideData; onNext?: () => void }> = ({ data, onNext }) => {
  return (
    <div 
        onClick={onNext}
        className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden bg-white text-slate-900 cursor-pointer group"
    >
       <div className="absolute inset-0 z-0 pointer-events-none">
          {data.content.videoBg ? (
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={data.content.videoBg} type="video/mp4" />
              </video>
          ) : (
              <img src={data.content.backgroundImage} alt="Cover" className="w-full h-full object-cover opacity-10" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20"></div>
       </div>

       <div className="relative z-10 text-center px-4 animate-in zoom-in duration-1000 w-full max-w-4xl border-y-4 border-blue-900 py-12 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl pointer-events-none"> 
          <div className="mb-6 flex justify-center">
             <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-blue-900 flex items-center justify-center text-5xl md:text-6xl text-blue-900 bg-white shadow-inner">⚓</div>
          </div>
          <h1 className="text-4xl md:text-7xl font-mono font-black text-slate-900 mb-2 tracking-tighter uppercase drop-shadow-sm">{data.title}</h1>
          <p className="text-sm md:text-xl text-blue-700 font-bold font-mono tracking-[0.3em] uppercase">{data.subtitle}</p>
          
          <div className="mt-12 md:mt-16 animate-pulse">
            <p className="text-xs md:text-sm text-slate-500 font-mono mb-2 font-black tracking-widest">[ TAP ANYWHERE TO INITIALIZE ]</p>
            <span className="text-3xl text-blue-900 font-bold group-hover:scale-125 transition-transform duration-300 inline-block">▼</span>
          </div>
       </div>
    </div>
  );
};

// --- Objectives Slide ---
export const ObjectivesSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row p-4 md:p-8 gap-6 bg-slate-50 overflow-y-auto custom-scrollbar">
      <div className="flex-1 space-y-6">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border-t-8 border-ocean-600">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-ocean-900 mb-4">{data.title}</h2>
          <p className="text-lg md:text-2xl text-slate-600 mb-8 italic">{data.content.intro}</p>
          <div className="space-y-6">
             <div>
                <h3 className="text-xl font-bold text-ocean-700 uppercase mb-3 tracking-widest">What will you learn?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {data.content.objectives.map((obj: string, i: number) => (
                    <li key={i} className="bg-ocean-50 p-3 rounded-xl border-l-4 border-ocean-400 font-medium">{obj}</li>
                  ))}
                </ul>
             </div>
             <div>
                <h3 className="text-xl font-bold text-ocean-700 uppercase mb-3 tracking-widest">Your Mission Outcomes</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {data.content.outcomes.map((out: string, i: number) => (
                    <li key={i} className="bg-green-50 p-3 rounded-xl border-l-4 border-green-400 font-medium">✓ {out}</li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-80 space-y-3 shrink-0">
         <h3 className="font-bold text-slate-400 uppercase text-center mb-4">Tactical Intel</h3>
         {data.content.keyPoints.map((kp: KeyPoint) => (
           <div key={kp.id} className="bg-white p-4 rounded-2xl shadow-md border-r-4 border-blue-500 hover:scale-105 transition-transform">
              <span className="text-blue-600 font-black text-xs uppercase block mb-1">Key Point {kp.id}</span>
              <h4 className="font-bold text-slate-800">{kp.text}</h4>
              <p className="text-xs text-slate-500">{kp.subtext}</p>
           </div>
         ))}
      </div>
    </div>
  );
};

// --- Grammar Structure Slide ---
export const GrammarStructureSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  return (
    <div className="h-full w-full flex flex-col items-center p-4 md:p-8 bg-white overflow-y-auto custom-scrollbar">
      <div className="max-w-6xl w-full space-y-10">
        <div className="text-center bg-ocean-50 p-6 md:p-10 rounded-[3rem] border-4 border-ocean-100 shadow-sm">
           <h2 className="text-2xl font-black text-slate-400 uppercase tracking-widest mb-4">Mission Blueprint</h2>
           <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-ocean-200 inline-block mb-8">
              <div className="flex flex-wrap items-center justify-center gap-4 text-2xl md:text-4xl font-black uppercase tracking-tighter">
                 <span className="text-blue-600">Subject</span> 
                 <span className="text-slate-300">+</span>
                 <span className="text-green-600">V2 (Past)</span> 
                 <span className="text-slate-300">+</span>
                 <span className="text-red-600">Object</span> 
                 <span className="text-slate-300">+</span>
                 <span className="text-purple-600">Place</span> 
                 <span className="text-slate-300">+</span>
                 <span className="text-amber-500">Time</span>
              </div>
           </div>
           <p className="text-xl md:text-2xl text-ocean-900 font-serif italic max-w-3xl mx-auto leading-relaxed">
             "{data.content.explanation}"
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
           {data.content.structure.map((sentence: SentencePart[], sIdx: number) => (
             <div key={sIdx} className="bg-slate-50 px-4 py-3 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-ocean-300 group">
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                   {sentence.map((part, pIdx) => (
                     <div key={pIdx} className="flex flex-col">
                        <span className={`text-lg md:text-xl font-bold tracking-tight ${part.color} ${part.isMissing ? 'opacity-30' : ''}`}>
                           {part.value}
                        </span>
                        <div className="text-[8px] font-black text-slate-300 uppercase tracking-widest group-hover:text-ocean-400 transition-colors">
                           {part.label}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>

        <div className="bg-slate-900 p-4 rounded-xl flex flex-wrap justify-center gap-4 text-[10px] font-bold text-white uppercase tracking-widest">
           <span className="text-blue-400">● Subject</span>
           <span className="text-green-400">● V2 Past</span>
           <span className="text-red-400">● Object</span>
           <span className="text-purple-400">● Place</span>
           <span className="text-amber-400">● Time</span>
        </div>
      </div>
    </div>
  );
};

// --- Verb Grid ---
export const VerbGridSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const [flipped, setFlipped] = useState<number[]>([]);
  const toggleFlip = (id: number) => {
    setFlipped(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };
  return (
    <div className="h-full w-full p-4 md:p-8 bg-ocean-900 overflow-y-auto custom-scrollbar">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 pb-20">
        <div className="text-center text-white mb-4">
           <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest">{data.title}</h2>
           <p className="text-ocean-300 mt-2 font-medium">{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
          {data.content.cards.map((card: FlipCardData) => {
            const isFlipped = flipped.includes(card.id);
            return (
              <div key={card.id} onClick={() => toggleFlip(card.id)} className="h-44 md:h-60 cursor-pointer group" style={{perspective: '10
