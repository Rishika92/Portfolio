"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import RotatingText from "./hero/RotatingText";
import HeroAvatar from "./hero/HeroAvatar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const maskRevealVariants = {
  hidden: { y: "150%" },
  visible: {
    y: "0%",
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section id="hero" onMouseMove={handleMouseMove} className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent z-10 pt-12 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Text Column with Parallax */}
          <motion.div
            animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
            transition={{ type: "tween", ease: "easeOut", duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left z-20 order-2 lg:order-1 mt-12 lg:mt-0"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge Mask Reveal */}
              <div className="overflow-hidden mb-8 lg:mb-6 flex justify-center lg:justify-start">
                <motion.span
                  variants={maskRevealVariants}
                  className="inline-block py-2 px-5 rounded-full bg-[#7C3AED]/10 text-[#06B6D4] text-xs md:text-sm font-semibold tracking-wider border border-[#7C3AED]/30 shadow-[0_0_15px_rgba(124,58,237,0.2)]"
                >
                  AI/ML & Generative AI Enthusiast
                </motion.span>
              </div>

              {/* Headline Mask Reveal */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-2 drop-shadow-lg text-[#E5E7EB] leading-[1.1] pb-2">
                <div className="overflow-hidden pt-2">
                  <motion.div variants={maskRevealVariants}>
                    Hi, I'm
                  </motion.div>
                </div>
                <div className="overflow-hidden mt-1 pb-2">
                  <motion.div variants={maskRevealVariants}>
                    Rishika Arisetty
                  </motion.div>
                </div>
              </h1>

              <motion.div variants={fadeUpVariants}>
                <RotatingText />
              </motion.div>

              <div className="overflow-hidden mt-6 mb-10 max-w-2xl mx-auto lg:mx-0">
                <motion.p
                  variants={maskRevealVariants}
                  className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed pt-2"
                >
                  AI/ML & Generative AI enthusiast with strong problem-solving skills and a solid foundation in Data Structures and Algorithms, focused on building scalable applications that turn complex data into meaningful user experiences.
                </motion.p>
              </div>

              {/* Buttons Fade Up */}
              <motion.div
                variants={fadeUpVariants}
                className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-2"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  transition={{ ease: "easeInOut", duration: 0.2 }}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-white bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] rounded-2xl hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] focus:outline-none transition-all"
                >
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  transition={{ ease: "easeInOut", duration: 0.2 }}
                  className="inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-[#E5E7EB] glass rounded-2xl border border-[#1F2937] hover:border-[#06B6D4]/50 focus:outline-none transition-all"
                >
                  <Mail className="mr-2 w-5 h-5 text-[#06B6D4]" />
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Hologram Avatar Column */}
          <HeroAvatar mousePos={mousePos} />

        </div>
      </div>
    </section>
  );
}
