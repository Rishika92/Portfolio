"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Custom SVG components to replace removed lucide-react brand icons
function GithubIcon({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-[#E5E7EB]"
        >
          Let's Build Something Amazing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[#9CA3AF] mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind, a question about my work, or just want to connect?
          My inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            href="mailto:arisettyrishika@gmail.com"
            className="group w-16 h-16 flex items-center justify-center rounded-2xl bg-[#111827] border border-[#1F2937] hover:border-[#06B6D4] transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-8 h-8 text-[#9CA3AF] group-hover:text-[#06B6D4] transition-colors" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Rishika92"
            target="_blank"
            rel="noreferrer"
            className="group w-16 h-16 flex items-center justify-center rounded-2xl bg-[#111827] border border-[#1F2937] hover:border-[#7C3AED] transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="w-8 h-8 text-[#9CA3AF] group-hover:text-[#7C3AED] transition-colors" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/rishika-arisetty/"
            target="_blank"
            rel="noreferrer"
            className="group w-16 h-16 flex items-center justify-center rounded-2xl bg-[#111827] border border-[#1F2937] hover:border-[#06B6D4] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-8 h-8 text-[#9CA3AF] group-hover:text-[#06B6D4] transition-colors" />
          </motion.a>
        </motion.div>
      </div>

      <footer className="mt-20 border-t border-[#1F2937] pt-8 text-center px-4">
        <p className="text-[#9CA3AF] font-medium">
          &copy; {new Date().getFullYear()} Rishika Arisetty.
        </p>
      </footer>
    </section>
  );
}
