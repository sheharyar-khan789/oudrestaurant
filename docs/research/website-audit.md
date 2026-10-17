# OUD Restaurant — Existing Website Audit (Phase 1)

**Date of research:** 2026-10-17
**Status: incomplete.** The official site could not be opened directly from this environment (see "Access" below). Everything here comes from search-engine index snippets and is labelled as such.

## Evidence labels

| Label | Meaning |
|---|---|
| **VERIFIED** | Seen directly on the live page. *Nothing in this file has this label.* |
| **INDEXED** | Reported by a web-search result that cites an official oudrestaurant.co.uk URL. It is not first-hand and may be stale or summarised. |
| **THIRD-PARTY** | Reported by a non-official listing (search snippet only). |
| **OBSERVATION / RECOMMENDATION / UNKNOWN** | Analyst interpretation, a suggestion, or a gap. |

## 1. Access (Task 1)

| Capability | Result |
|---|---|
| Shell HTTP (`curl`) to `oudrestaurant.co.uk` | ❌ Proxy refused the CONNECT with **403** (host not allowed by this environment's network policy) |
| Shell HTTP to `maps.app.goo.gl` | ❌ Same 403 refusal |
| WebFetch tool to `oudrestaurant.co.uk`, `www.oudrestaurant.co.uk`, `maps.app.goo.gl`, `deliveroo.co.uk`, `firsttable.co.uk`, `zabihah.com`, `find-and-update.company-information.service.gov.uk` | ❌ DNS failure (`getaddrinfo ENOTFOUND`) on every host |
| WebSearch tool | ✅ Works. It returns result titles, URLs and a model-written summary of indexed snippets, **not** raw page content |
| Maps short-link redirect | ❌ Could not resolve; final destination **unknown** |
| Screenshots | ❌ Not possible. Chromium/Playwright is installed, but no page can be loaded. |

**What would unblock this:** add `oudrestaurant.co.uk`, `maps.app.goo.gl`, `google.com` / `www.google.com` (and optionally `deliveroo.co.uk`) to the environment's allowed domains. See https://code.claude.com/docs/en/cloud-environments#network-access.

## 2. Business details

| Field | Value | Label | Source |
|---|---|---|---|
| Trading name | OUD Restaurant (page `<title>` "OUD Restaurant") | INDEXED | https://oudrestaurant.co.uk/ |
| Positioning | Indo-Arabic; About Us says the restaurant brings "together the richness of Indian and Arabic culinary traditions" | INDEXED | https://oudrestaurant.co.uk/about-us |
| Address | 2 Woodbridge Rd, Moseley Birmingham, B13 8EJ, United Kingdom | INDEXED | https://oudrestaurant.co.uk/about-us, https://oudrestaurant.co.uk/book-a-table |
| Phone | +44 7467 745453 | INDEXED | https://oudrestaurant.co.uk/book-a-table |
| Email | oudrestaurantuk@gmail.com | INDEXED | https://oudrestaurant.co.uk/book-a-table |
| Opening hours | Monday–Sunday, 5:00 PM – 11:00 PM | INDEXED (official), matching THIRD-PARTY First Table | https://oudrestaurant.co.uk/, https://www.firsttable.co.uk/birmingham/moseley/oud |
| Conflicting hours | Zabihah reportedly shows Tuesday closed and Thursday 9am–5pm (listing about 149 days old) | THIRD-PARTY, conflicting | https://www.zabihah.com/restaurants/2958c03d-f813-4759-8e81-2ed8323fc06f/oud-moseley-birmingham |
| Halal / alcohol | Zabihah describes the venue as halal and alcohol-free, based on "verbal assurance from staff" | THIRD-PARTY (needs owner confirmation) | Zabihah URL above |
| Possible operating company | "OUD HOSPITALITY LTD" (company 16654107) appeared in a search for this restaurant. Its link to OUD Moseley is **unconfirmed**. | UNKNOWN | https://find-and-update.company-information.service.gov.uk/company/16654107/filing-history |

**Name-collision warning (OBSERVATION):** Several unrelated "OUD" restaurants exist, including oudrestaurant.com (Kuwait), oudrestaurant.sg / oudrestaurant.oddle.me (Singapore), oudrestaurant.be (Brussels), Oud London (Zeist, NL) and Oudh 1722 (London). None of their data is used here. Kababish at 29 Woodbridge Rd is a separate, neighbouring business.

## 3. Page structure and navigation

URLs confirmed to exist **in the search index** (live status not checked):

| URL | Indexed title | Notes |
|---|---|---|
| https://oudrestaurant.co.uk/ | OUD Restaurant | Snippets suggest the homepage shows menu sections with prices |
| https://oudrestaurant.co.uk/about-us | About Us - OUD Restaurant | Brand story, address and contact details |
| https://oudrestaurant.co.uk/book-a-table | Book A Table - OUD Restaurant | Reservation contact details (phone/email). **UNKNOWN** whether it has a booking form or widget, or just contact details. |
| https://oudrestaurant.co.uk/categories/rice | Plain Rice - OUD Restaurant | Category listing |
| https://oudrestaurant.co.uk/categories/kabsa | Hyderabadi Chicken Kabsa - OUD Restaurant | Category listing |

The `/categories/<slug>` pattern suggests other category pages exist (for example biryani or curries), but none were found in the index. **Not assumed to exist.**

Menu sections named in snippets (INDEXED): *To Start With*, *Bread Selection*, *Rice*, *Biryanis*, *Kabsa*, *Curries and Classics*, *OUD's Signature*, *Something Sweet*.

**UNKNOWN:** the main navigation labels, footer, social links, contact page, privacy, terms and allergen pages.

## 4. Ordering, collection, delivery and booking

| Feature | Finding | Label |
|---|---|---|
| Online ordering / "Click and Collect" on the official site | One search summary said the site offers "Click and Collect". A later search for cart/checkout/collection found **no** evidence. **Conflicting, so treat as UNKNOWN.** | UNKNOWN |
| Cart / checkout / payment | Not found | UNKNOWN |
| Delivery via third party | A Deliveroo listing exists: "OUD - Indo Arabic Restaurant - Moseley" at https://deliveroo.co.uk/menu/birmingham/moseley/oud-indo-arabic-restaurant. It could not be opened. | THIRD-PARTY |
| Deliveroo vs. website prices | Reported to differ (for example kabsa £16.99 on the site vs £16.95 on Deliveroo). See menu-inventory.md. | THIRD-PARTY / INDEXED |
| Table booking | A `/book-a-table` page exists; how it works is unknown | INDEXED / UNKNOWN |
| Promotional booking channel | First Table lists OUD ("50% off the first table of the night") | THIRD-PARTY |
| Customer accounts / loyalty | Not found | UNKNOWN |

## 5. Brand identity and visual style

**UNKNOWN. No visual inspection was possible.** The logo, colour palette, typography, photography style, hero design and mobile layout all need direct access or owner-supplied assets. The name "OUD" (agarwood, used in Arabic perfumery) and the Indo-Arabic positioning are the only brand cues verified so far (INDEXED).

## 6. Mobile experience

**UNKNOWN.** Not tested.

## 7. Strengths, problems, opportunities

Only evidence-based points are listed. See `design-opportunities.md` for the full recommendations.

- **Strength (INDEXED):** clear Indo-Arabic positioning; dish names carry a sense of place (Hyderabadi, Emirati, Purani Delhi, Nizami); prices are published on the site; each category has its own URL, which helps SEO.
- **Probable issue (INDEXED, needs live confirmation):** the website and Deliveroo show different prices. The search index also titles category pages after a single dish ("Plain Rice", "Hyderabadi Chicken Kabsa") rather than the category, which points to weak page-title SEO.
- **Probable issue (INDEXED):** booking appears to go through phone or a Gmail address, which may add friction. Whether a form exists still needs checking.
- **Unverified:** whether direct online ordering exists at all. This is the most important open question for a "direct ordering" concept.
