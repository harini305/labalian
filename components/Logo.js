import Link from "next/link";
import images from "@/data/images.json";
import styles from "./Logo.module.css";

// The original emblem (cropped from the 200px source logo, never upscaled past
// its native size) set beside the business name in Montserrat, echoing the
// spaced geometric wordmark of the original logo.
export default function Logo({ inverse = false, onClick }) {
  const { emblem } = images._logo;
  return (
    <Link href="/" className={`${styles.logo} ${inverse ? styles.inverse : ""}`} onClick={onClick}>
      <img src={emblem.src} width={emblem.width} height={emblem.height} alt="" className={styles.mark} />
      <span className={styles.words}>
        <span className={styles.name}>La Balian</span>
        <span className={styles.tag}>Villa and Retreat</span>
      </span>
      <span className="sr-only"> — home</span>
    </Link>
  );
}
