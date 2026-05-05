import { motion } from "framer-motion";


const projects = [
  { title: "E-Maintenance", category: "Web App", tech: ["Laravel", "React", "Redux", "Tailwind"], desc: "Aplikasi berbasis web untuk memudahkan perusahaan dalam mengelola pemeliharaan aset.", img: "/e-maintenance.png" },
  { title: "CMS Wareg Tasik", category: "Infrastructure", tech: ["Laravel", "Filament", "Next.js", "Tailwind"], desc: "Manajemen konten terpusat untuk platform kuliner Tasikmalaya.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070" },
  { title: "Sistem Presensi", category: "Web App", tech: ["Next.js", "Laravel"], desc: "Pelacakan kehadiran real-time dengan dashboard analitik presisi.", img: "https://images.unsplash.com/photo-1454165833767-131435bb4496?q=80&w=2070" },
  { title: "POS Warung", category: "Management", tech: ["Laravel", "Tailwind"], desc: "Aplikasi Point of Sale terintegrasi untuk efisiensi UMKM.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070" },

];

export const Projects = () => (
  <section id="projects" className="py-24 px-8 bg-[#FAF9F6]">
    <div className="max-w-350 mx-auto">
      <header className="flex justify-between items-end mb-16 border-b border-black/10 pb-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-[#1A1A1A]">My Projects</h2>
        <p className="text-[10px] font-bold text-[#0055FF] uppercase tracking-[0.4em] hidden md:block">Case Studies / 2025-2026</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group bg-white border border-black/5 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-16/10 overflow-hidden mb-6 relative">
              <img src={proj.img} alt={proj.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
            </div>
            <p className="text-[#0055FF] font-black text-[9px] uppercase tracking-[0.3em] mb-2">{proj.category}</p>
            <h3 className="text-2xl font-black uppercase italic mb-3 tracking-tighter">{proj.title}</h3>
            <p className="text-slate-500 text-sm italic mb-6 leading-relaxed">"{proj.desc}"</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t) => (
                <span key={t} className="text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
