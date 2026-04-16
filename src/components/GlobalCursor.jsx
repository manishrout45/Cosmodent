import { useEffect } from "react";
import "../index.css";

export default function GlobalCursor() {
  useEffect(() => {
    const dot = document.createElement("div");
    dot.classList.add("cursor-dot");
    document.body.appendChild(dot);

    const ring = document.createElement("div");
    ring.classList.add("cursor-ring");
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move dot
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      // 🔥 DETECT BACKGROUND UNDER CURSOR
      const el = document.elementFromPoint(mouseX, mouseY);

      if (el && el.closest(".dark-section")) {
        dot.style.background = "#C9A23F"; // GOLD
        ring.style.borderColor = "#C9A23F";
      } else {
        dot.style.background = "#2d3748"; // NAVY
        ring.style.borderColor = "#2d3748";
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    // 🔥 Hover Zoom Effect
    const addHover = () => ring.classList.add("cursor-zoom");
    const removeHover = () => ring.classList.remove("cursor-zoom");

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    document.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}