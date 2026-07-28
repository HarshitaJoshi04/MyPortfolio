import React, { useContext } from "react";
import Slider from "../components/ProjectComponent/Slider";
import { Theme } from "../components/themecontext/ThemeContext";
import H1 from "../components/headingAnimation/H1";

const Projects = () => {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  return (
    <div
      className={`relative min-h-screen overflow-hidden py-20 lg:py-28 ${
        isDark
          ? "bg-[#050816][0]"
          : ""
      }`}
    >
      {!isDark && (
        <>
          <div className="absolute -top-40 -left-40 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] rounded-full bg-sky-200/60 blur-[110px] sm:blur-[150px]" />
          <div className="absolute top-1/3 -right-40 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full bg-indigo-200/60 blur-[120px] sm:blur-[170px]" />
          <div className="absolute bottom-0 left-1/3 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] rounded-full bg-cyan-200/40 blur-[110px] sm:blur-[140px]" />
        </>
      )}

      {/* Blue Glow */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-[220px] h-[220px]
        sm:w-[500px] sm:h-[500px]
        md:w-[650px] md:h-[650px]
        lg:w-[850px] lg:h-[850px]
        rounded-full blur-[120px] sm:blur-[180px]
        ${
          isDark
            ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 opacity-40"
            : "bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 opacity-70"
        }`}
      />

      <section
        id="projects"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12"
      >
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="uppercase tracking-[3px] sm:tracking-[5px] text-blue-500 text-[10px] sm:text-xs font-semibold">
            Portfolio
          </span>

          <div className="mt-4">
            <H1
              text="Featured Projects"
              duration={0.7}
              delay={0}
              stagger={0.15}
              isDark={isDark}
            />
          </div>

          <p
            className={`mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-7 ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            A collection of full-stack applications, AI-powered tools, and
            modern web experiences built with React, Next.js, Tailwind CSS,
            Node.js, MongoDB, and automation technologies.
          </p>
        </div>

        {/* Card wrapper */}
        <div
          className={`relative overflow-hidden w-full rounded-[28px] sm:rounded-[36px] border backdrop-blur-xl shadow-2xl transition-all duration-500 ${
            isDark
              ? "bg-white/[0.03] border-white/10 shadow-black/40"
              : "bg-white/50 border-white/70 shadow-blue-200/40"
          }`}
        >
          {/* Grid pattern lives inside the card only */}
          <div
            className={`absolute inset-0 pointer-events-none ${
              isDark
                ? "bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(30,41,59,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.06)_1px,transparent_1px)]"
            } bg-[size:22px_22px] xs:bg-[size:28px_28px] sm:bg-[size:40px_40px] lg:bg-[size:60px_60px]`}
          />

          <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
            <Slider />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;