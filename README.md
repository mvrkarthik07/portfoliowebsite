# Karthik Manda — terminal portfolio

A React, Vite, Tailwind CSS and Framer Motion portfolio hosted on Netlify. The home page is a six-panel terminal workspace with keyboard navigation, a command palette and a progressively loaded Three.js volatility surface.

## Run locally

Use Node 22.19 or later.

```sh
npm ci
npm run dev
```

Build and preview the production site:

```sh
npm run lint
npx tsc --noEmit
npm run build
npm run preview
```

`scripts/acceptance.mjs` checks the production preview at `http://127.0.0.1:4173/`. Run `npm run preview -- --host 127.0.0.1` in one terminal, then `node scripts/acceptance.mjs` in another. The checker needs a local Playwright Chromium installation.

## Content and routes

- `src/content/claims.ts` holds public titles and recognition wording.
- `src/content/projects.ts` holds project records, case studies and links.
- `src/content/ticker.ts` holds the static credentials shown in the tape.
- `src/content/archive.json` lists responsive poster derivatives.
- `/`, `/about`, `/archive` and `/work/:slug` are prerendered during the build. `/resume.pdf` is a static asset.

The work blotter presents MARL as research. Its reported metrics are user supplied and are described as unverified without a known out-of-sample split or trading-cost assumptions.

`GITHUB_TOKEN` is optional at build time. If present, `scripts/fetch-activity.mjs` fetches real GitHub contribution data for the activity chart. If absent or unavailable, the chart is omitted. The contact form uses the optional `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY` values in `.env.example`; direct email, LinkedIn, GitHub and résumé links work without them.

## Poster assets

The committed `public/posters` directory contains hashed AVIF and WebP derivatives at 480, 960 and 1600 pixels. Full-resolution originals are excluded from the deployed site. To regenerate derivatives, supply the original `Posters` directory outside the repository:

```sh
POSTER_SOURCE_DIR=/path/to/original/Posters node scripts/build-posters.mjs
```

The generator reads the legacy source list in `src/data/posters.js` and writes the variants plus `src/content/archive.json`. The original files are not deleted by this script.

## Deployment

Netlify uses `npm run build` and publishes `dist` per `netlify.toml`. It provides legacy route redirects and long-lived immutable caching for hashed bundles and poster derivatives. Set `COMMIT_REF` in the build environment (Netlify does this automatically) to display the deployed revision in the status bar.
