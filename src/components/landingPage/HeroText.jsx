import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { Theme } from "../themecontext/ThemeContext";

const HeroText = ({ duration = 0.5, delay = 0.3, stagger = 0.25 }) => {
  const textRef = useRef(null);
  const themeContext = useContext(Theme);
  const theme = themeContext ? themeContext[0] : "Dark";
  const isDark = theme === "Dark";

  useEffect(() => {
    gsap.from(textRef.current.children, {
      y: 60,
      opacity: 0,
      delay: delay,
      duration: duration,
      stagger: stagger,
      ease: "power3.out",
    });
  }, [delay, duration, stagger]);

  return (
    <h1
      ref={textRef}
      className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <span className="inline-block mr-2">Hi,</span>
      <span className="inline-block mr-2">I’m</span>
      <span className={`inline-block bg-gradient-to-r bg-clip-text text-transparent pb-1 ${
        isDark 
          ? "from-blue-400 via-indigo-400 to-purple-400" 
          : "from-blue-600 via-indigo-600 to-purple-600"
      }`}>
        Harshita
      </span>
    </h1>
  );
};

export default HeroText;