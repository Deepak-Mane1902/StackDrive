"use client";

import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.07, // smoothness
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div id="scroll-container" ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollProvider;
