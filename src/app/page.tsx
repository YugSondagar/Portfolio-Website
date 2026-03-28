'use client';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import EducationAchievements from '@/components/EducationAchievements';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We track scroll strictly inside the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <main className="bg-black min-h-screen selection:bg-white/30 selection:text-white">
      
      {/* 500vh constraint for scrollytelling */}
      <div ref={containerRef} className="relative h-[500vh] w-full">
        {/* Sticky wrapper for canvas and overlay pinned to viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* Flows normally after scroll progress ends */}
      <About />
      <Projects />
      <Experience />
      <Skills />
      <EducationAchievements />
      
    </main>
  );
}
