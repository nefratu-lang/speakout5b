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
              <div key={card.id} onClick={() => toggleFlip(card.id)} className="h-44 md:h-60 cursor-pointer group" style={{perspective: '1000px'}}>
                <div className={`relative w-full h-full transition-all duration-500`} style={{transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                  <div className="absolute inset-0 bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-xl border-4 border-white group-hover:border-ocean-400" style={{backfaceVisibility: 'hidden'}}>
                     <span className="text-4xl mb-2">{card.icon}</span>
                     <h3 className="text-2xl font-black text-ocean-900 uppercase">{card.v1}</h3>
                     <p className="text-[10px] text-slate-400 mt-1">{card.pronunciation}</p>
                  </div>
                  <div className="absolute inset-0 bg-green-600 text-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-2xl border-4 border-green-400" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
                     <h3 className="text-3xl font-black">{card.v2}</h3>
                     <p className="mt-3 p-2 bg-black/20 rounded-lg text-[10px] text-center italic leading-relaxed">"{card.context}"</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- Game Intro Slide ---
export const GameIntroSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 md:p-12 bg-white overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl w-full bg-ocean-50 rounded-[3rem] p-8 md:p-12 shadow-2xl border-4 border-ocean-100 space-y-8 animate-in zoom-in duration-500">
        <div className="text-center">
           <div className="text-6xl mb-4">📢</div>
           <h2 className="text-4xl md:text-5xl font-black text-ocean-900 uppercase tracking-tighter mb-4">{data.title}</h2>
           <p className="text-xl text-slate-500 font-bold uppercase tracking-widest">{data.subtitle}</p>
        </div>
        
        <div className="bg-white p-8 rounded-3xl border-2 border-ocean-200 shadow-inner">
           <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-serif italic text-center">
             "{data.content.message}"
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           {data.content.keyNotes.map((note: string, i: number) => (
             <div key={i} className="bg-ocean-600 text-white p-4 rounded-2xl text-center font-bold text-sm shadow-md">
                {note}
             </div>
           ))}
        </div>
        
        <div className="text-center pt-4">
           <div className="inline-block px-8 py-4 bg-amber-500 text-white rounded-full font-black text-xl animate-pulse uppercase">Get Ready!</div>
        </div>
      </div>
    </div>
  );
};

