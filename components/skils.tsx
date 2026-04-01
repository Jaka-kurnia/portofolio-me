import { motion } from "framer-motion";
import { Server, Layout, Zap, Cpu } from "lucide-react";

const skills = [
  { category: "Backend Core", icon: <Server size={32} />, items: ["Laravel", "PHP 8.x", "MySQL", "RESTful API"], desc: "Membangun arsitektur server yang scalable dan aman." },
  { category: "Frontend Stack", icon: <Layout size={32} />, items: ["Next.js 15", "React", "Tailwind CSS", "Bootstrap"], desc: "Interface modern dengan performa SEO terbaik." },
  { category: "Mobile Dev", icon: <Zap size={32} />, items: ["Flutter", "Dart"], desc: "Pengembangan aplikasi lintas platform yang responsif." },
  { category: " Tools", icon: <Cpu size={32} />, items: ["Vs code","Android Studio", "MySQL Workbench", "Postman", "Git"], desc: "Efisiensi alur kerja dan manajemen sistem yang presisi." },
];

export const Skills = () => (
  <section id="skills" className="py-24 px-8 bg-white overflow-hidden">
    <div className="max-w-350 mx-auto">
      <header className="mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4 text-[#0055FF] font-black text-[11px] uppercase tracking-[0.5em] mb-4">
          <div className="w-12 h-0.5 bg-[#0055FF]"></div>
          Expertise
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
          Technical <span className="text-[#0055FF]">Skills.</span>
        </motion.h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
        {skills.map((skill, i) => (
          <div key={i} className="bg-white p-10 hover:bg-[#0055FF] group transition-all duration-500 cursor-default">
            <div className="mb-8 p-4 bg-blue-50 w-fit rounded-xl group-hover:bg-white/10 transition-colors duration-500 text-[#0055FF] group-hover:text-white">{skill.icon}</div>
            <h3 className="text-xl font-black uppercase italic mb-3 group-hover:text-white transition-colors">{skill.category}</h3>
            <p className="text-slate-500 text-xs mb-6 group-hover:text-blue-100 transition-colors leading-relaxed">{skill.desc}</p>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="px-2 py-1 bg-slate-100 text-[9px] font-bold uppercase tracking-wider rounded group-hover:bg-white/20 group-hover:text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
