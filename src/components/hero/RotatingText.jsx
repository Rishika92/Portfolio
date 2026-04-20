"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RotatingText() {
  const titles = [
    "AI/ML Engineer",
    "Generative AI Enthusiast",
    "Full Stack Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(id);
  }, [titles.length]);

  return (
    <div className="h-12 md:h-16 overflow-hidden flex justify-center lg:justify-start mt-2 w-full">
      <motion.span
        key={index}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] leading-tight whitespace-nowrap"
      >
        {titles[index]}
      </motion.span>
    </div>
  );
}
