import React, { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { Theme } from "../../themecontext/ThemeContext";

import { FaMoon, FaSun } from "react-icons/fa";

const Themetoggle = () => {
  const btnRef = useRef(null);
  const [theme, setTheme] = useContext(Theme);

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
    <div
      ref={btnRef}
      className="shadow-lg hover:shadow-gray-500/50 px-5 py-1 rounded flex items-center justify-center"
    >
      <button onClick={handleClick}>
        {theme === "Dark" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default Themetoggle;
