# Elian

A five-page product showcase website for Elian, a home furnishings catalog. Visitors browse products and call the business to inquire or purchase. There is no online checkout.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint the project |

## Content architecture

Website copy, business details, and (later) product data live in `src/content`. Presentation components read that data instead of hardcoding catalog content. A CMS can replace these modules later without rewriting the UI.

## Environment variables

Copy `.env.example` to `.env.local` when a CMS or form service is connected. Do not commit secrets.

## Deployment

The site is a static SPA and is intended for [Vercel](https://vercel.com). `npm run build` produces the production output. Client-side routes fall back to `index.html` through `vercel.json`.

Do not commit secrets. Use `.env.example` as the template for any future CMS or form endpoint variables.
