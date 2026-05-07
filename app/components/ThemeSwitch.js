
"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);
  const switchRef = useRef(null);
  const moonMaskRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    gsap.to(moonMaskRef.current, {
      x: newTheme ? 12 : 30, 
      y: newTheme ? -5 : -10,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(switchRef.current, {
      backgroundColor: newTheme ? "#fde047" : "#fdc700", 
      boxShadow: newTheme 
        ? "0 0 20px rgba(253, 224, 71, 0.6)" 
        : "0 0 10px rgba(253, 199, 0, 0.2)",
      duration: 0.6
    });

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center ml-6">
      <button 
        onClick={toggleTheme}
        className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-transform active:scale-90"
      >
        <div 
          ref={switchRef}
          className="w-7 h-7 rounded-full bg-[#fdc700] relative shadow-lg"
        >
          <div 
            ref={moonMaskRef}
            className="absolute w-7 h-7 rounded-full bg-[#111] translate-x-[30px]"
          />
        </div>
      </button>
    </div>
  );
}