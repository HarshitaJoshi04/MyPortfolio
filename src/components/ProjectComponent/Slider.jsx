import React, { useRef, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import blogImg from "../../assets/blogapp.png";
import studyAi from "../../assets/studyai.png";
import portfolio from "../../assets/portfolio.png";
import "swiper/css";
import "swiper/css/navigation";
import H1 from "../headingAnimation/H1";
import { Theme } from "../themecontext/ThemeContext";

const projects = [
  {
    title: "StudyAI",
    image: studyAi,
  description:
    "AI-powered MERN platform that converts YouTube videos into structured notes through automated AI workflows.",
  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "OpenAI",
    "Make.com",
    "Cloudinary"
  ],
    github: "https://github.com/HarshitaJoshi04/study-AI",
    live: "https://study-ai-two-rust.vercel.app/",
  },

  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A modern developer portfolio showcasing projects, animations, and responsive UI. Built with React, Tailwind CSS, and GSAP to deliver a smooth, high-performance user experience.",
    tech: ["React", "Tailwind CSS", "GSAP", "Vite"],
    github: "https://github.com/HarshitaJoshi04/portfolio",
    live: "https://harshitajoshi.vercel.app/",
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
          className={`hidden sm:flex absolute left-4 lg:left-8 z-10 w-11 h-11 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 active:scale-95 shadow-md backdrop-blur-sm cursor-pointer ${
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
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
{projects.map((project, index) => {
  const isUpcoming = project.github === "#" && project.live === "#";

  return (
    <SwiperSlide key={index} className="flex justify-center py-4">
      <div
        className={`group flex flex-col w-full max-w-[360px] h-[620px] overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
          isDark
            ? "bg-slate-900/60 text-white"
            : "bg-white/80 text-slate-800"
        } ${
          isUpcoming
            ? "border-dashed border-blue-500"
            : isDark
            ? "border-slate-800"
            : "border-slate-200"
        }`}
      >
        {/* Image */}
        <div className="h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {isUpcoming && (
            <span className="mb-3 w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              🚀 Coming Soon
            </span>
          )}

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
          <div className="mt-5 flex flex-wrap gap-2">
            {(project.tech || []).map((item, i) => (
              <span
                key={i}
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  isDark
                    ? "border border-blue-500/20 bg-blue-500/15 text-blue-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-auto pt-6 flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 transition ${
                isUpcoming
                  ? "pointer-events-none opacity-40 bg-slate-500"
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
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 transition ${
                isUpcoming
                  ? "pointer-events-none opacity-40 bg-slate-500"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <FiExternalLink />
              Live
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
})}
        </Swiper>

        {/* Desktop Next */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`hidden sm:flex absolute right-4 lg:right-8 z-10 w-11 h-11 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 active:scale-95 shadow-md backdrop-blur-sm cursor-pointer ${
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
