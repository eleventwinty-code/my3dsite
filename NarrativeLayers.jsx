"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function TwitterIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function YouTubeIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function NarrativeLayers() {
  const { scrollYProgress } = useScroll();

  const glassPanel = "p-10 rounded-3xl backdrop-blur-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-2xl relative overflow-hidden";

  // HERO fades quickly (by 10%), completely shoots off-screen to avoid any overlap or clicking
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -1500]);
  
  const engOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const engY = useTransform(scrollYProgress, [0.15, 0.4], [50, -50]);

  const ancOpacity = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
  const ancY = useTransform(scrollYProgress, [0.4, 0.65], [50, -50]);

  const soundOpacity = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
  const soundY = useTransform(scrollYProgress, [0.65, 0.85], [50, -50]);

  // Bottom Socials Section
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      
      {/* 1. HERO - Placed immediately at the top to be removed upon scroll */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
            BEOPLAY H95
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium mt-4 text-white/90">
            Silence, perfected.
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-xl">
            Flagship wireless noise cancelling, re-engineered for a world that never stops.
          </p>
          
          {/* CTA Buttons in the Hero Section */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
            <button className="px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-[#0050FF] to-[#0030aa] hover:from-[#0050FF] hover:to-[#00D6FF] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,80,255,0.4)] hover:shadow-[0_0_30px_rgba(0,214,255,0.6)] transform hover:-translate-y-1">
              Experience BEOPLAY H95
            </button>
            <button className="text-lg font-medium text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline">
              See full specs
            </button>
          </div>
        </div>
      </motion.div>

      {/* 2. ENGINEERING REVEAL (Left Column) */}
      <motion.div 
        className="fixed top-0 left-8 md:left-24 h-screen w-full max-w-lg flex flex-col justify-center pointer-events-none"
        style={{ opacity: engOpacity, y: engY }}
      >
        <div className={glassPanel}>
          <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay pointer-events-none" />
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-tight">
            Precision-engineered for silence.
          </h2>
          <div className="mt-8 flex flex-col gap-6 text-white/70 text-xl font-medium relative z-10">
            <p>Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.</p>
            <p>Every component is tuned for balance, power, and comfort—hour after hour.</p>
          </div>
        </div>
      </motion.div>

      {/* 3. NOISE CANCELLING (Right Column) */}
      <motion.div 
        className="fixed top-0 right-8 md:right-24 h-screen w-full max-w-lg flex flex-col justify-center pointer-events-none"
        style={{ opacity: ancOpacity, y: ancY }}
      >
        <div className={glassPanel}>
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00D6FF]/60 relative leading-tight">
            High-fidelity ANC, redefined.
          </h2>
          <ul className="mt-8 flex flex-col gap-6 text-white/70 text-xl font-medium relative z-10">
            <li className="flex items-start gap-4">
              <span className="text-[#00D6FF] mt-1">✦</span>
              Multi-microphone array listens in every direction.
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#00D6FF] mt-1">✦</span>
              Real-time noise analysis adjusts to your environment.
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#00D6FF] mt-1">✦</span>
              Your music stays pure—planes, trains, and crowds fade away.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* 4. SOUND & UPSCALING (Left Column) */}
      <motion.div 
        className="fixed top-0 left-8 md:left-24 h-screen w-full max-w-lg flex flex-col justify-center pointer-events-none"
        style={{ opacity: soundOpacity, y: soundY }}
      >
        <div className={glassPanel}>
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Immersive, lifelike sound.
          </h2>
          <div className="mt-8 relative z-10">
            <p className="text-2xl text-white/90 font-semibold mb-4 leading-snug">
              High-performance drivers unlock detail, depth, and texture in every track.
            </p>
            <p className="text-xl text-white/60 font-medium">
              AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 5. CONNECT SECTION (Replacing CTA at bottom) */}
      <motion.div 
        className="fixed bottom-12 right-8 md:right-16 flex flex-col items-end pointer-events-none"
        style={{ opacity: ctaOpacity, y: ctaY }}
      >
        <div className="text-center flex flex-col items-center pointer-events-auto bg-black/60 backdrop-blur-xl p-5 md:p-6 rounded-3xl border border-white/5 shadow-2xl">
          <h2 className="text-xs font-semibold tracking-wider text-white/50 mb-3 uppercase">
            Connect
          </h2>
          <div className="flex items-center gap-4 text-white/60">
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-white hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-[#1DA1F2] hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(29,161,242,0.6)]">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-[#FF0000] hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
