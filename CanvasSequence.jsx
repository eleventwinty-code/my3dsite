"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

function padNumber(num, size) {
  let s = String(num);
  while (s.length < size) {
    s = "0" + s;
  }
  return s;
}

export default function CanvasSequence() {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameCount = 240;
  
  const { scrollYProgress } = useScroll();
  const targetFrame = useRef(1);
  const currentFrame = useRef(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map 0-1 to 1-240 linearly
    const nextFrame = Math.max(1, Math.min(frameCount, Math.round(latest * (frameCount - 1)) + 1));
    targetFrame.current = nextFrame;
  });

  useEffect(() => {
    let loadedImages = [];
    let loadedCount = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/Headphones ezgif-jpg/ezgif-frame-${padNumber(i, 3)}.jpg`;
      img.onload = () => {
        loadedCount++;
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const render = () => {
      // Lerp logic to smooth out the frame jumps
      currentFrame.current += (targetFrame.current - currentFrame.current) * 0.1;
      
      const frameToDraw = Math.round(currentFrame.current);
      const img = images[frameToDraw - 1];

      if (canvasRef.current && img) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        
        const cw = canvas.width;
        const ch = canvas.height;
        
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, cw, ch);

        const imgRatio = img.width / img.height;
        const canvasRatio = cw / ch;
        
        let drawW = cw;
        let drawH = ch;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          drawH = ch;
          drawW = imgRatio * ch;
          offsetX = (cw - drawW) / 2;
        } else {
          drawW = cw;
          drawH = drawW / imgRatio;
          offsetY = (ch - drawH) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [images]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#050505] z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,#050505_100%)] opacity-80" />
    </div>
  );
}
