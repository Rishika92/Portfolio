"use client";

import { motion } from "framer-motion";

export default function SkillCategory({ skillGroup, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
      className="glass-panel rounded-2xl p-8 transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#06B6D4]/10 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-3 drop-shadow-md">{skillGroup.emoji}</span>
        <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
          {skillGroup.category}
        </h3>
      </div>
      
      <motion.div 
        className="flex flex-wrap gap-3 relative z-10"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillGroup.items.map((skill, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 0px 15px rgba(6, 182, 212, 0.4)", transition: { duration: 0.2, ease: "easeOut" } }}
            className="flex items-center px-4 py-2 bg-[#1F2937] border border-[#1F2937] rounded-full text-sm font-medium text-[#E5E7EB] hover:text-white transition-colors cursor-default"
          >
            {skill.icon}
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
