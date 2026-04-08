"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  
  // Fade in nav background and text slightly after scroll
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 0.75]);
  const blurValue = useTransform(scrollYProgress, [0, 0.05], [0, 10]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 pointer-events-none"
      style={{
        backgroundColor: useTransform(backgroundOpacity, (v) => `rgba(5, 5, 5, ${v})`),
        backdropFilter: useTransform(blurValue, (v) => `blur(${v}px)`),
        borderBottom: useTransform(backgroundOpacity, (v) => `1px solid rgba(255,255,255,${v * 0.1})`),
      }}
    >
      {/* Container that regains pointer events when visible */}
      <motion.div 
        className="w-full flex items-center justify-between pointer-events-auto max-w-7xl mx-auto"
        style={{ opacity: contentOpacity }}
      >
        <div className="flex flex-col">
          <span className="text-xs font-semibold tracking-wider text-white/70 uppercase">Bang & Olufsen</span>
          <span className="text-lg font-bold tracking-tight text-white/90">BEOPLAY H95</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <Link href="#" className="hover:text-white transition-colors">Overview</Link>
          <Link href="#" className="hover:text-white transition-colors">Technology</Link>
          <Link href="#" className="hover:text-white transition-colors">Noise Cancelling</Link>
          <Link href="#" className="hover:text-white transition-colors">Specs</Link>
          <Link href="#" className="hover:text-white transition-colors">Buy</Link>
        </div>

        <div>
          <button className="px-5 py-2 text-sm font-semibold text-white bg-transparent rounded-full border border-[rgba(0,80,255,0.4)] hover:border-[#00D6FF] transition-all duration-300 relative overflow-hidden group shadow-[0_0_15px_rgba(0,80,255,0.1)] hover:shadow-[0_0_20px_rgba(0,214,255,0.2)]">
            <span className="relative z-10 drop-shadow-md">Experience BEOPLAY H95</span>
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
