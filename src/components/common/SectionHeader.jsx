"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, align = "left" }) {
  if (align === "center") {
    return (
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-[#E5E7EB]"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#9CA3AF]"
        >
          {subtitle}
        </motion.p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between w-full mb-16 md:mb-24">
      <div className="flex items-center gap-6 w-1/3 md:w-1/2">
        <span className="text-[#06B6D4] font-bold tracking-[0.2em] text-xs md:text-sm uppercase whitespace-nowrap drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
          {subtitle}
        </span>
        <div className="h-px w-full bg-gradient-to-r from-[#1F2937] to-transparent"></div>
      </div>
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-[#E5E7EB] tracking-tight ml-4 break-words drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
      >
        {title}
      </motion.h2>
    </div>
  );
}
