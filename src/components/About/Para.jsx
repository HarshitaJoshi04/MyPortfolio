import React from "react";

const Para = ({ isDark = true }) => {
  return (
    <div className={`space-y-4 text-[15px] sm:text-[16px] leading-relaxed transition-colors duration-300 ${
      isDark ? "text-slate-300" : "text-slate-600"
    }`}>
      <p>
        I’m a frontend developer who enjoys turning ideas into clean,
        interactive web experiences. I focus on building responsive,
        user-friendly interfaces using modern technologies and smooth
        animations that make products feel alive.
      </p>
      <p>
        I’m constantly learning and refining my skills, exploring new tools,
        and improving how I build. My goal is simple: to create digital
        experiences that are fast, elegant, and meaningful.
      </p>
    </div>
  );
};

export default Para;