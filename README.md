# DFW Windows Plus — Landing Page & Meta Study

Conversion landing page and **Meta ads viability study** for **DFW Windows Plus** (Hurst / Dallas–Fort Worth), treated as its own P&L (separate from iStone Floors).

## What’s included

- **Landing page** (`index.html`) — brand-first hero, services, financing, estimate form
- **Viability study** (`docs/meta-ads-viability-study.md`) — whether **$300 Meta + $300 management** is worth it (**recommendation: no, not at that package**)
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

## Meta ads decision

Read `docs/meta-ads-viability-study.md` before buying ad spend. Short version: the window category can work on Meta, but **$300 media + $300 management is the wrong package** until Pixel/tracking and a clean landing path are live — then test at a budget that can actually learn.
