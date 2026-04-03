"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Penting: Memastikan UI sinkron dengan data di browser (localStorage)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Jika belum mounted, kita render placeholder transparan agar layout tidak loncat (Jank)
  if (!mounted) {
    return (
      <div className="p-2.5 w-10.5 h-10.5 rounded-xl border border-transparent" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      // Perbaikan: Tambahin warna icon yang kontras (slate-900 di light, white di dark)
      className="relative p-2.5 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-all group overflow-hidden"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ y: 20, opacity: 0, rotate: 45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-5 h-5 text-[#FFD700]" strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Perbaikan: Ganti text-white jadi text-slate-900 agar kelihatan di Light Mode */}
              <Sun className="w-5 h-5 text-slate-900 dark:text-white" strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};