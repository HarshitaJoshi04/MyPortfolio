import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCurser = () => {
   const cursorRef = useRef(null);
   
  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
    />
  );
}
export default CustomCurser