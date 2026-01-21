// src/app/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google"; // Dùng Playfair Display

// Cấu hình font: Lấy weight 900 (Black) để chữ siêu dày
const playfair = Playfair_Display({ 
  subsets: ["vietnamese"], 
  weight: ["700", "900"] 
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center bg-stone-50 p-6 ${inter.className}`}>
      
      {/* Background mờ ảo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-200/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-orange-200/30 blur-[100px]" />
      </div>

      <div className="z-10 text-center max-w-4xl"> {/* Tăng max-w lên để chữ to không bị xuống dòng xấu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-widest uppercase mb-6 border border-amber-200">
            Khám phá thế giới
          </span>
          
          {/* Tiêu đề chính: Dùng font Playfair, font-black (rất đậm) */}
          <h1 className={`text-6xl md:text-8xl text-stone-900 mb-6 leading-tight font-black ${playfair.className}`}>
            DÒNG CHẢY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-700">
              LỊCH SỬ
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-stone-700 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Một hành trình tương tác đưa bạn đi xuyên qua không gian và thời gian. 
            Từ quá khứ hào hùng đến tương lai viễn tưởng.
          </p>

          <Link href="/timeline">
            <button className="group relative px-10 py-5 bg-stone-900 text-white rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                BẮT ĐẦU HÀNH TRÌNH
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}