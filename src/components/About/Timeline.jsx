import React, { useContext } from "react";
import { Theme } from "../themecontext/ThemeContext";

const timelineData = [
  {
    role: "Computer Science & Engineering Student",
    company: "University / Institute",
    duration: "2023 - Present",
    desc: "Focusing on frontend technologies, data structures, and algorithm design. Maintaining a strong academic performance.",
  },
  {
    role: "Frontend Developer Trainee / Freelance",
    company: "Self-Employed / Personal Projects",
    duration: "2024 - Present",
    desc: "Built multiple interactive web applications with React, Tailwind CSS, and GSAP. Specialized in responsive UI design and animation dynamics.",
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
