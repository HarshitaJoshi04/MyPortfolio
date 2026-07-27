import React, { useRef, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import blogImg from "../../assets/blogapp.png";
import creator from "../../assets/creator.png";
import portfolio from "../../assets/portfolio.png";
import "swiper/css";
import "swiper/css/navigation";
import H1 from "../headingAnimation/H1";
import { Theme } from "../themecontext/ThemeContext";

const projects = [
  {
    title: "Creators Platform",
    image: creator,
    description:
      "A full-stack publishing platform for creators built with React, Node.js, and Express. Features secure user authentication, interactive dashboards, and live content publishing pipelines.",
    github: "https://github.com/HarshitaJoshi04/creator-platform",
    live: "https://creator-platform-peach.vercel.app/",
  },
  {
    title: "Blog Application",
    image: blogImg,
    description:
      "A responsive blogging platform developed using React and Tailwind CSS. Implements dynamic markdown parsing, category filters, and stateful search to provide high performance reading experiences.",
    github: "https://github.com/HarshitaJoshi04/blog-app",
    live: "#",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A portfolio showcasing frontend engineering projects. Built with React 19, Tailwind CSS v4, and GSAP ScrollTrigger to achieve smooth layouts and high-fidelity scroll animations.",
    github: "https://github.com/HarshitaJoshi04/portfolio",
    live: "https://harshitajoshi.vercel.app/",
  },
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
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          centeredSlides
          loop={projects.length > 2}
          spaceBetween={24}
          className="w-[85%]"
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center py-4">
              <div className={`w-full max-w-[360px] rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 shadow-lg ${
                isDark
                  ? "bg-slate-900/60 border-slate-800/80 text-white shadow-black/25"
                  : "bg-white/80 border-slate-200/80 text-slate-800 shadow-slate-100"
              } backdrop-blur-md`}>
                
                <div className="relative overflow-hidden h-[180px] border-b border-slate-200/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-5 space-y-2 text-left">
                  <h3 className={`text-base md:text-lg font-bold ${
                    isDark ? "text-slate-100" : "text-slate-800"
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-start gap-4 px-5 pb-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      isDark
                        ? "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      isDark
                        ? "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
