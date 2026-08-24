# iStone Floors — Landing Page & Growth Kit

Conversion landing page and Meta ads plan for **iStone Floors** (Hurst / Dallas–Fort Worth).

## What’s included

- **Landing page** (`index.html`) — solid wood, luxury vinyl, carpet, and tile, with estimate form
- **Meta + profit plan** (`docs/meta-ad-plan.md`) — path toward ~$30k/month profit
- Brand phone: **(469) 600-0331** · Showroom: 6512 Precinct Line Rd, Suite C, Hurst, TX

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

Deploy the `dist/` folder to Netlify, Vercel, Cloudflare Pages, or your host. Point a path such as `/get-estimate` or a subdomain (e.g. `go.istonefloors.com`) for paid traffic.

## Wire the form

Form submissions currently validate and save a lead payload to `localStorage` for demos. Connect `src/main.js` to your CRM webhook (JobNimbus, AccuLynx, GoHighLevel, etc.) before launch.

## Meta ads

Follow `docs/meta-ad-plan.md` for campaign structure, audiences, creative angles, budget math, and supporting channels (Google LSA, referrals, partnerships).
