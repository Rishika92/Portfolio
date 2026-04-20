"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0B0F] text-white"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-12"
          >
            {/* Logo placeholder / Professional Pulse */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.5)]">
              <span className="text-3xl font-extrabold tracking-tighter">RA.</span>
            </div>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl bg-[#06B6D4] blur-xl -z-10"
            />
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden relative border border-gray-700/50">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] shadow-[0_0_10px_#06B6D4]"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 font-mono text-xs tracking-widest text-[#9CA3AF] flex items-center gap-4"
          >
            <span className="text-[#06B6D4]">SYSTEM_INITIALIZING</span>
            <span className="w-8 text-right">{Math.round(progress)}%</span>
          </motion.div>

          {/* Decorative grid or background scanning effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
             <div className="absolute inset-0" style={{ 
               backgroundImage: 'linear-gradient(#1F2937 1px, transparent 1px), linear-gradient(90deg, #1F2937 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
