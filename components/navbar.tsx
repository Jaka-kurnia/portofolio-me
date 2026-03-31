export const Navbar = () => (
  <nav className="fixed top-0 w-full z-[100] bg-[#0055FF]/10 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-6 flex justify-between items-center text-white">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
          <span className="text-[#0055FF] font-black text-lg uppercase tracking-tighter">J</span>
        </div>
        <div className="font-black text-xl tracking-[-0.05em] uppercase">Jaka.K</div>
      </div>
      <div className="flex gap-8 md:gap-12 text-[10px] font-black uppercase tracking-[0.4em]">
        <a href="#skills" className="hover:text-[#FFD700] transition-colors">Skills</a>
        <a href="#projects" className="hover:text-[#FFD700] transition-colors">Projects</a>
        <a href="#contact" className="hidden md:block px-6 py-2 bg-white text-[#0055FF] rounded-full hover:bg-[#FFD700] hover:text-black transition-all font-bold">Contact</a>
      </div>
    </div>
  </nav>
);