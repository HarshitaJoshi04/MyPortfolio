import React from "react";

const Para = ({ isDark = true }) => {
  return (
    <div className={`space-y-4 text-[15px] sm:text-[16px] leading-relaxed transition-colors duration-300 ${
      isDark ? "text-slate-300" : "text-slate-600"
    }`}>
      <p
        className={`leading-8 ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        I'm a passionate Full Stack Developer who enjoys building modern,
        scalable, and user-focused web applications. I specialize in the MERN
        stack and love transforming ideas into responsive, high-performance
        digital experiences with clean architecture and intuitive design.
      </p>

      <p
        className={`mt-6 leading-8 ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        Beyond frontend interfaces, I design secure backend systems, REST APIs,
        and database architectures. I also build AI-powered applications,
        such as custom chatbots that read codebase files and retrieve
        real-time answers using vector databases (like ChromaDB).
      </p>

      <p
        className={`mt-6 leading-8 ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        Currently pursuing my Bachelor's degree in Computer Science, I'm
        continuously improving my skills through hands-on projects, problem solving,
        and learning modern tech stacks. My goal is to create software that is
        fast, accessible, visually appealing, and delivers meaningful user
        experiences.
      </p>
    </div>
  );
};

export default Para;