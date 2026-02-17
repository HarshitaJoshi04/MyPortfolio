
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Icons from "./icons/Icons";

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {

  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${id}`,
      ease: "power3.inOut",
    });
  };

  return (
    <footer className="relative  bg-[#19232c] text-gray-300 px-8 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-white">Harshita</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Building clean and modern web experiences.
          </p>
        </div>

        {/* Center */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li 
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-white text-gray-400 transition duration-300"
            >
              Home
            </li>
            <li 
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer hover:text-white text-gray-400 transition duration-300"
            >
              Projects
            </li>
            <li 
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-white text-gray-400 transition duration-300"
            >
              About
            </li>
            <li 
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-white text-gray-400 transition duration-300"
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">
            Connect
          </h3>
         <Icons/>
        </div>
      </div>
       
      {/* Bottom */}
      <div className="border-t border-gray-800 mt-14 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Harshita. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
