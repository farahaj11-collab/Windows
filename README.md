# DFW Windows Plus — Landing Page

Conversion landing page for **DFW Windows Plus** (Hurst / Dallas–Fort Worth), rebuilt from the live site content at [dfwwindowsplus.com](https://dfwwindowsplus.com/).

## What’s included

- Brand-first hero with full-bleed project photography
- Why-us, services, financing, testimonials, and service-area sections
- Free estimate form (validates + stores a demo lead in `localStorage`)
- Contact: **(469) 600-0331** · admin@dfwwindowsplus.com · 6512 Precinct Line Rd B, Hurst, TX 76054

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Netlify, Vercel, Cloudflare Pages, or your host.

## Wire the form

Form submissions currently validate and save a lead payload to `localStorage` for demos. Connect `src/main.js` to your CRM webhook before production use.
