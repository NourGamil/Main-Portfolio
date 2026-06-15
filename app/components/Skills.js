"use client";

const skillsData = {
  frontend: [
    { name: "Next.js", level: 90, color: "#0070f3" },
    { name: "React.js", level: 80, color: "#61dafb" },
    { name: "GSAP", level: 80, color: "#88ce02" },
    { name: "Three.js", level: 70, color: "#00fff2" },
    { name: "Tailwind", level: 90, color: "#38bdf8" },
    { name: "Bootstrap", level: 80, color: "#7952b3" },
  ],
  backend: [
    { name: "MySQL", level: 70, color: "#00758f" },
    { name: "PHP", level: 60, color: "#777bb4" },
    { name: "Laravel", level: 60, color: "#ff2d20" },
  ]
};

export default function Skills() {
  const renderSkillItem = (skill) => (
    <div key={skill.name} className="skill-item relative">
      <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-widest">
        <span>{skill.name}</span>
        <span className="skill-number">{skill.level}%</span>
      </div>
      <div className="h-[8px] w-full bg-white/10 rounded-full overflow-hidden">
        <div 
          className="skill-bar-fill h-full rounded-full relative"
          data-level={skill.level}
          style={{ 
            backgroundColor: skill.color,
            boxShadow: `0 0 15px ${skill.color}`,
            width: `${skill.level}%`
          }}
        />
      </div>
    </div>
  );

  return (
    <section 
  id="skills" 
  className="snapper content-section relative h-[100dvh] w-full flex flex-col justify-center px-4 md:px-[10vw] bg-black/65 text-[var(--tx1-1)] overflow-hidden"
>
  <h2 className="fadeRightAll relative left-[-100px] opacity-0 text-[#fdc700] italic uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-[10px] md:text-sm mb-4 md:mb-16">
    03. Arsenal
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 items-start">
    
    <div className="fadeRightAll relative left-[-100px] opacity-0 p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
      <h3 className="text-sm md:text-2xl font-black uppercase mb-4 md:mb-10 text-[var(--tx1-1)]">
        Front-End <span className="text-[var(--tx3)] text-[10px] md:text-lg">(Strong Points)</span>
      </h3>
      
      {/* 2 SKILLS PER LINE ON MOBILE: grid-cols-2 */}
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3 md:gap-y-8">
        {skillsData.frontend.map(renderSkillItem)}
      </div>
    </div>

    <div className="flex flex-col gap-4 md:gap-10">
      
      <div className="fadeLeftAll relative left-[100px] opacity-0  p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
        <h3 className="text-sm md:text-2xl font-black uppercase mb-3 md:mb-8 text-[var(--tx1-1)]">Back-End</h3>
        
        {/* 2 SKILLS PER LINE ON MOBILE: grid-cols-2 */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3 md:gap-y-8">
          {skillsData.backend.map(renderSkillItem)}
        </div>
      </div>

      <div className="fadeUpAll relative top-[100px] opacity-0 p-4 md:p-8 rounded-2xl md:rounded-3xl bg-[var(--btn2)]/10 border border-[var(--btn2)]/20 backdrop-blur-md">
        <h3 className="text-xs md:text-xl font-black uppercase tracking-tighter mb-3 md:mb-6 text-[var(--btn2)]">Creative Tools</h3>
        <div className="flex flex-wrap gap-2 md:gap-6">
          {['Photoshop', 'Blender', 'Figma'].map(tool => (
            <span key={tool} className="px-3 md:px-6 py-1 md:py-2 rounded-full border border-[var(--btn2)]/30 text-[var(--btn2)] font-mono text-[8px] md:text-xs uppercase tracking-widest">
              {tool}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
