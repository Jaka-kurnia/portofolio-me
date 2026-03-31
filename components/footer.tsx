export const Footer = () => (
  <footer id="contact" className="bg-[#0055FF] text-white pt-20 pb-12 px-8">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 border-b border-white/10 pb-16">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight">
            Let's Build <br /> The Next <span className="text-blue-300 underline underline-offset-4 decoration-1">System.</span>
          </h2>
          <div className="flex flex-col gap-2 font-black uppercase italic tracking-wider text-xl">
            <a href="#" className="hover:text-blue-300 transition-colors w-fit">LinkedIn</a>
            <a href="#" className="hover:text-blue-300 transition-colors w-fit">Github</a>
            <a href="mailto:jaka@example.com" className="hover:text-blue-300 transition-colors w-fit">Email</a>
          </div>
        </div>
        <div className="md:text-right flex flex-col md:justify-between">
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-200">Current Base</p>
            <p className="text-2xl font-bold italic">Tasikmalaya, Indonesia</p>
          </div>
          <p className="text-blue-200/60 text-[11px] font-bold uppercase tracking-tighter mt-10 md:mt-0">Ready for mid-to-large scale web development & analysis.</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300 italic">
        <div>Open for collaboration — 2026</div>
        <div>© Jaka Kurnia — Manajemen Informatika</div>
      </div>
    </div>
  </footer>
);