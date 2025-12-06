'use client';

import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
// @ts-ignore - Abaikan error tipe jika TextType masih .jsx
import TextType from './TextType'; 

const content = {
  intro: {
    sequence: [
      'I build web applications.', 
      2000, 
      'I design user interfaces.', 
      2000,
      'I solve complex problems.', 
      2000,
    ],
  },
  header: {
    name: "Hi, I'm Yu.",
    usp: "Full Stack Developer.",
  },
  paragraph: "I focus on building responsive, high-performance web applications using modern technologies like Next.js, React, and Tailwind CSS.",
  buttons: {
    primary: { title: "Contact Me", url: "mailto:email@example.com" },
    secondary: { title: "LinkedIn", url: "https://linkedin.com/in/username" }
  }
};

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative z-10 pt-20">
      <div className="container mx-auto px-6 md:px-12 text-left">
        
        {/* 1. Type Animation (Intro Kecil) - Tetap pakai library ini karena array sequence-nya kompleks */}
        <div className="mb-4 h-8">
            <TypeAnimation
              sequence={content.intro.sequence}
              speed={50} 
              wrapper="span"
              repeat={Infinity}
              className="text-xl md:text-2xl font-mono text-blue-400 font-bold"
            />
        </div>

        {/* 2. Main Header (Nama) - Pakai TextType Custom Anda */}
        <div className="space-y-2 mb-8">
            <div className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                <TextType 
                    text={content.header.name}
                    as="h1"             // Render sebagai h1
                    typingSpeed={100}   // Kecepatan ketik
                    startOnVisible={true} // Mulai saat terlihat
                    showCursor={true}
                    loop={false}        // PENTING: Agar tidak menghapus text setelah selesai
                    cursorCharacter="|"
                />
            </div>

            {/* 3. Sub Header (Job Title) */}
            <div className="text-4xl md:text-6xl font-bold text-gray-400">
                <TextType 
                    text={content.header.usp}
                    as="h1"
                    initialDelay={1500} // Tunggu nama selesai dulu baru ketik ini
                    typingSpeed={80}
                    showCursor={true}
                    loop={false}        // Jangan looping
                    cursorCharacter="|"
                />
            </div>
        </div>

        {/* 4. Paragraph */}
        <div className="max-w-2xl mb-10 text-lg md:text-xl text-gray-300 leading-relaxed min-h-[100px]">
            <TextType 
                text={content.paragraph}
                as="p"
                initialDelay={3000} // Tunggu judul selesai
                typingSpeed={30}    // Lebih cepat karena teks panjang
                showCursor={false}  // Cursor dimatikan agar lebih rapi untuk paragraf
                loop={false}
            />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
            <a 
                href={content.buttons.primary.url}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-center"
            >
                {content.buttons.primary.title}
            </a>

            <a 
                href={content.buttons.secondary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-white/30 text-center"
            >
                {content.buttons.secondary.title}
            </a>
        </div>

      </div>
    </section>
  );
}