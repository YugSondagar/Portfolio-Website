'use client';
import { useEffect, useRef, useState } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

const FRAME_COUNT = 120; // 000 to 119

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameRef = useRef(0);

  // Preload Images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Update frame ref on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // latest is 0 to 1
    const maxIndex = FRAME_COUNT - 1;
    let targetFrame = Math.floor(latest * FRAME_COUNT);
    if (targetFrame > maxIndex) targetFrame = maxIndex;
    if (targetFrame < 0) targetFrame = 0;
    
    // Only re-render if the frame index changed
    if (frameRef.current !== targetFrame) {
        frameRef.current = targetFrame;
        requestAnimationFrame(renderFrame);
    }
  });

  const renderFrame = () => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[frameRef.current];
    if (!img || !img.complete) return;

    // Use devicePixelRatio for sharper rendering on retina displays
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    
    // Make canvas physical pixels match window logic
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    // object-fit: cover math based on logical CSS pixels
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    const hRatio = canvasWidth / img.width;
    const vRatio = canvasHeight / img.height;
    const ratio = Math.max(hRatio, vRatio);
    
    const centerShift_x = (canvasWidth - img.width * ratio) / 2;
    const centerShift_y = (canvasHeight - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  // Initial draw and resize handler
  useEffect(() => {
    if (images.length > 0) {
        images[0].onload = () => requestAnimationFrame(renderFrame);
        requestAnimationFrame(renderFrame);
    }
    
    const handleResize = () => requestAnimationFrame(renderFrame);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />;
}
