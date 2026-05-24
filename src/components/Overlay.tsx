'use client';
import { motion, MotionValue, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Map scroll progress to opacities and translations
  // 0% -> Text 1
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // 30% -> Text 2
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.55], [50, 0, -50]);

  // 60% -> Text 3
  const text3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.6, 0.7, 0.95], [50, 0, -50]);

  // Conditional mounting to completely remove DOM nodes outside of active scroll areas to prevent bugs/ghosting
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShow1(latest <= 0.25);
    setShow2(latest > 0.20 && latest <= 0.60);
    setShow3(latest > 0.55);
  });

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-8 z-10 w-full font-sans">

      {/* 0% Section */}
      {show1 && (
        <motion.div
          style={{ opacity: text1Opacity, y: text1Y }}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white drop-shadow-2xl space-y-4 max-w-5xl px-4">
            <span className="block drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">Yug Sondagar.</span>
            <span className="block text-3xl md:text-5xl lg:text-5xl text-white/95 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] font-bold">
              Building Intelligent AI Systems <br />that Think, Learn, and Act.
            </span>
          </h1>
        </motion.div>
      )}

      {/* 30% Section */}
      {show2 && (
        <motion.div
          style={{ opacity: text2Opacity, y: text2Y }}
          className="absolute inset-0 flex items-center justify-start text-left pl-[5%] md:pl-[10%] lg:pl-[15%]"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 max-w-2xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] leading-snug">
            AI/ML Engineer specialized in GenAI & Agentic Workflows.
          </h2>
        </motion.div>
      )}

      {/* 60% Section */}
      {show3 && (
        <motion.div
          style={{ opacity: text3Opacity, y: text3Y }}
          className="absolute inset-0 flex items-center justify-end text-right pr-[5%] md:pr-[10%] lg:pr-[15%]"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 max-w-2xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] leading-snug">
            AI Agents. RAG Systems.<br />Real-world ML apps.
          </h2>
        </motion.div>
      )}

    </div>
  );
}
