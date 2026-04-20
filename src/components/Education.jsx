"use client";

import { motion } from "framer-motion";
import SectionHeader from "./common/SectionHeader";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRM University, Vijayawada",
    duration: "2023 – 2027",
    details: [
      "Focus: AI/ML, Full Stack Development",
      "CGPA: 9.04"
    ]
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "NTR Junior College,Hyderabad",
    duration: "Year:2020-2022",
    details: [
      "Percentage:97.2%"
    ]
  },
  {
    degree: "SSC (10th Grade)",
    institution: "Narayana E.M High School",
    duration: "Year:2020",
    details: [
      "Percentage: 100%"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Education" subtitle="Academic" />

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto relative">

          {/* Continuous Timeline Line */}
          <div className="absolute left-[15px] sm:left-[19px] top-8 bottom-8 w-px bg-[#1F2937]"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative pl-10 sm:pl-16 group">

                {/* Timeline Node */}
                <div className="absolute left-[7px] sm:left-[11px] top-10 w-4 h-4 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] shadow-[0_0_15px_rgba(124,58,237,0.5)] ring-4 ring-[#0B0B0F] z-10 transition-transform duration-300 group-hover:scale-125"></div>

                {/* Education Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  className="glass-panel bg-[#111827] rounded-xl p-6 sm:p-8 border border-[#1F2937] hover:border-[#06B6D4]/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2 leading-tight">
                        {item.degree}
                      </h3>
                      <p className="text-[#06B6D4] text-lg font-medium">
                        {item.institution}
                      </p>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex shrink-0 items-center px-4 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-semibold shadow-[0_0_15px_rgba(124,58,237,0.15)]">
                      {item.duration}
                    </div>
                  </div>

                  {item.details.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-[#1F2937]">
                      <ul className="space-y-3">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-[#9CA3AF]">
                            <span className="text-[#7C3AED] mr-3 font-bold mt-0.5">▹</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
