"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
      className="group glass-panel rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-2 w-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]" />
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-[#E5E7EB] group-hover:bg-gradient-to-r group-hover:from-[#7C3AED] group-hover:to-[#06B6D4] group-hover:bg-clip-text group-hover:text-transparent transition-all">
            {project.title}
          </h3>
          <a href={project.github} className="text-[#9CA3AF] hover:text-[#06B6D4] transition-colors" aria-label="GitHub Repository">
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-[#9CA3AF] mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#1F2937] border border-[#1F2937] rounded-full text-xs font-semibold text-[#E5E7EB]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-[#1F2937] mt-auto">
          <a
            href={project.github}
            className="flex items-center text-sm font-medium tracking-wide text-[#E5E7EB] hover:text-[#06B6D4] transition-all"
          >
            <GithubIcon className="w-4 h-4 mr-2" />
            Code
          </a>
          <a
            href={project.demo}
            className="flex items-center text-sm font-medium tracking-wide text-[#E5E7EB] hover:text-[#7C3AED] transition-all ml-auto group/demo"
          >
            <span className="group-hover/demo:bg-gradient-to-r group-hover/demo:from-[#7C3AED] group-hover/demo:to-[#06B6D4] group-hover/demo:bg-clip-text group-hover/demo:text-transparent">Live Demo</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover/demo:text-[#06B6D4]" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
