import React from "react";

const Para = ({ isDark = true }) => {
  return (
    <div className={`${isDark ? "text-gray-700" : "text-gray-700"} text-[14px] lg:text-[18px] md:text-[16px]  sm:text-sm`}>
          <p className="text-md text-zinc-600 leading-relaxed">
        I’m a frontend developer who enjoys turning ideas into clean,
        interactive web experiences. I focus on building responsive,
        user-friendly interfaces using modern technologies and smooth
        animations that make products feel alive.
      </p>
      <p className="text-md text-zinc-600 leading-relaxed">
        I’m constantly learning and refining my skills, exploring new tools,
        and improving how I build. My goal is simple to create digital
        experiences that are fast, elegant, and meaningful.
      </p>
    </div>
  );
};

export default Para;