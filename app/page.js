"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import Skills from "./components/Skills";
import Footer from "./components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}
export default function Home() {
  const containerRef = useRef(null);
const projectsData = [
  {
    num: "01",
    title: "Shoe Show",
    category: "E-Commerce / 3D Animation",
    description: "An immersive retail experience featuring interactive 3D shoe models and smooth GSAP transitions. Fully responsive across all devices.",
    img: "images/Shoe-Show.webp",
    githubLink: "https://github.com/nourgamil/Shoe-Show",
    websiteLink: "https://nourgamil.github.io/Shoe-Show/"
  },
    {
    num: "02",
    title: "Globe Trotter",
    category: "Travel / Interaction",
    description: "A travel exploration platform featuring fluid transitions and interactive maps. Built with a fully responsive architecture.",
    img: "images/Globe-Trotter.webp",
    githubLink: "https://github.com/nourgamil/Globe-Trotter",
    websiteLink: "https://nourgamil.github.io/Globe-Trotter/"
  },
  {
    num: "03",
    title: "Cars Lambo",
    category: "Automotive / UI Design",
    description: "A high-end landing page for luxury vehicles with sleek animations and a custom vehicle showcase. Optimized for mobile responsiveness.",
    img: "images/Cars-Lambo.webp", 
    githubLink: "https://github.com/nourgamil/Cars-Website",
    websiteLink: "https://nourgamil.github.io/Cars-Website/"
  },
  // {
  //   num: "04",
  //   title: "Qr Cards",
  //   category: "Utility / Web App",
  //   description: "A functional QR code generator with a clean, modern interface for creating digital business cards. 100% responsive design.",
  //   img: "images/Qr-Cards.webp",
  //   githubLink: "https://github.com/nourgamil/QR-code-Generator",
  //   websiteLink: "https://nourgamil.github.io/QR-code-Generator/"
  // }
];
  useEffect(() => {
//------------------------------------------ scrolltrigger snapper---------------------------
            let snappers = gsap.utils.toArray(".snapper");
            gsap.to(snappers, {
            ease: "none",
            duration:0.1,
            delay:0,
            scrollTrigger: {
            pin: true,
            scrub: 1,
            snap: {
            snapTo: 1 / (snappers.length - 1) ,
            directional: false,
            inertia: true,
            },}
            });
//------------------------------------------ scrolltrigger animation---------------------------
let homeTl = gsap.timeline();
        homeTl.to(".fadeRight",{
          opacity:1,
          x:100,
          stagger:0.1,
          duration:1
        }).to(".fadeLeft",{
          opacity:1,
          x:-100,
          duration:1
        },"-=1").to(".fadeUp",{
          opacity:1,
          y:-100,
          duration:1
        },"-=1")

        ScrollTrigger.create({
          trigger: "#about",
          start: "top 50%",
          onEnter: () => {
          gsap.timeline()
          .to(".fadeRight",{
          opacity:0,
          x:-100,
          stagger:0.1,
          duration:1
        }).to(".fadeLeft",{
          opacity:0,
          x:100,
          duration:1
        },"-=1").to(".fadeUp",{
          opacity:0,
          y:100,
          duration:1
        },"-=1")
          },
          onLeaveBack: () => {
          gsap.timeline()
          .to(".fadeRight",{
          opacity:1,
          x:100,
          stagger:0.1,
          duration:1
        }).to(".fadeLeft",{
          opacity:1,
          x:-100,
          duration:1
        },"-=1").to(".fadeUp",{
          opacity:1,
          y:-100,
          duration:1
        },"-=1")
          }
        });

        const sections = gsap.utils.toArray(".content-section");

        sections.forEach((section) => {
          const fadeRights = section.querySelectorAll(".fadeRightAll");
          const fadeLefts = section.querySelectorAll(".fadeLeftAll");
          const fadeUps = section.querySelectorAll(".fadeUpAll");
          const fadeDowns = section.querySelectorAll(".fadeDownAll");
          const fadeScales = section.querySelectorAll(".fadeScaleAll");

          ScrollTrigger.create({
            trigger: section,
            start: "50% 90%",
            onEnter: () => {
              gsap.timeline()
                .to(fadeRights, { opacity: 1, x: 100, stagger: 0.1, duration: 1 })
                .to(fadeLefts, { opacity: 1, x: -100,stagger: 0.1, duration: 1 }, "-=1")
                .to(fadeUps, { opacity: 1, y: -100,stagger: 0.1, duration: 1 }, "-=1")
                .to(fadeDowns, { opacity: 1, y: 100,stagger: 0.1, duration: 1 }, "-=1")
                .to(fadeScales, { opacity: 1, scale:1,stagger: 0.1, duration: 1 }, "-=1");
            },
            onLeaveBack: () => {
              gsap.timeline()
                .to(fadeRights, { opacity: 0, x: -100, stagger: 0.1, duration: 1 })
                .to(fadeLefts, { opacity: 0, x: 100,stagger: 0.1, duration: 1 }, "-=1")
                .to(fadeUps, { opacity: 0, y: 100,stagger: 0.1, duration: 1 }, "-=1")
                .to(fadeDowns, { opacity: 0, y: -100,stagger: 0.1, duration: 1 }, "-=1")
                .to(fadeScales, { opacity: 0, scale:0,stagger: 0.1, duration: 1 }, "-=1");
            }
          });

          ScrollTrigger.create({
            trigger: section,
            start: "bottom 50%",
            onEnter: () => {
              gsap.timeline()
                .to(fadeRights, { opacity: 0, x: -100,duration: 1 })
                .to(fadeLefts, { opacity: 0, x: 100,duration: 1 }, "-=1")
                .to(fadeUps, { opacity: 0, y: 100,duration: 1 }, "-=1")
                .to(fadeDowns, { opacity: 0, y: -100,duration: 1 }, "-=1")
                .to(fadeScales, { opacity: 0, scale:0,stagger: 0.1, duration: 1 }, "-=1");
            },
            onLeaveBack: () => {
              gsap.timeline()
                .to(fadeRights, { opacity: 1, x: 100,duration: 1 })
                .to(fadeLefts, { opacity: 1, x: -100,duration: 1 }, "-=1")
                .to(fadeUps, { opacity: 1, y: -100,duration: 1 }, "-=1")
                .to(fadeDowns, { opacity: 1, y: 100,duration: 1 }, "-=1")
                .to(fadeScales, { opacity: 1, scale:1,stagger: 0.1, duration: 1 }, "-=1");
            }
          });
        });
//----------------------------------- landing section --------------------------------

/*------------------------------------ mouse cordinates in landing------------------------------- */

  const xSpan = document.querySelector('.mouse-x');
  const ySpan = document.querySelector('.mouse-y');
  const ctx1 = gsap.context(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (xSpan && ySpan) {
        xSpan.innerText = clientX.toString().padStart(4, '0');
        ySpan.innerText = clientY.toString().padStart(4, '0');
      }
      const xPos = (clientX / window.innerWidth) - 0.5;
      const yPos = (clientY / window.innerHeight) - 0.5;

      gsap.to(".parallax-h1", {
        x: xPos * 30,
        y: yPos * 30,
        duration: 0.7,
        ease: "power2.out"
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, containerRef);

/*------------------------------------ magnetic btn------------------------------- */
const magneticWrappers = document.querySelectorAll(".magnetic-wrap");

magneticWrappers.forEach((wrapper) => {
  const btn = wrapper.querySelector(".cv-btn");

  wrapper.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = wrapper.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    gsap.to(btn, {
      x: x * 0.4,
      y: y * 0.4,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  wrapper.addEventListener("mouseleave", () => {
    gsap.to(btn, { 
      x: 0, 
      y: 0, 
      duration: 1, 
      ease: "elastic.out(1, 0.3)" 
    });
  });
});

/*------------------------------------ about Section------------------------------- */
gsap.to(".thought-card", {
  y: -20, // Move up and down
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Subtle rotating glow inside
gsap.to(".thought-glow", {
  opacity: 0.4,
  scale: 1.5,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});
/*------------------------------------ works Section------------------------------- */

let colorsChangerTl = gsap.timeline({repeat:-1});
    colorsChangerTl
    .to(".product1Tx",{backgroundClip:"text", color:"transparent",background:"linear-gradient(to right,rgb(200, 200, 255) , rgb(50,50,255))", duration:2})
    .to(".product1Tx",{backgroundClip:"text", color:"transparent",background:"linear-gradient(to right, rgb(50,50,255),rgb(200, 200, 255) )", duration:2})

const lens = document.querySelector(".mouse-lens");
  const maskContainer = document.querySelector(".reveal-mask-container");
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    gsap.to(lens, {
      x: clientX - 128, 
      y: clientY - 128,
      duration: 0.5,
      ease: "power2.out"
    });

    const rect = maskContainer.getBoundingClientRect();
    const localX = clientX - rect.left;
    const localY = clientY - rect.top;

    gsap.to(maskContainer, {
      attr: { 
        style: `mask-image: radial-gradient(circle 128px at ${localX}px ${localY}px, black 100%, transparent 100%); 
                -webkit-mask-image: radial-gradient(circle 128px at ${localX}px ${localY}px, black 100%, transparent 100%);` 
      },
      duration: 0.5,
      ease: "power2.out"
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

// --------------------------------------Clean Up--------------------
    return () => {
  ScrollTrigger.getAll().forEach(t => t.kill());
  ctx.revert();
  ctx1.revert();
};
  }, []);

  return (
<main ref={containerRef}>
    {/* Landing Section */}
    <section 
      id="home" 
      className="snapper relative h-[100dvh] w-full flex flex-col justify-center px-6 md:px-[10vw] z-10 overflow-hidden"
    >
      
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-end gap-6 font-mono text-[10px] text-gray-400 uppercase tracking-widest pointer-events-none">
        <div className="flex items-center gap-4 rotate-90 origin-right mb-20">
          <span className="w-12 h-[1px] bg-gray-300"></span>
          <span>Creative Developer</span>
        </div>
        <div className="text-right tabular-nums flex flex-col items-start gap-[4px]">
            <p>Mouse:</p>
            <p>X: <span className="mouse-x">0000</span></p>
            <p>Y: <span className="mouse-y">0000</span></p>
        </div>
      </div>

      <div className="max-w-4xl flex flex-col gap-4 md:gap-[20px] justify-center">
        <div>
          <h2 className="fadeRight relative left-[-100px] opacity-0 text-[var(--tx2)] italic uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-xs md:text-sm mb-2">
            01. intro
          </h2>
        </div>
        
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-[var(--tx0)] flex flex-col">
            <span className="fadeRight relative left-[-100px] opacity-0 inline-block">Nour Gamil</span>
            <span className="fadeRight relative left-[-100px] opacity-0 masterpiece-accent inline-block text-[var(--tx3)] drop-shadow-md">
              Portfolio
            </span>
          </h1>
        </div> 

        <div>
          <p className="fadeLeft relative right-[-100px] opacity-0 max-w-sm md:max-w-md mt-2 md:mt-6 text-base md:text-lg text-black font-medium leading-relaxed">
            I make creative magic using 
            <span className="text-[#0070F3] font-bold"> Next.js, </span>
            <span className="text-[#0ae448] font-bold">GSAP, </span>
            <span className="text-[#903C4C] font-bold">Three.js, </span>
            and <span className="text-[#00bcff] font-bold">Tailwind.</span>
          </p>
        </div>

        <div className="fadeUp relative bottom-[-100px] opacity-0 mt-4 md:mt-10">
          <div
          onClick={() => {
                    gsap.to(window, {
                      duration: 1.5,
                      scrollTo: "#projects",
                      ease: "power4.inOut",
                    });
                  }}
          className="magnetic-wrap inline-block p-2 md:p-10 cursor-pointer">
            <div className="cv-btn border-2 border-[var(--btn1)] text-[var(--btn1)] px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl font-bold uppercase hover:bg-[#004973] hover:text-white transition-colors duration-300">
              Explore the Magic
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Scroll</span>
        <div className="w-[2px] h-8 md:h-12 bg-gray-300 overflow-hidden relative">
          <div className="w-full h-1/2 bg-[#0015ff] absolute top-0 animate-[scrollDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
    {/* About Section */}
    <section 
      id="about" 
      className="snapper content-section relative min-h-[100dvh] w-full flex flex-col justify-center bg-black/50 text-[var(--tx1-1)] px-6 md:px-[10vw] z-10 overflow-hidden lg:py-0 pt-[70px] max-sm:pt-[50px]"
    >
        <div className="fadeRightAll relative left-[-100px] opacity-0 mb-3 md:mb-12">
          <h2 className="text-[var(--tx2)] italic uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-xs md:text-sm">
            02. about
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-sm:gap-6 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 md:space-y-8 order-1 lg:order-1">
            <div>
              <h1 className="fadeRightAll relative left-[-100px] opacity-0 text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.1] md:leading-none tracking-tighter text-[var(--tx0)]">
                Creating digital <span className="text-[var(--tx3)]">poetry</span> through code.
              </h1>
            </div>
            <div className="fadeRightAll relative left-[-100px] opacity-0 bg-white/5 backdrop-blur-xl border border-white/10  p-3 md:p-8 rounded-3xl shadow-2xl">
              <p className="text-sm md:text-lg text-[var(--tx1-1)]  leading-relaxed">
                I bridge the gap between complex 3D mathematics and clean UI design. Every pixel is intentional, every motion is calculated. I specialize in crafting seamless, interactive experiences where art and technology converge.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
                <div>
                  <h4 className="text-[var(--tx5)] font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">Experience</h4>
                  <p className="text-xs md:text-sm font-mono uppercase ">3 Years</p>
                </div>
                <div>
                  <h4 className="text-[var(--tx5)] font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">Location</h4>
                  <p className="text-xs md:text-sm font-mono uppercase ">Global / Remote</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-2 lg:order-2">
            <div 
              className="fadeLeftAll relative left-[100px] opacity-0 3d-wrapper w-full max-w-[280px] md:max-w-[320px] aspect-[4/5] max-sm:h-[180px] lg:h-[400px] flex items-center justify-center cursor-pointer"
              style={{ perspective: "1200px" }}
              onMouseMove={(e) => {
                const { clientX, clientY, currentTarget } = e;
                const rect = currentTarget.getBoundingClientRect();
                const x = (clientX - rect.left) / rect.width - 0.5;
                const y = (clientY - rect.top) / rect.height - 0.5;
                
                gsap.to(currentTarget.querySelector(".cv-card"), {
                  rotateY: x * 30,
                  rotateX: -y * 30,
                  scale: 1.02,
                  duration: 0.5,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector(".cv-card"), { 
                  rotateX: 0, rotateY: 0, scale: 1, 
                  duration: 1.2, ease: "elastic.out(1, 0.5)" 
                });
              }}
            >
              <a 
                href="Nour Gamil CV.pdf" 
                download 
                className="cv-card group relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center justify-between max-sm:p-4 p-8 md:p-10 text-center overflow-hidden"
              >
                <div className="absolute -inset-20 bg-[var(--tx3)] opacity-0 group-hover:opacity-20 blur-[80px] transition-opacity duration-700 pointer-events-none" />

                <p className="z-10 text-[var(--tx2)] font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase ">
                  Personal Archive
                </p>

                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border-3 md:border-3 border-dashed border-[var(--tx1-1)] rounded-full animate-[spin_10s_linear_infinite] " />
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--tx1-1)]  transition-transform duration-500">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                </div>

                <div className="z-10 w-full">
                  <h3 className="text-lg md:text-xl font-black text-[var(--btn2)] uppercase tracking-tighter mb-2">Download CV</h3>
                  <div className="h-[2px] w-0 bg-[var(--btn2)] mx-auto group-hover:w-full transition-all duration-500" />
                </div>
              </a>
            </div>
          </div>

        </div>
    </section>
    {/* Skills Section */}
    <Skills />
    {/* Projects Section */}
    <section id="projects" className="relative bg-black/80 h-[400vh]">  
      <div className="snapper content-section project-card w-full h-[100dvh] flex flex-col justify-center px-6 md:pl-[10vw] relative ">
        <div className="fadeRightAll relative left-[-100px] opacity-0 flex items-center gap-4 mb-4 md:mb-6">
          <h2 className="text-[var(--tx2)] italic uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-xs md:text-sm">
            04. Selected Works
          </h2>
        </div>
        
        <div className="relative fadeLeftAll  left-[100px] opacity-0">
          <h1 style={{background:"linear-gradient(to right, rgb(50, 50, 255),rgb(200, 200, 255) )", backgroundClip:"text", color:"transparent"}} 
              className="product1Tx showcase-title text-[16vw] md:text-[12vw] italic font-black uppercase leading-[0.8] tracking-tighter">
            THE <br/> SHOW <br className="sm:hidden"/> CASE
          </h1>
          <div className="reveal-mask-container absolute inset-0 pointer-events-none" 
              style={{ maskImage: 'radial-gradient(circle 128px at 0px 0px, black 100%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle 128px at 0px 0px, black 100%, transparent 100%)' }}>
            <h1 className="product2Tx text-[16vw] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-[var(--tx1-1)] italic">
              THE <br/> SHOW <br className="sm:hidden"/> CASE
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[300vh]">
        {projectsData.map((project, index) => (
          <div key={index} className="snapper content-section w-full h-[100dvh] flex justify-center items-center px-4">
            <div className="fadeScaleAll scale-0 opacity-0 project-card group w-full md:w-[80vw] lg:w-[70vw] h-[70vh] md:h-[75vh] bg-transparent rounded-3xl border border-white/10 overflow-hidden text-[var(--tx1-1)]">
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0 block cursor-pointer overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 transition-colors duration-700" />
              </a>
              <div className="absolute top-0 left-0 h-full w-full lg:w-1/2 z-10 
                              backdrop-blur-md border-r border-white/10
                              pointer-events-none xl:transition-transform xl:duration-700 xl:ease-expo 
                              ">
                
                <div className="h-full w-full p-6 md:p-12 flex flex-col justify-center">
                  <div className="mb-4 md:mb-8">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[var(--btn2)]/20 bg-white/5 text-[var(--btn2)] font-mono text-[9px] md:text-[10px] tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2 md:space-y-4">
                    <span className="text-[var(--tx4)] font-bold italic text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em]">
                      {project.num}
                    </span>
                    <h4 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic leading-none">
                      {project.title.split(' ')[0]} <span className="stroke-text">{project.title.split(' ')[1] || ""}</span>
                    </h4>
                    <p className="max-w-md text-sm md:text-lg leading-relaxed text-gray-300 md:line-clamp-none">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 md:right-10 md:bottom-10 z-30">
                <a href={project.githubLink} target="_blank" className="group/btn relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--tx1-1)] text-black transition-all duration-500 hover:md:w-48 hover:bg-[var(--btn2)]">
                  <span className="z-10">
                    <svg className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:hidden" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </span>
                  <span className="hidden md:block absolute left-14 opacity-0 group-hover/btn:opacity-100 whitespace-nowrap font-bold text-xs tracking-widest uppercase transition-opacity duration-300">
                    View Code
                  </span>
                </a>
              </div>
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[var(--btn2)] transition-all duration-1000 group-hover:w-full z-40" />
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* Footer Section */}
    <Footer />
    </main>
  );
}