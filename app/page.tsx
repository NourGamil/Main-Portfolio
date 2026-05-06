"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
export default function Home() {
  const containerRef = useRef(null);
const projectsData = [
  {
    num: "01",
    title: "Shoe Show",
    category: "E-Commerce / 3D Animation",
    description: "An immersive retail experience featuring interactive 3D shoe models and smooth GSAP transitions. Fully responsive across all devices.",
    img: "images/Shoe-Show.png",
    githubLink: "https://github.com/nourgamil/Shoe-Show",
    websiteLink: "https://nourgamil.github.io/Shoe-Show/"
  },
    {
    num: "02",
    title: "Globe Trotter",
    category: "Travel / Interaction",
    description: "A travel exploration platform featuring fluid transitions and interactive maps. Built with a fully responsive architecture.",
    img: "images/Globe-Trotter.png",
    githubLink: "https://github.com/nourgamil/Globe-Trotter",
    websiteLink: "https://nourgamil.github.io/Globe-Trotter/"
  },
  {
    num: "03",
    title: "Cars Lambo",
    category: "Automotive / UI Design",
    description: "A high-end landing page for luxury vehicles with sleek animations and a custom vehicle showcase. Optimized for mobile responsiveness.",
    img: "images/Cars-Lambo.png", 
    githubLink: "https://github.com/nourgamil/Cars-Website",
    websiteLink: "https://nourgamil.github.io/Cars-Website/"
  },
  // {
  //   num: "04",
  //   title: "Qr Cards",
  //   category: "Utility / Web App",
  //   description: "A functional QR code generator with a clean, modern interface for creating digital business cards. 100% responsive design.",
  //   img: "images/Qr-Cards.png",
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
    {/* Hero Section */}
    {/* <section id="home" className="snapper relative h-screen w-full h-[100vh] flex flex-col justify-center px-[10vw] pt-[100px] z-10 overflow-hidden">

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-6 font-mono text-[10px] text-gray-400 uppercase tracking-widest pointer-events-none">
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

      <div className="max-w-4xl flex flex-col gap-[20px]">
        <div className=" ">
          <h2 className=" text-[var(--tx2)] italic uppercase tracking-[0.4em] font-bold text-sm mb-4">
            01. intro
          </h2>
        </div>
        
        <div className=" ">
          <h1 className=" text-7xl md:text-8xl w-[50vwpx] font-black leading-[0.85] tracking-tighter text-[var(--tx0)] flex flex-col flex-wrap">
            <span className="inline-block">Nour Gamil</span>
            <span className="masterpiece-accent -block text-[var(--tx3)] drop-shadow-md">
              Portfolio
            </span>
          </h1>
        </div> 

        <div className=" ">
          <p className="  max-w-md mt-6 text-lg text-black font-medium leading-relaxed">
            I make creative magic using 
            <span className="text-[#0070F3] font-bold"> Next.js, </span>
            <span className="text-[#0ae448] font-bold">GSAP, </span>
            <span className="text-[#903C4C] font-bold">Three.js, </span>
             and <span className="text-[#00bcff] font-bold">Tailwind.</span>
          </p>
        </div>

        <div className="  mt-10 ">

          <div className="magnetic-wrap inline-block p-10 cursor-pointer">
            <div className="cv-btn border-2 border-[var(--btn1)] text-[var(--btn1)] px-12 py-6 rounded-full text-xl font-bold uppercase hover:bg-[#004973] hover:text-white transition-colors duration-300">
              Explore the Magic
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Scroll</span>
        <div className="w-[2px] h-12 bg-gray-300 overflow-hidden relative">
          <div className="w-full h-1/2 bg-[#0015ff] absolute top-0 animate-[scrollDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section> */}
    <section 
      id="home" 
      className="snapper relative h-[100dvh] w-full flex flex-col justify-center px-6 md:px-[10vw] z-10 overflow-hidden"
    >
      
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none" />

      {/* Technical Info (XL only) */}
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

      {/* Content Wrapper: Added flex-1 and justify-center to keep it perfectly centered */}
      <div className="max-w-4xl flex flex-col gap-4 md:gap-[20px] justify-center">
        <div>
          <h2 className="text-[var(--tx2)] italic uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-xs md:text-sm mb-2">
            01. intro
          </h2>
        </div>
        
        <div>
          {/* Slightly tighter leading for mobile to save vertical space */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-[var(--tx0)] flex flex-col">
            <span className="inline-block">Nour Gamil</span>
            <span className="masterpiece-accent inline-block text-[var(--tx3)] drop-shadow-md">
              Portfolio
            </span>
          </h1>
        </div> 

        <div>
          <p className="max-w-sm md:max-w-md mt-2 md:mt-6 text-base md:text-lg text-black font-medium leading-relaxed">
            I make creative magic using 
            <span className="text-[#0070F3] font-bold"> Next.js, </span>
            <span className="text-[#0ae448] font-bold">GSAP, </span>
            <span className="text-[#903C4C] font-bold">Three.js, </span>
            and <span className="text-[#00bcff] font-bold">Tailwind.</span>
          </p>
        </div>

        <div className="mt-4 md:mt-10">
          <div className="magnetic-wrap inline-block p-2 md:p-10 cursor-pointer">
            <div className="cv-btn border-2 border-[var(--btn1)] text-[var(--btn1)] px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl font-bold uppercase hover:bg-[#004973] hover:text-white transition-colors duration-300">
              Explore the Magic
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator: Moved slightly up to ensure it's always above mobile nav bars */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Scroll</span>
        <div className="w-[2px] h-8 md:h-12 bg-gray-300 overflow-hidden relative">
          <div className="w-full h-1/2 bg-[#0015ff] absolute top-0 animate-[scrollDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
    {/* About Section */}
    {/* <section id="about" className="snapper relative min-h-screen w-full h-[100vh] flex flex-col justify-center bg-black/50 text-[var(--tx1-1)] px-10 px-[10vw] z-10 pt-[100px]">

      <div className="  mb-12">
        <h2 className=" text-[var(--tx2)] italic uppercase tracking-[0.4em] font-bold text-sm">
          02. about
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-7 space-y-8">
          <div className=" ">
            <h1 className="  text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-[var(--tx0)] dark:text-white">
              Creating digital <span className="text-[var(--tx3)]">poetry</span> through code.
            </h1>
          </div>

          <div className="  bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
            <p className="text-lg text-[var(--tx1-1)] dark:text-gray-300 leading-relaxed">
              I bridge the gap between complex 3D mathematics and clean UI design. Every pixel is intentional, every motion is calculated. I specialize in crafting seamless, interactive experiences where art and technology converge to create memorable digital worlds.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10">
              <div className=" ">
                <h4 className="text-[var(--tx5)] font-bold uppercase text-xs tracking-widest mb-2">Experience</h4>
                <p className="text-sm font-mono uppercase dark:text-white">3 Years</p>
              </div>
              <div className=" ">
                <h4 className="text-[var(--tx5)] font-bold uppercase text-xs tracking-widest mb-2">Location</h4>
                <p className="text-sm font-mono uppercase dark:text-white">Global / Remote</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          

          <div className="w-full h-[300px] relative group cursor-pointer" onClick={() => {}}>

            <div className="  absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
              <p className="text-[#fdc700] font-mono text-[10px] tracking-[0.5em] uppercase animate-pulse">
                Click to activate
              </p>
              <h3 className="text-lg font-bold mt-2 dark:text-white">Make your thoughts come true</h3>
            </div>
          </div>

          <div className=" w-full flex justify-center">

              <div className="  magnetic-wrap inline-block p-10 cursor-pointer">        
                <a href="/your-cv.pdf" download className="">
                  <div className="cv-btn border-2 border-[var(--btn2)] text-[var(--btn2)] px-12 py-6 rounded-full text-xl font-bold uppercase hover:bg-[var(--btn2)] hover:text-white transition-colors duration-300">
                    Download Resume / CV
                  </div>
                </a>
              </div>

          </div>
        </div>

      </div>
    </section> */}
    <section 
      id="about" 
      className="snapper 
      max-lg:pt-[120px]
      max-sm:pt-[100px]
      relative h-[100dvh]  w-full flex flex-col justify-center bg-black/50 text-[var(--tx1-1)] px-6 md:px-[10vw] z-10 overflow-hidden"
    >
      {/* Header: Reduced margin on mobile to save vertical space */}
      <div className="mb-6 md:mb-12">
        <h2 className="text-[var(--tx2)] italic uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-xs md:text-sm">
          02. about
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="lg:col-span-7 space-y-4 md:space-y-8">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.1] md:leading-none tracking-tighter text-[var(--tx0)] dark:text-white">
              Creating digital <span className="text-[var(--tx3)]">poetry</span> through code.
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-8 rounded-3xl shadow-2xl">
            <p className="text-sm md:text-lg text-[var(--tx1-1)] dark:text-gray-300 leading-relaxed line-clamp-4 md:line-clamp-none">
              I bridge the gap between complex 3D mathematics and clean UI design. Every pixel is intentional, every motion is calculated. I specialize in crafting seamless, interactive experiences where art and technology converge.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 md:mt-8 pt-4 md:pt-8 border-t border-white/10">
              <div>
                <h4 className="text-[var(--tx5)] font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">Experience</h4>
                <p className="text-xs md:text-sm font-mono uppercase dark:text-white">3 Years</p>
              </div>
              <div>
                <h4 className="text-[var(--tx5)] font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">Location</h4>
                <p className="text-xs md:text-sm font-mono uppercase dark:text-white">Global / Remote</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive & Button */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4 md:gap-8">
          
          {/* Reduced height on mobile to keep everything on one screen */}
          <div className="w-full h-[120px] md:h-[300px] relative group cursor-pointer flex flex-col justify-end items-center" onClick={() => {}}>
            <div className="text-center">
              <p className="text-[#fdc700] font-mono text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase animate-pulse">
                Click to activate
              </p>
              <h3 className="text-sm md:text-lg font-bold mt-1 dark:text-white">Make your thoughts come true</h3>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="magnetic-wrap inline-block p-2 md:p-10 cursor-pointer">        
              <a href="/your-cv.pdf" download className="block">
                <div className="cv-btn border-2 border-[var(--btn2)] text-[var(--btn2)] px-6 md:px-12 py-3 md:py-6 rounded-full text-sm md:text-xl font-bold uppercase hover:bg-[var(--btn2)] hover:text-white transition-all duration-300 text-center whitespace-nowrap">
                  Download Resume
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
    {/* Skills Section */}
    <Skills />
    {/* Projects Section */}
    {/* <section id="projects" className="relative bg-black/80 h-[400vh]">  
      <div className="snapper project-card w-[100vw] h-[100vh] flex flex-col justify-center pl-[10vw] relative overflow-hidden ">
        <div className="flex items-center gap-4 mb-6  ">
          <h2 className="  text-[var(--tx2)] italic uppercase tracking-[0.4em] font-bold text-sm mb-4">04. Selected Works</h2>
        </div>
        <div className="relative">
          <h1 style={{background:"linear-gradient(to right, rgb(50, 50, 255),rgb(200, 200, 255) )", backgroundClip:"text", color:"transparent"}} className="product1Tx showcase-title text-[12vw] italic font-black uppercase leading-[0.8] tracking-tighter">
            THE <br/> SHOWCASE
          </h1>
          <div  className=" text-[2rem] "> </div>            <div className="reveal-mask-container absolute inset-0 pointer-events-none" 
              style={{ maskImage: 'radial-gradient(circle 128px at 0px 0px, black 100%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle 128px at 0px 0px, black 100%, transparent 100%)' }}>
            <h1  className="product2Tx text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-[var(--tx1-1)] italic">
              THE <br/> SHOWCASE
            </h1>
          </div>
        </div>
    </div>
      <div className="flex flex-col  justify-center items-center h-[300vh]">
        {projectsData.map((project, index) => (
          <div key={index} className="snapper w-[100vw] h-[100vh] flex justify-center items-center py-20">
            <div className="project-card group relative w-[70vw]  h-[75vh] bg-transparent rounded-3xl border border-white/10 overflow-hidden text-[var(--tx1-1)]">
              <a 
                href={project.websiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-0 block cursor-pointer overflow-hidden"
              >
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
              </a>
              <div className="absolute top-0 left-0 h-full w-full lg:w-1/2 z-10 
                              bg-black/60 backdrop-blur-sm border-r border-white/10
                              pointer-events-none transition-transform duration-700 ease-expo 
                              group-hover:-translate-x-full">
                
                <div className="h-full w-full p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <span className="px-4 py-2 rounded-full border border-[var(--btn2)]/20 bg-white/5 text-[var(--btn2)] font-mono text-[10px] tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[var(--tx4)] font-bold italic text-xs uppercase tracking-[0.5em]">
                      {project.num}
                    </span>
                    <h4 className="text-5xl lg:text-7xl font-black  uppercase italic leading-none">
                      {project.title.split(' ')[0]} <span className="stroke-text">{project.title.split(' ')[1] || ""}</span>
                    </h4>
                    <p className=" max-w-md text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-10 bottom-10 z-30">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  className="group/btn relative flex items-center justify-center w-16 h-16 rounded-full bg-[var(--tx1-1)] text-black transition-all duration-500 hover:w-48 hover:bg-[var(--btn2)]"
                >
                  <span className="z-10 ">
                    <svg className="w-6 h-6 group-hover/btn:hidden" fill="currentColor" viewBox="0 0 24 24" >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </span>
                  <span className="absolute left-14 opacity-0 group-hover/btn:opacity-100 whitespace-nowrap font-bold text-xs tracking-widest uppercase transition-opacity duration-300">
                    View Code
                  </span>
                </a>
              </div>
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[var(--tx4)] transition-all duration-1000 group-hover:w-full z-40" />
            </div>
          </div>
        ))}
      </div>

    </section> */}
    <section id="projects" className="relative bg-black/80 h-[400vh]">  
      <div className="snapper project-card w-full h-[100dvh] flex flex-col justify-center px-6 md:pl-[10vw] relative overflow-hidden">
        <div className="flex items-center gap-4 mb-4 md:mb-6">
          <h2 className="text-[var(--tx2)] italic uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-xs md:text-sm">
            04. Selected Works
          </h2>
        </div>
        
        <div className="relative">
          {/* Title scales from 16vw on mobile down to 12vw on desktop */}
          <h1 style={{background:"linear-gradient(to right, rgb(50, 50, 255),rgb(200, 200, 255) )", backgroundClip:"text", color:"transparent"}} 
              className="product1Tx showcase-title text-[16vw] md:text-[12vw] italic font-black uppercase leading-[0.8] tracking-tighter">
            THE <br/> SHOWCASE
          </h1>
          
          {/* Reveal Mask Layer */}
          <div className="reveal-mask-container absolute inset-0 pointer-events-none" 
              style={{ maskImage: 'radial-gradient(circle 128px at 0px 0px, black 100%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle 128px at 0px 0px, black 100%, transparent 100%)' }}>
            <h1 className="product2Tx text-[16vw] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-[var(--tx1-1)] italic">
              THE <br/> SHOWCASE
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[300vh]">
        {projectsData.map((project, index) => (
          <div key={index} className="snapper w-full h-[100dvh] flex justify-center items-center px-4">
            
            {/* Project Card: Wider on mobile, fixed height */}
            <div className="project-card group relative w-full md:w-[80vw] lg:w-[70vw] h-[70vh] md:h-[75vh] bg-transparent rounded-3xl border border-white/10 overflow-hidden text-[var(--tx1-1)]">
              
              {/* Background Image Link */}
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0 block cursor-pointer overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 transition-colors duration-700" />
              </a>

              {/* Info Overlay: Full width on mobile, half width on desktop */}
              <div className="absolute top-0 left-0 h-full w-full lg:w-1/2 z-10 
                               backdrop-blur-md border-r border-white/10
                              pointer-events-none transition-transform duration-700 ease-expo 
                              lg:group-hover:-translate-x-full">
                
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
                    {/* Title font scaling */}
                    <h4 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic leading-none">
                      {project.title.split(' ')[0]} <span className="stroke-text">{project.title.split(' ')[1] || ""}</span>
                    </h4>
                    <p className="max-w-md text-sm md:text-lg leading-relaxed text-gray-300 line-clamp-3 md:line-clamp-none">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub Button: Smaller on mobile */}
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

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[var(--tx4)] transition-all duration-1000 group-hover:w-full z-40" />
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