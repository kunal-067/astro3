'use client'
import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const s = document.documentElement;
      setProgress((s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-100">
      <div
        className="h-full bg-linear-to-r from-pink-500 via-fuchsia-400 to-amber-400 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}