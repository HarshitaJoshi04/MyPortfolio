import React, { useContext } from "react";
import { Theme } from "../themecontext/ThemeContext";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS"],
  },
  {
    title: "Libraries & Animation",
    skills: ["GSAP", "Framer Motion", "Swiper.js", "WebGL / OGL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "npm / Vite", "Vercel / Netlify", "VS Code"],
  },
];

const Skills = () => {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  return (
    <div className="w-full mt-10">
      <h3 className={`text-xl font-bold mb-6 transition-colors duration-300 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
        Technical Toolkit
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-sm ${
              isDark
                ? "bg-slate-950/40 border-slate-800 text-slate-100"
                : "bg-slate-50/50 border-slate-200 text-slate-800"
            }`}
          >
            <h4 className="font-bold text-base mb-4 border-b pb-2 border-slate-200/10 text-blue-500">
              {category.title}
            </h4>
            <ul className="space-y-2">
              {category.skills.map((skill, sIndex) => (
                <li key={sIndex} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className={isDark ? "text-slate-300" : "text-slate-600"}>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
