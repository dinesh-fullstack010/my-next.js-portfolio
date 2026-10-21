"use client";
import { useEffect } from "react";

export default function Motion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let clean = () => {};
    function setup() {
      clean();
      const root = document.documentElement;
      const chapters = [...document.querySelectorAll(".project-chapter")];
      const words = [...document.querySelectorAll(".story-word")];
      const story = document.querySelector(".story-text");
      const reveals = [...document.querySelectorAll(".mask-reveal")];
      if (media.matches) {
        root.classList.remove("enhanced-motion");
        words.forEach((el) => el.classList.add("read"));
        return;
      }
      root.classList.add("enhanced-motion");
      let frame = 0;
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.12 },
      );
      reveals.forEach((el) => observer.observe(el));
      function draw() {
        frame = 0;
        root.style.setProperty("--turn", `${window.scrollY * 0.055}deg`);
        const max = root.scrollHeight - innerHeight;
        root.style.setProperty(
          "--progress",
          `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`,
        );
        const desktop = innerWidth > 760;
        chapters.forEach((el, i) => {
          const next = chapters[i + 1];
          let t = 0;
          if (desktop && next)
            t = Math.max(
              0,
              Math.min(
                1,
                (innerHeight - next.getBoundingClientRect().top) /
                  (innerHeight - 120),
              ),
            );
          el.style.setProperty("--stack-scale", String(1 - t * 0.045));
          el.style.setProperty("--stack-shade", String(1 - t * 0.14));
        });
        if (story) {
          const r = story.getBoundingClientRect();
          const t = Math.max(
            0,
            Math.min(
              1,
              (innerHeight * 0.87 - r.top) /
                (Math.min(r.height, innerHeight) * 0.8),
            ),
          );
          words.forEach((el, i) =>
            el.classList.toggle("read", i / words.length <= t),
          );
        }
      }
      const schedule = () => {
        if (!frame) frame = requestAnimationFrame(draw);
      };
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      draw();
      clean = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        root.classList.remove("enhanced-motion");
        chapters.forEach((el) => {
          el.style.removeProperty("--stack-scale");
          el.style.removeProperty("--stack-shade");
        });
      };
    }
    if ("IntersectionObserver" in window) setup();
    media.addEventListener("change", setup);
    return () => {
      clean();
      media.removeEventListener("change", setup);
    };
  }, []);
  return null;
}
