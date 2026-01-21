// src/app/story/[eraSlug]/[eventId]/page.tsx
"use client";

// 1. THÊM useRef và useEffect
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { ERAS_DATA } from "@/lib/data";
import { useProgress } from "@/hooks/useProgress"; 
import { Lora, Inter } from "next/font/google"; 

const lora = Lora({ 
  subsets: ["vietnamese"], 
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const inter = Inter({ subsets: ["latin"] });

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

  // --- 2. THÊM STATE VÀ REF CHO NHẠC NỀN ---
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái nhạc đang chạy hay tắt

  // --- 3. KHỞI TẠO NHẠC NỀN ---
  useEffect(() => {
    // Tạo đối tượng Audio
    audioRef.current = new Audio("/music/medieval-fantasy-music-462199.mp3"); // Đổi tên file nhạc của bạn ở đây
    audioRef.current.loop = true; // Cho nhạc lặp lại vô tận
    audioRef.current.volume = 0.3; // Âm lượng vừa phải (30%) để không át tiếng đọc (nếu có)

    // Cố gắng tự động phát
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true); // Nếu trình duyệt cho phép, đánh dấu là đang chạy
        })
        .catch((error) => {
          console.log("Trình duyệt chặn Autoplay:", error);
          setIsPlaying(false); // Nếu bị chặn, đánh dấu là tắt để hiện nút Play
        });
    }

    // Dọn dẹp: Tắt nhạc khi thoát trang
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Hàm bật/tắt nhạc thủ công
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!content) return <div className="bg-black h-screen text-white p-10">Đang tải dữ liệu...</div>;

  // --- LOGIC XỬ LÝ CŨ GIỮ NGUYÊN ---
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
    <main className={`relative h-screen w-full bg-black overflow-hidden font-sans text-white ${inter.className}`}>
      
      {/* NÚT THOÁT (Góc trái) */}
      <Link 
        href={`/story/${eraSlug}`}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Thoát</span>
      </Link>

      {/* --- 4. NÚT BẬT/TẮT NHẠC (Góc phải) --- */}
      <button
        onClick={toggleMusic}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-all hover:scale-110"
        title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {isPlaying ? (
          // Icon Loa đang phát (Sound On)
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        ) : (
          // Icon Loa tắt (Mute)
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </button>

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
            <div className="absolute inset-0">
               <Image 
                src={content.slides[currentSlide].image} 
                alt="Blur BG" 
                fill 
                className="object-cover opacity-30 blur-3xl scale-110" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center pb-[20vh]"> 
              <div className="relative w-full h-full max-w-[90%] max-h-[75%]"> 
                <Image 
                  src={content.slides[currentSlide].image} 
                  alt="Story Main Image" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- GIAO DIỆN TEXT KỂ CHUYỆN --- */}
      {mode === 'STORY' && (
        <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-6 md:pb-10 px-4 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            key={currentSlide}
            className="pointer-events-auto bg-black/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl w-full md:w-[60%] max-w-4xl shadow-2xl relative flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4 text-stone-400 text-xs uppercase font-bold tracking-widest border-b border-white/10 pb-2">
              <span className="text-amber-500 truncate mr-2">{story.title}</span>
              <span className="whitespace-nowrap">Slide {currentSlide + 1} / {content.slides.length}</span>
            </div>
            
            <div className="mb-6">
                <p className={`text-lg md:text-xl text-stone-100 leading-relaxed ${lora.className}`}>
                {content.slides[currentSlide].text}
                </p>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button 
                onClick={handlePrevSlide} 
                disabled={currentSlide === 0} 
                className={`text-sm md:text-base px-4 py-2 rounded-full text-stone-400 hover:text-white transition-all hover:bg-white/10 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                ← Quay lại
              </button>
              
              <button 
                onClick={handleNextSlide} 
                className="text-sm md:text-base px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full transition-all shadow-lg hover:scale-105"
              >
                {currentSlide === content.slides.length - 1 ? "Làm trắc nghiệm" : "Tiếp theo"} →
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
              <div className="max-w-3xl w-full bg-stone-800 p-8 md:p-12 rounded-3xl border border-stone-600 shadow-2xl">
                <div className="text-center mb-8">
                   <span className="bg-amber-900 text-amber-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                     Câu hỏi {currentQuizIndex + 1} / {content.quizzes.length}
                   </span>
                   <h3 className={`text-xl md:text-2xl text-white mt-4 font-bold leading-snug ${lora.className}`}>
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
                        className={`w-full p-4 text-left rounded-xl transition-all font-medium ${btnColor}`}
                      >
                        <span className="mr-3 font-bold opacity-70">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {selectedOption !== null && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-6 pt-6 border-t border-stone-600">
                    <div className={`text-lg font-bold mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {isCorrect ? "✅ Chính xác!" : "❌ Chưa đúng!"}
                    </div>
                    <p className="text-stone-300 mb-6">{content.quizzes[currentQuizIndex].explanation}</p>
                    <button onClick={handleNextQuiz} className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full transition-colors">
                      {currentQuizIndex < content.quizzes.length - 1 ? "Câu hỏi tiếp theo →" : "Xem tổng kết →"}
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="max-w-2xl w-full bg-stone-800 p-8 md:p-12 rounded-3xl border border-stone-500 shadow-2xl text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12 }} className="text-6xl mb-6 block">💡</motion.div>
                
                <h2 className={`text-3xl font-bold text-amber-500 mb-2 ${lora.className}`}>Tổng Kết Bài Học</h2>
                <p className="text-stone-400 text-sm uppercase tracking-widest mb-8">{story.title}</p>

                <div className="bg-black/30 p-6 md:p-8 rounded-xl border border-white/10 mb-8 relative">
                   <span className="absolute top-4 left-4 text-6xl text-stone-700 opacity-20 font-serif leading-none">“</span>
                   <p className={`text-lg md:text-xl text-stone-200 leading-relaxed italic ${lora.className}`}>
                     {lessonText}
                   </p>
                   <span className="absolute bottom-[-10px] right-4 text-6xl text-stone-700 opacity-20 font-serif leading-none">”</span>
                </div>

                <button onClick={handleFinish} className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] uppercase tracking-wider text-sm">
                  Hoàn thành & Quay về
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}