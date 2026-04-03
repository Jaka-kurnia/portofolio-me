import { motion } from "framer-motion";

export const Hero = () => (
  <section 
    id="hero" 
    className="relative min-h-screen flex items-center px-6 md:px-20 bg-[#0055FF] dark:bg-[#0B1120] overflow-hidden pt-32 pb-20 md:pt-20 text-white transition-colors duration-500"
  >
    
    {/* Grid Pattern: Jadi lebih redup di dark mode agar teks tetap kontras */}
    <div className="absolute inset-0 opacity-10 dark:opacity-[0.03] pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
    </div>

    <div className="max-w-400 mx-auto w-full grid lg:grid-cols-12 gap-12 md:gap-10 items-center relative z-10">
      
      {/* --- TEXT CONTENT --- */}
      <div className="lg:col-span-7 order-1 lg:order-1 space-y-8 md:space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="flex items-center gap-4 text-white/60 dark:text-blue-400 font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em]"
        >
          <div className="w-10 md:w-12 h-0.5 bg-white/40 dark:bg-blue-500/40"></div>
          Full Stack Web Developer
        </motion.div>

        <motion.h1 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
          className="text-[15vw] sm:text-[13vw] lg:text-[9.5vw] font-black leading-[0.85] md:leading-[0.8] tracking-[-0.05em] md:tracking-[-0.07em] uppercase italic"
        >
          Software <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)" }}>
            Engineer
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6, duration: 1 }} 
          className="text-base md:text-2xl text-blue-100 dark:text-slate-400 max-w-xl font-medium leading-relaxed italic"
        >
          "Engineering solid digital infrastructures through the lens of Informatics Management precision."
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="pt-4"
        >
            <a href="#projects" className="inline-block px-8 py-4 bg-white dark:bg-[#0055FF] text-[#0055FF] dark:text-white rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-[#FFD700] hover:text-black transition-all transform hover:scale-105 shadow-lg">
                View My Projects
            </a>
        </motion.div>
      </div>

      {/* --- IMAGE CONTENT --- */}
      <div className="lg:col-span-5 order-2 lg:order-2 mt-12 lg:mt-0 relative">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} 
          className="relative z-10 aspect-4/5 sm:aspect-square lg:aspect-4/5 w-full max-w-87.5 sm:max-w-100 lg:max-w-none mx-auto bg-white dark:bg-slate-800 overflow-hidden group border border-white/20 dark:border-white/10 shadow-2xl"
        >
          <img 
            src="/saya-min.jpg" 
            alt="Jaka Kurnia" 
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 contrast-110" 
          />
        </motion.div>
        
        {/* Background Text: Jadi lebih subtle di dark mode */}
        <div className="absolute bottom-[-5%] right-[-5%] text-[12vw] font-black text-white/5 dark:text-white/2 leading-none select-none italic tracking-tighter uppercase hidden xl:block z-0 pointer-events-none">
          SOFTWARE ENGINEER
        </div>
      </div>

    </div>
  </section>
);