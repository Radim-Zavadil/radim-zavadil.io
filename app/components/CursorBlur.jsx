"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorBlur() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth animations for a more natural feel
  const smoothX = useSpring(x, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-16 h-16 bg-[rgba(28, 145, 255, 0.30)] rounded-full blur-[50px]"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
