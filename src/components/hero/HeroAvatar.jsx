"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function HeroAvatar({ mousePos }) {
  return (
    <motion.div
      animate={{ x: mousePos.x, y: mousePos.y }}
      transition={{ type: "tween", ease: "easeOut", duration: 1 }}
      className="w-full lg:w-1/2 h-[450px] md:h-[600px] relative z-10 order-1 lg:order-2 flex items-center justify-center mt-12 lg:mt-0"
    >
      {/* Soft backdrop glow to anchor the avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/20 to-[#06B6D4]/20 rounded-full blur-[100px] -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-full max-w-[350px] h-full flex flex-col items-center justify-center group"
      >
        {/* Pedestal Base */}
        <div className="absolute bottom-10 md:bottom-20 w-[200px] md:w-[250px] h-[40px] md:h-[50px] bg-[#0B0B0F]/80 rounded-[100%] border-2 border-[#06B6D4] shadow-[0_10px_40px_rgba(6,182,212,0.5)] flex items-center justify-center overflow-hidden">
          <div className="w-[80%] h-[80%] rounded-[100%] bg-gradient-to-t from-[#06B6D4]/50 to-transparent blur-[5px]" />
          <div className="absolute -bottom-2 w-[40px] px-2 py-1 bg-[#111827] border border-[#1F2937] text-[#06B6D4] text-[10px] font-mono font-bold rounded flex justify-center">
            01
          </div>
        </div>

        {/* Hologram Light Ray */}
        <div className="absolute bottom-[60px] md:bottom-[90px] w-[180px] md:w-[230px] h-[300px] md:h-[400px] bg-gradient-to-t from-[#06B6D4]/20 to-transparent blur-[2px] rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 origin-bottom scale-y-110" style={{ clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)' }} />

        {/* The Avatar Image */}
        <img
          src="/female_avatar_v2.png"
          alt="Cute 3D Tech Female Avatar"
          className="relative z-10 object-contain h-[300px] md:h-[420px] drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] transform -translate-y-5 transition-transform duration-700 hover:scale-105"
        />

        {/* Holographic Interactive Detail Cards */}

        {/* Card 1: Identity */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute top-1/4 -left-[20%] md:-left-[10%] glass-panel px-4 py-3 rounded-xl border border-[#06B6D4]/40 shadow-[0_0_15px_rgba(6,182,212,0.1)] z-20 flex items-center justify-between min-w-[140px] w-max max-w-[280px]"
        >
          <div>
            <h3 className="text-[#E5E7EB] font-bold text-sm md:text-base">Rishika</h3>
            <div className="flex items-center text-[#9CA3AF] text-xs gap-1.5 mt-1 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
              <span>Location:India</span>
            </div>
          </div>
          <div className="absolute right-[-20px] top-1/2 w-[20px] h-[1px] bg-[#06B6D4]/50 hidden md:block" />
          <div className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-[#06B6D4] shadow-[0_0_5px_#06B6D4] hidden md:block" />
        </motion.div>

        {/* Card 2: Bio Popout */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="absolute top-[60%] md:top-[55%] -left-[30%] md:-left-[25%] max-w-[180px] md:max-w-[220px] glass-panel px-4 py-3 rounded-xl border border-[#7C3AED]/40 shadow-[0_0_15px_rgba(124,58,237,0.1)] z-20"
        >
          <div className="absolute right-[-20px] top-1/2 w-[20px] h-[1px] bg-[#7C3AED]/50 hidden md:block" />
          <div className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-[#7C3AED] shadow-[0_0_5px_#7C3AED] hidden md:block" />

          <p className="text-[#9CA3AF] text-xs leading-relaxed font-mono">
            Builds interactive <span className="text-[#06B6D4] font-semibold font-sans">AI experiences</span> and full-stack systems that are fast, responsive, and robust.
          </p>
        </motion.div>

        {/* Card 3: Skills Popout */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute top-[35%] md:top-[30%] -right-[25%] md:-right-[25%] glass-panel px-4 py-4 rounded-xl border border-[#06B6D4]/40 shadow-[0_0_15px_rgba(6,182,212,0.1)] z-20 w-[180px] md:w-[240px]"
        >
          <div className="absolute left-[-20px] top-[30%] w-[20px] h-[1px] bg-[#06B6D4]/50 hidden md:block" />
          <div className="absolute left-[-24px] top-[30%] transform -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-[#06B6D4] shadow-[0_0_5px_#06B6D4] hidden md:block" />

          <h4 className="text-[#E5E7EB] font-bold text-sm mb-2 font-mono tracking-tight pb-2 border-b border-[#1F2937]/50">SKILLS</h4>
          <ul className="space-y-2 mt-2">
            {[
              'Python & ML',
              'Generative AI & NLP',
              'MySQL & Databases',
              'Full Stack',
              'Data Structures & Algorithms'
            ].map((skill, i) => (
              <li key={i} className="flex items-start gap-2 text-[11px] md:text-xs text-[#9CA3AF] font-mono leading-tight">
                <span className="w-1.5 h-1.5 mt-[5px] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] shrink-0" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
