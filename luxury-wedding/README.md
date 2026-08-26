# Premium Wedding Website Generator

Reusable React + TypeScript + Tailwind + Framer Motion wedding invitation starter.

## Configure one file

Edit `src/config.ts`. Names, date, venue, colors, media, music, events, family, gallery, RSVP and SEO all live there.

### Media strategy

- Hero accepts an image or video.
- Venue accepts an image.
- Timeline and family cards accept images.
- Each fallback stores an AI image prompt so a future asset pipeline can generate the missing media without changing components.

## Run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deployment

Works with Vercel, Netlify, Cloudflare Pages, GitHub Pages (with SPA fallback), or any static host that serves `dist/`.
