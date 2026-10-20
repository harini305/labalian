"use client";

import { useEffect } from "react";

// Publishes the footer's rendered height as --footer-h so the last section of each
// page can fill the screen together with the footer (see globals.css).
export default function FooterSize() {
  useEffect(() => {
    const footer = document.querySelector("body > footer");
    if (!footer) return;
    const root = document.documentElement;
    const update = () => root.style.setProperty("--footer-h", `${footer.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return null;
}
