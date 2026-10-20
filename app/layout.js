import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import FooterSize from "@/components/FooterSize";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://labalian.com"),
  title: {
    default: "La Balian Villa and Retreat — Balian Beach, Bali",
    template: "%s — La Balian Villa and Retreat",
  },
  description:
    "Discover La Balian Villa: your serene retreat near Balian Beach, Bali, surrounded by rice fields and tranquility.",
  openGraph: { siteName: "La Balian", locale: "en_AU", type: "website" },
};

export const viewport = { themeColor: "#ffffff" };

// Adds `motion` before first paint so reveal targets start hidden only when
// animation will actually run. If GSAP never initialises, the class is removed
// after 2.5s so content can never stay hidden.
const motionBoot = `(function(){try{var d=document.documentElement;if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion');setTimeout(function(){if(!window.__motionReady)d.classList.remove('motion')},2500)}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${cormorant.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FooterSize />
        <Motion />
      </body>
    </html>
  );
}
