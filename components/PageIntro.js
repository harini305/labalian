import Img from "./Img";
import styles from "./PageIntro.module.css";

// Inner-page header.
//   variant "split": title + lead beside a contained photo (for 900–1024px sources)
//   variant "band":  title + lead, then a full-bleed photo band (high-resolution sources only)
//   variant "plain": title + lead only
export default function PageIntro({ title, lead, image, alt, position, variant = "split", children }) {
  if (variant === "band") {
    return (
      <header className={styles.band}>
        <div className={`container ${styles.bandText}`}>
          <h1 data-intro>{title}</h1>
          <div className={styles.bandLead}>
            {lead && <p className="lead" data-intro>{lead}</p>}
            {children && <div data-intro>{children}</div>}
          </div>
        </div>
        {image && (
          <div className={`frame ${styles.bandMedia}`} data-intro="media">
            <Img name={image} alt={alt} priority sizes="100vw" position={position} />
          </div>
        )}
      </header>
    );
  }

  return (
    <header className={`container ${variant === "split" ? styles.split : styles.plain}`}>
      <div className={styles.text}>
        <h1 data-intro>{title}</h1>
        {lead && <p className="lead" data-intro>{lead}</p>}
        {children && <div data-intro>{children}</div>}
      </div>
      {variant === "split" && image && (
        <div className={`frame ${styles.media}`} data-intro="media">
          <Img name={image} alt={alt} priority sizes="(min-width: 960px) 50vw, 100vw" position={position} />
        </div>
      )}
    </header>
  );
}
