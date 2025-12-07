import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Project from '@/components/Project';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10">
        <TechStack />
      </div>
      <div className="relative z-10">
        <Project enableStars={false} glowColor="0, 255, 100" />
      </div>
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800 mt-10">
        <p>© {new Date().getFullYear()} Yu. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}