'use client';

import React from 'react';
import Dock, { DockItemData } from './Dock';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiNodedotjs, SiGraphql, SiSupabase, SiFramer, 
  SiPostgresql, SiDocker 
} from 'react-icons/si';

const techItems: DockItemData[] = [
  { label: "React", icon: <SiReact size="60%" className="text-[#61DAFB]" /> },
  { label: "Next.js", icon: <SiNextdotjs size="60%" className="text-white" /> },
  { label: "TypeScript", icon: <SiTypescript size="60%" className="text-[#3178C6]" /> },
  { label: "Tailwind", icon: <SiTailwindcss size="60%" className="text-[#38B2AC]" /> },
  { label: "Node.js", icon: <SiNodedotjs size="60%" className="text-[#339933]" /> },
  { label: "Supabase", icon: <SiSupabase size="60%" className="text-[#3ECF8E]" /> },
  { label: "PostgreSQL", icon: <SiPostgresql size="60%" className="text-[#336791]" /> },
  { label: "Docker", icon: <SiDocker size="60%" className="text-[#2496ED]" /> },
  { label: "Framer", icon: <SiFramer size="60%" className="text-white" /> },
];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tech Stack
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto mb-12">
          Perangkat lunak modern yang saya gunakan untuk membangun aplikasi.
        </p>
        
        {/* Dock Area */}
        {/* Wrapper ini penting untuk memberi ruang animasi dock */}
        <div className="w-full h-32 flex items-end justify-center pb-4">
          <Dock 
            items={techItems} 
            panelHeight={68} 
            baseItemSize={50} 
            magnification={80} 
          />
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;