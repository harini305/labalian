"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Site-wide scroll motion, re-initialised per route and fully reverted on change.
//   [data-intro]          page-header elements, staggered in on load
//   [data-intro="media"]  hero image: slow settle from a slight scale
//   [data-reveal]         fade/rise when scrolled into view (either direction)
//   [data-parallax]       container whose <img> drifts gently while scrolling
// Elements are only hidden by CSS when <html> has the `motion` class, which is
// never set under prefers-reduced-motion (see app/layout.js).
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.__motionReady = true;
    if (!document.documentElement.classList.contains("motion")) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.utils.toArray("[data-intro]");
      const media = intro.filter((el) => el.dataset.intro === "media");
      const text = intro.filter((el) => el.dataset.intro !== "media");
      if (text.length) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.05 }
        );
      }
      media.forEach((el) => {
        gsap.set(el, { opacity: 1 });
        const img = el.querySelector("img");
        if (img) gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1.8, ease: "power2.out" });
        gsap.fromTo(el, { clipPath: "inset(0 0 8% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.4, ease: "power3.out" });
      });

      const reveal = (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, overwrite: true });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 92%",
        onEnter: reveal,
        onEnterBack: reveal,
      });

      gsap.utils.toArray("[data-parallax]").forEach((wrap) => {
        const img = wrap.querySelector("img");
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      // Reveal anything already scrolled past (e.g. after following an anchor link).
      requestAnimationFrame(() => {
        const passed = gsap.utils
          .toArray("[data-reveal]")
          .filter((el) => el.getBoundingClientRect().bottom < 0);
        if (passed.length) gsap.set(passed, { opacity: 1, y: 0 });
      });
    });

    let cancelled = false;
    document.fonts?.ready.then(() => !cancelled && ScrollTrigger.refresh());

    return () => {
      cancelled = true;
      mm.revert();
    };
  }, [pathname]);

  return null;
}
