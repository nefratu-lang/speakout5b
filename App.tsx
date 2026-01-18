import React, { useState, useEffect } from 'react';
import { SLIDES, LESSON_TITLE } from './constants';
import { SlideType } from './types';
import {
  CoverSlide, // ARTIK EKLENDİ
  ObjectivesSlide,
  GrammarStructureSlide,
  VerbGridSlide,
  GameIntroSlide,
  V2SentenceBuilderSlide,
  IFrameSlide,
  NegativesQuestionsSlide,
  PracticeDrillsSlide,
  ReadingComprehensionSlide,
  SpeakingHubSlide,
  ApologyResponseSlide,
  WrittenQuizSlide,
  TimeDrillSlide,
  DebriefSlide
} from './components/SlideComponents';

const App = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = SLIDES[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  const nextSlide = () => { if (currentSlideIndex < SLIDES.length - 1) setCurrentSlideIndex(prev => prev + 1); };
  const prevSlide = () => { if (currentSlideIndex > 0) setCurrentSlideIndex(prev => prev - 1); };

  // --- FULLSCREEN TOGGLE (GÜÇLENDİRİLMİŞ) ---
  const toggleFullscreen = () => {
    const doc = window.document as any;
    const docEl = doc.documentElement as any;

    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      if (requestFullScreen) requestFullScreen.call(docEl);
    } else {
      if (cancelFullScreen) cancelFullScreen.call(doc);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };

    const handleFullscreenChange = () => {
      const doc = window.document as any;
      setIsFullscreen(!!(doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement));
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange); // Safari desteği
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, [currentSlideIndex]);

  const renderSlideContent = () => {
    switch (currentSlide.type) {
      case SlideType.COVER: return <CoverSlide data={currentSlide} onNext={nextSlide} />;
      case SlideType.OBJECTIVES: return <ObjectivesSlide data={currentSlide} />;
      case SlideType.GRAMMAR_STRUCTURE: return <GrammarStructureSlide data={currentSlide} />;
      case SlideType.VERB_GRID: return <VerbGridSlide data={currentSlide} />;
      case SlideType.GAME_INTRO: return <GameIntroSlide data={currentSlide} />;
      case SlideType.V2_SENTENCE_BUILDER: return <V2SentenceBuilderSlide data={currentSlide} />;
      case SlideType.IFRAME: return <IFrameSlide data={currentSlide} />;
      case SlideType.NEGATIVES_QUESTIONS: return <NegativesQuestionsSlide data={currentSlide} />;
      case SlideType.PRACTICE_DRILLS: return <PracticeDrillsSlide data={currentSlide} />;
      case SlideType.READING_COMPREHENSION: return <ReadingComprehensionSlide data={currentSlide} />;
      case SlideType.SPEAKING_HUB: return <SpeakingHubSlide data={currentSlide} />;
      case SlideType.APOLOGY_RESPONSE: return <ApologyResponseSlide data={currentSlide} />;
      case SlideType.WRITTEN_QUIZ: return <WrittenQuizSlide data={currentSlide} />;
      case SlideType.TIME_DRILL: return <TimeDrillSlide data={currentSlide} />;
      case SlideType.DEBRIEF: return <DebriefSlide data={currentSlide} />;
      default: return <div className="p-10 text-slate-800">Slide content not implemented</div>;
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-ocean-50 font-sans overflow-hidden text-slate-800 relative">
        
      {/* --- FULLSCREEN BUTONU (En Üstte - Z-9999) --- */}
      <button 
        onClick={toggleFullscreen}
        className="fixed top-2 right-4 z-[9999] p-2 bg-white/90 hover:bg-white backdrop-blur-sm text-slate-800 rounded-full shadow-lg border-2 border-slate-200 transition-all active:scale-95 group"
        title="Toggle Fullscreen"
      >
        {isFullscreen ? (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>
        ) : (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
        )}
      </button>

      {/* Top Bar (Header) */}
      {currentSlide.type !== SlideType.COVER && (
        <header className="bg-white border-b border-ocean-100 h-12 md:h-14 flex items-center justify-between px-3 md:px-8 shadow-sm shrink-0 z-20">
            <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                <span className="text-xl">⚓</span>
                <h1 className="text-ocean-900 font-bold text-xs md:text-base truncate uppercase tracking-wider">{LESSON_TITLE}</h1>
            </div>
            <div className="text-slate-400 font-mono text-xs md:text-sm bg-slate-100 px-2 py-1 rounded">
            {currentSlideIndex + 1}/{SLIDES.length}
            </div>
        </header>
      )}

      {/* Progress Bar */}
      {currentSlide.type !== SlideType.COVER && (
        <div className="h-1.5 bg-ocean-100 w-full shrink-0 z-20">
            <div 
            className="h-full bg-ocean-600 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            style={{ width: `${progress}%` }}
            />
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative w-full">
        <div className="absolute inset-0 w-full h-full z-10">
            {renderSlideContent()}
        </div>
      </main>

      {/* Navigation Footer */}
      {currentSlide.type !== SlideType.COVER && (
        <footer className="bg-white border-t border-slate-200 px-3 py-3 md:px-6 md:py-4 shrink-0 z-20 flex justify-between items-center shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.1)] pb-safe">
            <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="flex items-center justify-center gap-2 w-12 h-12 md:w-auto md:h-auto md:px-6 md:py-3 rounded-full md:rounded-lg font-bold transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-slate-200 text-slate-600 hover:bg-slate-300 shadow-sm"
            aria-label="Previous Slide"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="hidden md:inline">BACK</span>
            </button>

            <div className="hidden lg:flex gap-1.5 overflow-x-auto max-w-[50%] px-2">
            {SLIDES.map((_, idx) => (
                <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all shrink-0 ${idx === currentSlideIndex ? 'bg-ocean-600 scale-125' : 'bg-slate-300 hover:bg-ocean-300'}`}
                />
            ))}
            </div>

            <button
            onClick={nextSlide}
            disabled={currentSlideIndex === SLIDES.length - 1}
            className="flex items-center justify-center gap-2 w-auto px-6 py-3 rounded-full md:rounded-lg font-bold transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-ocean-600 text-white hover:bg-ocean-700 shadow-md shadow-ocean-500/30"
            >
            <span className="text-sm md:text-base">NEXT</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            </button>
        </footer>
      )}
    </div>
  );
};

export default App;
