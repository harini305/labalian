# La Balian Villa and Retreat — frontend rebuild (Phase 2)

Frontend-only rebuild of https://labalian.com in Next.js (App Router, JavaScript), GSAP + ScrollTrigger and CSS Modules.
Content and photography come exclusively from the original labalian.com site, captured in a Phase 1 audit.
The audit (original full-size assets, screenshots, reports) and the hand-off report live in `docs/`, which is
kept out of this public repository because it contains security findings about the live WordPress site.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
# or a production build
npm run build
npm start            # http://localhost:3000  (use `npx next start -p 3217` if 3000 is taken)
```

Requires Node 20+. `next/font` downloads Cormorant Garamond and Montserrat from Google Fonts at build time and self-hosts them.

## Images

Web derivatives (WebP) live in `public/images/` with their dimensions in `data/images.json`. They were generated from
the original files in `docs/source-audit/original-assets/` (not in this repository), which are never modified.
With that folder present, regenerate them with (Python 3 + Pillow):

```bash
npm run images
```

## Structure

```
app/            routes (one folder per page) + globals.css design tokens
components/     Header, Footer, Motion (GSAP), Img, demos (BookingDemo, CookbookDemo, ContactForm), Gallery…
data/           site.js (all copy, from the audit), gallery.js, images.json (generated)
scripts/        optimize-images.py
docs/           Phase 1 audit and hand-off report (local only, not published)
```

## Deployment

Hosted on Vercel. `.vercelignore` keeps `docs/` and `scripts/` out of the upload; only the site source and the
optimised assets in `public/` are deployed.

## Demonstration features

The booking planner, cookbook cart and contact form are **frontend demonstrations only**. They do not connect to any
service, send anything, take payment or create reservations, and each one says so on screen.
