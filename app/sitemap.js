const routes = [
  "",
  "/the-villa",
  "/activities",
  "/retreats-and-weddings",
  "/gallery",
  "/rates-and-reservations",
  "/cookbook",
  "/contact",
];

// Only the pages of the new site.
export default function sitemap() {
  return routes.map((r) => ({ url: `https://labalian.com${r}` }));
}
