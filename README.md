# Dark Panel — Comic Shop (Scaffold)

A responsive, dark themed comic shop scaffold built with Next.js and Tailwind CSS. Designed with a cinematic, high-contrast aesthetic inspired by Dark Horse Comics.

Features included in this scaffold:
- Next.js pages: Home, Shop, Comic detail, News, About, Cart, Checkout success/cancel
- Components: Navbar, Footer, Carousel, ComicGrid, ComicCard
- Cart context: stores cart in localStorage
- Stripe Checkout API route stub (server-side) — add real keys in `.env.local`
- Tailwind CSS with dark theme and high-contrast color tokens
- Accessible elements (ARIA labels, focus outlines)

Getting started

1. Copy `.env.local.example` to `.env.local` and add your Stripe keys.
2. Install dependencies and run the dev server:

```bash
cd /home/josh/Desktop/projects/comicSite
npm install
npm run dev
```

Notes
- The Stripe API route is a minimal stub. For a production-ready flow, send the actual cart items to the API and create corresponding Stripe line items.
- Stretch: Add search, filters, auth, and Framer Motion animations.

Enjoy!