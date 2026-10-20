import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Gallery",
  description: "Photographs of the bedrooms, ensuites, living spaces, infinity pool and gardens at La Balian Villa and Retreat.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(1.5rem, 1rem + 1.5vw, 2.5rem)" }} aria-labelledby="gallery-title">
        <div className="container">
          {/* The page opens straight onto the photographs; the title stays for screen readers and search. */}
          <h1 id="gallery-title" className="sr-only">
            Gallery
          </h1>
          <Gallery />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
