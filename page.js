"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CanvasSequence from "@/components/CanvasSequence";
import NarrativeLayers from "@/components/NarrativeLayers";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    // Initialize standard Lenis smooth scrolling for window
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <main className="relative w-full bg-[#050505]">
      <Navbar />
      
      {/* The scroll container that defines the length of the experience */}
      <div className="relative w-full h-[500vh]">
        <CanvasSequence />
        <NarrativeLayers />
      </div>

      {/* Technical Specs Section below the canvas experience */}
      <section className="w-full bg-[#050505] text-white py-32 px-8 pt-[30vh]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h3 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-2">Technical Specifications</h3>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Engineered without compromise.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            {/* Spec 1 */}
            <div className="flex flex-col items-center md:items-start p-10 rounded-3xl backdrop-blur-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-2xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
               <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay pointer-events-none" />
               <span className="text-6xl md:text-7xl font-light text-white mb-4 relative z-10">38<span className="text-3xl text-white/50 font-medium">h</span></span>
               <span className="text-xl font-bold text-white relative z-10 mb-2">Battery Life</span>
               <span className="text-white/60 relative z-10">Industry leading playback time with active noise cancellation enabled.</span>
            </div>

            {/* Spec 2 */}
            <div className="flex flex-col items-center md:items-start p-10 rounded-3xl backdrop-blur-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-2xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
               <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay pointer-events-none" />
               <span className="text-6xl md:text-7xl font-light text-white mb-4 relative z-10">40<span className="text-3xl text-white/50 font-medium">mm</span></span>
               <span className="text-xl font-bold text-white relative z-10 mb-2">Titanium Drivers</span>
               <span className="text-white/60 relative z-10">Custom-designed electro-dynamic drivers tailored for extreme precision.</span>
            </div>

            {/* Spec 3 */}
            <div className="flex flex-col items-center md:items-start p-10 rounded-3xl backdrop-blur-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-2xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
               <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay pointer-events-none" />
               <span className="text-6xl md:text-7xl font-light text-white mb-4 relative z-10">323<span className="text-3xl text-white/50 font-medium">g</span></span>
               <span className="text-xl font-bold text-white relative z-10 mb-2">Weight</span>
               <span className="text-white/60 relative z-10">Crafted from premium aluminum, titanium, and lambskin leather.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
