# OUD Restaurant — Research Gaps (Phase 1)

**Date:** 2026-10-17

## Root cause

This cloud environment's network policy blocks the hosts needed:

- `oudrestaurant.co.uk` (proxy CONNECT 403; WebFetch DNS failure)
- `maps.app.goo.gl` / Google Maps (same)
- `deliveroo.co.uk`, `firsttable.co.uk`, `zabihah.com`, Companies House (WebFetch DNS failure)

Only the WebSearch tool worked. It returns model-written summaries of indexed snippets, so **no finding in this package is first-hand verified.**

**Fix:** in the environment settings, add these hosts to *Allowed domains* (or choose broader network access), then re-run Phase 1 capture: `oudrestaurant.co.uk`, `maps.app.goo.gl`, `www.google.com`, `google.com`, `deliveroo.co.uk`. Docs: https://code.claude.com/docs/en/cloud-environments#network-access

## Inaccessible pages

| URL | Purpose |
|---|---|
| https://oudrestaurant.co.uk/ | Homepage, nav, hero, menu |
| https://oudrestaurant.co.uk/about-us | Brand story |
| https://oudrestaurant.co.uk/book-a-table | Booking mechanism |
| https://oudrestaurant.co.uk/categories/rice | Menu category |
| https://oudrestaurant.co.uk/categories/kabsa | Menu category |
| Other `/categories/*` pages | Not found in index; existence unconfirmed |
| Ordering / cart / checkout / account pages | Existence unknown |
| https://maps.app.goo.gl/e4ZkE7h87HBLWYna9?g_st=ac | Maps listing; redirect unknown |
| https://deliveroo.co.uk/menu/birmingham/moseley/oud-indo-arabic-restaurant | Delivery menu comparison |

## Unverified details

- Every business detail (address, phone, email, hours): index only
- Opening hours conflict (official vs Zabihah)
- Whether "Click and Collect" or any direct online ordering exists (conflicting search results)
- Whether Book a Table has a form or widget
- Halal / alcohol-free status (third-party, "verbal assurance")
- Whether OUD HOSPITALITY LTD (Companies House 16654107) is the operator
- Whether the Maps short link points to the Moseley venue

## Menu gaps

- Complete item list: only 15 items were seen; the full menu is unknown
- Exact names for the two rice items (the search tool paraphrased them)
- All dish descriptions
- Portion sizes, variants (for example a veg biryani mentioned by First Table), add-ons
- Allergen and dietary information
- Product images and their sources
- Availability notes
- Items in *OUD's Signature*
- Whether a drinks menu exists
- Whether a PDF or print menu exists
- Why prices end in both .95 and .99/.49 (current, or different crawl dates?)
- Deliveroo item names (paraphrased) and its full menu

## Brand and UX gaps

- Logo, colours, typography, imagery
- Navigation labels, footer, social links
- Mobile layout and performance
- Any accessibility issues

## Google Maps gaps

- Final listing URL, rating, review count, review themes, photos, attributes, hours, phone

## Screenshots

- None captured. Full list in `visual-reference-index.md`.

## Manual inputs that would close most gaps fastest

1. Unblock the domains above, **or** send screenshots from the list in `visual-reference-index.md`
2. Owner-supplied menu (PDF/spreadsheet) with descriptions, allergens and options
3. Owner confirmation of ordering, delivery and booking setup, hours, and halal status
4. Logo and photography
