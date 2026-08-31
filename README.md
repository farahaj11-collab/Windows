# iStone Floors — Conversion Homepage & Growth Kit

Replacement homepage prototype for **iStone Floors** (Hurst / DFW). Built to fix the core problem: the live FloorForce site sells like a catalog; this page sells like a flooring salesperson.

## What’s included

- **Conversion homepage** (`index.html`) — dual path for residential estimates and commercial bids
- **Short lead forms** — residential (name, mobile, ZIP, project type) + commercial bid fields
- **Trust first** — 4.9★ / 98 reviews, showroom, financing, warranty
- **Repair plan** (`docs/website-repair-plan.md`) — review of the ChatGPT audit + 30-day priorities
- **Meta ads plan** (`docs/meta-ad-plan.md`) — paid acquisition toward profit targets

**Public phone (use everywhere):** (469) 600-0331  
**Showroom:** 6512 Precinct Line Rd, Suite C, Hurst, TX 76054

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

Deploy `dist/` to Netlify, Vercel, Cloudflare Pages, or your host. Recommended: `go.istonefloors.com` or `/get-estimate` for ads while the CMS homepage is repaired or migrated.

## Wire the forms

Submissions validate and save to `localStorage` for demos (`istonefloors_lead_residential` / `istonefloors_lead_commercial`). Connect `src/main.js` to your CRM webhook before launch.

## Strategy notes

See `docs/website-repair-plan.md` for what to keep from the ChatGPT audit, what to sequence later, and the NAP / speed / Broadlume migration decision.
