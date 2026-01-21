// src/app/story/[eraSlug]/[eventId]/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { ERAS_DATA } from "@/lib/data";
import { useProgress } from "@/hooks/useProgress"; 

export default function StoryPlayerPage() {
  const params = useParams();
  const router = useRouter();
  
  const { markAsCompleted } = useProgress();

  const eraSlug = params.eraSlug as string;
  const eventId = params.eventId as string;

  const era = ERAS_DATA[eraSlug];
  const story = era?.stories.find((s: any) => s.id === eventId);
  const content = story?.content;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [mode, setMode] = useState<'STORY' | 'QUIZ'>('STORY'); 
  
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!content) return <div className="bg-black h-screen text-white p-10">Đang tải dữ liệu...</div>;

  // --- LOGIC XỬ LÝ ---
  const handleNextSlide = () => {
    if (currentSlide < content.slides.length - 1) {
      setCurrentSlide(curr => curr + 1);
    } else {
      setMode('QUIZ');
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    const correctIdx = content.quizzes[currentQuizIndex].correctIndex;
    setIsCorrect(index === correctIdx);
  };

  const handleNextQuiz = () => {
    setSelectedOption(null);
    setIsCorrect(null);

    if (currentQuizIndex < content.quizzes.length - 1) {
      setCurrentQuizIndex(curr => curr + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleFinish = () => {
    markAsCompleted(eventId); 
    router.push(`/story/${eraSlug}`); 
  };

  const rawLesson = content.slides[content.slides.length - 1].text;
  const lessonText = rawLesson.replace(/^(Kết luận:|✅)\s*/i, "").trim();

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden font-sans text-white">
      
      {/* NÚT THOÁT */}
      <Link 
        href={`/story/${eraSlug}`}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Thoát</span>
      </Link>

      {/* --- BACKGROUND (Cinematic Mode) --- */}
      <AnimatePresence mode="popLayout">
        {mode === 'STORY' && (
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            {/* Lớp 1: Ảnh nền mờ để lấp đầy */}
            <div className="absolute inset-0">
               <Image 
                src={content.slides[currentSlide].image} 
                alt="Blur BG" 
                fill 
                className="object-cover opacity-30 blur-3xl scale-110" 
                priority
                onError={(e) => { e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23333'/%3E%3C/svg%3E"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
            </div>

            {/* Lớp 2: Ảnh chính */}
            <div className="absolute inset-0 flex items-center justify-center pb-[15vh] md:pb-[20vh]"> 
              <div className="relative w-[85%] md:w-[70%] h-[60vh] md:h-[65vh]"> 
                <Image 
                  src={content.slides[currentSlide].image} 
                  alt="Story Main Image" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                  priority
                  quality={90}
                  onError={(e) => { e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23222'/%3E%3C/svg%3E"; }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- GIAO DIỆN TEXT KỂ CHUYỆN --- */}
      {mode === 'STORY' && (
        <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-4 md:pb-8 px-3 md:px-4 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            key={currentSlide}
            className="pointer-events-auto bg-black/80 backdrop-blur-xl border border-white/10 p-5 md:p-7 rounded-2xl md:rounded-3xl w-full md:w-[65%] max-w-3xl shadow-2xl flex flex-col justify-between max-h-[45vh]"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3 text-stone-400 text-xs uppercase font-bold tracking-widest border-b border-white/10 pb-2">
              <span className="text-amber-500 truncate mr-2">{story.title}</span>
              <span className="whitespace-nowrap text-xs">Slide {currentSlide + 1} / {content.slides.length}</span>
            </div>
            
            {/* Nội dung */}
            <div className="mb-4 overflow-y-auto max-h-[20vh] scrollbar-hide">
                <p className="text-base md:text-lg text-stone-100 leading-relaxed font-light">
                {content.slides[currentSlide].text}
                </p>
            </div>

            {/* Nút điều hướng */}
            <div className="flex justify-between items-center pt-2 gap-3">
              <button 
                onClick={handlePrevSlide} 
                disabled={currentSlide === 0} 
                className={`text-xs md:text-sm px-3 md:px-4 py-2 rounded-full text-stone-400 hover:text-white transition-all hover:bg-white/10 ${currentSlide === 0 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
              >
                ← Quay lại
              </button>
              
              <button 
                onClick={handleNextSlide} 
                className="text-xs md:text-sm px-5 md:px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full transition-all shadow-lg hover:scale-105"
              >
                {currentSlide === content.slides.length - 1 ? "Trắc nghiệm" : "Tiếp →"}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* --- GIAO DIỆN QUIZ --- */}
      <AnimatePresence>
        {mode === 'QUIZ' && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 z-30 bg-stone-900 flex items-center justify-center p-4"
          >
            {!quizFinished ? (
              <div className="max-w-2xl md:max-w-3xl w-full bg-stone-800 p-6 md:p-10 rounded-3xl border border-stone-600 shadow-2xl">
                <div className="text-center mb-6">
                   <span className="bg-amber-900 text-amber-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                     Câu {currentQuizIndex + 1} / {content.quizzes.length}
                   </span>
                   <h3 className="text-lg md:text-xl text-white mt-4 font-serif font-bold leading-snug">
                     {content.quizzes[currentQuizIndex].question}
                   </h3>
                </div>

                <div className="grid gap-3">
                  {content.quizzes[currentQuizIndex].options.map((option: string, index: number) => {
                    let btnColor = "bg-stone-700 hover:bg-stone-600";
                    if (selectedOption !== null) {
                      const correct = content.quizzes[currentQuizIndex].correctIndex;
                      if (index === correct) btnColor = "bg-green-600 ring-2 ring-green-400";
                      else if (selectedOption === index) btnColor = "bg-red-600";
                      else btnColor = "bg-stone-700 opacity-50";
                    }
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedOption !== null}
                        className={`w-full p-3 md:p-4 text-left rounded-xl transition-all font-medium text-sm md:text-base ${btnColor}`}
                      >
                        <span className="mr-3 font-bold opacity-70">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {selectedOption !== null && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-6 pt-6 border-t border-stone-600">
                    <div className={`text-base md:text-lg font-bold mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {isCorrect ? "✅ Chính xác!" : "❌ Chưa đúng!"}
                    </div>
                    <p className="text-stone-300 text-sm mb-6">{content.quizzes[currentQuizIndex].explanation}</p>
                    <button onClick={handleNextQuiz} className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full transition-colors">
                      {currentQuizIndex < content.quizzes.length - 1 ? "Tiếp theo →" : "Tổng kết →"}
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="max-w-xl md:max-w-2xl w-full bg-stone-800 p-6 md:p-10 rounded-3xl border border-stone-500 shadow-2xl text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12 }} className="text-5xl md:text-6xl mb-4 block">💡</motion.div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-500 mb-1">Kết Luận</h2>
                <p className="text-stone-400 text-xs uppercase tracking-widest mb-6">{story.title}</p>

                <div className="bg-black/30 p-5 md:p-7 rounded-xl border border-white/10 mb-6 relative">
                   <p className="text-base md:text-lg text-stone-200 leading-relaxed italic font-light">
                     {lessonText}
                   </p>
                </div>

                <button onClick={handleFinish} className="px-8 md:px-10 py-3 md:py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full transition-all shadow-lg uppercase tracking-wider text-xs md:text-sm">
                  Hoàn thành
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}