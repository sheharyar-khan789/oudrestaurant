# OUD Restaurant — Google Maps Audit (Phase 1)

**Date checked:** 2026-10-17
**Status: NOT ACCESSED.**

## Access result

| Step | Result |
|---|---|
| Open `https://maps.app.goo.gl/e4ZkE7h87HBLWYna9?g_st=ac` (shell) | ❌ Proxy 403, host not allowed by the environment's network policy |
| Open the same URL (WebFetch) | ❌ DNS failure (`ENOTFOUND maps.app.goo.gl`) |
| Final redirect destination | **UNKNOWN**. The short link could not be resolved. |
| Google rating / review count | **UNKNOWN**. No search result exposed the Google Business Profile rating. |
| Business photos, attributes, popular times | **UNKNOWN** |

**Assumption, unconfirmed:** the short link most likely points to OUD at 2 Woodbridge Rd, Moseley, Birmingham B13 8EJ (the address on the official site). This has **not** been confirmed.

## Nearest available proxies (THIRD-PARTY, not Google Maps data)

These **do not** stand in for Maps data. They are listed so the design team knows what kind of evidence exists.

| Source | What a search summary reported | Reliability |
|---|---|---|
| Zabihah — https://www.zabihah.com/restaurants/2958c03d-f813-4759-8e81-2ed8323fc06f/oud-moseley-birmingham | 5.0/5 from **1** review, reportedly a Google review dated March 2026 that mentions the Arabic/Indian fusion menu, ambience and service | Very low (n = 1) |
| First Table — https://www.firsttable.co.uk/birmingham/moseley/oud | Around 21 reviews, aggregate about 7.19/10 | Low; not opened directly |

**No recurring customer themes can be stated** from this evidence. No reviews were copied, and no testimonials have been or should be written from it.

## Needed to complete this file

1. Allow `maps.app.goo.gl`, `www.google.com` and `google.com` in the environment's network settings, **or**
2. Have someone supply manually:
   - The resolved full Maps URL (open the short link and copy the address bar)
   - A screenshot of the listing header: name, rating, review count, category, address, hours, phone and website link
   - Screenshots of the "Reviews" tab sorted by *Newest* and by *Most relevant*, including the review-topic chips if shown
   - Screenshots of the Photos tab (owner and customer photos)
   - Listed attributes (dine-in, takeaway, delivery, halal, accessibility, etc.)
