
import React, { useState } from 'react';
import { SlideData, KeyPoint, SentencePart, FlipCardData } from '../types';

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
               <div key={i} className={`p-8 rounded-[2.5rem] border-4 transition-all hover:scale-105 ${i === 0 ? 'bg-red-500/10 border-red-500/30' : 'bg-blue-500/10 border-blue-500/30'}`}>
                  <h4 className={`text-2xl font-black uppercase mb-4 ${i === 0 ? 'text-red-400' : 'text-blue-400'}`}>{f.label}</h4>
                  <div className="bg-black/40 p-6 rounded-2xl mb-6 font-mono text-xl md:text-2xl text-white border border-white/10">
                     {f.structure}
                  </div>
                  <div className="italic text-slate-400 text-lg">Example: <span className="text-white font-bold">{f.example}</span></div>
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
                   <p className="flex gap-3"><span className="text-ocean-600 font-black">3.</span> Use the "Help Words" menu below the photo.</p>
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
         <div className="fixed inset-0 z-[100] bg-slate-900/95 flex flex-col items-center justify-start overflow-y-auto pt-10 pb-20 px-4" onClick={closePhoto}>
            <div className="relative max-w-5xl w-full flex flex-col gap-8" onClick={e => e.stopPropagation()}>
               <button onClick={closePhoto} className="absolute -top-10 right-0 text-white text-5xl font-light hover:text-red-400 transition-colors z-50">&times;</button>
               
               {/* BORDERLESS PHOTO DISPLAY */}
               <div className="relative w-full flex items-center justify-center">
                  <img src={data.content.images[activeIndex].url} className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded-lg" alt="Speaking Support" />
                  
                  <button onClick={prevPhoto} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-4 rounded-full text-white backdrop-blur-sm transition-all">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button onClick={nextPhoto} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-4 rounded-full text-white backdrop-blur-sm transition-all">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                  </button>
               </div>

               {/* BOTTOM SUPPORT MENU - BELOW PHOTO */}
               <div className="bg-white rounded-[2rem] p-10 shadow-2xl w-full border-t-8 border-ocean-600">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6 mb-8">
                     <h3 className="text-4xl font-black text-ocean-900 uppercase">{data.content.images[activeIndex].title}</h3>
                     <span className="text-base font-black text-slate-400 bg-slate-100 px-6 py-2 rounded-full uppercase tracking-widest">Language Support</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <HelpWordCategory title="Verbs (V1 → V2)" words={data.content.images[activeIndex].verbs} color="text-green-600" bgColor="bg-green-50" />
                     <HelpWordCategory title="Objects" words={data.content.images[activeIndex].objects} color="text-red-600" bgColor="bg-red-50" />
                     <HelpWordCategory title="Time / Place" words={[...(data.content.images[activeIndex].places || []), ...(data.content.images[activeIndex].time || [])]} color="text-amber-600" bgColor="bg-amber-50" />
                  </div>
               </div>
            </div>
         </div>
       )}
    </div>
  );
};

const HelpWordCategory = ({ title, words, color, bgColor }: { title: string, words: string[], color: string, bgColor: string }) => (
  <div className={`${bgColor} p-6 rounded-3xl border border-current/10 h-full shadow-sm`}>
    <h4 className={`text-sm font-black uppercase mb-4 ${color} border-b border-current/20 pb-2 tracking-tighter`}>{title}</h4>
    <div className="flex flex-wrap gap-3">
      {words.length > 0 ? words.map((w, i) => (
        <span key={i} className="bg-white px-4 py-2 rounded-xl text-sm font-black text-slate-700 shadow-sm border border-slate-100">{w}</span>
      )) : <span className="text-slate-400 text-xs italic">No specific cues</span>}
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
