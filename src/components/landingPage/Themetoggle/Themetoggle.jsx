import React, { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { Theme } from "../../themecontext/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Themetoggle = () => {
  const btnRef = useRef(null);
  const [theme, setTheme] = useContext(Theme);
  const isDark = theme === "Dark";

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { scale: 0.8, rotate: -90, opacity: 0 },
      { scale: 1, rotate: 0, opacity: 1, duration: 0.4 }
    );
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`p-2.5 rounded-xl border transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer flex items-center justify-center ${
        isDark
          ? "bg-slate-900/80 border-slate-800 text-yellow-400 hover:bg-slate-800"
          : "bg-white/80 border-slate-200 text-indigo-600 hover:bg-slate-50"
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

export default Themetoggle;
