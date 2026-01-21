// src/app/story/[eraSlug]/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { ERAS_DATA } from "@/lib/data";
import { useProgress } from "@/hooks/useProgress";
// 1. ĐỔI SANG FONT "LORA"
import { Lora, Inter } from "next/font/google"; 

// 2. CẤU HÌNH FONT LORA (Hỗ trợ tiếng Việt đầy đủ)
const lora = Lora({ 
  subsets: ["vietnamese"], 
  weight: ["400", "500", "600", "700"], // Lấy nhiều độ đậm để linh hoạt
  style: ["normal", "italic"]
});

const inter = Inter({ subsets: ["latin"] });

const ERA_ORDER = ["qua-khu", "hien-tai", "tuong-lai"];

const ERA_NAMES: Record<string, string> = {
  "qua-khu": "Quá Khứ",
  "hien-tai": "Hiện Tại",
  "tuong-lai": "Tương Lai"
};

export default function EraPage() {
  const params = useParams();
  const eraSlug = params.eraSlug as string;
  const [hoveredStory, setHoveredStory] = useState<string | null>(null);

  const { completedStories, isFullyUnlocked } = useProgress();
  const eraData = ERAS_DATA[eraSlug];

  const currentIndex = ERA_ORDER.indexOf(eraSlug);
  const prevEraSlug = currentIndex > 0 ? ERA_ORDER[currentIndex - 1] : null;
  const nextEraSlug = currentIndex < ERA_ORDER.length - 1 ? ERA_ORDER[currentIndex + 1] : null;

  if (!eraData) return <div className="text-white p-10">Không tìm thấy dữ liệu kỷ nguyên này.</div>;

  return (
    // 3. ÁP DỤNG FONT INTER CHO BODY, NHƯNG LORA CHO TIÊU ĐỀ
    <main className={`relative min-h-screen bg-stone-900 overflow-hidden font-sans ${inter.className}`}>
      
      {/* NÚT QUAY LẠI TIMELINE */}
      <Link href="/timeline" className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/80 hover:text-amber-400 transition-colors bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Menu</span>
      </Link>

      {/* BACKGROUND */}
      <motion.div 
        key={eraSlug} 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${eraData.mapImage}')` }} 
        />
        <div className="absolute inset-0 bg-stone-900/40" />
      </motion.div>

      {/* TIÊU ĐỀ KỶ NGUYÊN (DÙNG LORA) */}
      <div className="absolute top-10 left-0 right-0 text-center z-10 pointer-events-none">
        <motion.div
            key={eraSlug}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-amber-500/80 text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-2">
                Kỷ Nguyên
            </h2>
            {/* Font Lora nhìn dày dặn và "kể chuyện" hơn */}
            <h1 className={`text-5xl md:text-7xl text-amber-500 font-bold drop-shadow-lg ${lora.className}`}>
                {eraData.title}
            </h1>
        </motion.div>
      </div>

      {/* NÚT ẨN (SECRET BUTTON) */}
      <AnimatePresence>
        {isFullyUnlocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute bottom-10 right-10 z-50"
          >
            <Link href="/story/hidden">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-6 bg-red-600/30 rounded-full animate-ping" />
                <div className="absolute -inset-2 bg-red-500/50 rounded-full animate-pulse" />
                <div className="relative w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-4 border-black shadow-[0_0_30px_rgba(220,38,38,0.8)] hover:scale-110 transition-transform">
                  <span className="text-4xl font-bold text-white">!</span>
                </div>
                <div className="absolute bottom-full right-0 mb-4 w-48 bg-black/90 text-red-500 border border-red-500/50 p-3 rounded-lg text-center text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Thông điệp cuối cùng
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CÁC ĐIỂM MỐC */}
      <div className="absolute inset-0 z-20">
        {eraData.stories.map((story: any, index: number) => {
          const isDone = completedStories.includes(story.id);

          return (
            <div
              key={story.id}
              className="absolute"
              style={{ top: story.top, left: story.left }}
              onMouseEnter={() => setHoveredStory(story.id)}
              onMouseLeave={() => setHoveredStory(null)}
            >
              <Link href={`/story/${eraSlug}/${story.id}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.3, type: "spring" }}
                  className="relative group cursor-pointer"
                >
                  <div className={`absolute -inset-4 rounded-full animate-ping opacity-75 ${isDone ? 'bg-green-500/40' : 'bg-amber-500/30'}`} />
                  <div className={`relative w-6 h-6 rounded-full border-4 border-black transition-transform group-hover:scale-125 
                    ${isDone 
                      ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]' 
                      : 'bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]'}`} 
                  />

                  <AnimatePresence>
                    {hoveredStory === story.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: -15, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, x: "-50%" }}
                        className="absolute bottom-full left-1/2 w-64 bg-black/90 border border-amber-500/50 p-4 rounded-xl backdrop-blur-md shadow-2xl pointer-events-none z-30"
                      >
                        <div className="flex justify-between items-start">
                           {/* DÙNG FONT LORA CHO TIÊU ĐỀ TOOLTIP */}
                           <h3 className={`text-amber-400 text-lg font-bold mb-1 ${lora.className}`}>{story.title}</h3>
                           {isDone && <span className="text-green-500 text-lg font-bold">✓</span>}
                        </div>
                        <p className="text-stone-400 text-xs font-bold uppercase mb-2">{story.subtitle}</p>
                        <p className="text-stone-300 text-sm leading-relaxed">{story.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* NÚT ĐIỀU HƯỚNG TRÁI/PHẢI */}
      {prevEraSlug && (
        <Link href={`/story/${prevEraSlug}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 group cursor-pointer hidden md:flex items-center"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/20 backdrop-blur-sm text-white group-hover:bg-amber-600 group-hover:border-amber-500 transition-all duration-300">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
               </svg>
            </div>
            <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-stone-400 uppercase tracking-widest">Trở về</p>
                {/* DÙNG FONT LORA */}
                <p className={`text-lg font-bold text-white ${lora.className}`}>{ERA_NAMES[prevEraSlug]}</p>
            </div>
          </motion.div>
        </Link>
      )}

      {nextEraSlug && (
        <Link href={`/story/${nextEraSlug}`}>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 group cursor-pointer hidden md:flex items-center flex-row-reverse"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/20 backdrop-blur-sm text-white group-hover:bg-amber-600 group-hover:border-amber-500 transition-all duration-300">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
            </div>
            <div className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-right">
                <p className="text-xs text-stone-400 uppercase tracking-widest">Đi tới</p>
                {/* DÙNG FONT LORA */}
                <p className={`text-lg font-bold text-white ${lora.className}`}>{ERA_NAMES[nextEraSlug]}</p>
            </div>
          </motion.div>
        </Link>
      )}

    </main>
  );
}