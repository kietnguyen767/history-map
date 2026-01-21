// src/app/story/hidden/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ERAS_DATA } from "@/lib/data";

// Thời gian cho mỗi câu hỏi
const QUESTION_TIMER = 15;

export default function HiddenPuzzlePage() {
  const data = ERAS_DATA["hidden"];
  
  // --- STATES ---
  const [revealedPieces, setRevealedPieces] = useState<boolean[]>(Array(6).fill(false));
  const [failedPieces, setFailedPieces] = useState<boolean[]>(Array(6).fill(false));
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  
  // Trạng thái đoán hình & Chiến thắng
  const [guessMode, setGuessMode] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [isVictory, setIsVictory] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // States cho Timer
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIMER);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  
  // --- AUDIO REFS ---
  const tickAudioRef = useRef<HTMLAudioElement | null>(null);
  const wrongAudioRef = useRef<HTMLAudioElement | null>(null);
  const correctAudioRef = useRef<HTMLAudioElement | null>(null);
  const applauseAudioRef = useRef<HTMLAudioElement | null>(null); // MỚI THÊM

  useEffect(() => {
    // Khởi tạo âm thanh
    tickAudioRef.current = new Audio("/sounds/tick.mp3");
    tickAudioRef.current.loop = true;
    
    wrongAudioRef.current = new Audio("/sounds/wrong.mp3");
    correctAudioRef.current = new Audio("/sounds/correct.mp3");
    
    // Âm thanh vỗ tay (MỚI)
    applauseAudioRef.current = new Audio("/sounds/applause.mp3");
  }, []);

  // --- LOGIC TIMER ---
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (activeQuestionId !== null && isTimerRunning) {
      tickAudioRef.current?.play().catch(() => {});

      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeOut(); // Hết giờ -> Khóa
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      tickAudioRef.current?.pause();
      if (tickAudioRef.current) tickAudioRef.current.currentTime = 0;
    }

    return () => {
      clearInterval(timer);
      tickAudioRef.current?.pause();
    };
  }, [activeQuestionId, isTimerRunning]);

  // Xử lý Hết giờ hoặc Sai -> KHÓA VĨNH VIỄN
  const handleFail = () => {
    if (activeQuestionId === null) return;
    
    wrongAudioRef.current?.play().catch(() => {});
    tickAudioRef.current?.pause();

    const newFailed = [...failedPieces];
    newFailed[activeQuestionId] = true;
    setFailedPieces(newFailed);

    setIsTimerRunning(false);
    setActiveQuestionId(null);
    
    alert("SAI RỒI! Mảnh ghép này đã bị khóa vĩnh viễn 🔒");
  };

  const handleTimeOut = () => {
    handleFail();
  };

  const handlePieceClick = (index: number) => {
    if (!revealedPieces[index] && !failedPieces[index]) {
      setActiveQuestionId(index);
      setIsTimerRunning(false);
      setTimeLeft(QUESTION_TIMER);
    }
  };

  const handleStartTimer = () => {
    setIsTimerRunning(true);
  };

  const handleAnswer = (optionIndex: number) => {
    if (activeQuestionId === null) return;
    
    const correctIndex = data.pieces[activeQuestionId].correctIndex;
    
    if (optionIndex === correctIndex) {
      // ĐÚNG -> Mở mảnh
      correctAudioRef.current?.play().catch(() => {});
      const newRevealed = [...revealedPieces];
      newRevealed[activeQuestionId] = true;
      setRevealedPieces(newRevealed);
      
      setActiveQuestionId(null);
      setIsTimerRunning(false);
    } else {
      // SAI -> Khóa
      handleFail();
    }
  };

  // --- XỬ LÝ ĐOÁN HÌNH (CHIẾN THẮNG) ---
  const handleGuessSubmit = () => {
    const cleanGuess = userGuess.trim().toLowerCase();
    
    if (data.validAnswers.includes(cleanGuess)) {
      // 1. Cập nhật trạng thái thắng
      setIsVictory(true);
      setRevealedPieces(Array(6).fill(true)); // Mở hết ảnh
      setFailedPieces(Array(6).fill(false)); // Xóa hết lỗi
      setGuessMode(false);
      
      // 2. Tắt tiếng đồng hồ (nếu đang chạy)
      tickAudioRef.current?.pause();
      
      // 3. PHÁT TIẾNG VỖ TAY (MỚI)
      applauseAudioRef.current?.play().catch(() => {}); 
      
    } else {
      setErrorMsg("Chưa đúng! Hãy suy luận kỹ hơn.");
      wrongAudioRef.current?.play().catch(() => {});
      setTimeout(() => setErrorMsg(""), 3000);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-stone-950 flex flex-col items-center justify-center p-4 font-sans text-white overflow-hidden">
      
      <Link href="/timeline" className="absolute top-6 left-6 z-50 text-white/50 hover:text-white uppercase text-xs font-bold tracking-widest border border-white/20 px-4 py-2 rounded-full">
        Thoát Game
      </Link>

      {/* --- MÀN HÌNH CHIẾN THẮNG --- */}
      {isVictory ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl z-20 bg-stone-900/90 p-10 rounded-3xl border border-amber-500/50 backdrop-blur-md"
        >
          {/* Hiệu ứng pháo giấy/vỗ tay icon */}
          <div className="text-6xl mb-4 animate-bounce">👏 🌍 👏</div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-500 mb-6">CHÍNH XÁC!</h1>
          <p className="text-xl text-stone-200 mb-8 leading-relaxed">"{data.victoryMessage}"</p>
          
          <Link href="/" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-stone-200 uppercase text-sm tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            Về Trang Chủ
          </Link>
        </motion.div>
      ) : (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10 w-full max-w-5xl">
          
          {/* KHUNG ẢNH */}
          <div className="relative w-full max-w-sm aspect-[4/6] bg-stone-800 rounded-xl overflow-hidden border-4 border-stone-700 shadow-2xl shrink-0">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${data.finalImage}')` }} />
            
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-3">
              {data.pieces.map((piece: any, index: number) => {
                const isRevealed = revealedPieces[index];
                const isFailed = failedPieces[index];

                return (
                  <motion.div
                    key={index}
                    onClick={() => handlePieceClick(index)}
                    initial={false}
                    animate={{ opacity: isRevealed ? 0 : 1 }}
                    className={`
                      relative border border-stone-900/50 flex items-center justify-center transition-colors
                      ${isRevealed ? 'pointer-events-none' : ''}
                      ${isFailed 
                        ? 'bg-red-600 cursor-not-allowed' 
                        : 'bg-stone-800 hover:bg-stone-700 cursor-pointer'
                      }
                    `}
                  >
                    {!isRevealed && !isFailed && (
                      <div className="text-stone-500 font-bold text-2xl opacity-50">?</div>
                    )}
                    {isFailed && (
                      <div className="text-red-500 font-black text-4xl select-none">✕</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* BẢNG ĐIỀU KHIỂN */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-amber-500 mb-2">Mảnh Ghép Sự Thật</h2>
            

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <button 
                onClick={() => setGuessMode(true)}
                className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow-lg uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Đoán Hình Ngay ⚡
              </button>
              
              <div className="text-stone-500 text-sm mt-2 flex justify-center gap-4">
                <span>Mở: <b className="text-green-500">{revealedPieces.filter(Boolean).length}</b></span>
                <span>Hỏng: <b className="text-red-500">{failedPieces.filter(Boolean).length}</b></span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL CÂU HỎI --- */}
      <AnimatePresence>
        {activeQuestionId !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="bg-stone-800 p-6 md:p-8 rounded-2xl max-w-xl w-full border border-stone-600 shadow-2xl relative overflow-hidden"
            >
              
              {!isTimerRunning ? (
                // MÀN HÌNH CHỜ BẮT ĐẦU
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">⏱️</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sẵn sàng chưa?</h3>
                  <p className="text-stone-400 mb-8">
                    Bạn có <span className="text-amber-500 font-bold">{QUESTION_TIMER} giây</span> để trả lời.<br/>
                    Nếu sai, mảnh ghép này sẽ bị <span className="text-red-500 font-bold">HỦY BỎ</span>.
                  </p>
                  <button 
                    onClick={handleStartTimer}
                    className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
                  >
                    BẮT ĐẦU TÍNH GIỜ
                  </button>
                  <button onClick={() => setActiveQuestionId(null)} className="block mt-6 text-stone-500 hover:text-white mx-auto text-sm">
                    Để sau
                  </button>
                </div>
              ) : (
                // MÀN HÌNH TRẢ LỜI CÂU HỎI
                <>
                  <div className="absolute top-0 left-0 h-2 bg-stone-700 w-full">
                    <motion.div 
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: QUESTION_TIMER, ease: "linear" }}
                        className={`h-full ${timeLeft <= 5 ? 'bg-red-500' : 'bg-amber-500'}`}
                    />
                  </div>

                  <div className="flex justify-between items-center mb-6 mt-2">
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest border border-amber-500/30 px-2 py-1 rounded">
                      Mảnh ghép {activeQuestionId + 1}
                    </span>
                    <div className={`font-mono font-bold text-2xl ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-stone-300'}`}>
                        00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-6 leading-relaxed">
                    {data.pieces[activeQuestionId].question}
                  </h3>

                  <div className="grid gap-3">
                    {data.pieces[activeQuestionId].options.map((opt: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className="w-full text-left p-4 rounded-lg bg-stone-700 hover:bg-stone-600 transition-colors border border-transparent hover:border-amber-500/50 active:scale-95 transform duration-100"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL ĐOÁN HÌNH --- */}
      <AnimatePresence>
        {guessMode && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              className="bg-stone-900 p-8 rounded-2xl max-w-md w-full border border-amber-600/50 text-center"
            >
              <h3 className="text-2xl font-serif font-bold text-amber-500 mb-2">Dự đoán cuối cùng</h3>
              <p className="text-stone-400 text-sm mb-6">Hãy cẩn thận, sai lầm không thể sửa chữa.</p>
              
              <input 
                type="text" 
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                placeholder="Nhập đáp án..."
                className="w-full bg-black border border-stone-700 rounded-lg p-4 text-white text-center text-lg focus:outline-none focus:border-amber-500 mb-4"
                autoFocus
              />
              {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}
              <div className="flex gap-3">
                <button onClick={() => setGuessMode(false)} className="flex-1 py-3 rounded-lg bg-stone-800 text-stone-300 hover:bg-stone-700">Hủy</button>
                <button onClick={handleGuessSubmit} className="flex-1 py-3 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-500">Chốt đáp án</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}