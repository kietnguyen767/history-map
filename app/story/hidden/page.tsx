// src/app/story/hidden/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ERAS_DATA } from "@/lib/data";

export default function HiddenPuzzlePage() {
  const data = ERAS_DATA["hidden"];
  
  // Trạng thái các mảnh ghép (true = đã mở, false = chưa mở)
  // Mặc định tất cả là false (bị che)
  const [revealedPieces, setRevealedPieces] = useState<boolean[]>(Array(6).fill(false));
  
  // Trạng thái câu hỏi đang hiển thị (null = không hiện)
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  
  // Trạng thái đoán hình
  const [guessMode, setGuessMode] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [isVictory, setIsVictory] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Xử lý khi nhấn vào một mảnh ghép
  const handlePieceClick = (index: number) => {
    if (!revealedPieces[index]) {
      setActiveQuestionId(index);
    }
  };

  // Xử lý trả lời câu hỏi trắc nghiệm
  const handleAnswer = (optionIndex: number) => {
    if (activeQuestionId === null) return;
    
    const correctIndex = data.pieces[activeQuestionId].correctIndex;
    
    if (optionIndex === correctIndex) {
      // Đúng -> Mở mảnh ghép
      const newRevealed = [...revealedPieces];
      newRevealed[activeQuestionId] = true;
      setRevealedPieces(newRevealed);
      setActiveQuestionId(null); // Đóng modal
    } else {
      // Sai -> Rung lắc hoặc báo lỗi (Ở đây ta đóng modal và báo sai nhẹ)
      alert("Chưa chính xác! Hãy thử lại.");
      setActiveQuestionId(null);
    }
  };

  // Xử lý đoán hình cuối cùng
  const handleGuessSubmit = () => {
    const cleanGuess = userGuess.trim().toLowerCase();
    if (data.validAnswers.includes(cleanGuess)) {
      setIsVictory(true);
      // Mở hết tất cả mảnh ghép khi thắng
      setRevealedPieces(Array(6).fill(true));
      setGuessMode(false);
    } else {
      setErrorMsg("Chưa đúng. Hãy dựa vào các mảnh đã mở để suy luận!");
      setTimeout(() => setErrorMsg(""), 3000);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-stone-950 flex flex-col items-center justify-center p-4 font-sans text-white overflow-hidden">
      
      {/* Nút thoát */}
      <Link href="/timeline" className="absolute top-6 left-6 z-50 text-white/50 hover:text-white uppercase text-xs font-bold tracking-widest border border-white/20 px-4 py-2 rounded-full">
        Thoát Game
      </Link>

      {/* --- MÀN HÌNH CHIẾN THẮNG --- */}
      {isVictory ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl z-20 bg-stone-900/90 p-10 rounded-3xl border border-amber-500/50 backdrop-blur-md shadow-[0_0_50px_rgba(245,158,11,0.3)]"
        >
          <div className="text-6xl mb-4">🌍</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-500 mb-6">CHÍNH XÁC!</h1>
          <p className="text-xl text-stone-200 mb-8 leading-relaxed">
            "{data.victoryMessage}"
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-stone-200 uppercase text-sm tracking-widest">
              Về Trang Chủ
            </Link>
          </div>
        </motion.div>
      ) : (
        // --- GIAO DIỆN GAME ---
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10 w-full max-w-5xl">
          
          {/* 1. KHUNG ẢNH (GRID 2x3) */}
          <div className="relative w-full max-w-sm aspect-[4/6] bg-stone-800 rounded-xl overflow-hidden border-4 border-stone-700 shadow-2xl shrink-0">
            
            {/* Ảnh gốc (Nằm dưới cùng) */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${data.finalImage}')` }}
            />

            {/* Lưới các mảnh che */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-3">
              {data.pieces.map((piece: any, index: number) => (
                <motion.div
                  key={index}
                  onClick={() => handlePieceClick(index)}
                  initial={false}
                  animate={{ 
                    opacity: revealedPieces[index] ? 0 : 1, // Nếu mở rồi thì ẩn lớp che đi
                    scale: revealedPieces[index] ? 1.1 : 1 
                  }}
                  className={`
                    relative border border-stone-900/50 flex items-center justify-center cursor-pointer transition-colors
                    ${revealedPieces[index] ? 'pointer-events-none' : 'bg-stone-800 hover:bg-stone-700'}
                  `}
                >
                  {/* Số thứ tự hoặc icon khóa */}
                  {!revealedPieces[index] && (
                    <div className="text-stone-500 font-bold text-2xl opacity-50">?</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2. BẢNG ĐIỀU KHIỂN BÊN PHẢI */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-amber-500 mb-2">Mảnh Ghép Sự Thật</h2>
            <p className="text-stone-400 mb-8 max-w-md">
              Mỗi mảnh ghép là một bài học lịch sử. Trả lời đúng để mở khóa hình ảnh. 
              Bạn có thể đoán nội dung bức ảnh bất cứ lúc nào.
            </p>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <button 
                onClick={() => setGuessMode(true)}
                className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow-lg uppercase tracking-widest transition-all hover:scale-105"
              >
                Đoán Hình Ngay ⚡
              </button>
              
              <div className="text-stone-500 text-sm mt-2 text-center">
                Đã mở: <span className="text-white font-bold">{revealedPieces.filter(Boolean).length} / 6</span> mảnh
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL CÂU HỎI (Hiện khi click vào mảnh ghép) --- */}
      <AnimatePresence>
        {activeQuestionId !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="bg-stone-800 p-6 md:p-8 rounded-2xl max-w-xl w-full border border-stone-600 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest border border-amber-500/30 px-2 py-1 rounded">
                  Mảnh ghép số {activeQuestionId + 1}
                </span>
                <button onClick={() => setActiveQuestionId(null)} className="text-stone-400 hover:text-white">✕</button>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6 leading-relaxed">
                {data.pieces[activeQuestionId].question}
              </h3>

              <div className="grid gap-3">
                {data.pieces[activeQuestionId].options.map((opt: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className="w-full text-left p-4 rounded-lg bg-stone-700 hover:bg-stone-600 transition-colors border border-transparent hover:border-amber-500/50"
                  >
                    {opt}
                  </button>
                ))}
              </div>
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
              <h3 className="text-2xl font-serif font-bold text-amber-500 mb-2">Bức ảnh này là gì?</h3>
              <p className="text-stone-400 text-sm mb-6">Nhập dự đoán của bạn (Ví dụ: Con người, Tự do...)</p>
              
              <input 
                type="text" 
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                placeholder="Nhập đáp án..."
                className="w-full bg-black border border-stone-700 rounded-lg p-4 text-white text-center text-lg focus:outline-none focus:border-amber-500 mb-4"
                autoFocus
              />

              {errorMsg && <p className="text-red-500 text-sm mb-4 animate-pulse">{errorMsg}</p>}

              <div className="flex gap-3">
                <button onClick={() => setGuessMode(false)} className="flex-1 py-3 rounded-lg bg-stone-800 text-stone-300 hover:bg-stone-700">Hủy</button>
                <button onClick={handleGuessSubmit} className="flex-1 py-3 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-500">Kiểm tra</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}