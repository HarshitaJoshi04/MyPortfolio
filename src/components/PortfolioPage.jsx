import React from "react";
import Navbar from "./landingPage/Navbar";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "./Footer";

import { motion, useScroll } from "motion/react";

import CustomCurser from "./CustomCurserAnimation/CustomCurser";
import RevealSection from "./animations/RevealSection";

const PortfolioPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <CustomCurser />

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 h-1 fixed top-0 left-0 z-[60] origin-left"
      />

      {/* Transparent while near the top */}
      <Navbar />

      <main className="pt-24">
        <Home />
        <RevealSection><About /></RevealSection>
        <RevealSection><Projects /></RevealSection>
        <RevealSection><Contact /></RevealSection>
        <RevealSection><Footer /></RevealSection>
      </main>
    </div>
  );
};

export default PortfolioPage;
