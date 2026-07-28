import React, { useContext } from "react";
import Orb from "../components/landingPage/Orb";
import profileImg from "../assets/img2.png";
import HeroText from "../components/landingPage/HeroText";
import { Theme } from "../components/themecontext/ThemeContext";
import Icons from "../components/icons/Icons";
import H1 from "../components/headingAnimation/H1";

const Home = () => {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  return (
    <div className="relative min-h-screen overflow-hidden">
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

      {/* Small Top Labels */}
      <div className="absolute top-6 sm:top-20 left-6 sm:left-8 lg:left-28 z-20">
        <p
          className={`text-[9px] sm:text-[11px] tracking-[3px] sm:tracking-[5px] uppercase ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Portfolio '27
        </p>
      </div>

      <div className="absolute top-6 sm:top-20 right-6 sm:right-8 lg:right-28 text-right z-20">
        <p className="text-[9px] sm:text-[11px] tracking-[3px] sm:tracking-[5px] uppercase text-slate-400">
          Based in India
        </p>
        <p
          className={`text-[11px] sm:text-sm font-semibold ${
            isDark ? "text-white" : "text-slate-800"
          }`}
        >
          Available for Internship
        </p>
      </div>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 min-h-screen flex items-center py-24 sm:py-28 lg:py-20"
      >
        {/* Card wrapper */}
        <div
          className={`relative overflow-hidden w-full rounded-[28px] sm:rounded-[36px] border backdrop-blur-xl px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 shadow-2xl ${
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

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <HeroText />

              <h1
                className={`mt-5 text-5xl xs:text-6xl sm:text-7xl lg:text-[110px] xl:text-[120px] leading-none font-bold tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Building
              </h1>

              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] leading-none italic font-light bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                digital.
              </h1>

              <div className="mt-8">
                <H1
                  text="Full Stack Developer"
                  duration={0.6}
                  delay={1}
                  stagger={0.1}
                  isDark={isDark}
                />
              </div>

              <p
                className={`mt-8 max-w-xl mx-auto lg:mx-0 leading-7 sm:leading-8 text-sm sm:text-base ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                 Full Stack Developer specializing in React, Next.js, Node.js, Express, and MongoDB. I craft responsive web experiences, build scalable backend systems, and develop AI-powered applications focused on performance, usability, and clean architecture.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="#projects"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition text-white font-medium shadow-xl shadow-blue-500/30 text-center"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className={`px-8 py-4 rounded-full border transition text-center ${
                    isDark
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "bg-white/70 backdrop-blur-xl border-white shadow-lg shadow-blue-100 hover:bg-white"
                  }`}
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 flex justify-center lg:justify-start">
                <Icons />
              </div>
            </div>

            {/* Right */}
            <div className="relative flex justify-center mt-4 lg:mt-0">
              {/* Decorative Rings - hidden on very small screens to avoid clipping */}
              <div
                className={`hidden xs:block absolute w-64 h-64 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-full border ${
                  isDark ? "border-white/10" : "border-blue-300/40"
                } animate-pulse`}
              />

              <div
                className={`hidden xs:block absolute w-72 h-72 sm:w-[430px] sm:h-[430px] lg:w-[560px] lg:h-[560px] rounded-full border ${
                  isDark ? "border-blue-500/10" : "border-blue-400/30"
                }`}
              />

              <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
                <Orb
                  hoverIntensity={0}
                  rotateOnHover
                  hue={3}
                  forceHoverState={false}
                  backgroundColor={isDark ? "#0b0f19" : "#f8fbff"}
                  baseColor1={isDark ? "#dbeafe" : "#3b82f6"}
                  baseColor2="#60a5fa"
                  baseColor3="#1d4ed8"
                />

                <img
                  src={profileImg}
                  alt="Profile"
                  className="absolute inset-0 m-auto w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white/20 shadow-[0_0_80px_rgba(59,130,246,.45)]"
                />

                {/* Floating Cards - absolute on sm+, hidden on the smallest screens */}
                <div
                  className={`hidden sm:block absolute top-6 -left-10 px-5 py-3 rounded-2xl backdrop-blur-md border ${
                    isDark
                      ? "bg-slate-900/70 border-white/10 text-white"
                      : "bg-white/60 backdrop-blur-xl border-white shadow-xl shadow-blue-100"
                  }`}
                >
                  <p className="text-xs text-slate-400">Experience</p>
                  <p className="font-semibold">MERN Stack</p>
                </div>

                <div
                  className={`hidden sm:block absolute bottom-10 -right-12 px-5 py-3 rounded-2xl backdrop-blur-md border ${
                    isDark
                      ? "bg-slate-900/70 border-white/10 text-white"
                      : "bg-white/80 border-slate-200"
                  }`}
                >
                  <p className="text-xs text-slate-400">Currently Building</p>
                  <p className="font-semibold">AI Web Apps</p>
                </div>

                <div
                  className={`hidden lg:block absolute top-1/2 -right-16 px-5 py-3 rounded-2xl backdrop-blur-md border ${
                    isDark
                      ? "bg-slate-900/70 border-white/10 text-white"
                      : "bg-white/80 border-slate-200"
                  }`}
                >
                  <p className="text-xs text-slate-400">Tech</p>
                  <p className="font-semibold">React • Next • AI</p>
                </div>
              </div>

              {/* Mobile-only stat grid, replaces the floating cards below sm breakpoint */}
              <div className="grid sm:hidden grid-cols-2 gap-3 mt-8 w-full max-w-xs">
                <div
                  className={`px-4 py-3 rounded-2xl border text-center ${
                    isDark
                      ? "bg-slate-900/70 border-white/10 text-white"
                      : "bg-white/70 border-white shadow-md shadow-blue-100"
                  }`}
                >
                  <p className="text-[10px] text-slate-400">Experience</p>
                  <p className="font-semibold text-sm">MERN Stack</p>
                </div>
                <div
                  className={`px-4 py-3 rounded-2xl border text-center ${
                    isDark
                      ? "bg-slate-900/70 border-white/10 text-white"
                      : "bg-white/70 border-white shadow-md shadow-blue-100"
                  }`}
                >
                  <p className="text-[10px] text-slate-400">Building</p>
                  <p className="font-semibold text-sm">AI Web Apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Fade */}
      <div
        className={`absolute bottom-0 left-0 w-full h-20 sm:h-32 lg:h-40 bg-gradient-to-t ${
          isDark ? "from-[#050816]" : "from-white"
        } to-transparent pointer-events-none`}
      />
    </div>
  );
};

export default Home;