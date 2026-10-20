import Link from "next/link";
import Logo from "./Logo";
import { business, nav } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo inverse />
          <p className={styles.place}>{business.locality}</p>
        </div>

        <nav aria-label="Footer" className={styles.nav}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <p className={styles.line}>
            <span className={styles.label}>Email</span> {business.email}
          </p>
          <p className={styles.line}>
            <span className={styles.label}>Phone</span> {business.phone}
          </p>
          <div className={styles.social}>
            <a href={business.facebook} target="_blank" rel="noopener noreferrer">
              Facebook <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens facebook.com in a new tab)</span>
            </a>
            <a href={business.instagram} target="_blank" rel="noopener noreferrer">
              Instagram <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens instagram.com in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
      <div className={`container ${styles.base}`}>
        <p>© {year} La Balian Villa and Retreat</p>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
