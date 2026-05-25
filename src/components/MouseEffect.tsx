import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
       setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  if (typeof window === "undefined") return null;
  // Hiding the effect on mobile devices since it's mouse specific
  if (window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-screen"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
        background: "radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0) 70%)",
        boxShadow: "0 0 40px 20px rgba(212,175,55,0.2)"
      }}
    />
  );
}
