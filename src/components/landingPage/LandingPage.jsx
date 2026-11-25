import { motion, useReducedMotion } from "motion/react";

import Orb from "./Orb";
import HeroText from "./HeroText";
import Button from "./Button";

const Landing = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="intro-screen relative min-h-screen flex items-center text-black justify-center bg-black overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="intro-aura intro-aura-one"
        animate={shouldReduceMotion ? undefined : { scale: [0.92, 1.08, 0.92], opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="intro-aura intro-aura-two"
        animate={shouldReduceMotion ? undefined : { scale: [1.08, 0.94, 1.08], opacity: [0.16, 0.42, 0.16] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-[1] w-full h-[min(78vh,760px)]">
        <Orb
          hoverIntensity={3}
          rotateOnHover
          hue={0}
          forceHoverState={true}
          backgroundColor="#000000"
        />
      </div>

      <motion.div
        className="absolute z-10 flex flex-col items-center gap-8 sm:gap-10 text-white text-center px-4"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 26, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="intro-eyebrow rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.28em] text-cyan-100/80 backdrop-blur-xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.45 }}
        >
          Full Stack Developer <span className="mx-2 text-cyan-300">✦</span> AI Builder
        </motion.span>
        <HeroText duration={0.5} delay={0.2} stagger={0.1} />

        <Button />
      </motion.div>
    </div>
  );
};

export default Landing;
