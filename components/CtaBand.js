import Link from "next/link";
import styles from "./CtaBand.module.css";

export default function CtaBand({ title = "Plan your stay", text, primary, secondary }) {
  const p = primary || { href: "/rates-and-reservations#enquire", label: "Start an enquiry" };
  const s = secondary || { href: "/contact", label: "Contact the villa" };
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`} data-reveal>
        <div className={styles.copy}>
          <h2>{title}</h2>
          {text && <p className="lead">{text}</p>}
        </div>
        <div className="btn-row">
          <Link href={p.href} className="btn">
            {p.label}
          </Link>
          <Link href={s.href} className="btn btn--ghost">
            {s.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
