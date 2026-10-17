# FLOW 06 — PRODUCT SEARCH

## Objective

Implement the dedicated **Product Search experience** within the existing Ricoz product ecosystem.

The goal is to let visitors quickly discover the right Ricoz product by searching the existing catalogue and move directly from a relevant result to its Product Detail page.

This flow should build on the existing product discovery experience without redesigning it.

**Do not implement advanced product filtering, related products, related services, resources, contact, or consultation changes in this flow.**

---

## 1. Preserve the Existing Product Architecture

Use the existing product data source as the single source of truth.

Preserve:

* All existing products
* Product IDs
* Product slugs
* Product categories
* Product descriptions
* Product capabilities
* Product relationships
* Existing Product Detail routes
* Existing design system
* Existing Manrope typography
* Existing SEO implementation
* Existing React Router architecture

Do not duplicate or recreate product records.

The search system must operate dynamically against the existing product catalogue.

---

## 2. Search Entry Point

Add/refine the product search entry point on `/products`.

The search control should be clearly visible without overwhelming the catalogue experience.

Use a premium, minimal search field with:

* Search icon
* Clear placeholder
* Keyboard accessibility
* Clear/reset action when a query exists
* Appropriate focus state

Suggested placeholder:

**Search products by name, capability, or business need**

Do not make the search UI visually dominant over the product catalogue.

---

## 3. Search Behavior

Search the existing product dataset.

Relevant searchable fields should include:

* Product name
* Tagline
* Short description
* Category
* Overview
* Capabilities
* Benefits
* Features
* Use cases
* Topics/keywords if already available in the product model

Prioritize stronger matches.

Recommended relevance hierarchy:

**Exact product name → Product name match → Tagline → Category → Description → Capabilities/features/use cases**

A product whose name exactly matches the query should rank significantly higher than a product that merely contains the query inside a longer description.

---

## 4. Query Handling

Support:

* Lowercase/uppercase variations
* Partial product-name matches
* Multiple-word queries
* Whitespace normalization
* Common natural-language business searches

Examples:

`CRM`

`customer management`

`security`

`workflow automation`

`analytics`

`employee performance`

The search should return meaningful results even when the user does not know the exact product name.

Do not introduce an AI recommendation engine.

The search should remain deterministic and predictable.

---

## 5. Search Results

When a query is entered, transition the product catalogue into a clear results state.

Display:

**Search results for “{query}”**

Include a result count when useful.

Each result should use the existing Product Card or a refined search-result variant.

Show:

* Product name
* Category
* Tagline/short description
* Relevant discovery information
* Open/view product action

Keep results highly scannable.

Avoid displaying excessive product metadata.

---

## 6. Result Ranking

Create a lightweight deterministic scoring system.

Suggested weighting:

* Exact name match: highest priority
* Name starts with query: very high
* Name contains query: high
* Category match: medium-high
* Tagline match: medium
* Description match: medium
* Capabilities/features/use cases: supporting relevance

If multiple products have similar scores, preserve a stable ordering rather than producing unpredictable results.

Do not use random ranking.

Do not introduce external search services.

---

## 7. Empty Search State

Create a polished no-results state.

Example:

**No products found**

Supporting message:

**We couldn't find a product matching your search. Try a different term or browse the product categories.**

Provide useful recovery actions:

* Clear search
* Browse all products
* Explore categories

Do not show a blank screen.

Do not invent alternative products that do not actually match the query.

---

## 8. Initial Search State

When the user has not entered a query, preserve the normal Product Discovery experience.

Do not replace `/products` with an empty search screen.

The search interaction should enhance product discovery rather than disrupt it.

If a search overlay or expanded search state already exists elsewhere in the Ricoz system, maintain visual consistency with it, but keep product-specific search behavior scoped to this flow.

---

## 9. Product Detail Transition

Every valid search result must lead directly to the existing Product Detail page.

Flow:

**Enter query → Search results → Select product → Product Detail**

Use the existing product slug and React Router.

No full-page reload.

No duplicate product routes.

Preserve all existing Product Detail functionality.

---

## 10. Search State Management

Search state should be handled cleanly.

Support:

* Active query
* Results
* Result count
* Clear action
* Empty state

Do not unnecessarily add global state management if local state is sufficient.

Avoid URL changes unless the existing architecture already uses query parameters for product search.

If query parameters are used, ensure refreshing the page does not produce broken states.

---

## 11. Responsive Behavior

Audit search at:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* Search field should integrate naturally with the catalogue header
* Results should use an efficient multi-column layout

Tablet:

* Maintain comfortable spacing
* Avoid overly compressed cards

Mobile:

* Search field should span the available content width
* Touch targets must be comfortable
* Results should become a clean single-column layout where appropriate
* Query text should never overflow
* Clear/search controls must remain accessible

No horizontal scrolling.

---

## 12. Accessibility

Ensure:

* Search input has an accessible label
* Keyboard interaction works correctly
* Clear button has an accessible name
* Focus states are visible
* Search results are keyboard accessible
* Result updates are understandable to assistive technology
* Color is not the only indicator of state

Where appropriate, use semantic search/result structures and polite announcements for result-count changes.

---

## 13. Visual System

Follow the current Ricoz visual system:

* Manrope 400 / 500 / 600
* Ricoz Red `#C41230`
* `#111111` foreground
* Warm off-white background
* Subtle borders
* 8px spacing system
* 4px radius
* Minimal shadows
* Restrained hover/focus states

The search experience should feel like part of the same product catalogue—not like a separate application.

---

## 14. SEO

Do not create unnecessary indexable search-result pages.

If the search uses URL query parameters, ensure search states do not create duplicate SEO pages.

Keep the primary `/products` page as the canonical product discovery destination.

Do not modify existing product-detail SEO metadata.

---

## 15. Performance

Search should operate efficiently against the existing catalogue.

Avoid:

* External search libraries
* API calls
* Backend dependencies
* Heavy packages
* Duplicate product datasets

For the current catalogue size, a deterministic client-side search is acceptable.

Keep the implementation lightweight.

---

## 16. Scope Boundary

Do NOT implement in this flow:

* Advanced filters
* Category filter redesign
* Related products
* Related services
* Resource recommendations
* Case-study recommendations
* Contact flow changes
* Consultation flow changes
* Product purchasing
* Authentication
* AI search
* Backend search infrastructure

These belong to later Product Ecosystem flows.

---

## 17. Validation

Before finishing:

1. Search by an exact product name.
2. Search by a partial product name.
3. Search by category.
4. Search by capability/business need.
5. Test multiple-word queries.
6. Test uppercase/lowercase variations.
7. Test whitespace around queries.
8. Confirm relevant ranking.
9. Confirm no-results state.
10. Confirm clearing the search restores the catalogue.
11. Confirm every result opens the correct Product Detail page.
12. Confirm no product records or slugs were changed.
13. Test desktop and mobile layouts.
14. Verify keyboard accessibility.
15. Run:

`npm run build`

Fix actual build errors.

A pre-existing bundle-size warning should not be treated as a failure.

---

## Final Principle

**Search should make the Ricoz catalogue feel intelligent without pretending to be AI.**

Make products easy to discover.

Make relevance obvious.

Make the path from **query → product → understanding** feel immediate, clean, and premium.

Do not redesign the existing product ecosystem. Refine and connect it.
