import { useContext, useEffect, useState } from "react";
import NavLinks from "../navbarComponents/NavLinks";
import Themetoggle from "./Themetoggle/Themetoggle";
import { Theme } from "../themecontext/ThemeContext";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { FiMenu, FiX } from "react-icons/fi";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = ({ open, onClose,transparent = false }) => {
  const scrollTo = (id) => {
    gsap.to(window, {
      scrollTo: `#${id}`,
      duration: 1,
      ease: "power3.inOut",
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > window.innerHeight - 100);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
     <nav
  className={`fixed top-5 right-5 w-auto flex gap-4 rounded-2xl px-4 py-3 z-50 ${
    isDark
      ? "bg-slate-950/70 backdrop-blur-xl border border-white/10"
      : "bg-white/80 backdrop-blur-xl border border-slate-200"
  }`}
>
          <div className="hidden md:block">
          <NavLinks />
        </div>

        <Themetoggle />

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(true)}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? "hover:bg-slate-900 text-slate-100" : "hover:bg-slate-100 text-slate-800"
            }`}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-64 flex flex-col gap-6 p-6 z-50 ${
          isDark ? "bg-slate-950 text-slate-100 border-l border-slate-900" : "bg-white text-slate-800 border-l border-slate-200"
        } shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-2 mb-4">
          <span className="font-semibold text-lg">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className={`p-2 rounded-full transition-colors ${
              isDark ? "hover:bg-slate-900 text-slate-300" : "hover:bg-slate-100 text-slate-600"
            }`}
          >
            <FiX size={20} />
          </button>
        </div>

        <button
          className={`px-4 py-3 text-left font-medium rounded-xl transition duration-200 ${
            isDark ? "hover:bg-slate-900 hover:text-white" : "hover:bg-slate-100 hover:text-black"
          }`}
          onClick={() => {
            scrollTo("home");
            setIsOpen(false);
          }}
        >
          Home
        </button>

        <button
          className={`px-4 py-3 text-left font-medium rounded-xl transition duration-200 ${
            isDark ? "hover:bg-slate-900 hover:text-white" : "hover:bg-slate-100 hover:text-black"
          }`}
          onClick={() => {
            scrollTo("about");
            setIsOpen(false);
          }}
        >
          About
        </button>

        <button
          className={`px-4 py-3 text-left font-medium rounded-xl transition duration-200 ${
            isDark ? "hover:bg-slate-900 hover:text-white" : "hover:bg-slate-100 hover:text-black"
          }`}
          onClick={() => {
            scrollTo("projects");
            setIsOpen(false);
          }}
        >
          Projects
        </button>

        <button
          className={`px-4 py-3 text-left font-medium rounded-xl transition duration-200 ${
            isDark ? "hover:bg-slate-900 hover:text-white" : "hover:bg-slate-100 hover:text-black"
          }`}
          onClick={() => {
            scrollTo("contact");
            setIsOpen(false);
          }}
        >
          Contact
        </button>
      </div>
    </>
  );
};
export default Navbar;
