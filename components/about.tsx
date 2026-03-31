import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-20 bg-white overflow-hidden">
      {/* Background Accent - Soft Text */}
      <div className="absolute top-10 right-[-5%] text-[15vw] font-black text-slate-50 select-none leading-none z-0 italic uppercase">
        Passion
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start">
          
          {/* LEFT SIDE: Heading & Index */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-8"
            >
              <span className="text-[#0055FF] font-black text-xl italic tracking-tighter">01/</span>
              <div className="flex items-center gap-3 text-[#0055FF] font-black text-[10px] uppercase tracking-[0.5em]">
                <div className="w-8 h-[1px] bg-[#0055FF]"></div>
                The Narrative
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-[#1A1A1A]"
            >
              Driven <br /> 
              By <span className="text-[#0055FF]">Logic.</span>
            </motion.h2>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 inline-flex items-center gap-4 p-4 bg-[#FAF9F6] border border-slate-100 rounded-2xl"
            >
              <div className="text-4xl font-black text-[#0055FF] italic">3+</div>
              <div className="text-[10px] font-bold uppercase leading-tight text-slate-500 tracking-widest">
                Academic <br /> Projects Done
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              {/* Main Statement */}
              <div className="relative">
                <span className="absolute -left-8 top-0 text-6xl text-[#0055FF]/10 font-serif">“</span>
                <p className="text-2xl md:text-3xl text-slate-800 leading-tight font-bold italic tracking-tight">
                  Hello everyone, I am Jaka Kurnia and I am a <span className="text-[#0055FF]">Junior Software Engineer</span> pursuing a degree in <span className="underline decoration-[#FFD700] decoration-8 underline-offset-[-2px]">Informatics Management</span>.“
                </p>
              </div>

              {/* Body Text */}
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                <p>
                  Specializing in <span className="text-black font-bold">Full-stack Ecosystems</span>, I bridge the gap between complex backend logic and intuitive mobile interfaces. My daily arsenal includes crafting robust systems with <span className="text-black font-bold">Laravel</span> and cross-platform experiences with <span className="text-black font-bold">Flutter</span>.
                </p>
                <p>
                  Beyond just coding, I focus on the architecture—ensuring <span className="italic">database scalability</span> with MySQL and system precision that aligns with business objectives.
                </p>
              </div>

              {/* Skill Grid Tags */}
              <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 border-t border-slate-100">
                <div className="group">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0055FF] mb-3 group-hover:translate-x-2 transition-transform">Capabilities</h4>
                  <ul className="text-sm font-bold text-slate-800 space-y-2 uppercase italic">
                    <li>• Web Architecture</li>
                    <li>• Mobile Development</li>
                    <li>• System Analysis</li>
                  </ul>
                </div>
                <div className="group">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0055FF] mb-3 group-hover:translate-x-2 transition-transform">Environment</h4>
                  <ul className="text-sm font-bold text-slate-800 space-y-2 uppercase italic">
                    <li>• Laravel Herd / Filament</li>
                    <li>• Git Workflow</li>
                    <li>• RESTful Services</li>
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