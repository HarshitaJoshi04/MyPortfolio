import React, { useRef, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import studyAi from "../../assets/studyai.png";
import portfolio from "../../assets/portfolio.png";
import "swiper/css";
import "swiper/css/navigation";
import H1 from "../headingAnimation/H1";
import { Theme } from "../themecontext/ThemeContext";
import codeSense from "../../assets/codeSense.png"; // Import the codeSense image
const projects = [
  {
    title: "CodeSenseAI",
    image: codeSense,
    description:
      "A repository-aware AI developer assistant that analyzes local and GitHub codebases and answers questions about files, project structure, dependencies, and code logic using context-grounded retrieval.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "ChromaDB",
      "Groq API"
    ],
    github: "https://github.com/HarshitaJoshi04/CodeSenseAI",
    live: "https://code-sense-ai-green.vercel.app/"
  },

  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A modern developer portfolio showcasing projects, animations, and responsive UI. Built with React, Tailwind CSS, and GSAP to deliver a smooth, high-performance user experience.",
    tech: ["React", "Tailwind CSS", "GSAP", "Vite"],
    github: "https://github.com/HarshitaJoshi04/MyPortfolio",
    live: "http://harshita-portfolio-88.vercel.app/",
  },

{
  title: "Upcoming Project",
  image: "https://placehold.co/600x400/0f172a/ffffff?text=Coming+Soon",
  description:
    "Currently building an AI-powered full-stack application with workflow automation, modern UI, and scalable backend architecture.",
  tech: [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "AI",
    "Automation",
  ],
  github: "#",
  live: "#",
},

{
  title: "Upcoming Project",
  image: "https://placehold.co/600x400/0f172a/ffffff?text=Coming+Soon",
  description:
    "Currently building an AI-powered full-stack application with workflow automation, modern UI, and scalable backend architecture.",
  tech: [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "AI",
    "Automation",
  ],
  github: "#",
  live: "#",
}
];

export default function Slider() {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";
  const swiperRef = useRef(null);

  return (
    <section id="projects" className="py-12 w-full flex flex-col items-center text-center overflow-hidden">
      <div className="mb-10">
        <H1
          text="Projects"
          duration={0.7}
          isDark={isDark}
          stagger={0.2}
        />
      </div>

<div className="relative w-full flex items-center justify-center">
  {/* Desktop Prev */}
  <button
    onClick={() => swiperRef.current?.slidePrev()}
    className={`hidden sm:flex absolute left-2 lg:left-4 z-20 w-11 h-11 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 active:scale-95 shadow-md backdrop-blur-sm cursor-pointer ${
      isDark
        ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
        : "bg-white/60 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`}
  >
    <FaChevronLeft size={18} />
  </button>

  <Swiper
    modules={[Navigation]}
    onSwiper={(swiper) => (swiperRef.current = swiper)}
    spaceBetween={24}
    slidesPerView={1}
    centeredSlides={false}
    loop={true}
    speed={700}
    grabCursor={true}
    breakpoints={{
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="w-full px-0 sm:px-14 lg:px-20"
  >
          {projects.map((project, index) => (
         <SwiperSlide key={index} className="flex justify-center py-4">
<div
  className={`group flex flex-col w-full max-w-[360px] h-[620px] overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
    isDark
      ? "bg-slate-900/60 border-slate-800 text-white"
      : "bg-white/80 border-slate-200 text-slate-800"
  }`}
>
    {/* Image */}
    <div className="h-52 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
    {/* Content */}
    <div className="flex flex-col flex-1 p-6">
      <h3
        className={`text-xl font-bold ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {project.title}
      </h3>

      <p
        className={`mt-3 text-sm leading-7 flex-1 ${
          isDark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((item, i) => (
          <span
            key={i}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              isDark
                ? "bg-blue-500/15 text-blue-300 border border-blue-500/20"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl transition ${
            project.github === "#"
              ? "pointer-events-none opacity-40"
              : isDark
              ? "bg-slate-800 hover:bg-blue-600"
              : "bg-slate-100 hover:bg-blue-600 hover:text-white"
          }`}
        >
          <FaGithub />
          Code
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl transition ${
            project.live === "#"
              ? "pointer-events-none opacity-40"
              : isDark
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          <FiExternalLink />
          Live
        </a>
      </div>
    </div>
  </div>
</SwiperSlide>
          ))}
        </Swiper>

  {/* Desktop Next */}
  <button
    onClick={() => swiperRef.current?.slideNext()}
    className={`hidden sm:flex absolute right-2 lg:right-4 z-20 w-11 h-11 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 active:scale-95 shadow-md backdrop-blur-sm cursor-pointer ${
      isDark
        ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
        : "bg-white/60 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`}
  >
    <FaChevronRight size={18} />
  </button>
</div>
      {/* Mobile Buttons */}
      <div className="flex sm:hidden gap-6 mt-8">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`w-11 h-11 flex items-center justify-center rounded-full border shadow-sm cursor-pointer ${
            isDark
              ? "bg-slate-900/60 border-slate-800 text-slate-300 active:bg-slate-800"
              : "bg-white/60 border-slate-200 text-slate-600 active:bg-slate-100"
          }`}
        >
          <FaChevronLeft size={18} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`w-11 h-11 flex items-center justify-center rounded-full border shadow-sm cursor-pointer ${
            isDark
              ? "bg-slate-900/60 border-slate-800 text-slate-300 active:bg-slate-800"
              : "bg-white/60 border-slate-200 text-slate-600 active:bg-slate-100"
          }`}
        >
          <FaChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
