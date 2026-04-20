"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="w-full max-w-7xl pointer-events-auto glass rounded-2xl border border-[#1F2937] transition-all duration-300 shadow-lg px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <a href="#" className="font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent hover:opacity-80 transition-opacity drop-shadow-[0_0_8px_rgba(124,58,237,0.4)]">
                RA.
              </a>
              <div className="hidden xs:flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#1F2937] shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
                </span>
                <span className="text-[10px] font-mono text-[#06B6D4] tracking-widest uppercase">Health: Optimal</span>
              </div>
            </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#9CA3AF] hover:text-[#06B6D4] hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#9CA3AF] hover:text-[#E5E7EB] focus:outline-none p-2 mr-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass absolute top-24 left-4 right-4 sm:left-6 sm:right-6 mx-auto max-w-7xl rounded-2xl border border-[#1F2937] shadow-lg pointer-events-auto"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1F2937] block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
