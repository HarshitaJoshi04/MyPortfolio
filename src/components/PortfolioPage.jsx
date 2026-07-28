import React, { useContext } from "react";
import Navbar from "./landingPage/Navbar";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "./Footer";

import { motion, useScroll } from "motion/react";

import { Theme } from "./themecontext/ThemeContext";
import CustomCurser from "./CustomCurserAnimation/CustomCurser";

const PortfolioPage = () => {
  const { scrollYProgress } = useScroll();

  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  return (
    <div>
      <CustomCurser />

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 h-1 fixed top-0 left-0 z-[60] origin-left"
      />

      {/* Transparent while near the top */}
      <Navbar transparent={scrollYProgress.get() < 0.01} />

      <main className="pt-29">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default PortfolioPage;