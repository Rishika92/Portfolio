"use client";

import { motion } from "framer-motion";
import { Network } from "lucide-react";
import { SiPython, SiCplusplus, SiReact, SiNextdotjs, SiDjango, SiFastapi, SiMysql, SiGithub, SiLinux } from "react-icons/si";
import { FaJava, FaRobot, FaBrain, FaCodeBranch } from "react-icons/fa";
import { TbApi, TbMessageChatbot } from "react-icons/tb";
import SkillCategory from "./skills/SkillCategory";
import SectionHeader from "./common/SectionHeader";

const skills = [
  {
    category: "AI / Machine Learning",
    emoji: "🧠",
    items: [
      { name: "Machine Learning", icon: <FaBrain className="w-4 h-4 mr-2 text-[#06B6D4]" /> },
      { name: "Generative AI", icon: <FaRobot className="w-4 h-4 mr-2 text-[#7C3AED]" /> },
      { name: "Natural Language Processing (NLP)", icon: <TbMessageChatbot className="w-4 h-4 mr-2 text-[#06B6D4]" /> },
      { name: "Deep Learning (Basics)", icon: <Network className="w-4 h-4 mr-2 text-[#7C3AED]" /> },
      { name: "LangChain", icon: <FaBrain className="w-4 h-4 mr-2 text-[#06B6D4]" /> },
      { name: "RAG & FAISS", icon: <SiNextdotjs className="w-4 h-4 mr-2 text-[#06B6D4]" /> },
    ],
  },
  {
    category: "Programming & Problem Solving",
    emoji: "⚙️",
    items: [
      { name: "Python", icon: <SiPython className="w-4 h-4 mr-2 text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="w-4 h-4 mr-2 text-[#ED8B00]" /> },
      { name: "C++", icon: <SiCplusplus className="w-4 h-4 mr-2 text-[#00599C]" /> },
      { name: "Data Structures & Algorithms", icon: <FaCodeBranch className="w-4 h-4 mr-2 text-[#7C3AED]" /> },
    ],
  },
  {
    category: "Full Stack Development",
    emoji: "🌐",
    items: [
      { name: "React.js", icon: <SiReact className="w-4 h-4 mr-2 text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 mr-2 text-white" /> },
      { name: "Django", icon: <SiDjango className="w-4 h-4 mr-2" style={{ color: '#092E20' }} /> },
      { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 mr-2 text-[#009688]" /> },
      { name: "PHP", icon: <FaCodeBranch className="w-4 h-4 mr-2 text-[#777BB4]" /> },
      { name: "REST APIs", icon: <TbApi className="w-4 h-4 mr-2 text-[#7C3AED]" /> },
    ],
  },
  {
    category: "Tools & Technologies",
    emoji: "🛠️",
    items: [
      { name: "MySQL", icon: <SiMysql className="w-4 h-4 mr-2 text-[#4479A1]" /> },
      { name: "Git & GitHub", icon: <SiGithub className="w-4 h-4 mr-2 text-white" /> },
      { name: "Linux", icon: <SiLinux className="w-4 h-4 mr-2 text-[#FCC624]" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Technical Arsenal" 
          subtitle="A comprehensive toolkit carefully curated for building modern, intelligent systems." 
          align="center" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skillGroup, index) => (
            <SkillCategory key={index} skillGroup={skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
