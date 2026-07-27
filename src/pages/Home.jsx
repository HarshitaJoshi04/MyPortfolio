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
    <div className="relative w-full min-h-screen flex items-center justify-center py-12 md:py-24">
      <section
        id="home"
        className="relative z-10 flex items-center justify-center w-full px-4"
      >
        <div
          className={`w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-10 p-8 md:p-12 rounded-3xl border transition-all duration-500 ${
            isDark
              ? "bg-slate-900/60 border-slate-800/80 text-white shadow-2xl shadow-black/20"
              : "bg-white/80 border-slate-200/80 text-slate-800 shadow-xl shadow-slate-200/50"
          } backdrop-blur-md`}
        >
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <div className="flex flex-col gap-3">
              <HeroText />

              <H1
                text="Creative Frontend Engineer"
                duration={0.6}
                delay={1.2}
                isDark={isDark}
                stagger={0.2}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
              <Icons />
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Opening Resume... (Replace the href in Home.jsx with your actual PDF link!)");
                }}
                className={`px-6 py-2 text-sm font-semibold rounded-full border transition-all duration-300 shadow-sm active:scale-95 flex items-center gap-2 cursor-pointer ${
                  isDark
                    ? "bg-blue-600 border-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20"
                    : "bg-indigo-600 border-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20"
                }`}
              >
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
              <Orb
                hoverIntensity={0}
                rotateOnHover
                hue={3}
                forceHoverState={false}
                backgroundColor={isDark ? "#0b0f19" : "#f0f4f8"}
                baseColor1={isDark ? "#3b82f6" : "#2563eb"}
                baseColor2={isDark ? "#60a5fa" : "#60a5fa"}
                baseColor3={isDark ? "#1d4ed8" : "#1e40af"}
              />

              <img
                src={profileImg}
                alt="Harshita"
                className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white/20 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;