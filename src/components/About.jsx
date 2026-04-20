"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code, Terminal } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "AI & Machine Learning",
      description: "Building intelligent models, natural language processing applications, and exploring the frontiers of generative AI to solve complex real-world problems.",
      icon: <BrainCircuit className="w-8 h-8 text-[#06B6D4]" />
    },
    {
      title: "Full Stack Development",
      description: "Architecting robust web applications from intuitive modern frontends to scalable backend services using state-of-the-art frameworks.",
      icon: <Code className="w-8 h-8 text-[#7C3AED]" />
    },
    {
      title: "Systems & Infrastructure",
      description: "Designing reliable system architectures, managing databases, and ensuring smooth deployments across cloud and Linux environments.",
      icon: <Terminal className="w-8 h-8 text-[#06B6D4]" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-[#E5E7EB]">About Me</h2>
          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            I am a passionate software engineer with a strong focus on Artificial Intelligence and Machine Learning. 
            I bridge the gap between advanced analytical models and practical software engineering, 
            delivering comprehensive full-stack solutions that are both intelligent and user-friendly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-[#1F2937] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1F2937]/80 transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#E5E7EB]">{card.title}</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
