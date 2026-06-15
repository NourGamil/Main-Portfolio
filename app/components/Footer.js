"use client";

export default function Footer() {
  return (
    <section 
      id="contact" 
      className="snapper content-section relative w-full h-[100dvh] mt-[-1px] pt-[22vh] lg:pt-[30vh] bg-black/90 backdrop-blur-sm flex flex-col justify-between pt-24 pb-10 px-6 md:px-24 overflow-hidden text-[var(--tx1-1)]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
        <div>
          <div className="fadeRightAll relative left-[-100px] opacity-0 line-mask mb-6 md:mb-12">
            <h2 className="reveal-line text-[var(--tx2)] italic uppercase tracking-[0.4em] font-bold text-[10px] md:text-sm">
              05. Contact me
            </h2>
          </div>
          <h2 className="fadeRightAll relative left-[-100px] opacity-0 text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] md:leading-none">
            Let's <span className="text-[var(--tx3)]">talk.</span>
          </h2>
          <p className="fadeRightAll relative left-[-100px] opacity-0 mt-4 md:mt-6 text-gray-400 font-mono text-[10px] md:text-sm tracking-widest uppercase">
            Available for new masterpieces. Based in Egypt.
          </p>

          <form 
            action={`mailto:nouragmil135@gmail.com?subject=Masterpiece Inquiry`} 
            method="post" 
            encType="text/plain"
            className="fadeRightAll relative left-[-100px] opacity-0 mt-8 md:mt-12 flex flex-col gap-4 max-w-md"
          >
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Get In Touch" 
                className="w-full bg-white/5 border-b rounded-2xl border-white/20 py-4 px-4 outline-none focus:border-[#fdc700] transition-colors font-mono text-[10px] md:text-xs"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#fdc700] hover:translate-x-2 transition-transform cursor-pointer font-bold text-[10px]">
                SEND →
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-10">

          <div className="space-y-4 md:space-y-6">
            <div className="fadeLeftAll relative left-[100px] opacity-0">
              <h4 className="text-[#fdc700] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-2">Direct</h4>
              <p className="font-mono text-[10px] md:text-sm break-all">nouragmil135@gmail.com</p>
              <p className="font-mono text-[10px] md:text-sm mt-1">+20 01221646925</p>
            </div>
            <div className="fadeLeftAll relative left-[100px] opacity-0">
              <h4 className="text-[#fdc700] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-2">Location</h4>
              <p className="font-mono text-[10px] md:text-sm">Cairo, Egypt (GMT+3)</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4"> 
            <h4 className="fadeLeftAll relative left-[100px] opacity-0 text-[#fdc700] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-2">Digital Footprint</h4>
            <SocialLink href="https://www.linkedin.com/in/nour-gamil-5901a7286/" label="LinkedIn" />
            <SocialLink href="https://github.com/NourGamil" label="GitHub" />
            <SocialLink href="https://wa.me/201221646925" label="WhatsApp" />
            <SocialLink href="https://www.instagram.com/nourgamil12/" label="Instagram" />
          </div>
        </div>
      </div>
      <div className="fadeUpAll relative top-[100px] opacity-0 mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] md:text-[10px] font-mono text-[var(--tx1-1)] tracking-widest uppercase text-center md:text-left">
        <p>© 2026 NOUR GAMIL. ALL RIGHTS RESERVED.</p>
        <p className="hidden md:block">DESIGNED TO BE A MASTERPIECE</p>
      </div>
    </section>
  );
}

function SocialLink({ href, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fadeLeftAll relative left-[100px] opacity-0 group flex items-center justify-between border-b border-white/5 py-1 md:py-2 hover:border-[#fdc700] transition-colors"
    >
      <span className="text-gray-400 group-hover:text-[var(--tx1-1)] transition-colors uppercase text-[10px] md:text-xs tracking-widest">{label}</span>
      <span className="text-[#fdc700] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
    </a>
  );
}
