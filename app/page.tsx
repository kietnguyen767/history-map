// src/app/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cinzel, Inter } from "next/font/google";

// 1. Cấu hình Font chữ
const cinzel = Cinzel({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-cinzel"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center bg-stone-50 text-stone-800 relative overflow-hidden ${cinzel.variable} ${inter.variable}`}>
      
      {/* 2. Nền trang trí (Background Effects) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Hiệu ứng ánh sáng mặt trời từ góc trên */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-amber-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[100px]" />
        
        {/* Họa tiết lưới mờ nhạt (Grid pattern) tạo cảm giác bản đồ */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* 3. Nội dung chính */}
      <div className="z-10 text-center px-6 max-w-4xl flex flex-col items-center">
        
        {/* Label nhỏ phía trên */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-sans text-amber-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 border border-amber-200 bg-amber-50 px-4 py-1 rounded-full shadow-sm"
        >
          Khám phá Thế Giới
        </motion.span>

        {/* Tiêu đề chính */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`text-6xl md:text-8xl font-bold mb-6 text-stone-900 leading-tight ${cinzel.className}`}
        >
          Dòng Chảy <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
            Lịch Sử
          </span>
        </motion.h1>

        {/* Đoạn mô tả */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className={`text-lg md:text-xl text-stone-600 mb-10 max-w-2xl leading-relaxed ${inter.className}`}
        >
          Một hành trình tương tác đưa bạn đi xuyên qua không gian và thời gian. 
        </motion.p>

        {/* Nút bấm (Button) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link 
            href="/timeline" 
            className={`relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-stone-900 rounded-full hover:bg-amber-700 hover:shadow-xl hover:-translate-y-1 group ${inter.className}`}
          >
            <span>Bắt Đầu Hành Trình</span>
            {/* Mũi tên icon */}
            <svg 
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
      
      {/* Trang trí góc: Các vòng tròn đồng tâm (Giả lập la bàn/đồng hồ) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-24 -left-24 w-96 h-96 border border-stone-200 rounded-full opacity-50 z-0 border-dashed"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-24 -left-24 w-80 h-80 border border-stone-300 rounded-full opacity-40 z-0"
      />

    </main>
  );
}