// src/app/layout.tsx
import type { Metadata } from "next";
import { Spectral, Be_Vietnam_Pro } from "next/font/google"; // Import font mới
import "./globals.css";

// Cấu hình font
const spectral = Spectral({ 
  subsets: ["vietnamese"],
  weight: ["400", "600", "700"],
  variable: "--font-spectral" 
});

const beVietnam = Be_Vietnam_Pro({ 
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-be-vietnam" 
});

export const metadata: Metadata = {
  title: "Dòng Chảy Lịch Sử",
  description: "Hành trình tương tác qua không gian và thời gian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${spectral.variable} ${beVietnam.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}