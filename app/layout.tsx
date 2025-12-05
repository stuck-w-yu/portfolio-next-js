import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GooeyNav from "@/components/GooeyNav"; // Import Navbar

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
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>

        <div style={{ 
          height: '600px', 
          position: 'relative', 
          marginLeft: 'auto', //
          width: 'fit-content' // 
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

        {/* Konten halaman akan dirender di sini */}
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
