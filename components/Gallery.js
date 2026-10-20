"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Img, { imageData } from "./Img";
import { gallery, galleryCategories } from "@/data/gallery";
import styles from "./Gallery.module.css";

const isTall = (item) => {
  const d = imageData(item.name);
  return d.height > d.width;
};

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null); // index within `items`, or null
  const dialogRef = useRef(null);
  const gridRef = useRef(null);
  const lastTrigger = useRef(null);
  const touchX = useRef(null);
  const mounted = useRef(false);

  const items = filter === "all" ? gallery : gallery.filter((g) => g.cat === filter);
  const current = open === null ? null : items[open];

  // Animate tiles in when the filter changes (first render is handled by Motion).
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, ease: "power2.out" }
        );
      });
    }, gridRef);
    return () => ctx.revert();
  }, [filter]);

  // Open/close the native modal dialog (focus containment and Esc come with it).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (open === null && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const step = (n) => setOpen((i) => (i + n + items.length) % items.length);

  function onClose() {
    document.documentElement.style.overflow = "";
    setOpen(null);
    lastTrigger.current?.focus();
  }

  function onKeyDown(e) {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  }

  function onPointerDown(e) {
    touchX.current = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }
  function onPointerUp(e) {
    if (touchX.current === null) return;
    const dx = e.clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  }

  const data = current ? imageData(current.name) : null;
  const largest = data ? data.variants[data.variants.length - 1] : null;

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter photographs">
        {galleryCategories.map((c) => {
          const count = c.id === "all" ? gallery.length : gallery.filter((g) => g.cat === c.id).length;
          return (
            <button
              key={c.id}
              type="button"
              className={styles.filter}
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label} <span className={styles.count}>{count}</span>
            </button>
          );
        })}
      </div>

      <ul className={styles.grid} ref={gridRef}>
        {items.map((item, i) => (
          <li key={item.name} className={`${styles.item} ${isTall(item) ? styles.tall : ""}`} data-reveal>
            <button
              type="button"
              className={styles.thumb}
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpen(i);
              }}
            >
              <Img name={item.name} alt="" sizes="(min-width: 1100px) 25vw, (min-width: 768px) 33vw, 50vw" className={styles.thumbImg} />
              <span className="sr-only">View larger: {item.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Photograph viewer"
        onClose={onClose}
        onKeyDown={onKeyDown}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
      >
        {current && (
          <div className={styles.viewer}>
            <div className={styles.top}>
              <p className={styles.counter} aria-live="polite">
                {open + 1} / {items.length}
              </p>
              <button type="button" className={styles.close} onClick={() => dialogRef.current.close()} autoFocus>
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className={styles.stage} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
              <img
                key={current.name}
                src={largest.src}
                width={data.width}
                height={data.height}
                alt={current.alt}
                className={styles.full}
                // Small originals are never enlarged beyond 1.5x their real size.
                style={{ maxWidth: `min(100%, ${Math.round(data.width * 1.5)}px)` }}
                draggable="false"
              />
            </div>
            <div className={styles.nav}>
              <button type="button" className={styles.arrow} onClick={() => step(-1)} aria-label="Previous photograph">
                <span aria-hidden="true">←</span>
              </button>
              <p className={styles.caption}>{current.alt}</p>
              <button type="button" className={styles.arrow} onClick={() => step(1)} aria-label="Next photograph">
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
