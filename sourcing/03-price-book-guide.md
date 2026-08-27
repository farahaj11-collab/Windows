# Price Book Guide
## How to turn supplier quotes into installed sell prices

Use with `02-price-book-template.csv` (open in Excel or Google Sheets).

---

## Core formulas

```
Landed cost / sf =
  Product cost / sf
  + Freight / sf
  + Expected damage/waste allowance (usually 5–10% of product for LVP; 8–12% carpet)

Total job cost / sf =
  Landed cost / sf
  + Adhesive / underlayment / pad / thinset / misc / sf
  + Labor / sf
  + (Trim cost amortized if you include trim in package)

Min installed sell / sf =
  Total job cost / sf ÷ (1 − Target gross margin %)
```

**Example**

- Product $1.15 + freight $0.12 = **$1.27** landed  
- Underlay/misc $0.15 + labor $1.75 = **$3.17** total job cost  
- Target margin 40% → `$3.17 ÷ 0.60` = **$5.28 / sf** minimum installed  
- Promo floor price might be **$4.99 / sf** only if ads/volume justify a temporary 36% margin

Never advertise below your **min installed sell** unless it is a deliberate loss-leader with a written reason.

---

## Target gross margins (starting points)

| Category | Target GP % | Notes |
|---|---|---|
| Everyday LVP / SPC (your stock) | 38–45% | Your volume weapon |
| Seconds / surplus LVP | 45–55% | Higher margin offsets risk + no reorder |
| Carpet residential | 35–42% | Watch pad + stretch labor |
| Carpet tile commercial | 28–35% | Bid competitive; win on speed |
| Engineered hardwood | 38–45% | Include acclimation / moisture extras |
| Tile / stone | 38–45% | Prep and waterproofing often underpriced |
| Vinyl windows (material + labor) | 32–40% | Price per opening; include haul-off |
| Custom cabinets | 40–50% | Protect wood-crew calendar |
| Custom showers / fireplaces | 40–50% | Your differentiator — don’t race to bottom |
| Commercial roofing | 20–30%+ | Depends on size; travel + bonds in bid |

Gross profit here means:  
`(Installed sell − materials − freight − direct labor − job supplies) ÷ Installed sell`  
Overhead (ads, office, trucks, insurance) comes out of that margin — so don’t run everyday jobs at 20% GP.

---

## Package naming (sell packages, not SKUs)

Customers buy outcomes. Map stock to 3–4 clear offers:

1. **Value Waterproof Floors** — 12 mil / thinner SPC — promo price  
2. **Everyday Waterproof Floors** — 20 mil — your default  
3. **Premium Waterproof Floors** — thicker / better visual / brand  
4. **Warehouse Special** — surplus/seconds — cash, limited, disclosed warranty  

Same idea for windows:

1. **Affordable Whole-Home Window Package**  
2. **Energy Upgrade Package** (better glass)  
3. **Builder / Multi-unit Package**

---

## Windows pricing (not per sf)

Use a simple job sheet:

```
Window sell =
  Factory cost (each opening)
  + Freight / delivery
  + Removal / haul-off
  + Install labor
  + Trim / caulk / misc
  ÷ (1 − target margin)
```

Average the common openings (DH, slider, picture) into a **“typical home package”** for ads (“homes from $X installed”) only after 10+ real jobs.

---

## Inventory rules (small stock)

| Stock type | What to hold | Max days of supply |
|---|---|---|
| Core LVP | 3–5 proven colors + matching trim | 30–45 days |
| Seconds bay | Only lots you can move fast | ≤60 days |
| Carpet | Prefer cut-order; stock only builder grades if weekly use | 30 days |
| Windows | Almost zero stock (custom sizes) | — |
| Roofing | Job-ordered | — |

If a color hasn’t sold in 45 days, stop reordering and push it as a special.

---

## Quote comparison sheet (same spec bake-off)

When two suppliers quote “5.5mm 20-mil SPC,” compare:

| Field | Supplier A | Supplier B | Winner |
|---|---|---|---|
| Landed $/sf | | | |
| Matching trim availability | | | |
| Reorder same dye lot? | | | |
| Warranty PDF pass-through | | | |
| Claim policy (days) | | | |
| Sample quality / realism | | | |

Winner = best **landed + reorder + warranty**, not lowest PDF.

---

## Weekly price-book ritual (30 minutes)

1. Update any new quotes in the CSV  
2. Recalculate min sell if freight or labor changed  
3. Confirm Meta/Google ads still match package prices  
4. Flag any SKU with <35% GP at current ad price  
5. Decide: raise price, switch supplier, or kill the ad  

---

## Bundle add-ons (raise ticket without new leads)

On every flooring estimate, script:

1. Windows / gutters (DFW Windows Plus)  
2. Shower or fireplace upgrade  
3. Paint while floors are out  
4. Cabinet refresh / custom faces  

Price bundles with a small package discount that still clears category margins.
