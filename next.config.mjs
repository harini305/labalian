/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images are pre-optimised by scripts/optimize-images.py; disable runtime optimisation.
  images: { unoptimized: true },
  async redirects() {
    // Legacy labalian.com routes that were merged or renamed in the rebuild.
    return [
      { source: "/the-villa/our-services", destination: "/the-villa", permanent: true },
      { source: "/yoga-and-wellness-retreats", destination: "/retreats-and-weddings", permanent: true },
      { source: "/weddings", destination: "/retreats-and-weddings#weddings", permanent: true },
      { source: "/shop", destination: "/cookbook", permanent: true },
      { source: "/product/:slug", destination: "/cookbook", permanent: true },
      { source: "/product-category/:slug", destination: "/cookbook", permanent: true },
      { source: "/cart", destination: "/cookbook", permanent: false },
      { source: "/checkout", destination: "/cookbook", permanent: false },
    ];
  },
};

export default nextConfig;
