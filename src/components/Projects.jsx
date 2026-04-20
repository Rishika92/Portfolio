"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./projects/ProjectCard";
import SectionHeader from "./common/SectionHeader";
import { ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "AI Interview Platform",
    description: "An advanced AI-driven system that generates personalized technical and HR interview questions from resumes. Features real-time AI-guided evaluations and optimized LLM workflows for high-performance candidate assessments.",
    tech: ["FastAPI", "LangChain", "React", "LLM"],
    github: "https://github.com/Rishika92",
    demo: "#",
  },
  {
    title: "AI Text Summarizer",
    description: "A sophisticated NLP solution utilizing transformer models (BART/T5) to produce high-quality abstractive summaries. Achieved significant text reduction while maintaining perfect semantic integrity.",
    tech: ["Python", "Hugging Face", "Flask", "NLP"],
    github: "https://github.com/Rishika92",
    demo: "#",
  },
  {
    title: "Plagiarism Detection Tool",
    description: "A secure web-based utility for cross-document similarity scoring. Implements complex text preprocessing and cosine similarity algorithms to identify academic and professional plagiarism with precision.",
    tech: ["Python", "NLTK", "Scikit-Learn", "Flask"],
    github: "https://github.com/Rishika92",
    demo: "#",
  },
  {
    title: "Online Food Ordering System",
    description: "A full-featured end-to-end platform for restaurant management and customer ordering. Includes dynamic menu catalogs, secure payment gateway integrations, and a robust administrative control panel.",
    tech: ["PHP", "MySQL", "Bootstrap 5", "JavaScript"],
    github: "https://github.com/Rishika92",
    demo: "#",
  },
  {
    title: "Rainfall Prediction Model",
    description: "A machine learning implementation using Random Forest architectures to predict precipitation patterns. Focuses on high-accuracy meteorological data analysis and predictive environmental modeling.",
    tech: ["Python", "ML", "Random Forest", "Pandas"],
    github: "https://github.com/Rishika92",
    demo: "#",
  },
  {
    title: "RetailMind AI",
    description: "An industry-grade Retrieval-Augmented Generation (RAG) system for e-commerce. Implements semantic search across 48,000+ products using FAISS vector indexing and Sentence-Transformers for high-precision product discovery.",
    tech: ["Flask", "FAISS", "Sentence-Transformers", "RAG"],
    github: "https://github.com/Rishika92",
    demo: "#",
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of high-impact solutions across AI, Machine Learning, and Full Stack Development." 
          align="center" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-8 py-3 rounded-full bg-[#111827] border border-[#1F2937] text-[#E5E7EB] hover:border-[#06B6D4] hover:text-[#06B6D4] transition-all duration-300 font-medium"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View All Projects <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
