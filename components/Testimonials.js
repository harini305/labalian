"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { testimonials } from "@/data/site";
import styles from "./Testimonials.module.css";

const LIMIT = 300;

// Shortens long reviews at a word boundary for the collapsed view. The full,
// unedited text is always one click away.
function excerpt(text) {
  if (text.length <= LIMIT) return null;
  const cut = text.slice(0, LIMIT);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

export default function Testimonials({ title, titleId }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const quoteRef = useRef(null);
  const first = useRef(true);
  const item = testimonials[index];
  const short = excerpt(item.text);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(quoteRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
      });
    });
    return () => ctx.revert();
  }, [index]);

  const go = (step) => {
    setExpanded(false);
    setIndex((i) => (i + step + testimonials.length) % testimonials.length);
  };

  const controls = (
    <div className={styles.controls}>
      <button type="button" className={styles.arrow} onClick={() => go(-1)} aria-label="Previous review">
        <span aria-hidden="true">←</span>
      </button>
      <p className={styles.count}>
        <span className="sr-only">Review </span>
        {index + 1} <span aria-hidden="true">/</span>
        <span className="sr-only"> of </span> {testimonials.length}
      </p>
      <button type="button" className={styles.arrow} onClick={() => go(1)} aria-label="Next review">
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );

  return (
    <div className={styles.wrap} aria-roledescription="carousel" aria-labelledby={titleId}>
      <div className={styles.side}>
        <h2 id={titleId}>{title}</h2>
        <p className={styles.intro}>
          {testimonials.length} reviews from guests who have stayed at La Balian, shown as they were written.
        </p>
        {controls}
      </div>

      <figure className={styles.figure} ref={quoteRef} aria-live="polite">
        <blockquote id="review-text" className={styles.quote}>
          <p>{expanded || !short ? item.text : short}</p>
        </blockquote>
        <figcaption className={styles.caption}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.meta}>Guest review</span>
        </figcaption>
        {short && (
          <button
            type="button"
            className={styles.more}
            aria-expanded={expanded}
            aria-controls="review-text"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : "Read the full review"}
          </button>
        )}
      </figure>
    </div>
  );
}
