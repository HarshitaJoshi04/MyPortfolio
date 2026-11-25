import React, { useRef, useContext, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, useReducedMotion } from "motion/react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaTimes,
} from "react-icons/fa";

import { FiExternalLink } from "react-icons/fi";

import invoice from "../../assets/ai-invoice.png";
import playroom from "../../assets/playroom.png";
import codeSense from "../../assets/codeSense.png";

import invoiceVideo from "../../assets/invoice.mp4";
import playroomVideo from "../../assets/playroom.mp4";
import codeSenseVideo from "../../assets/codeSense.mp4";

import "swiper/css";
import "swiper/css/navigation";

import { Theme } from "../themecontext/ThemeContext";

const projects = [
  {
    title: "CodeSenseAI",
    image: codeSense,
    video: codeSenseVideo,
    description:
      "A repository-aware AI developer assistant that analyzes local and GitHub codebases and answers questions about files, project structure, dependencies, and code logic using context-grounded retrieval.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "ChromaDB",
      "Groq API",
    ],
    live: "https://code-sense-ai-green.vercel.app/",
  },

{
  title: "Voice Word Party – playRoom",
  image: playroom,
  video: playroomVideo,
  description:
    "Interactive multiplayer word game enabling players to connect, communicate, and enjoy real-time word challenges using Socket.IO.",
  tech: [
    "React.js",
    "Node.js",
    "Vite",
    "Socket.IO",
    "Capacitor",
    "Android"
  ],
  live: "https://playroom-peach.vercel.app/",
},

  {
    title: "AI Invoice Intelligence & Automation",
    image: invoice,
    video: invoiceVideo,
    description:
      "AI-powered invoice processing platform supporting manual uploads and email-triggered automation for extraction, validation, duplicate detection, and database storage.",
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "n8n",
      "Groq AI",
      "OCR",
      "Automation",
    ],
    live: "https://ai-invoice-fv19.onrender.com",
  },
];

export default function Slider() {
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";
  const shouldReduceMotion = useReducedMotion();

  const swiperRef = useRef(null);

  // Selected video for preview modal
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <section className="py-5 sm:py-8 w-full flex flex-col items-center text-center overflow-hidden">
        <div className="relative w-full flex items-center justify-center">
          {/* Desktop Previous Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`hidden sm:flex absolute left-2 lg:left-4 z-20 w-11 h-11
            items-center justify-center rounded-full border transition-all
            duration-200 hover:scale-110 active:scale-95 shadow-md
            backdrop-blur-sm cursor-pointer ${
              isDark
                ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
                : "bg-white/60 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <FaChevronLeft size={18} />
          </button>

          {/* Swiper */}
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
            className="w-full px-0 sm:px-14 lg:px-20"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.title} className="flex justify-center py-5">
                {/* Project Card */}
                <motion.article
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 34, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.015 }}
                  className={`project-card group relative flex flex-col w-full max-w-[380px] min-h-[590px]
                  overflow-hidden rounded-[28px] border backdrop-blur-xl
                  shadow-xl transition-shadow duration-500 hover:shadow-2xl ${
                    isDark
                      ? "bg-slate-950/75 border-white/10 text-white hover:border-cyan-300/40"
                      : "bg-white/85 border-white text-slate-800 hover:border-blue-300"
                  }`}
                >
                  <div className="project-card-glow pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* ================= VIDEO / IMAGE ================= */}
                  <div
                    className="relative h-52 overflow-hidden bg-slate-950 cursor-pointer group/video focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-cyan-300"
                    onClick={() => setSelectedVideo(project)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Play ${project.title} demo`}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedVideo(project);
                      }
                    }}
                  >
                    {/* Screenshot */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover
                      transition-[transform,opacity] duration-700 ease-out group-hover/video:scale-110
                      group-hover/video:opacity-0"
                    />

                    {/* Video */}
                    <video
                      src={project.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover
                      opacity-0 transition-[transform,opacity] duration-500 group-hover/video:scale-105
                      group-hover/video:opacity-100"
                      onMouseEnter={(e) => {
                        e.currentTarget.play().catch(() => {});
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />

                    {/* Play Button */}
                    <div
                      className="absolute inset-0 flex items-center justify-center
                      pointer-events-none"
                    >
                      <div
                        className="w-14 h-14 rounded-full bg-black/60
                        backdrop-blur-sm flex items-center justify-center
                        text-white transition-all duration-300
                        group-hover/video:scale-110
                        group-hover/video:opacity-0"
                      >
                        <FaPlay size={18} className="ml-1" />
                      </div>
                    </div>

                    {/* Demo Label */}
                    <div
                      className="absolute top-3 left-3 px-3 py-1.5 rounded-full
                      bg-black/60 backdrop-blur-sm text-white text-xs
                      font-medium"
                    >
                      ▶ Demo
                    </div>

                    {/* Click to Preview */}
                    <div
                      className="absolute bottom-3 right-3 px-3 py-1.5
                      rounded-lg bg-black/60 backdrop-blur-sm
                      text-white text-xs opacity-0
                      group-hover/video:opacity-100 transition-opacity"
                    >
                      Click to preview
                    </div>
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="relative z-[1] flex flex-col flex-1 p-6">
                    {/* Title */}
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`mt-3 text-sm leading-7 flex-1 ${
                        isDark
                          ? "text-slate-300"
                          : "text-slate-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tech.map((item, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs
                          font-medium ${
                            isDark
                              ? "bg-blue-500/15 text-blue-300 border border-blue-500/20"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Live Button */}
                    <div className="flex gap-3 mt-6">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2
                        flex-1 py-2.5 rounded-xl text-white
                        bg-blue-600 hover:bg-blue-700 transition"
                      >
                        <FiExternalLink />
                        Live
                      </a>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop Next Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`hidden sm:flex absolute right-2 lg:right-4 z-20
            w-11 h-11 items-center justify-center rounded-full border
            transition-all duration-200 hover:scale-110 active:scale-95
            shadow-md backdrop-blur-sm cursor-pointer ${
              isDark
                ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
                : "bg-white/60 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <FaChevronRight size={18} />
          </button>
        </div>

        {/* ================= MOBILE BUTTONS ================= */}
        <div className="flex sm:hidden gap-6 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`w-11 h-11 flex items-center justify-center
            rounded-full border shadow-sm cursor-pointer ${
              isDark
                ? "bg-slate-900/60 border-slate-800 text-slate-300"
                : "bg-white/60 border-slate-200 text-slate-600"
            }`}
          >
            <FaChevronLeft size={18} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`w-11 h-11 flex items-center justify-center
            rounded-full border shadow-sm cursor-pointer ${
              isDark
                ? "bg-slate-900/60 border-slate-800 text-slate-300"
                : "bg-white/60 border-slate-200 text-slate-600"
            }`}
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* ================= VIDEO PREVIEW MODAL ================= */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm
          flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10
              rounded-full bg-white/10 hover:bg-white/20
              text-white flex items-center justify-center
              transition z-10"
            >
              <FaTimes size={20} />
            </button>

            {/* Video */}
            <video
              src={selectedVideo.video}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[80vh] rounded-2xl shadow-2xl
              bg-black"
            />

            {/* Project Name */}
            <h3 className="text-white text-center text-lg font-semibold mt-4">
              {selectedVideo.title}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}
