"use client";

import { useState } from "react";
import styles from "./MapEmbed.module.css";

// Google Maps is a third-party service, so it only loads when the visitor asks for it.
// Village-level zoom fixes the continent-level view on the original site.
const SRC =
  "https://maps.google.com/maps?q=La%20Balian%20Villa%20and%20Retreat%2C%20Tabanan%2C%20Bali&z=14&output=embed";

export default function MapEmbed() {
  const [load, setLoad] = useState(false);
  return (
    <div className={styles.map}>
      {load ? (
        <iframe
          src={SRC}
          title="Map showing La Balian Villa and Retreat near Balian Beach"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className={styles.placeholder}>
          <p className={styles.place}>Lalanglinggah, near Balian Beach</p>
          <p className="small muted">Tabanan, west coast of Bali</p>
          <button type="button" className="btn btn--ghost" onClick={() => setLoad(true)}>
            Show map
          </button>
          <p className={styles.note}>Loads an interactive map from Google Maps.</p>
        </div>
      )}
    </div>
  );
}
