"use client";

import { motion } from "framer-motion";
import SectionHeader from "./common/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Experience" subtitle="Journey" />

        {/* Content Block */}
        <div className="max-w-5xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative pl-8 md:pl-12"
          >
            {/* Timeline line */}
            <div className="absolute left-[5px] top-6 bottom-[-20px] w-px bg-gradient-to-b from-[#06B6D4]/80 via-[#06B6D4]/20 to-transparent"></div>
            
            {/* Timeline glowing circle */}
            <motion.div 
              animate={{ boxShadow: ["0 0 10px rgba(124,58,237,0.6)", "0 0 20px rgba(124,58,237,1)", "0 0 10px rgba(124,58,237,0.6)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-0 top-3 w-3 h-3 rounded-full border-[2px] border-[#7C3AED] bg-[#0B0B0F] z-10"
            ></motion.div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#E5E7EB] mb-2">Full Stack Developer Intern</h3>
                <p className="text-[#9CA3AF] text-sm">2024 · Adtip Pvt. Ltd.</p>
              </div>
              <div className="inline-flex w-fit px-5 py-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-medium shadow-[0_0_15px_rgba(124,58,237,0.15)]">
                Adtip Pvt. Ltd.
              </div>
            </div>

            <div className="text-[#9CA3AF] leading-relaxed space-y-8 max-w-4xl">
              <p className="text-base md:text-lg">
                Contributed to production-grade web applications as a Full Stack Developer Intern, working across the entire software stack to deliver performant, scalable solutions with measurable real-world impact.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#06B6D4] mr-4 font-bold">→</span>
                  <span>Optimized application performance, significantly reducing load times and improving user experience across key product flows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06B6D4] mr-4 font-bold">→</span>
                  <span>Architected and integrated third-party RESTful APIs, enabling seamless data exchange and expanding platform capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06B6D4] mr-4 font-bold">→</span>
                  <span>Collaborated with cross-functional teams to ship features on tight deadlines while maintaining code quality and test coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06B6D4] mr-4 font-bold">→</span>
                  <span>Implemented responsive UI components using React.js, improving mobile experience and accessibility metrics</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
