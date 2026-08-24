# DFW Windows Plus — Meta Ads Viability Study

**Business:** DFW Windows Plus · Hurst, TX · [dfwwindowsplus.com](https://dfwwindowsplus.com/) · (469) 600-0331  
**Question:** Is this website worth spending **$300/mo Meta ads + $300/mo web-guy management** ($600 total)?  
**Scope:** Own P&L study for Windows Plus only (not iStone Floors). Sister-company notes are optional extras at the end.

**Verdict: No — not at that package.**  
The **business** can make Meta profitable. This **$300 + $300** setup will not. Fix tracking and the offer path first; if you test Meta, fund ads enough to learn (or skip Meta and use cheaper channels until the site is conversion-ready).

---

## 1. Executive answer

| Question | Answer |
| --- | --- |
| Is window replacement a good Meta category? | **Yes** — high ticket ($5k–$15k+ jobs), visual product, local intent |
| Is **this** site ready for paid traffic today? | **Not yet** — no Meta Pixel / analytics, weak measurement, slow TTFB |
| Is **$300 ads / month** enough in DFW windows? | **No** — below the practical learning floor (~$1,000–$1,500+) |
| Is **$300 management on $300 spend** a good deal? | **No** — 100% fee-to-spend ratio; you’re paying as much to manage as Meta gets |
| Should you approve this $600/mo package? | **Decline or renegotiate** |

Spend the next 2–4 weeks on **measurement + one clean landing path**. Then either:

- **Test Meta properly** at ~$750–$1,500 ad spend (Instant Forms), with a flat/cheap management fee, **or**
- **Skip Meta for now** and push Google Local / LSA, Google Business Profile, and contractor referrals — often cheaper while inventory (in-stock Elevate/Alside) is the differentiator.

---

## 2. Site audit (live dfwwindowsplus.com)

Checked August 2026 against the live homepage and sitemap.

### What’s already decent

- Clear niche: **in-stock + custom** Elevate / Alside, install, cash & carry, roofing/gutters
- Strong offer hooks already on the page: warehouse stock, ~7-day installs, financing ~$99/mo, dealer badges
- Real local proof: Hurst address, DFW city list, testimonials
- Broad SEO footprint: many city + product URLs in `wp-sitemap` (good for organic; **not** a substitute for a paid-landing page)

### What’s blocking paid spend

| Gap | Why it matters for Meta |
| --- | --- |
| **No Meta Pixel** detected on homepage | Can’t optimize for leads, can’t retarget, can’t prove ROI |
| **No Google Tag Manager / gtag** detected | Blind on traffic quality and form events |
| **No Organization/LocalBusiness schema** | Missed trust / SERP features; not fatal for Meta but shows incomplete setup |
| **No meta description** | Weak organic CTR; paid landing should still have clean OG + title |
| **TTFB ~1.8s** on homepage | Paid clicks bounce when the page feels slow |
| Homepage is a full WordPress/Elementor marketing site | Fine for SEO; **too noisy** as the primary Meta click destination |
| Form exists (Elementor) | Good — but without pixel `Lead` events you can’t train Meta |

**Bottom line:** Do **not** send Meta traffic to the current homepage until Pixel + Lead event + speed-to-lead process are live. Use Instant Forms and/or the dedicated conversion page in this repo.

---

## 3. Unit economics (Windows Plus alone)

DFW installed vinyl replacement often lands roughly **$500–$1,200 per window**; whole-home jobs commonly **$5,000–$15,000+**. Use your real invoices to replace these placeholders.

### Conservative model (tune with your books)

| Assumption | Conservative | Optimistic |
| --- | --- | --- |
| Avg closed job revenue | $7,500 | $12,000 |
| Gross profit after materials/labor | 28% (~$2,100) | 35% (~$4,200) |
| Meta CPL (DFW windows ballpark) | $55 | $35 |
| Lead → booked estimate | 40% | 55% |
| Estimate → close | 30% | 40% |
| **Lead → paid job** | **~12%** | **~22%** |

**Cost per closed job (ad only):**

- Conservative: $55 ÷ 0.12 ≈ **$460** ad cost / job → still fine vs ~$2,100 profit  
- Optimistic: $35 ÷ 0.22 ≈ **$160** ad cost / job → excellent

So: **Windows Plus can win on Meta when leads are measured and followed up.**  
The problem is not category economics — it’s **budget size + site readiness + fee structure**.

---

## 4. Why $300 ads / month fails the math

At **$300/month ≈ $10/day**:

| Outcome | Rough range |
| --- | --- |
| Leads / month @ $40–$65 CPL | **~5–7 leads** |
| Closed jobs @ 12–20% | **0–1 job** most months |
| Meta learning phase | Needs ~50 optimization events / week-ish per ad set — **you never get there** |

Industry guidance for window/door Meta in 2025–2026 clusters around:

- Practical floor: about **$1,000–$1,500+/mo** ad spend to exit learning  
- Common successful contractor range: **$1,500–$5,000/mo** ads  
- CPL once dialed: often **~$30–$65** (quality varies wildly)

With only 5–7 leads/month you cannot tell creative A from B, cannot build lookalikes, and one bad weekend of tire-kickers looks like “Meta doesn’t work.”

### The $300 management fee

| Package | Ads to Meta | Management | Fee as % of media |
| --- | --- | --- | --- |
| Proposed | $300 | $300 | **100%** |
| Healthier starter | $1,200 | $300–$500 flat | **25–42%** |
| DIY + this plan | $750–$1,500 | $0–$200 (setup help) | low |

Paying **dollar-for-dollar** to manage a spend that can’t learn is the worst of both worlds: expensive oversight on a test that’s too small to conclude anything.

**Ask your web guy instead:**

1. Install Meta Pixel + Conversions API + Google Analytics (fixed project fee)  
2. Wire form → CRM / email/SMS alert within 5 minutes  
3. Optional: manage ads only if media is **≥ $1,000/mo**, at a **flat** fee you’re happy with  

If he only sells “$300 manage + $300 ads,” walk — or buy **setup** from him, not ongoing management at that ratio.

---

## 5. Decision framework

### Decline the $600 package if…

- Pixel / CRM alerts are not live  
- Nobody owns speed-to-lead (call/text &lt; 15 min)  
- Budget stays at $300 media  

### Approve a **revised** Meta test if…

| Gate | Minimum |
| --- | --- |
| Tracking | Pixel + `Lead` (and preferably `Schedule` / call tracking) |
| Destination | Instant Form **and/or** dedicated landing page (this repo), not the busy homepage |
| Media | **$750–$1,500** for 30–45 days |
| Management | Flat fee **or** DIY with weekly 30-min review |
| Offer | Free estimate + financing + in-stock / 7-day install in every ad |
| Follow-up | Logged in CRM; no lead sits overnight |

### Success criteria after 45 days

- CPL under **$70** (tighten later)  
- ≥ **40%** leads book an estimate  
- ≥ **1** closed job attributable to Meta (proof of life)  
- Clear read on which hook wins: **in-stock / speed**, **financing $99**, **no-middleman pricing**, **Elevate/Alside dealer**

If after a properly funded 45 days you have zero booked estimates, pause Meta and fix sales process before blaming the website.

---

## 6. If/when you run Meta — Windows-only plan

### Campaigns (simple)

1. **Instant Forms (primary)** — 60–70% of budget  
   - Questions: service (replace / install / cash-carry / roof), # of windows, timeline, ZIP  
2. **Landing page leads** — 20–30%  
   - Send to the conversion page in this repo with UTMs  
3. **Retargeting** — 10% once pixel has traffic  
   - Form openers, page viewers 7–30 days  

### Geo

Start **15–25 miles around Hurst** (Keller, Southlake, Grapevine, Colleyville, Bedford, Euless, NRH, NE Fort Worth, Arlington, Irving). Expand only after CPL and show rate stabilize.

### Creative angles (Windows Plus, not floors)

| Angle | Hook |
| --- | --- |
| In-stock | “Most companies order windows and make you wait 4–6 weeks. We keep them in North Texas.” |
| Speed | “Ordered Wednesday. Installed Monday.” |
| Honest pricing | “Official Elevate & Alside dealer — no national brand markup theater.” |
| Financing | “As low as $99/mo with approved credit.” |
| Local crew | “In-house installers. Licensed & insured. Hurst warehouse.” |

Shoot **real install-crew and finished windows** (you already have strong photos). Avoid generic stock-only creatives once you have 3–5 job clips.

### What not to do

- Don’t boost random Facebook posts and call it ads  
- Don’t run the same creative for 60 days without a challenger  
- Don’t optimize for link clicks — optimize for **leads**  
- Don’t mix iStone flooring and Windows Plus in one campaign (confuses Meta + customers)

---

## 7. Cheaper paths while Meta waits

These often beat an underfunded Meta test for a warehouse + install shop:

1. **Google Business Profile** — weekly photos of installs, Q&A, review asks after every job  
2. **Google Local Services Ads / Search** — “window replacement near me” intent is hotter than cold Meta  
3. **Contractor / builder cash-and-carry** — price list + same-day pickup; one builder account can out-earn $300 of Meta  
4. **Financing landing URL** — promote $99/mo on GBP and email SMS to past quotes  
5. **Yard signs + review QR** on every install  

Use Meta later as a **scale** channel once measurement and close rates are proven.

---

## 8. Sister company (iStone Floors) — optional only

You own both. Treat P&Ls separately. Light synergy is fine; shared campaigns are not.

**Worth doing (low risk):**

- Footer line on each site: “Also from our Hurst location: iStone Floors / DFW Windows Plus” with a normal link  
- Shared Google Business posts only when the offer is clearly labeled  
- Cross-refer happy customers when the other trade is relevant (floors after windows, etc.)

**Avoid:**

- One Meta campaign advertising both brands  
- Identical landing pages / phone scripts that blur which company is quoting  
- Expecting “backlinks between two sites you own” to move SEO much — search engines discount obvious sister-site links; nice for users, not a strategy

Backlinks help users navigate; they do **not** fix the Meta budget problem.

---

## 9. 30-day action checklist (before any $600 media package)

1. Install **Meta Pixel + Conversions API** and verify `Lead`  
2. Install **GA4** (or GTM) and form submit event  
3. Confirm form emails/SMS hit a human in &lt; 5 minutes  
4. Publish a **single** paid landing URL (this repo’s page is built for that)  
5. Decide: **renegotiate** web guy to setup-only + optional ads at ≥ $1k media, **or** DIY ads with Instant Forms  
6. If testing Meta: fund **≥ $750** month one, review weekly CPL → booked → closed  
7. Log every lead in a sheet/CRM with source=`meta`

---

## 10. Final recommendation

**Do not spend $300 on Meta ads + $300 on management against the current site.**

- Category ROI: **viable**  
- Current package: **not viable**  
- Site: **needs tracking + a dedicated conversion path first**  
- Next dollar: **measurement and speed-to-lead**, then either a **properly funded** Meta test or **Google/local/contractor** channels that match your in-stock advantage

When you’re ready to test Meta for real, use Section 5’s gates — not the $300/$300 split.
