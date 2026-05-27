# Daugaviete Photography

Photographer portfolio website. Light luxury editorial style.

## Stack

Vite + React 18 + TypeScript + Tailwind + Framer Motion + Lenis -> Vercel.

## Development

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # static build to dist/
npm run preview
```

## Deploy

Push to `main` -> Vercel auto-deploys.

## Spec

See `docs/superpowers/specs/2026-05-27-website-design.md`.

## Image optimization

Place originals in `raw-images/<category>/file.jpg`. Then:

```bash
npm run optimize:images
```

Outputs `public/images/<category>/file-{320,768,1440}w.{avif,webp,jpg}`.
