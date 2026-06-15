"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default function Navbar() {
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const linksRef = useRef([]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const indicator = indicatorRef.current;
    const navTriggers = [];

    const navAnimation = gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });

    const moveIndicator = (index) => {
      const target = linksRef.current[index];
      if (!target || !indicator) return;

      gsap.to(indicator, {
        x: target.offsetLeft,
        width: target.offsetWidth,
        duration: 0.7,
        ease: "power4.out",
        overwrite: true,
      });
    };

    navLinks.forEach((link, i) => {
      let startTrigger = "top center";
      let endTrigger = "bottom center";

      if (link.href === "#projects") {
        startTrigger = "top center";
        endTrigger = "bottom top";
      }

      if (link.href === "#contact") {
        const projectsSection = document.querySelector("#projects");
        if (!projectsSection) return;

        navTriggers.push(
          ScrollTrigger.create({
            trigger: projectsSection,
            start: "bottom center",
            onEnter: () => moveIndicator(i),
            onLeaveBack: () => moveIndicator(i - 1),
          })
        );

        return;
      }

      navTriggers.push(
        ScrollTrigger.create({
          trigger: link.href,
          start: startTrigger,
          end: endTrigger,
          onEnter: () => moveIndicator(i),
          onEnterBack: () => moveIndicator(i),
        })
      );
    });

    return () => {
      navAnimation.kill();
      navTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (e, href, index) => {
    e.preventDefault(); 
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: href,
        offsetY: 0,
      },
      ease: "power4.inOut",
    });

    const target = linksRef.current[index];
    gsap.to(indicatorRef.current, {
      x: target.offsetLeft,
      width: target.offsetWidth,
      duration: 0.8,
      ease: "power4.out",
    });
  };

  return (
<div className="fixed top-0 left-0 flex justify-center w-full pt-4 md:pt-2 z-[100] text-[var(--tx1-1)] px-2 sm:px-4">
      <nav 
        ref={navRef}
        className="relative flex items-center 
                  w-full max-w-[98vw]       /* Almost edge-to-edge on mobile */
                  md:w-[85vw]               
                  lg:w-[60vw]               
                  py-1 md:py-2 
                  rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        <div 
          ref={indicatorRef}
          className="absolute top-1/2 -translate-y-1/2 left-0 h-[70%] rounded-full z-0 pointer-events-none will-change-transform"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-white/30" />
        </div>

        <ul className="relative flex items-center justify-around w-full z-10">
          {navLinks.map((link, i) => (
            <li key={link.name} className="flex-1 text-center">
              <a 
                ref={el => linksRef.current[i] = el}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href, i)}
                className="inline-block w-full py-3 
                          /* Text scales down, but stays full */
                          text-[8px] xs:text-[9px] md:text-[11px] 
                          /* Minimal tracking on tiny screens, wide on desktop */
                          tracking-[0.1em] xs:tracking-[0.2em] md:tracking-[0.4em] 
                          uppercase font-bold hover:text-[var(--tx2)] transition-colors duration-500 whitespace-nowrap"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button 
        onClick={() => {
      gsap.to(window, {
                duration: 1.5,
                scrollTo: 0,
                ease: "power4.inOut",
              });
            }}
        className="fixed bottom-4 right-4 z-50 p-4 rounded-full 
                  border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl transition-all duration-300
                  group flex items-center justify-center cursor-pointer"
        aria-label="Scroll to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white group-hover:-translate-y-1 transition-transform duration-300"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
</div>
  );
}