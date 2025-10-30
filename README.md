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

Deploying to GitHub Pages

- This project can be exported as a static site and hosted on GitHub Pages. The repository is configured to use the base path `/comic-site` — update `next.config.js` or the `homepage` field in `package.json` if your repo name differs.
- To build and export locally:

```bash
npm ci
npm run build:export
# the static files will be in the `out/` directory
```

- Optional: deploy from your machine using the `gh-pages` package:

```bash
# set your GitHub username in package.json `homepage` first
npm run deploy
```

CI deploy (recommended)

- A GitHub Actions workflow is included at `.github/workflows/deploy.yml` which will run on pushes to `main`. It builds the site and publishes the `out/` directory to GitHub Pages.

Important: pages/api and Stripe

- GitHub Pages only serves static files. The `pages/api` API routes (including the Stripe checkout route) are server-side functions and will NOT run on GitHub Pages.
- Options:
	- Deploy the full Next.js app to Vercel or Netlify (recommended) — API routes will work there.
	- Keep the frontend on GitHub Pages and host the Stripe API on a separate serverless function (AWS Lambda, Netlify Functions, Vercel Serverless) or small server, then point the client to that endpoint via NEXT_PUBLIC_BASE_URL.
	- For local testing, run the Next.js dev server (`npm run dev`) which supports `pages/api`.

Enjoy!