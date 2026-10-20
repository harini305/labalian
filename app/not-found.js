import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow" style={{ display: "grid", gap: "1.25rem", justifyItems: "start" }}>
        <h1>Page not found</h1>
        <p className="lead">This page does not exist on the new La Balian website.</p>
        <div className="btn-row">
          <Link href="/" className="btn">
            Go to the home page
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Contact the villa
          </Link>
        </div>
      </div>
    </section>
  );
}
