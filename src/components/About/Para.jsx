import React from "react";

const Para = ({ isDark = true }) => {
  return (
    <div
      className={`space-y-4 text-[15px] sm:text-[16px] leading-relaxed transition-colors duration-300 ${
        isDark ? "text-slate-300" : "text-slate-600"
      }`}
    >
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
        Beyond web development, I build AI-powered applications and intelligent
        automation workflows using technologies such as Groq, Llama, n8n, and
        REST APIs. I've worked on projects involving AI agents, invoice
        processing, workflow automation, codebase analysis, and RAG systems
        using vector databases like ChromaDB.
      </p>

      <p
        className={`mt-6 leading-8 ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        Currently pursuing my Bachelor's degree in Computer Science, I'm
        continuously strengthening my skills through hands-on projects,
        problem-solving, and exploring modern technologies. My goal is to build
        software that is scalable, efficient, visually appealing, and capable
        of solving real-world problems through thoughtful engineering and
        automation.
      </p>
    </div>
  );
};

export default Para;