"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
    opened: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <nav className="fixed top-0 w-full z-100 bg-[#0055FF]/10 dark:bg-slate-900/50 backdrop-blur-lg border-b border-white/10 transition-colors duration-300">
      <div className="max-w-400 mx-auto px-8 md:px-12 py-6 flex flex-row-reverse md:flex-row justify-between items-center text-white">
        {/* --- MOBILE: HAMBURGER & TOGGLE (Kiri di Mobile) --- */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="relative z-110 p-2 focus:outline-none">
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-full h-0.5 bg-white block" />
              <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-full h-0.5 bg-white block" />
              <motion.span animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-full h-0.5 bg-white block" />
            </div>
          </button>
        </div>

        {/* --- LOGO (Kiri di Desktop, Kanan di Mobile) --- */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white dark:bg-[#0055FF] rounded-full flex items-center justify-center shadow-lg transition-colors">
            <span className="text-[#0055FF] dark:text-white font-black text-lg uppercase tracking-tighter">J</span>
          </div>
          <div className="font-black text-xl tracking-[-0.05em] uppercase text-white">Jaka.K</div>
        </div>

        {/* --- DESKTOP: MENU & TOGGLE (Kanan) --- */}
        <div className="hidden md:flex gap-8 items-center text-[10px] font-black uppercase tracking-[0.4em]">
          <a href="#about" className="hover:text-[#FFD700] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#FFD700] transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-[#FFD700] transition-colors">
            Projects
          </a>

          {/* Tombol Contact */}
          <a href="#contact" className="px-6 py-2 bg-white text-[#0055FF] dark:bg-white dark:text-[#0055FF] rounded-full hover:bg-[#FFD700] hover:text-black transition-all font-bold ml-2">
            Contact
          </a>

          {/* TOGGLE: Diletakkan Paling Kanan di Desktop dengan border kiri sebagai pemisah */}
          <div className="pl-6 border-l border-white/20">
            <ThemeToggle />
          </div>
        </div>

        {/* --- MOBILE OVERLAY --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial="closed" animate="opened" exit="closed" variants={menuVariants} className="fixed inset-0 w-full h-screen bg-[#0055FF] dark:bg-slate-950 flex flex-col justify-center items-center gap-8 z-105">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase italic tracking-tighter text-white hover:text-[#FFD700] transition-colors">
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
