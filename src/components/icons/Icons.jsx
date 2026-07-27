import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
gsap.registerPlugin(ScrollToPlugin);
const Icons = () => {
   const scrollTo = (id) => {
    gsap.to(window, {
      scrollTo: `#${id}`,
      duration: 1,
      ease: "power3.inOut",
    });
  };
  
  return (
     <div className="flex gap-6 text-2xl">
            
            <a 
              href="https://github.com/HarshitaJoshi04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all duration-300 hover:scale-115 active:scale-95 transform cursor-pointer"
            >
              <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/harshita-joshi-a76040383/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all duration-300 hover:scale-115 active:scale-95 transform cursor-pointer"
            >
              <FaLinkedin />
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="hover:text-blue-500 transition-all duration-300 hover:scale-115 active:scale-95 transform cursor-pointer"
            >
              <FaEnvelope />
            </button>

          </div>
  )
}

export default Icons