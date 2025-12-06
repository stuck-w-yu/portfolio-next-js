import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GooeyNav from "@/components/GooeyNav"; 
import LightRays from "@/components/LightRays";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "stuckwyu portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    { label: "Profile", href: "#" },
    { label: "Project", href: "#" },
    { label: "About Me", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <html lang="en">
      {/* 1. Beri warna dasar gelap (bg-gray-900) agar LightRays terlihat kontras */}
      <body className={`${inter.className} bg-gray-900 text-white`}>
        
        {/* 2. BACKGROUND LAYER */}
        <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: -1,
            pointerEvents: 'none' // PENTING: Agar background tidak menghalangi klik mouse
        }}>
          <LightRays />
        </div>
        
        {/* 3. NAVBAR */}
        {/* Kita HAPUS wrapper <div style={{ position: 'fixed' ... }}> di sini. */}
        {/* Alasannya: Logic 'fixed' dan 'auto-hide' sudah ada DI DALAM file GooeyNav.jsx */}
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />

        {/* 4. KONTEN HALAMAN */}
        {/* Hapus class 'bg-gray-50' agar background menjadi transparan */}
        <main className="min-h-screen relative z-0">
            {children}
        </main>
        
      </body>
    </html>
  );
}