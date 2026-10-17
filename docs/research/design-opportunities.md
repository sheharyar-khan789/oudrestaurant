# OUD Restaurant — Design Opportunities (Phase 1)

**Date:** 2026-10-17
**Evidence base:** search-index snippets only (see `website-audit.md`). The live site, mobile experience and Google Maps listing were **not** inspected. Every recommendation below is tied to its evidence and to what still needs confirming. None of it claims OUD lacks a feature, because the relevant pages could not be checked.

## A. Evidence-based friction points (probable; need live confirmation)

| # | Finding | Evidence | Confidence |
|---|---|---|---|
| F1 | Website and Deliveroo prices differ (for example lamb shank kabsa £19.99 vs £20.95) | menu-inventory.md | Medium (both from snippets) |
| F2 | Booking contact runs through a mobile number and a Gmail address; a self-serve booking flow is not confirmed | book-a-table snippet | Medium |
| F3 | Category page titles in the search index name a single dish ("Plain Rice", "Hyderabadi Chicken Kabsa") rather than the category, which weakens search visibility for "biryani Moseley" and similar queries | site: search results | Medium |
| F4 | Opening hours conflict across listings (official Mon–Sun 5–11pm vs a Zabihah variant) | website-audit.md §2 | Medium |
| F5 | Direct online ordering status is **unknown** (search results conflict) | website-audit.md §4 | — |

## B. Recommendations for the concept

Labelled **RECOMMENDATION**. Each states what it depends on.

1. **Lead with direct ordering.** Put a persistent "Order for Collection" CTA in the header and on mobile (sticky bottom bar), and use the hero to direct people to order. *Depends on:* confirming whether ordering exists today (F5). If it doesn't, this needs new development or an ordering provider.
2. **A "Better price direct" message**, only if the owner confirms direct prices sit at or below Deliveroo's. The evidence suggests they may for some items (F1). *Needs:* owner confirmation of pricing policy.
3. **Menu discovery:** a sticky horizontal category bar using OUD's existing section names (*To Start With, Bread Selection, Rice, Biryanis, Kabsa, Curries and Classics, OUD's Signature, Something Sweet*), with search and dietary filters. *Needs:* allergen and dietary data from the owner (none captured).
4. **Signature storytelling:** feature *Kabsa* and *OUD's Signature* as hero categories, since they set OUD apart from neighbouring Indian restaurants; keep the regional dish names (Hyderabadi, Emirati, Nizami, Purani Delhi). *Needs:* real photography.
5. **Food cards** with photo, exact name, description, price, a dietary tag and a quick-add button; a detail sheet for variants (for example chicken/mutton/veg biryani). *Needs:* descriptions, variants and images, none of which were captured.
6. **Booking:** an inline form (date, time, party size) that falls back to tap-to-call and WhatsApp on mobile. *Needs:* owner decision on a booking provider versus email/manual confirmation (F2).
7. **Trust and clarity:** one consistent hours block (F4), map embed, halal statement *only if the owner confirms it*, and an allergen notice.
8. **SEO basics:** a proper title and H1 per category page ("Biryanis | OUD Indo-Arabic Restaurant, Moseley"), LocalBusiness/Restaurant schema, and menu schema (F3).
9. **Review proof:** show the Google rating and review count dynamically, or link to them. **Never** invent testimonials. *Needs:* Maps access.

## C. Retain (as far as the index shows)

- The Indo-Arabic positioning and the About Us heritage story
- The existing menu section names and dish naming style
- Per-category URLs (keep or redirect `/categories/<slug>` to protect SEO)
- The Book a Table page and its contact routes

## D. Requires new development or owner confirmation

| Item | Why |
|---|---|
| Online ordering engine (cart, slots, payments, kitchen notification) | Existence not confirmed; probably a new build or integration |
| Delivery from the website | Only Deliveroo is evidenced; a delivery radius and fees policy would be needed |
| Customer accounts, re-order, loyalty | No evidence either way |
| Allergen/dietary matrix | Legal requirement for UK food businesses; data not captured |
| Halal certification wording | Only third-party "verbal assurance" evidence |
| Pricing parity with Deliveroo | Business decision |
| Photography and brand assets | No visual audit was possible |
