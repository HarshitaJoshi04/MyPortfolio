import React, { useContext } from "react";
import Navbar from "./landingPage/Navbar";
import Transition from "../components/landingPage/Transition";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import { motion ,useScroll } from "motion/react";
import { Theme } from "./themecontext/ThemeContext";
import CustomCurser from "./CustomCurserAnimation/CustomCurser";
const PortfolioPage = () => {
  const {scrollYProgress}=useScroll()
    const [theme] = useContext(Theme);
    const isDark = theme === "Dark";
  return (
    <div>
           <CustomCurser />
      <motion.div
      style={{
        scaleX:scrollYProgress
      }} className={`w-full  ${
          isDark ? "bg-blue-400" : "bg-blue-400"
        } h-23 z-13 fixed top-0 left-[0] origin-left`}>     </motion.div>
       
        <Navbar />
        <main className="pt-24">      <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
 </main>
  
    </div>
  );
};

export default Transition(PortfolioPage);
