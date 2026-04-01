import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 px-6 md:px-20 bg-white overflow-hidden">
      {/* Background Accent - Diperkecil sizenya di mobile biar nggak nutupin teks */}
      <div className="absolute top-5 md:top-10 right-[-10%] md:right-[-5%] text-[25vw] md:text-[15vw] font-black text-slate-50 select-none leading-none z-0 italic uppercase opacity-50 md:opacity-100">Passion</div>

      <div className="max-w-350 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-start">
          {/* LEFT SIDE: Heading & Index */}
          {/* lg:sticky agar hanya melayang di layar besar */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
              <span className="text-[#0055FF] font-black text-lg md:text-xl italic tracking-tighter">01/</span>
              <div className="flex items-center gap-3 text-[#0055FF] font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em]">
                <div className="w-6 md:w-8 h-px bg-[#0055FF]"></div>
                The Narrative
              </div>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] md:leading-[0.85] text-[#1A1A1A]">
              Driven <br />
              By <span className="text-[#0055FF]">Logic.</span>
            </motion.h2>

            {/* Experience Badge - Disesuaikan sizenya di mobile */}
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="mt-8 md:mt-12 inline-flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#FAF9F6] border border-slate-100 rounded-xl md:rounded-2xl">
              <div className="text-3xl md:text-4xl font-black text-[#0055FF] italic">3+</div>
              <div className="text-[9px] md:text-[10px] font-bold uppercase leading-tight text-slate-500 tracking-widest">
                Academic <br /> Projects Done
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="lg:col-span-7 mt-10 lg:mt-0">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8 md:space-y-10">
              {/* Main Statement */}
              <div className="relative">
                {/* Petik dua dihilangkan di mobile agar teks tidak terdorong terlalu jauh */}
                <span className="hidden md:block absolute -left-8 top-0 text-6xl text-[#0055FF]/10 font-serif">“</span>
                <p className="text-xl md:text-3xl text-slate-800 leading-snug md:leading-tight font-bold italic tracking-tight">
                  Hello everyone, I am Jaka Kurnia and I am a <span className="text-[#0055FF]">Junior Software Engineer</span> pursuing a degree in <span className="underline decoration-[#FFD700] decoration-4 md:decoration-8 -underline-offset-2">Informatics Management</span>.
                </p>
              </div>

              {/* Body Text */}
              <div className="space-y-5 md:space-y-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                <p>
                  Specializing in <span className="text-black font-bold">Full-stack Ecosystems</span>, I bridge the gap between complex backend logic and intuitive mobile interfaces. My daily arsenal includes crafting robust systems with <span className="text-black font-bold">Laravel</span> and cross-platform experiences with <span className="text-black font-bold">Flutter</span>.
                </p>
                <p>
                  Beyond just coding, I focus on the architecture—ensuring <span className="italic">database scalability</span> with MySQL and system precision.
                </p>
              </div>

              {/* Skill Grid Tags - Grid 2 kolom di mobile dan desktop agar tidak terlalu panjang kebawah */}
              <div className="pt-8 md:pt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-slate-100">
                <div className="group col-span-1">
                  <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#0055FF] mb-3 transition-transform">Capabilities</h4>
                  <ul className="text-[12px] md:text-sm font-bold text-slate-800 space-y-2 uppercase italic">
                    <li>• Web Development</li>
                    <li>• Mobile Development</li>
                    <li>• System Analysis</li>
                  </ul>
                </div>
                <div className="group col-span-1">
                  <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#0055FF] mb-3 transition-transform">Environment</h4>
                  <ul className="text-[12px] md:text-sm font-bold text-slate-800 space-y-2 uppercase italic">
                    <li>• Laravel</li>
                    <li>• Next.js</li>
                    <li>• Git Flow</li>
                    <li>• REST API</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
