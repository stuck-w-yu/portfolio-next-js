'use client';

import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
// @ts-ignore
import TextType from './TextType'; 
import Folder from './Folder'; // Pastikan path import sesuai

// Import Icon dari react-icons (atau bisa pakai SVG manual)
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaInstagramSquare } from 'react-icons/fa';

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
};

export default function Hero() {
  
  // 1. Definisikan data untuk isi Folder (Link & Icon)
  // Folder logic kita membatasi max 3 item agar visualnya bagus
  const socialItems = [
    {
      link: 'https://github.com/stuck-w-yu',
      icon: <FaGithub className="text-6xl text-gray-800" /> // text-4xl agar icon besar
    },
    {
      link: 'https://linkedin.com/in/username',
      icon: <FaLinkedin className="text-6xl text-gray-600" />
    },
    {
      link: 'https://www.instagram.com/stuckw.yu_',
      icon: <FaInstagramSquare className="text-6xl text-gray-500" />
    }
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center relative z-10 pt-20">
      <div className="container mx-auto px-6 md:px-12 text-left ">
        
        {/* 1. Type Animation */}
        <div className="text-[15px] mb-4 h-8 text-center">
            <TypeAnimation
              sequence={content.intro.sequence}
              speed={50} 
              wrapper="span"
              repeat={Infinity}
              className="text-xl md:text-2xl font-mono text-blue-400 font-bold"
            />
        </div>

        {/* 2. Main Header (Nama) */}
        <div className="space-y-2 mb-8">
            <div className="text-[60px] md:text-7xl font-extrabold text-white tracking-tight text-center">
                <TextType 
                    text={content.header.name}
                    as="h1"            
                    typingSpeed={100}   
                    startOnVisible={true} 
                    showCursor={true}
                    loop={false}        
                    cursorCharacter="|"
                    variableSpeed={null} 
                    onSentenceComplete={null}
                />
            </div>

            {/* 3. Sub Header (Job Title) */}
            <div className="text-7xl md:text-6xl font-bold text-gray-400 text-center">
                <TextType 
                    text={content.header.usp}
                    as="h1"
                    initialDelay={1500} 
                    typingSpeed={80}
                    showCursor={true}
                    loop={false}        
                    cursorCharacter="|"
                    variableSpeed={null} 
                    onSentenceComplete={null}
                />
            </div>
        </div>

        {/* 4. Paragraph */}
        <div className="text-[16px] max-w-2xl mb-10 text-lg md:text-xl text-gray-300 leading-relaxed min-h-[100px] text-center mx-auto">
            <TextType 
                text={content.paragraph}
                as="p"
                initialDelay={3000} 
                typingSpeed={30}    
                showCursor={false}  
                loop={true}
            />
        </div>

        {/* 5. Folder Component (Social Links) */}
        <div className="flex justify-center items-center mt-12 h-40"> 
            {/* Note: h-40 ditambahkan agar ada ruang untuk animasi folder saat terbuka */}
            
            <Folder 
                size={1}           // Skala ukuran folder
                color="#828283"      // Warna folder (Biru modern)
                items={socialItems}  // Masukkan data link & icon di sini
                className="cursor-pointer" 
            />
            
            {/* Hint Text (Opsional, agar user tahu folder bisa diklik) */}
            <p className="absolute mt-32 text-xs text-gray-500 opacity-50 animate-pulse">
            </p>
        </div>

      </div>
    </section>
  );
}