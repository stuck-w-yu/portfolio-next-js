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
    { label: "Contact", href: "#" }, // Typo fixed: Contacct -> Contact
  ];

  return (
    <html lang="en">
      {/* Hapus tag <head> manual karena Next.js mengurusnya via 'metadata' di atas */}
      
      <body className={`${inter.className} relative`}>
        
        {/* 1. LightRays ditaruh di dalam body sebagai background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
             <LightRays />
        </div>

        {/* 2. Wrapper Utama agar konten ada di atas background */}
        <div className="relative z-10">
            
            {/* Navbar */}
            <div style={{ 
              height: 'auto', // Tinggi jangan di-hardcode 600px, nanti konten ketutup
              padding: '20px',
              display: 'flex',
              justifyContent: 'flex-end', // Cara CSS modern agar ke kanan
             }}>
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
            </div>

            {/* Konten Halaman */}
            <main className="min-h-screen">
                {children}
            </main>
        </div>

      </body>
    </html>
  );
}