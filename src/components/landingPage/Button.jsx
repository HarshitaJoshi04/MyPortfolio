import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useReducedMotion } from "motion/react";

const Button = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(buttonRef.current, {
      y: 60,
      opacity: 0,
      scale: 0.92,
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: shouldReduceMotion ? 0 : 0.8,
      ease: "power3.out",
    });

    if (!shouldReduceMotion) {
      timeline.to(buttonRef.current, {
        y: -7,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    return () => timeline.kill();
  }, [shouldReduceMotion]);

  return (
    <button
      ref={buttonRef}
      onClick={() => navigate("/portfolio")}
      className="
      px-8 py-3
      rounded-full
      text-lg font-semibold
      bg-gradient-to-r from-blue-500 to-indigo-600
      text-white
      shadow-lg
      transition-all duration-300
      hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]
      hover:scale-105
      active:scale-95
      cursor-pointer"
    >
      Explore
    </button>
  );
};

export default Button;
