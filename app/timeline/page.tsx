// src/app/timeline/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google"; // 1. Đổi Cinzel thành Playfair_Display
import { useProgress } from "@/hooks/useProgress"; 

// 2. Cấu hình font Playfair Display hỗ trợ tiếng Việt
const playfair = Playfair_Display({ 
  subsets: ["vietnamese"], 
  weight: ["700", "900"] 
});

const inter = Inter({ subsets: ["latin"] });

// Dữ liệu giả lập
const eras = [
  {
    id: "past",
    title: "Quá Khứ",
    slug: "qua-khu",
    description: "Trở về những nền văn minh cổ đại, nơi huyền thoại bắt đầu.",
    image: "https://img.loigiaihay.com/picture/2020/0525/cac-quoc-gia-phuong-tay-co-dai.jpg", 
    color: "from-amber-700 to-orange-900"
  },
  {
    id: "present",
    title: "Hiện Tại",
    slug: "hien-tai",
    description: "Chứng kiến sự phát triển rực rỡ của khoa học và con người.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop", 
    color: "from-blue-600 to-indigo-900"
  },
  {
    id: "future",
    title: "Tương Lai",
    slug: "tuong-lai",
    description: "Bước vào thế giới viễn tưởng, nơi giới hạn bị phá vỡ.",
    image: "https://insight.isb.edu.vn/wp-content/uploads/sites/2/2020/08/internet-v%E1%BA%A1n-v%E1%BA%ADt-IoT-tr%C3%AD-tu%E1%BB%87-nh%C3%A2n-t%E1%BA%A1o-AI-thumbnail-480x360.png", 
    color: "from-purple-600 to-fuchsia-900"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, damping: 10, stiffness: 100 } }
};

export default function TimelinePage() {
  const { isFullyUnlocked, resetProgress, completedStories } = useProgress();

  return (
    <main className={`min-h-screen bg-stone-100 py-5 px-4 relative ${inter.className}`}>
      
      {/* --- NÚT QUAY LẠI TRANG CHỦ --- */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-6 left-6 z-20"
      >
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors px-4 py-2 rounded-full hover:bg-white/50"
        >
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-bold tracking-widest uppercase">Trang Chủ</span>
        </Link>
      </motion.div>

      {/* --- NÚT RESET HÀNH TRÌNH --- */}
      {completedStories.length > 0 && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={resetProgress}
          className="absolute top-6 right-6 z-20 group flex items-center gap-2 text-red-400 hover:text-red-600 transition-colors px-4 py-2 rounded-full hover:bg-red-50"
        >
          <span className="text-xs font-bold tracking-widest uppercase">Reset Hành Trình</span>
          <svg className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </motion.button>
      )}

      {/* --- NÚT ẨN (DẤU CHẤM THAN) --- */}
      <AnimatePresence>
        {isFullyUnlocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-10 right-10 z-50"
          >
            <Link href="/story/hidden">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-red-600/30 rounded-full animate-ping" />
                <div className="relative w-14 h-14 bg-red-600 rounded-full flex items-center justify-center border-2 border-white shadow-xl hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">!</span>
                </div>
                <div className="absolute bottom-full right-0 mb-2 w-max bg-black/90 text-white text-xs font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Sự thật cuối cùng
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tiêu đề trang */}
      <div className="text-center mb-16 pt-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          // 3. Sử dụng font Playfair ở đây
          className={`text-4xl md:text-6xl text-stone-900 mb-4 font-bold uppercase ${playfair.className}`}
        >
          Chọn Mốc Thời Gian
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-stone-600 max-w-xl mx-auto"
        >
          Hãy chọn điểm đến để bắt đầu câu chuyện của bạn.
        </motion.p>
      </div>

      {/* Danh sách các thẻ */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {eras.map((era) => (
          <motion.div key={era.id} variants={cardVariants}>
            <Link href={`/story/${era.slug}`} className="group block h-full">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 bg-white">
                
                {/* Ảnh nền */}
                <div className="absolute inset-0">
                  <Image 
                    src={era.image} 
                    alt={era.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${era.color} opacity-60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                </div>

                {/* Nội dung */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold tracking-widest uppercase opacity-70 mb-2 border-l-2 border-white pl-2">
                    Kỷ nguyên
                  </span>
                  {/* 4. Sử dụng font Playfair cho tiêu đề thẻ */}
                  <h2 className={`text-4xl font-black mb-3 uppercase ${playfair.className} group-hover:text-amber-300 transition-colors`}>
                    {era.title}
                  </h2>
                  <p className="text-gray-200 text-sm mb-6 line-clamp-3 opacity-90 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    {era.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-amber-300 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    KHÁM PHÁ NGAY
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}