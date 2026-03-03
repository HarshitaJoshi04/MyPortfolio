import React, {  useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import blogImg from "../../assets/blogapp.png"
import "swiper/css";
import "swiper/css/navigation";
import H1 from "../headingAnimation/H1";


  const projects = [
  {
    title: "BlogApp",
    image: blogImg,
    description:
      "Full-stack blogging platform built with React, Redux Toolkit, Appwrite, and Multer. Includes authentication, post management, and media uploads.",
    github: "https://github.com/HarshitaJoshi04/BlogApp",
    live: "https://blog-app-git-main-harshitajoshi04s-projects.vercel.app",
  },
  {
    title: "Portfolio Website",
    image:
      "https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg",
    description:
      "Personal portfolio built using React and Tailwind CSS showcasing projects, animations, and responsive UI design.",
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce App",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s",
    description:
      "Modern e-commerce platform with product listing, cart management, authentication, and order flow.",
    github: "#",
    live: "#",
  },
  {
    title: "AI Chatbot",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCzmpVvfm0M1dQ0304Ak70NcSH1byDvKclw&s",
    description:
      "AI-powered chatbot application with conversational UI and intelligent response handling.",
    github: "#",
    live: "#",
  },
];

export default function Slider() {

  const swiperRef = useRef(null);

  return (
    <section id="projects" className="py-20 flex flex-col items-center text-center overflow-hidden">
         <H1
                text="Projects"
                duration={0.7}
        
                stagger={0.2}
              />

      <div className="relative w-full flex items-center justify-center">

        {/* Desktop Prev */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden sm:flex absolute left-4 lg:left-8 z-10 w-11 h-11 items-center justify-center rounded-full bg-white/40 hover:bg-white/25 text-white border border-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
        >
          <FaChevronLeft size={18} />
        </button>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          centeredSlides
          loop={projects.length > 3}
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
              <div className="w-full max-w-[360px] bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/40 transition-transform duration-300 hover:-translate-y-1">

                <div className="relative overflow-hidden h-[200px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

        <div className="p-5 space-y-2">
  <h3 className="text-base md:text-lg font-semibold text-zinc-900">
    {project.title}
  </h3>

  <p className="text-sm text-zinc-600 leading-relaxed">
    {project.description}
  </p>
</div>

                <div className="flex justify-center gap-6 p-5 ">
                  <a
                    href={project.github}
                    className="hover:bg-gray-400 bg-gray-300 p-2 rounded text-black transition"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href={project.live}
                    className="hover:bg-gray-400 bg-gray-300 p-2 rounded text-black transition"
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
          className="hidden sm:flex absolute right-4 lg:right-8 z-10 w-11 h-11 items-center justify-center rounded-full bg-white/40 hover:bg-white/25 text-white border border-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="flex sm:hidden gap-6 mt-8">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/40 text-white border border-white/20"
        >
          <FaChevronLeft size={18} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/40 text-white border border-white/20"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

    </section>
  );
}
