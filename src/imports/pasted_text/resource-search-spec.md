# FLOW 30 — RESOURCE SEARCH

## Objective

Implement the resource search experience:

**Resources → Search → Results → Resource**

Allow users to quickly find relevant resources from the existing catalogue using deterministic client-side search.

---

## 1. Preserve Existing Architecture

Reuse:

* Existing resource catalogue/data model
* Existing resource IDs and slugs
* Existing resource categories
* Existing `ResourceCard`
* Existing `/resources`
* Existing resource detail route
* Existing design system
* Existing routing and SEO utilities

Do not create a second resource catalogue or search architecture.

---

## 2. Search Interface

Add a clear search field to `/resources`.

The search experience should be immediately understandable and positioned near the resource browsing area.

Use:

* Search input
* Appropriate search icon
* Clear/reset control when a query exists
* Accessible label
* Keyboard support

Placeholder example:

**Search resources**

Do not make the placeholder behave as the actual label.

---

## 3. Search Fields

Search against the actual available resource data.

Where these fields exist, include:

* Resource title
* Short description / excerpt
* Category
* Resource type
* Tags/topics
* Author
* Relevant keywords
* Existing searchable content fields

Do not search fields that are not part of the resource model.

Search should be case-insensitive.

---

## 4. Deterministic Ranking

Use predictable relevance ranking.

Recommended priority:

1. Exact title match
2. Title starts with query
3. Title contains query
4. Exact category/type match
5. Tags/topics match
6. Description/excerpt match
7. Other explicitly searchable metadata

Higher-confidence matches should appear first.

Do not use AI, semantic search APIs, external search services, or random ranking.

---

## 5. Search Results

When a query is entered:

Change the browse section into a clear results state.

Display:

* Search query
* Result count
* Matching `ResourceCard` items

Example:

**Resources matching “digital strategy”**

`8 resources`

Keep the existing resource-card design.

Clicking a result must continue to the canonical:

`/resources/:resourceSlug`

route.

---

## 6. No Results

If no resources match:

Display a useful empty state such as:

**No resources found**

Supporting text should encourage the user to try another search.

Provide:

**Clear search**

Do not show fabricated recommendations.

Do not automatically redirect the user.

---

## 7. Clear / Reset

When a search is active:

* Show a clear control
* Clear the query
* Restore the complete resource catalogue
* Restore the normal browsing state

Ensure the reset does not reload or duplicate resource data.

---

## 8. Search + Existing Categories

If Flow 29 already provides category discovery/filter state, ensure search behaves predictably alongside it.

Search should operate against the currently selected category if an existing category state is active.

For example:

**Category: Insights + Search: “growth”**

should return only resources matching both conditions.

If Flow 29 does not have an active category filter architecture, do not introduce one here.

Do not turn this flow into advanced filtering.

---

## 9. Search State

Keep the search state clean and predictable.

Prefer client-side state using the existing application architecture.

Do not introduce unnecessary URL complexity.

If the existing resource architecture already supports query parameters for search, preserve that pattern rather than creating a competing state mechanism.

---

## 10. Responsive Behaviour

### Desktop

Provide a comfortable search field within the resource discovery layout without dominating the page.

### Tablet

Maintain readable search controls and resource results.

### Mobile

Ensure:

* Search input fits the viewport
* Clear button is easy to tap
* No horizontal overflow
* Result cards remain readable
* Result count remains visible
* Keyboard interaction works correctly

---

## 11. Accessibility

Ensure:

* Search field has an accessible label
* Search icon does not replace the accessible label
* Clear control has an accessible name
* Results update accessibly
* Keyboard navigation works
* Focus states are visible
* Result cards use semantic links
* Empty states are understandable to assistive technologies

Do not rely on color alone to communicate search state.

---

## 12. SEO

Do not create separate indexable pages for every search query.

Search state is client-side interaction.

Keep `/resources` as the canonical indexable resource discovery page.

Do not generate duplicate metadata for query states.

---

## 13. Performance

Keep search lightweight and client-side.

Do not introduce:

* External search APIs
* Heavy search libraries
* AI/LLM services
* Backend search infrastructure
* Duplicate resource datasets

For the existing catalogue size, a simple deterministic search implementation is preferred.

---

## 14. Scope Boundary

Do **not** implement:

* AI-powered search
* Semantic search
* External search engines
* Advanced filtering redesign
* New resource taxonomy
* Article reading experience
* Related products/services
* Case-study discovery
* Contact redesign
* Consultation redesign
* Personalization
* CMS
* Backend
* Authentication
* Payments

This flow is specifically:

**Search → Results → Resource**

---

## 15. Validation

Test:

1. Open `/resources`
2. Confirm search field is visible
3. Search by exact resource title
4. Search by partial title
5. Search by category
6. Search by tags/topics where available
7. Search by description text
8. Verify relevance ordering
9. Verify result count
10. Clear the search
11. Verify the complete catalogue returns
12. Test a query with zero results
13. Test search with an existing category state if supported
14. Open multiple results and verify canonical resource routes
15. Test desktop/tablet/mobile
16. Test keyboard accessibility
17. Check console for new errors
18. Run the production build

Resolve only issues introduced by this flow.

## Success Criteria

A user can move naturally through:

**Resources → Search → Relevant Results → Resource Detail**

with deterministic ranking, accurate results, clean empty/reset states, and no unnecessary search infrastructure.
