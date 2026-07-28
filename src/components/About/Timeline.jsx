import React, { useContext } from "react";
import { Theme } from "../themecontext/ThemeContext";

const timelineData = [
  {
    role: "Bachelor of Technology",
    company: "Computer Science & Engineering",
    duration: "2023 – 2027",
    desc: "Pursuing a Bachelor's degree in Computer Science while building a strong foundation in software development, data structures, algorithms, databases, and computer networks.",
  },
  {
    role: "Full Stack MERN Development",
    company: "Self Learning & Projects",
    duration: "2024 – Present",
    desc: "Developing scalable full-stack web applications using React, Next.js, Node.js, Express, and MongoDB with a focus on responsive UI, authentication, REST APIs, and clean architecture.",
  },
  {
    role: "AI & Automation",
    company: "Personal Projects",
    duration: "2025 – Present",
    desc: "Building AI-powered applications by integrating Large Language Models, automation workflows, and modern APIs to create intelligent, real-world web solutions.",
  },
];

const Timeline = () => {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  return (
    <div className="w-full mt-10">
      <h3 className={`text-xl font-bold mb-6 transition-colors duration-300 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
        Education & Milestones
      </h3>
      <div className="relative border-l border-blue-500/30 ml-4 md:ml-6 space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-6 md:pl-8 group">
            {/* Timeline bullet indicator */}
            <span className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border border-white group-hover:scale-125 transition-transform duration-200" />
            
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-blue-500 tracking-wider uppercase">
                {item.duration}
              </span>
              <h4 className={`text-base font-bold transition-colors ${isDark ? "text-slate-100" : "text-slate-800"}`}>
                {item.role}
              </h4>
              <span className={`text-sm font-semibold transition-colors ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {item.company}
              </span>
              <p className={`text-sm mt-2 leading-relaxed transition-colors ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
