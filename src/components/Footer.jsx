import React, { useContext } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Icons from "./icons/Icons";
import { Theme } from "./themecontext/ThemeContext";

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${id}`,
      ease: "power3.inOut",
    });
  };

  return (
    <footer className={`relative px-8 py-16 transition-colors duration-500 border-t backdrop-blur-md ${
      isDark 
        ? "bg-slate-950/80 border-slate-900 text-slate-400" 
        : "bg-slate-50/80 border-slate-200 text-slate-600"
    }`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Left */}
        <div>
          <h2 className={`text-3xl font-bold transition-colors ${
            isDark ? "text-white" : "text-slate-800"
          }`}>Harshita</h2>
          <p className={`mt-4 leading-relaxed transition-colors ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}>
            Building clean and modern web experiences.
          </p>
        </div>

        {/* Center */}
        <div>
          <h3 className={`font-semibold mb-4 uppercase tracking-wider transition-colors ${
            isDark ? "text-slate-200" : "text-slate-700"
          }`}>
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li 
              onClick={() => scrollToSection("home")}
              className={`cursor-pointer transition duration-200 ${
                isDark ? "hover:text-white text-slate-400" : "hover:text-slate-900 text-slate-500"
              }`}
            >
              Home
            </li>
            <li 
              onClick={() => scrollToSection("projects")}
              className={`cursor-pointer transition duration-200 ${
                isDark ? "hover:text-white text-slate-400" : "hover:text-slate-900 text-slate-500"
              }`}
            >
              Projects
            </li>
            <li 
              onClick={() => scrollToSection("about")}
              className={`cursor-pointer transition duration-200 ${
                isDark ? "hover:text-white text-slate-400" : "hover:text-slate-900 text-slate-500"
              }`}
            >
              About
            </li>
            <li 
              onClick={() => scrollToSection("contact")}
              className={`cursor-pointer transition duration-200 ${
                isDark ? "hover:text-white text-slate-400" : "hover:text-slate-900 text-slate-500"
              }`}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className={`font-semibold mb-4 uppercase tracking-wider transition-colors ${
            isDark ? "text-slate-200" : "text-slate-700"
          }`}>
            Connect
          </h3>
          <Icons />
        </div>
      </div>
       
      {/* Bottom */}
      <div className={`border-t mt-14 pt-6 text-center text-sm transition-colors ${
        isDark ? "border-slate-900 text-slate-500" : "border-slate-200 text-slate-400"
      }`}>
        © {new Date().getFullYear()} Harshita. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
