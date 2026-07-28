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
    <footer
      className={`relative overflow-hidden`}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        {/* Card wrapper */}
        <div
          className={`relative overflow-hidden rounded-[28px] sm:rounded-[36px] border backdrop-blur-xl shadow-2xl p-6 sm:p-10 lg:p-14 transition-all duration-500 ${
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

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h2
                className={`text-2xl sm:text-3xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Harshita
              </h2>

              <p
                className={`mt-4 leading-7 text-sm sm:text-base ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Passionate about building modern, responsive, and AI-powered
                web experiences with clean design and great user experience.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center md:text-left">
              <h3
                className={`uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm mb-5 ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                Navigation
              </h3>

              <ul className="space-y-3">
                {["home", "about", "projects", "contact"].map((item) => (
                  <li
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize cursor-pointer transition hover:text-blue-500 text-sm sm:text-base ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="text-center md:text-left">
              <h3
                className={`uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm mb-5 ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                Connect
              </h3>

              <div className="flex justify-center md:justify-start">
                <Icons />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center md:text-left flex flex-col">
              <h3
                className={`uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm mb-5 ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                Let's Build
              </h3>

              <p
                className={`mb-6 text-sm sm:text-base ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Interested in working together? Let's create something
                amazing.
              </p>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-fit px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 transition self-center md:self-start"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Divider */}
          <div
            className={`relative my-10 border-t ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}
          />

          {/* Bottom */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-5">
            <p
              className={`text-xs sm:text-sm text-center md:text-left ${
                isDark ? "text-slate-500" : "text-slate-500"
              }`}
            >
              © {new Date().getFullYear()} Harshita. All Rights Reserved.
            </p>

            <button
              onClick={() => scrollToSection("home")}
              className={`px-5 py-2 rounded-full border transition hover:-translate-y-1 text-sm ${
                isDark
                  ? "border-white/10 text-white hover:bg-white/10"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;