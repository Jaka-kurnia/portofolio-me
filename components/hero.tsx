import { motion } from "framer-motion";

export const Hero = () => (
  // 1. Padding Top disesuaikan untuk mobile (pt-32) agar tidak mentok navbar fixed
  <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-20 bg-[#0055FF] overflow-hidden pt-32 pb-20 md:pt-20 text-white">
    
    {/* Decorative Grid Background - Diperkecil sizenya biar rapi di mobile */}
    <div className="absolute inset-0 opacity-10 pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
    </div>

    {/* 2. Grid Layout - Menggunakan order- untuk mengatur urutan mobile vs desktop */}
    <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-12 gap-12 md:gap-10 items-center relative z-10">
      
      {/* --- TEXT CONTENT --- */}
      {/* order-1: Di mobile muncul PERTAMA. lg:order-1: Di desktop muncul di KIRI */}
      <div className="lg:col-span-7 order-1 lg:order-1 space-y-8 md:space-y-12">
        
        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="flex items-center gap-4 text-white/60 font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em]"
        >
          <div className="w-10 md:w-12 h-[2px] bg-white/40"></div>
          Full Stack Web Developer
        </motion.div>

        {/* Main Headline - Font size menggunakan clamp() biar fleksibel di mobile */}
        <motion.h1 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
          className="text-[15vw] sm:text-[13vw] lg:text-[9.5vw] font-black leading-[0.85] md:leading-[0.8] tracking-[-0.05em] md:tracking-[-0.07em] uppercase italic"
        >
          Software <br />
          {/* Outline effect dikecilin stroke-nya buat mobile biar nggak pecah */}
          <span style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)", color: "transparent" }}>
            Engineer
          </span>
        </motion.h1>

        {/* Paragraph Description */}
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6, duration: 1 }} 
          className="text-base md:text-2xl text-blue-100 max-w-xl font-medium leading-relaxed italic"
        >
          "Membangun infrastruktur digital yang kokoh dengan presisi akademik Manajemen Informatika."
        </motion.p>
        
        {/* Optional CTA Button (Gue tambahin biar layouts bawah nggak kosong di mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="pt-4"
        >
            <a href="#projects" className="inline-block px-8 py-4 bg-white text-[#0055FF] rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-[#FFD700] hover:text-black transition-all transform hover:scale-105 shadow-lg">
                View My Projects
            </a>
        </motion.div>
      </div>

      {/* --- IMAGE CONTENT --- */}
      {/* order-2: Di mobile muncul KEDUA (setelah teks). lg:order-2: Di desktop muncul di KANAN */}
      <div className="lg:col-span-5 order-2 lg:order-2 mt-12 lg:mt-0 relative">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} 
          // max-w-[400px] mx-auto: Memastikan gambar nggak kegedean di HP layar lebar
          className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full max-w-[350px] sm:max-w-[400px] lg:max-w-none mx-auto bg-white overflow-hidden group border-[1px] border-white/20 shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
            alt="Jaka Kurnia" 
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 contrast-110" 
          />
        </motion.div>
        
        {/* Giant Watermark Text - Hanya muncul di Desktop (hidden xl:block) */}
        <div className="absolute bottom-[-5%] right-[-5%] text-[20vw] font-black text-white/[0.05] leading-none select-none italic tracking-tighter uppercase hidden xl:block z-0">
          JAKA
        </div>
      </div>

    </div>
  </section>
);