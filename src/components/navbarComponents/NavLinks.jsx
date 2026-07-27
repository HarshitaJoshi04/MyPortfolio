import React, { useContext } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Theme } from "../themecontext/ThemeContext";

gsap.registerPlugin(ScrollToPlugin);

const NavLinks = () => {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  const scrollTo = (id) => {
    gsap.to(window, {
      scrollTo: `#${id}`,
      duration: 1,
      ease: "power3.inOut",
    });
  };

  return (
    <div className={`flex items-center justify-center gap-1 border px-2 py-1.5 rounded-full transition-colors duration-300 ${
      isDark 
        ? "border-slate-800/80 bg-slate-900/50" 
        : "border-slate-200/80 bg-white/50"
    }`}>
      <button
        className={`px-4 py-1 text-[14px] font-semibold rounded-full transition duration-200 ${
          isDark 
            ? "text-slate-300 hover:text-white hover:bg-slate-800" 
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
        onClick={() => scrollTo("home")}
      >
        Home
      </button>

      <button
        className={`px-4 py-1 text-[14px] font-semibold rounded-full transition duration-200 ${
          isDark 
            ? "text-slate-300 hover:text-white hover:bg-slate-800" 
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
        onClick={() => scrollTo("about")}
      >
        About
      </button>

      <button
        className={`px-4 py-1 text-[14px] font-semibold rounded-full transition duration-200 ${
          isDark 
            ? "text-slate-300 hover:text-white hover:bg-slate-800" 
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
        onClick={() => scrollTo("projects")}
      >
        Projects
      </button>

      <button
        className={`px-4 py-1 text-[14px] font-semibold rounded-full transition duration-200 ${
          isDark 
            ? "text-slate-300 hover:text-white hover:bg-slate-800" 
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
        onClick={() => scrollTo("contact")}
      >
        Contact
      </button>
    </div>
  );
};

export default NavLinks;
