import React, { useContext } from "react";
import { Theme } from "../components/themecontext/ThemeContext";
import H1 from "../components/headingAnimation/H1";
import HeroText from "../components/landingPage/HeroText";
import Para from "../components/About/Para";
import gif from "../assets/web-design.gif"
const About = () => {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-12 md:py-24">
      {/* Content */}
      <section
        id="about"
        className="relative z-10 flex items-center justify-center w-full px-4"
      >
        <div
          className={`w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-10 p-8 md:p-12 rounded-3xl border transition-all duration-500 ${
            isDark
              ? "bg-slate-900/60 border-slate-800/80 text-white shadow-2xl shadow-black/20"
              : "bg-white/80 border-slate-200/80 text-slate-800 shadow-xl shadow-slate-200/50"
          } backdrop-blur-md`}
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
            <H1
              text="About Me"
              duration={0.7}
              delay={0}
              isDark={isDark}
              stagger={0.2}
            />
            <Para isDark={isDark} />
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img 
              src={gif} 
              alt="Web Design illustration" 
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] object-contain rounded-2xl shadow-lg border border-white/10"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;