# iStone Floors — Website Repair Plan (with ChatGPT review)

**Verdict on the ChatGPT audit:** Mostly right. The live site is a slow Broadlume/FloorForce catalog that hides real authority (reviews, hardwood craft, showroom, commercial work). Do **not** abandon `istonefloors.com`. Fix tracking, speed, messaging, and lead paths — or migrate off Broadlume while 301-preserving URLs.

This repo ships a **conversion homepage prototype** that implements the highest-leverage pieces of that advice now. Use it for paid traffic immediately (`go.istonefloors.com` or `/get-estimate`) and as the blueprint for replacing the live homepage.

---

## What ChatGPT got right

| Finding | Agree? | Why |
| --- | --- | --- |
| Site behaves like a catalog, not a salesperson | **Yes** | Hero/offers and product grids dominate; craftsmanship and reviews are secondary. |
| Extremely slow mobile | **Yes** | FloorForce stack loads many scripts, banner zones, jQuery, reviews widgets, etc. Visitors bounce before the form. |
| Weak hero / “visit showroom” CTA | **Yes** | Directions and catalog browsing do not sell installation. |
| Too many identities (floors + tops + cabinets + windows) | **Yes** | Dilutes SEO and the sales story. Flooring first; windows belong with DFW Windows Plus. |
| Missing commercial bid path | **Yes** if you chase GC/PM work | Commercial visitors should never use a homeowner form. |
| Form friction | **Yes** | Name + mobile + ZIP + project type is enough for residential first contact. |
| NAP / phone / hours / founding-year conflicts | **Yes** | Local SEO dies on inconsistent citations. Pick one public phone and one founding claim. |
| Reviews underused above the fold | **Yes** | 4.9★ / 98 reviews is the #1 trust asset — put it in the first viewport. |
| Keep the domain; don’t start over elsewhere | **Yes** | Age, backlinks, and reviews live on this domain. |
| Case studies > generic articles | **Yes** | Real jobs (with permission) beat stock photography. |

## What to temper or sequence carefully

1. **Full IA rebuild in 30 days is ambitious.** Ship the dual-path homepage + short forms + NAP cleanup first. Nested residential/commercial trees and industry pages are week 3–8 work.
2. **“Serving since / 20+ years” claims:** Only publish what you can prove. Prefer **“Serving DFW since 2012”** (or your verified year) over conflicting 20+/25+ copy until books/BBB/LinkedIn agree.
3. **BBB “awards” wording:** An A+ profile is not the same as accreditation. Say “BBB profile / A+ rating” only if accurate; do not imply accreditation if you are not accredited.
4. **Quote placeholders on this prototype:** Replace sample review blurbs with verbatim customer quotes and real project photos ASAP.
5. **Broadlume may not be fixable to &lt;3s LCP.** If after image/script cuts mobile is still terrible, migrate the marketing site and keep catalog URLs redirected.

## Prototype in this repo (done)

- Brand-first full-bleed hero with **residential estimate**, **commercial bid**, and **call/text**
- Trust strip: **4.9★ / 98 reviews**, since 2012, showroom, financing, warranty
- Separate short **residential** and **commercial** forms (toggle + deep links)
- Residential services oriented around hardwood + refinishing + LVP/tile/carpet
- Commercial scope list + bid fields (company, project, bid date, scope, plans link)
- Corrected LocalBusiness-style JSON-LD (city = Hurst, phone, description, aggregate rating)
- Sticky mobile call / estimate bar

## First 30 days (priority order)

### Week 1 — Emergencies

1. Fix `robots.txt` to absolute sitemap URL: `Sitemap: https://www.istonefloors.com/sitemap.xml` (robots currently returns errors for some clients).
2. Choose **one public phone**: recommend **(469) 600-0331** everywhere ads + web. Forward or retire older numbers in citations over time.
3. Align hours, address (`6512 Precinct Line Rd, Suite C, Hurst, TX 76054`), and founding year on GBP, BBB, Houzz, Facebook, Angi, Nextdoor.
4. Fix LocalBusiness schema on the live CMS (city must be Hurst, not “Suite C Hurst”; add telephone, hours, description).
5. Confirm analytics events: phone click, form submit, commercial bid, financing click.

### Week 2 — Homepage conversion

1. Replace live hero with dual-audience message (use this prototype).
2. Shorten residential form to name / mobile / ZIP / project type.
3. Publish commercial bid CTA + form (separate from homeowner).
4. Put 4.9★ / 98 reviews immediately under the hero.
5. Point Meta / Google ads at this page, not the catalog homepage.

### Week 3 — Authority

1. Publish 4 case studies with real photos (home hardwood, refinishing, LVP full-house, one commercial).
2. Add crew / warranty / manufacturer relationships you can verify.
3. Demote catalog and “shopping made simple” below expertise.

### Week 4 — Speed or migrate

1. Compress hero images (WebP/AVIF), kill unused widgets, defer reviews embed.
2. Re-test mobile PageSpeed. Target LCP &lt; 3s.
3. If Broadlume cannot hit that, schedule migration with 301s for every indexed URL.

## Do not do

- Do not rebuild on a new domain.
- Do not send commercial traffic through the homeowner estimate form.
- Do not keep conflicting phones “for historical reasons” on public pages.
- Do not lead with windows/cabinets/countertops on the iStone homepage.
- Do not claim unverified years, warranties, or BBB accreditation.

## Related docs

- `docs/meta-ad-plan.md` — paid acquisition math toward profit targets
- Live site remains the catalog/CMS until cutover; this repo is the conversion layer
