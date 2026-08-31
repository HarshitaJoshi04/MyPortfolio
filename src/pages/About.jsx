import React, { useContext } from "react";
import { Theme } from "../components/themecontext/ThemeContext";
import H1 from "../components/headingAnimation/H1";
import Para from "../components/About/Para";
import gif from "../assets/web-design.gif";
import Skills from "../components/About/Skills";
import Timeline from "../components/About/Timeline";

const About = () => {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  return (
    <div className="relative min-h-screen overflow-hidden">
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
        id="about"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-20"
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

          <div className="relative space-y-16 sm:space-y-20 lg:space-y-24">
            {/* ---------- Hero ---------- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center lg:min-h-[70vh]">
              {/* LEFT */}
              <div className="text-center lg:text-left">
                <span className="uppercase tracking-[3px] sm:tracking-[5px] text-blue-500 text-[10px] sm:text-xs font-semibold">
                  KNOW MORE
                </span>

                <div className="mt-4 flex justify-center lg:justify-start">
                  <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />
                </div>

                <div className="mt-6">
                  <H1
                    text="About Me"
                    duration={0.7}
                    delay={0}
                    stagger={0.15}
                    isDark={isDark}
                  />
                </div>

                <div className="mt-8">
                  <Para isDark={isDark} />
                </div>

                <div className="mt-10">
                 

                  <div
                    className={`rounded-2xl sm:rounded-3xl text-center p-5 sm:p-6 backdrop-blur-md border ${
                      isDark
                        ? "bg-slate-900/70 border-white/10 text-white"
                        : "bg-white/70 border-white shadow-lg shadow-blue-100"
                    }`}
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">
                      MERN/AI Automation
                    </h2>
                    <p
                      className={`mt-2 text-sm sm:text-base ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      Tech Stack
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative flex flex-col items-center mt-4 lg:mt-0">
                {/* Decorative ring - hidden on very small screens to avoid clipping */}
                <div
                  className={`hidden xs:block absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full border ${
                    isDark ? "border-white/10" : "border-blue-300/40"
                  } animate-pulse`}
                />

                <div
                  className={`relative rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 backdrop-blur-xl border ${
                    isDark
                      ? "bg-white/[0.03] border-white/10"
                      : "bg-white/50 border-white/70"
                  }`}
                >
                  <img
                    src={gif}
                    alt="Developer"
                    className="w-48 xs:w-56 sm:w-72 md:w-80 lg:w-96 object-contain"
                  />

                  {/* Floating Cards - absolute on lg+ only, avoids overlap on smaller screens */}
                  <div
                    className={`hidden lg:block absolute -top-6 -left-6 px-5 py-3 rounded-2xl backdrop-blur-md border ${
                      isDark
                        ? "bg-slate-900/70 border-white/10 text-white"
                        : "bg-white/60 backdrop-blur-xl border-white shadow-xl shadow-blue-100"
                    }`}
                  >
                    <p className="text-xs text-slate-400">Frontend</p>
                    <p className="font-semibold">React & Next.js</p>
                  </div>

                  <div
                    className={`hidden lg:block absolute bottom-6 -right-6 px-5 py-3 rounded-2xl backdrop-blur-md border ${
                      isDark
                        ? "bg-slate-900/70 border-white/10 text-white"
                        : "bg-white/80 border-slate-200"
                    }`}
                  >
                    <p className="text-xs text-slate-400">Learning</p>
                    <p className="font-semibold">AI Automation</p>
                  </div>
                </div>

                {/* Stat grid for small/medium screens only — hidden on phones, replaced by floating cards on lg+ */}
                <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3 mt-8 w-full max-w-xs">
                  <div
                    className={`px-4 py-3 rounded-2xl border text-center ${
                      isDark
                        ? "bg-slate-900/70 border-white/10 text-white"
                        : "bg-white/70 border-white shadow-md shadow-blue-100"
                    }`}
                  >
                    <p className="text-[10px] text-slate-400">Frontend</p>
                    <p className="font-semibold text-sm">React & Next.js</p>
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl border text-center ${
                      isDark
                        ? "bg-slate-900/70 border-white/10 text-white"
                        : "bg-white/70 border-white shadow-md shadow-blue-100"
                    }`}
                  >
                    <p className="text-[10px] text-slate-400">Learning</p>
                    <p className="font-semibold text-sm">AI Automation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              className={`h-px ${
                isDark
                  ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  : "bg-gradient-to-r from-transparent via-blue-200 to-transparent"
              }`}
            />

            <Skills />

            {/* Divider */}
            <div
              className={`h-px ${
                isDark
                  ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  : "bg-gradient-to-r from-transparent via-blue-200 to-transparent"
              }`}
            />

            <Timeline />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;