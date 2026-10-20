"use client";

import { useState } from "react";
import styles from "./CopyButton.module.css";

// Copies a value to the clipboard locally. Used instead of mailto:/tel: links so the
// standalone demo never opens an external app without the user expecting it.
export default function CopyButton({ value, label, text = "Copy" }) {
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("Copied");
    } catch {
      setStatus("Select the text to copy");
    }
    setTimeout(() => setStatus(""), 2200);
  }

  return (
    <span className={styles.wrap}>
      <button type="button" className={styles.button} onClick={copy}>
        {status === "Copied" ? "Copied" : text}
        <span className="sr-only"> {label}</span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status}
      </span>
    </span>
  );
}