// --- V2 Sentence Builder ---
export const V2SentenceBuilderSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const toggleReveal = (idx: number) => {
    setRevealed(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  return (
    <div className="h-full w-full flex flex-col p-4 md:p-10 bg-slate-50 overflow-y-auto custom-scrollbar">
       <div className="max-w-6xl mx-auto space-y-8 pb-20">
          <div className="text-center">
             <h2 className="text-3xl md:text-5xl font-black text-ocean-900 uppercase tracking-tighter">{data.title}</h2>
             <p className="text-lg text-slate-500 font-bold mt-2">{data.subtitle}</p>
             
             <div className="flex flex-wrap justify-center gap-6 mt-6 bg-white py-3 px-8 rounded-full border border-slate-200 shadow-sm inline-flex">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-600"></div><span className="text-[10px] font-black uppercase text-slate-500">Subject</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-600"></div><span className="text-[10px] font-black uppercase text-slate-500">Verb 2</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-600"></div><span className="text-[10px] font-black uppercase text-slate-500">Object</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-600"></div><span className="text-[10px] font-black uppercase text-slate-500">Place</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-500"></div><span className="text-[10px] font-black uppercase text-slate-500">Time</span></div>
             </div>
          </div>

          <div className="space-y-4">
             {data.content.drills.map((drill: any, i: number) => (
               <div key={i} className="bg-white border-2 border-slate-100 rounded-3xl p-4 md:p-6 shadow-md hover:border-ocean-300 transition-all group">
                  <div className="flex flex-wrap items-end gap-x-4 gap-y-3 font-mono text-lg md:text-2xl">
                     
                     <div className="flex flex-col">
                        <span className="text-blue-600 font-bold">{drill.subject}</span>
                        <span className="text-[10px] uppercase font-bold text-slate-300">Subject</span>
                     </div>

                     <div className="flex flex-col items-center">
                        <button 
                          onClick={() => toggleReveal(i)}
                          className={`min-w-[120px] border-b-4 border-dashed py-1 px-4 transition-all ${revealed.includes(i) ? 'text-green-600 font-black border-green-400 bg-green-50 rounded-t-lg' : 'text-slate-300 border-slate-300 hover:bg-slate-200 rounded-t-lg'}`}
                        >
                           {revealed.includes(i) ? drill.v2 : `(${drill.v1})`}
                        </button>
                        <span className="text-[10px] uppercase font-bold text-slate-300">V2 (Past)</span>
                     </div>

                     {drill.object && (
                        <div className="flex flex-col">
                           <span className="text-red-600 font-bold">{drill.object}</span>
                           <span className="text-[10px] uppercase font-bold text-slate-300">Object</span>
                        </div>
                     )}

                     <div className="flex flex-col">
                        <span className="text-purple-600 font-bold">{drill.place}</span>
                        <span className="text-[10px] uppercase font-bold text-slate-300">Place</span>
                     </div>

                     <div className="flex flex-col">
                        <span className="text-amber-500 font-black">{drill.time}.</span>
                        <span className="text-[10px] uppercase font-bold text-slate-300">Time</span>
                     </div>
                     
                     <div className="ml-auto">
                        <button onClick={() => toggleReveal(i)} className="w-12 h-12 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 hover:bg-ocean-600 hover:text-white transition-all shadow-sm">
                           {revealed.includes(i) ? '👁️' : '❓'}
                        </button>
                     </div>
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

// --- iFrame Slide ---
export const IFrameSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  return (
    <div className="h-full w-full flex flex-col bg-slate-100 overflow-hidden">
       <div className="bg-white p-4 shadow-sm border-b flex justify-between items-center shrink-0">
          <div><h2 className="text-2xl font-bold text-ocean-900 uppercase">{data.title}</h2><p className="text-sm text-slate-500">{data.subtitle}</p></div>
          <div className="text-5xl">🎮</div>
       </div>
       <div className="flex-1 w-full bg-white relative">
          <iframe src={data.content.url} className="absolute inset-0 w-full h-full border-none" allowFullScreen></iframe>
       </div>
    </div>
  );
};

// --- Negatives & Questions Explanation Slide ---
export const NegativesQuestionsSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 md:p-12 bg-slate-900 text-white overflow-y-auto custom-scrollbar">
       <div className="max-w-5xl w-full space-y-12 animate-in zoom-in duration-500 pb-10">
          <div className="text-center">
             <h2 className="text-4xl md:text-6xl font-black text-red-500 uppercase tracking-tighter mb-4">{data.title}</h2>
             <div className="inline-block px-6 py-2 bg-red-600 rounded-full font-bold text-xl mb-4 shadow-lg shadow-red-500/20 uppercase">RESET RULE: V2 ➔ V1</div>
             <p className="text-2xl text-slate-300 max-w-2xl mx-auto font-medium">{data.content.rule}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {data.content.formulas.map((f: any, i: number) => (
               <div key={i} className={`flex flex-col h-full p-8 rounded-[2.5rem] border-4 transition-all hover:scale-105 ${i === 0 ? 'bg-red-500/10 border-red-500/30' : 'bg-blue-500/10 border-blue-500/30'}`}>
                  <h4 className={`text-2xl font-black uppercase mb-4 ${i === 0 ? 'text-red-400' : 'text-blue-400'}`}>{f.label}</h4>
                  <div className="bg-black/40 p-6 rounded-2xl mb-6 font-mono text-xl md:text-2xl text-white border border-white/10">
                     {f.structure}
                  </div>
                  <div className="italic text-slate-400 text-lg mb-6">Example: <span className="text-white font-bold">{f.example}</span></div>
                  
                  {f.extraExamples && (
                      <div className="mt-auto bg-black/20 p-4 rounded-xl">
                          <p className="text-xs uppercase font-bold text-slate-500 mb-2 tracking-widest">More Examples:</p>
                          <ul className="space-y-1">
                              {f.extraExamples.map((ex: string, idx: number) => (
                                  <li key={idx} className="text-sm md:text-base font-medium text-slate-300">
                                      • {ex}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  )}
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

// --- Practice Drills Slide ---
export const PracticeDrillsSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const [revealedNeg, setRevealedNeg] = useState<number[]>([]);
  const [revealedQuest, setRevealedQuest] = useState<number[]>([]);

  const toggleNeg = (i: number) => setRevealedNeg(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i]);
  const toggleQuest = (i: number) => setRevealedQuest(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i]);

  return (
    <div className="h-full w-full flex flex-col p-4 md:p-10 bg-slate-50 overflow-y-auto custom-scrollbar">
       <div className="max-w-6xl mx-auto space-y-10 pb-20 w-full">
          <div className="text-center">
             <h2 className="text-3xl md:text-5xl font-black text-ocean-900 uppercase tracking-tighter">{data.title}</h2>
             <p className="text-lg text-slate-500 font-bold mt-2">{data.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {/* Negatives Column */}
             <div className="space-y-4">
                <h3 className="text-xl font-black text-red-600 uppercase border-b-2 border-red-200 pb-2">Negatives (-)</h3>
                {data.content.negatives.map((item: any, i: number) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between group">
                     <div className="font-mono text-lg text-slate-700">
                        {item.sentence.split('____').map((p: string, idx: number) => (
                          <React.Fragment key={idx}>
                             {p}
                             {idx === 0 && (
                               <span className={`mx-1 border-b-2 font-bold px-2 ${revealedNeg.includes(i) ? 'text-red-600 border-red-400 bg-red-50' : 'text-transparent border-slate-300'}`}>
                                  {item.answer}
                               </span>
                             )}
                          </React.Fragment>
                        ))}
                     </div>
                     <button onClick={() => toggleNeg(i)} className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                        {revealedNeg.includes(i) ? '👁️' : '❓'}
                     </button>
                  </div>
                ))}
             </div>

             {/* Questions Column */}
             <div className="space-y-4">
                <h3 className="text-xl font-black text-blue-600 uppercase border-b-2 border-blue-200 pb-2">Questions (?)</h3>
                {data.content.questions.map((item: any, i: number) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between group">
                     <div className="font-mono text-lg text-slate-700">
                        {item.sentence.split('____').map((p: string, idx: number) => (
                          <React.Fragment key={idx}>
                             {p}
                             {idx === 0 && (
                               <span className={`mx-1 border-b-2 font-bold px-2 ${revealedQuest.includes(i) ? 'text-blue-600 border-blue-400 bg-blue-50' : 'text-transparent border-slate-300'}`}>
                                  {item.answer}
                               </span>
                             )}
                          </React.Fragment>
                        ))}
                     </div>
                     <button onClick={() => toggleQuest(i)} className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                        {revealedQuest.includes(i) ? '👁️' : '❓'}
                     </button>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

// --- Reading Comprehension ---
export const ReadingComprehensionSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const [showAnswers, setShowAnswers] = useState<number[]>([]);
  return (
    <div className="h-full w-full flex flex-col p-4 md:p-10 gap-8 bg-[#fffdf5] overflow-y-auto custom-scrollbar">
       <div className="max-w-5xl mx-auto space-y-10 pb-20">
          <div className="border-b-4 border-ocean-600 pb-4 text-center">
             <h2 className="text-4xl md:text-6xl font-serif font-black text-ocean-900">{data.title}</h2>
             <p className="text-slate-500 uppercase font-bold tracking-widest mt-2">{data.subtitle}</p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-lg border-2 border-slate-100 text-xl md:text-3xl font-serif leading-relaxed text-slate-800 first-letter:text-7xl first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:text-ocean-700">
             {data.content.text}
          </div>
          <div className="bg-ocean-900 text-white p-8 rounded-[2rem] shadow-xl">
             <h3 className="text-2xl font-bold uppercase mb-6 tracking-widest border-b border-white/20 pb-3 flex items-center gap-3">
               <span>📋</span> Mission Intelligence
             </h3>
             <div className="space-y-6">
                {data.content.questions.map((q: any, i: number) => (
                  <div key={i} className="space-y-3">
                     <button 
                       onClick={() => setShowAnswers(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
                       className="w-full text-left font-bold text-xl text-ocean-200 hover:text-white transition-colors flex items-start gap-4"
                     >
                       <span className="bg-white/10 px-3 py-1 rounded-lg text-sm">{i+1}</span>
                       <span>{q.q}</span>
                     </button>
                     {showAnswers.includes(i) && (
                       <div className="ml-12 bg-white/10 p-4 rounded-xl border border-white/10 text-xl text-green-400 animate-in slide-in-from-top-2">
                          {q.a}
                       </div>
                     )}
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

// --- SPEAKING HUB ---
export const SpeakingHubSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openPhoto = (index: number) => setActiveIndex(index);
  const closePhoto = () => setActiveIndex(null);
  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(prev => (prev !== null ? (prev + 1) % data.content.images.length : null));
  };
  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(prev => (prev !== null ? (prev - 1 + data.content.images.length) % data.content.images.length : null));
  };

  return (
    <div className="h-full w-full flex flex-col p-4 md:p-8 bg-slate-50 overflow-y-auto custom-scrollbar">
       <div className="max-w-7xl mx-auto space-y-8 pb-20">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-t-8 border-ocean-600">
             <h2 className="text-3xl md:text-5xl font-black text-ocean-900 mb-6">{data.title}</h2>
             <p className="text-slate-400 font-bold uppercase mb-4 tracking-widest">{data.subtitle}</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-medium text-slate-700">
                <div className="space-y-4 text-sm md:text-base">
                   <p className="flex gap-3"><span className="text-ocean-600 font-black">1.</span> Choose one photo from the grid below.</p>
                   <p className="flex gap-3"><span className="text-ocean-600 font-black">2.</span> Click to see it bigger.</p>
                </div>
                <div className="space-y-4 text-sm md:text-base">
                   <p className="flex gap-3"><span className="text-ocean-600 font-black">3.</span> Use the "Help Words" on the sides.</p>
                   <p className="flex gap-3"><span className="text-ocean-600 font-black">4.</span> Describe the situation in Past Simple.</p>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {data.content.images.map((img: any, i: number) => (
               <button key={i} onClick={() => openPhoto(i)} className="group relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-lg hover:ring-8 ring-ocean-200 transition-all text-left">
                  <img src={img.url} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={img.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                     <span className="text-white font-bold text-xs md:text-sm uppercase">{img.title}</span>
                  </div>
               </button>
             ))}
          </div>
       </div>

       {activeIndex !== null && (
         <div className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 overflow-hidden" onClick={closePhoto}>
            <button onClick={closePhoto} className="absolute top-4 right-4 text-white/50 hover:text-white text-5xl font-light z-50 transition-colors">&times;</button>
            
            <div className="max-w-[1600px] w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8" onClick={e => e.stopPropagation()}>
               
               {/* LEFT PANEL */}
               <div className="hidden md:flex flex-col w-64 shrink-0 gap-4 animate-in slide-in-from-left-4">
                   <HelpWordCategory title="Verbs (V1 → V2)" words={data.content.images[activeIndex].verbs} color="text-green-300" bgColor="bg-slate-800/80" isDark={true} />
               </div>

               {/* CENTER: IMAGE */}
               <div className="relative flex-1 max-h-full flex flex-col items-center justify-center group">
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 max-h-[70vh] md:max-h-[85vh]">
                       <img src={data.content.images[activeIndex].url} className="max-w-full max-h-full object-contain" alt="Speaking Support" />
                   </div>
                   
                   <div className="text-center mt-6">
                       <h3 className="text-3xl font-black text-white uppercase tracking-widest">{data.content.images[activeIndex].title}</h3>
                   </div>

                   {/* Nav Buttons */}
                   <button onClick={prevPhoto} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white/10 hover:bg-white/30 p-4 rounded-full text-white backdrop-blur-sm transition-all hidden md:block">
                     <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
                   </button>
                   <button onClick={nextPhoto} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white/10 hover:bg-white/30 p-4 rounded-full text-white backdrop-blur-sm transition-all hidden md:block">
                     <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                   </button>
               </div>

               {/* RIGHT PANEL */}
               <div className="hidden md:flex flex-col w-64 shrink-0 gap-4 animate-in slide-in-from-right-4">
                   <HelpWordCategory title="Vocabulary" words={data.content.images[activeIndex].objects} color="text-red-300" bgColor="bg-slate-800/80" isDark={true} />
                   <HelpWordCategory title="Time & Place" words={[...(data.content.images[activeIndex].places || []), ...(data.content.images[activeIndex].time || [])]} color="text-amber-300" bgColor="bg-slate-800/80" isDark={true} />
               </div>

               {/* MOBILE OVERLAY */}
               <div className="md:hidden absolute bottom-0 left-0 right-0 bg-slate-900/95 p-6 rounded-t-3xl max-h-[40vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <button onClick={prevPhoto} className="p-2 bg-white/10 rounded-full text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg></button>
                        <h3 className="text-xl font-bold text-white uppercase">{data.content.images[activeIndex].title}</h3>
                        <button onClick={nextPhoto} className="p-2 bg-white/10 rounded-full text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h4 className="text-green-300 text-xs font-bold uppercase">Verbs</h4>
                            {data.content.images[activeIndex].verbs.map((w: string, i: number) => <div key={i} className="text-slate-300 text-xs bg-white/5 p-1 rounded">{w}</div>)}
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-amber-300 text-xs font-bold uppercase">Context</h4>
                             {data.content.images[activeIndex].objects.map((w: string, i: number) => <div key={i} className="text-slate-300 text-xs bg-white/5 p-1 rounded">{w}</div>)}
                        </div>
                    </div>
               </div>
            </div>
         </div>
       )}
    </div>
  );
};

const HelpWordCategory = ({ title, words, color, bgColor, isDark = false }: { title: string, words: string[], color: string, bgColor: string, isDark?: boolean }) => (
  <div className={`${bgColor} p-5 rounded-2xl border border-white/10 h-full shadow-lg backdrop-blur-md`}>
    <h4 className={`text-sm font-black uppercase mb-4 ${color} border-b border-white/10 pb-2 tracking-tighter`}>{title}</h4>
    <div className="flex flex-col gap-2">
      {words.length > 0 ? words.map((w, i) => (
        <span key={i} className={`${isDark ? 'bg-black/30 text-white border-white/5' : 'bg-white text-slate-700 border-slate-100'} px-3 py-2 rounded-lg text-sm font-bold shadow-sm border`}>{w}</span>
      )) : <span className="text-slate-500 text-xs italic">No specific cues</span>}
    </div>
  </div>
);

// --- Apology Response Slide ---
export const ApologyResponseSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const [fills, setFills] = useState<string[]>(["", "", "", ""]);
  const cycleOption = (idx: number, categoryIdx: number) => {
    const items = data.content.languageBox[categoryIdx].items;
    const currentVal = fills[idx];
    const nextIdx = (items.indexOf(currentVal) + 1) % items.length;
    const newFills = [...fills];
    newFills[idx] = items[nextIdx];
    setFills(newFills);
  };

  return (
    <div className="h-full w-full flex flex-col p-4 md:p-10 bg-slate-50 overflow-y-auto custom-scrollbar">
       <div className="max-w-6xl mx-auto space-y-8 pb-24">
          <div className="text-center">
             <h2 className="text-4xl md:text-5xl font-black text-ocean-900 uppercase tracking-tighter">{data.title}</h2>
             <p className="text-lg text-slate-500 font-bold">{data.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {data.content.languageBox.map((box: any, i: number) => (
               <div key={i} className={`rounded-3xl p-6 shadow-lg border-t-8 ${i === 0 ? 'bg-red-50 border-red-500' : i === 1 ? 'bg-amber-50 border-amber-500' : 'bg-green-50 border-green-500'}`}>
                  <h4 className="font-black uppercase tracking-widest text-slate-500 mb-4">{box.category}</h4>
                  <ul className="space-y-2">
                     {box.items.map((item: string, j: number) => (
                       <li key={j} className="bg-white p-2 rounded-lg shadow-sm font-bold text-slate-700 text-sm">{item}</li>
                     ))}
                  </ul>
               </div>
             ))}
          </div>
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border-4 border-ocean-100">
             <h3 className="font-black text-ocean-700 uppercase mb-8 text-center text-xl">Interactive Dialogue Builder</h3>
             <div className="max-w-3xl mx-auto space-y-8 font-serif text-2xl md:text-3xl leading-relaxed">
                <div className="flex gap-6 items-center">
                   <span className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 text-base font-black shadow-lg">A</span>
                   <button onClick={() => cycleOption(0, 0)} className={`flex-1 border-b-8 border-dashed border-red-400 py-3 px-6 text-left transition-all hover:bg-red-50 rounded-xl ${fills[0] ? 'text-red-600 font-black scale-105' : 'text-slate-200'}`}>
                      {fills[0] || "Select Apology..."}
                   </button>
                </div>
                <div className="flex gap-6 items-center">
                   <span className="w-12 h-12 rounded-full bg-slate-400 text-white flex items-center justify-center shrink-0 text-base font-black shadow-lg">B</span>
                   <div className="flex-1 flex flex-wrap items-center gap-4">
                      <button onClick={() => cycleOption(1, 2)} className={`border-b-8 border-dashed border-green-400 py-3 px-6 transition-all hover:bg-green-50 rounded-xl ${fills[1] ? 'text-green-600 font-black scale-105' : 'text-slate-200'}`}>
                         {fills[1] || "Response..."}
                      </button>
                      <span className="text-slate-600">What happened?</span>
                   </div>
                </div>
                <div className="flex gap-6 items-center">
                   <span className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 text-base font-black shadow-lg">A</span>
                   <button onClick={() => cycleOption(2, 1)} className={`flex-1 border-b-8 border-dashed border-amber-400 py-3 px-6 text-left transition-all hover:bg-amber-50 rounded-xl ${fills[2] ? 'text-amber-600 font-black scale-105' : 'text-slate-200'}`}>
                      {fills[2] || "Select Reason..."}
                   </button>
                </div>
                <div className="flex gap-6 items-center">
                   <span className="w-12 h-12 rounded-full bg-slate-400 text-white flex items-center justify-center shrink-0 text-base font-black shadow-lg">B</span>
                   <div className="flex-1 flex flex-wrap items-center gap-4">
                      <button onClick={() => cycleOption(3, 2)} className={`border-b-8 border-dashed border-green-400 py-3 px-6 transition-all hover:bg-green-50 rounded-xl ${fills[3] ? 'text-green-600 font-black scale-105' : 'text-slate-200'}`}>
                         {fills[3] || "Final Response..."}
                      </button>
                      <span className="text-slate-600">Please sit down.</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

// --- Written Quiz Slide ---
export const WrittenQuizSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [history, setHistory] = useState<any[]>([]); 
  const [isSigned, setIsSigned] = useState(false);

  const handleOptionClick = (idx: number) => setSelectedOption(idx);

  const nextQuestion = () => {
    if (selectedOption === null) return;
    const question = data.content.questions[currentQuestion];
    const isCorrect = selectedOption === question.correctIndex;
    
    setHistory([...history, { 
      speaker: question.speaker,
      text: question.question.replace('______', `[${question.options[selectedOption]}]`),
      speaker2: question.speaker2,
      text2: question.question2 ? question.question2.replace('______', `[${question.options[selectedOption]}]`) : null,
      isCorrect
    }]);

    if (currentQuestion < data.content.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  const resetQuiz = () => {
      setCurrentQuestion(0);
      setSelectedOption(null);
      setHistory([]);
      setIsSigned(false);
  }

  const isFinished = currentQuestion >= data.content.questions.length - 1 && history.length === data.content.questions.length;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 md:p-8 bg-slate-50 overflow-y-auto custom-scrollbar">
       <div className="max-w-4xl w-full space-y-6 animate-in zoom-in duration-300 pb-20">
          <div className="text-center">
             <h2 className="text-3xl md:text-5xl font-black text-ocean-900 uppercase tracking-tighter">{data.title}</h2>
             <p className="text-lg text-slate-500 font-bold mt-2">{data.subtitle}</p>
          </div>

          <div className="bg-[#f0f9ff] rounded-[4px] shadow-2xl overflow-hidden border-l-8 border-ocean-600 relative" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '100% 2rem' }}>
             <div className="bg-ocean-800 text-white p-4 flex justify-between items-center">
                 <span className="font-mono uppercase tracking-widest">Incident Report #402</span>
                 <span className="font-bold">CONFIDENTIAL</span>
             </div>

             <div className="p-8 md:p-12 space-y-6 font-serif text-lg leading-loose text-slate-800">
                <p className="italic text-slate-500 border-b border-slate-300 pb-4 mb-6">{data.content.context}</p>

                <div className="space-y-6 opacity-80">
                    {history.map((h, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex gap-4">
                                <span className="font-bold uppercase text-xs w-24 text-right shrink-0 mt-1 text-slate-400">{h.speaker}:</span>
                                <span className={h.isCorrect ? "text-slate-800" : "text-red-500 line-through"}>{h.text}</span>
                            </div>
                            {h.speaker2 && (
                                <div className="flex gap-4">
                                    <span className="font-bold uppercase text-xs w-24 text-right shrink-0 mt-1 text-slate-400">{h.speaker2}:</span>
                                    <span className={h.isCorrect ? "text-ocean-700 font-bold" : "text-red-500 font-bold"}>{h.text2}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {!isFinished && (
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-ocean-200 animate-in slide-in-from-bottom-4">
                        <div className="space-y-4 mb-6">
                             <div className="flex gap-4 items-center">
                                <span className="font-bold uppercase text-xs w-24 text-right shrink-0 text-slate-500">{data.content.questions[currentQuestion].speaker}:</span>
                                <span className="text-xl">{data.content.questions[currentQuestion].question}</span>
                            </div>
                             {data.content.questions[currentQuestion].speaker2 && (
                                <div className="flex gap-4 items-center">
                                    <span className="font-bold uppercase text-xs w-24 text-right shrink-0 text-slate-500">{data.content.questions[currentQuestion].speaker2}:</span>
                                    <span className="text-xl font-bold text-ocean-600">{data.content.questions[currentQuestion].question2}</span>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           {data.content.questions[currentQuestion].options.map((opt: string, idx: number) => (
                             <button 
                               key={idx} 
                               onClick={() => handleOptionClick(idx)}
                               className={`p-3 rounded-lg border-2 font-bold transition-all ${selectedOption === idx ? 'bg-ocean-600 text-white border-ocean-600' : 'bg-slate-50 border-slate-200 hover:border-ocean-300'}`}
                             >
                                {opt}
                             </button>
                           ))}
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                            <button 
                                onClick={nextQuestion} 
                                disabled={selectedOption === null}
                                className="bg-ocean-800 text-white px-6 py-2 rounded-lg font-bold disabled:opacity-50 hover:bg-ocean-900"
                            >
                                Confirm Entry &raquo;
                            </button>
                        </div>
                    </div>
                )}

                {isFinished && !isSigned && (
                    <div className="bg-ocean-50 p-6 rounded-xl border border-ocean-200 text-center space-y-4 animate-in fade-in">
                        <p className="font-bold text-ocean-800">Review complete. Please sign to close the case.</p>
                        <button 
                            onClick={() => setIsSigned(true)}
                            className="font-serif text-3xl text-blue-900 border-b-2 border-blue-900 hover:text-blue-700 hover:border-blue-700 transition-colors"
                        >
                            x ________________ (Click to Sign)
                        </button>
                    </div>
                )}

                {isSigned && (
                    <div className="relative text-center py-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-red-600 text-red-600 font-black text-6xl md:text-8xl p-4 -rotate-12 opacity-80 animate-in zoom-in duration-300 uppercase tracking-tighter mix-blend-multiply">
                            CASE CLOSED
                        </div>
                        <h3 className="text-3xl font-black text-ocean-600 mb-4 opacity-50">REPORT FILED</h3>
                        <button onClick={resetQuiz} className="text-slate-400 hover:text-ocean-600 underline relative z-10">Start New Report</button>
                    </div>
                )}
             </div>
          </div>
       </div>
    </div>
  );
}

// --- Time Drill Slide ---
export const TimeDrillSlide: React.FC<{ data: SlideData }> = ({ data }) => {
    const [currentDrill, setCurrentDrill] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState<boolean | null>(null);

    const handleAnswer = (option: string) => {
        if (showResult !== null) return;
        const correct = option === data.content.games[currentDrill].correct;
        if (correct) setScore(s => s + 1);
        setShowResult(correct);
        setTimeout(() => {
            if (currentDrill < data.content.games.length - 1) {
                setCurrentDrill(p => p + 1);
                setShowResult(null);
            }
        }, 1500);
    };

    const ClockFace = ({ timeStr }: { timeStr: string }) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        const minuteAngle = minutes * 6;
        const hourAngle = (hours % 12) * 30 + minutes * 0.5;
        return (
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-full border-8 border-slate-700 shadow-2xl flex items-center justify-center">
                {[...Array(12)].map((_, i) => <div key={i} className="absolute w-1 h-3 bg-slate-300" style={{ transform: `rotate(${i * 30}deg) translateY(-85px)` }}></div>)}
                {[...Array(4)].map((_, i) => <div key={i} className="absolute w-2 h-4 bg-slate-800" style={{ transform: `rotate(${i * 90}deg) translateY(-85px)` }}></div>)}
                <div className="absolute w-2 h-16 bg-black rounded-full origin-bottom" style={{ transform: `rotate(${hourAngle}deg) translateY(-50%)`, bottom: '50%' }}></div>
                <div className="absolute w-1.5 h-24 bg-red-600 rounded-full origin-bottom" style={{ transform: `rotate(${minuteAngle}deg) translateY(-50%)`, bottom: '50%' }}></div>
                <div className="absolute w-4 h-4 bg-slate-800 rounded-full z-10"></div>
            </div>
        );
    };

    return (
      <div className="h-full w-full flex flex-col md:flex-row p-4 md:p-8 gap-6 bg-slate-50 overflow-y-auto custom-scrollbar">
         <div className="flex-1 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border-t-8 border-ocean-600 flex flex-col justify-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-ocean-900 uppercase tracking-tighter">Time Protocol</h2>
            <div className="space-y-6">
               {data.content.explanation.map((item: any, i: number) => (
                 <div key={i} className="flex items-center gap-6 group">
                    <div className="w-24 text-right font-black text-ocean-500 text-lg md:text-xl uppercase leading-tight group-hover:text-ocean-700 transition-colors">{item.label}</div>
                    <div className="w-1 h-12 bg-slate-200 rounded-full group-hover:bg-ocean-300 transition-colors"></div>
                    <div className="flex-1 text-slate-600 font-medium text-lg">{item.desc}</div>
                 </div>
               ))}
            </div>
            <div className="bg-ocean-50 p-6 rounded-2xl border border-ocean-100">
               <div className="flex items-center gap-4 text-ocean-800 font-serif italic"><span className="text-4xl">💡</span><p>Remember: For minutes 1-30 use <strong>PAST</strong>. For minutes 31-59 use <strong>TO</strong>.</p></div>
            </div>
         </div>
         <div className="flex-1 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-amber-500 to-green-500"></div>
            <div className="mb-8 text-center w-full flex flex-col items-center">
               <h3 className="text-ocean-300 font-bold uppercase tracking-widest text-sm mb-6">Drill {currentDrill + 1} / {data.content.games.length}</h3>
               <ClockFace timeStr={data.content.games[currentDrill].time} />
               <div className="mt-6 text-2xl font-mono font-black tracking-widest text-slate-500">{data.content.games[currentDrill].time}</div>
            </div>
            <div className="w-full space-y-4 max-w-md">
               {data.content.games[currentDrill].options.map((opt: string, idx: number) => (
                 <button key={idx} onClick={() => handleAnswer(opt)} className={`w-full p-4 rounded-xl font-bold text-lg md:text-xl transition-all transform active:scale-95 ${showResult === null ? 'bg-white/10 hover:bg-white/20 text-white border border-white/10' : opt === data.content.games[currentDrill].correct ? 'bg-green-500 text-white border-green-400 scale-105 shadow-lg shadow-green-500/50' : 'bg-white/5 text-slate-500 border-transparent opacity-50'}`}>{opt}</button>
               ))}
            </div>
            <div className="mt-8 flex items-center gap-2 text-slate-400 font-mono text-sm"><span>SCORE:</span><span className="text-white font-bold">{score * 100} PTS</span></div>
            {currentDrill === data.content.games.length - 1 && showResult !== null && (
               <div className="absolute inset-0 bg-ocean-900/95 backdrop-blur-md flex items-center justify-center flex-col animate-in fade-in zoom-in">
                  <div className="text-6xl mb-4">🏆</div>
                  <h2 className="text-4xl font-black text-white mb-2">CHRONO MASTER</h2>
                  <p className="text-ocean-300 text-xl">Final Score: {score}/{data.content.games.length}</p>
               </div>
            )}
         </div>
      </div>
    );
}

// --- Debrief ---
export const DebriefSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 bg-ocean-900 text-white overflow-y-auto custom-scrollbar">
       <div className="max-w-4xl w-full space-y-10 animate-in fade-in zoom-in duration-1000 pb-20">
          <div className="text-center">
             <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-4">{data.title}</h2>
             <p className="text-xl md:text-2xl text-ocean-300 italic font-medium">{data.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {data.content.checklist.map((item: any, i: number) => (
               <div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold shrink-0">✓</div>
                     <h4 className="text-xl font-black uppercase tracking-widest">{item.text}</h4>
                  </div>
                  <p className="text-ocean-100 italic">"{item.reflection}"</p>
               </div>
             ))}
          </div>
          <div className="text-center py-10">
             <div className="inline-block border-4 border-gold-500 text-gold-500 px-8 py-4 rounded-xl font-black text-3xl md:text-5xl -rotate-6 uppercase shadow-2xl animate-bounce">Mission Complete</div>
          </div>
       </div>
    </div>
  );
};
