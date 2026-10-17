Implement **FLOW 18 — SERVICE FILTERING** for the Ricoz platform.

### Objective

Upgrade the existing `/services` discovery experience with practical, catalogue-driven filtering.

The flow is:

**Services → Filter → Results → Service Detail**

Filtering must work alongside the existing **Flow 15 Service Discovery**, **Flow 16 Service Search**, and **Flow 17 Service Category Discovery** implementations.

The goal is to help users narrow the existing service catalogue without introducing a new taxonomy or separate filtering system.

---

## 1. Preserve Existing Architecture

Use the existing:

* `/services`
* `/services/category/:categorySlug`
* `/services/:serviceSlug`
* service catalogue
* service category data
* `ServiceCard`
* `ServiceCategory`
* `ServiceDetail`
* existing search implementation
* React Router
* SEO utilities
* Ricoz design system

Do not duplicate the service dataset.

The existing service catalogue remains the single source of truth.

---

## 2. Core Filter

Use the existing service categories as the primary filter dimension.

The filter should dynamically derive available categories from the existing catalogue.

Do not hard-code category counts.

Each category should display:

* category name
* current matching service count where useful
* selected/unselected state

Do not create new filter categories that do not exist in the service data.

---

## 3. Multi-Select Filtering

Support selecting multiple service categories.

When multiple categories are selected, show services belonging to **any selected category**.

Example:

**Technology + Business Services**

should return services belonging to either selected category.

Provide:

* selected filter indicators
* clear individual filter action
* **Clear all** action

Do not require the user to reload the page.

Filtering should happen client-side.

---

## 4. Desktop Filter Interface

On desktop, provide a compact filter control near the service search/results area.

The interface should make the current state immediately understandable.

Possible structure:

**Filter by capability**

`[Category A] [Category B] [Category C]`

Selected categories should have a clear visual distinction using the existing Ricoz design system.

Do not let the filter UI dominate the page.

---

## 5. Mobile Filter Interface

On mobile, use a dedicated bottom sheet or drawer.

The mobile filter should contain:

* available categories
* selected states
* matching result count
* **Show N services** confirmation action
* **Clear all** action

The drawer must:

* trap focus appropriately where needed
* be keyboard accessible
* close predictably
* prevent accidental interaction with obscured page content

The result count should update as selections change.

---

## 6. Search + Filter Interaction

The existing Flow 16 service search and this filter must work together.

Example:

**Search:** `security`
**Category:** `Technology`

Results should satisfy both conditions.

The logic should be:

**Search matching services**
→ **Apply selected category filters**
→ **Display final results**

If there is no search query, filtering should operate against the complete service catalogue.

If there are no selected filters, search should continue to work exactly as before.

---

## 7. Result Status

When search or filters are active, display a concise result-status line.

For example:

**12 services**

`Technology · Security`

Include an inline **Clear all** action when appropriate.

The status should accurately represent the active search/filter state.

Avoid verbose explanatory text.

---

## 8. No-Results State

Handle combinations that produce zero results gracefully.

Show:

* clear indication that no services match
* current search/filter context
* **Clear all** action
* concise suggestion to broaden the search

Do not fabricate services or recommendations.

Clearing the filters/search should restore valid results immediately.

---

## 9. Filtered Results

Render filtered services using the existing `ServiceCard`.

Do not create a second card component.

Every result must continue to link to:

`/services/:serviceSlug`

The filtering system must not alter the underlying service objects or their routes.

---

## 10. Filter State

Keep filter state predictable and local to the Services experience.

Do not introduce unnecessary URL complexity.

If the existing implementation already supports query parameters or state synchronization, preserve that architecture rather than creating another mechanism.

Temporary filter states must not create duplicate indexable pages.

Refreshing `/services` must remain safe and functional.

---

## 11. Category Page Relationship

Do not replace the existing category pages from Flow 17.

A category page remains a dedicated route:

`/services/category/:categorySlug`

The filtering experience is primarily for the main `/services` catalogue.

Do not turn category pages into a duplicate version of the filtered Services page.

---

## 12. Responsive Behavior

Validate:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* compact filter controls
* clear relationship between search, filters and results
* efficient service grid

Tablet:

* reduce spacing and grid columns naturally
* maintain filter usability

Mobile:

* full-width search
* filter trigger with active-filter count where useful
* bottom-sheet filter interface
* clear confirmation action
* no horizontal overflow

---

## 13. Accessibility

Ensure:

* filter controls use appropriate semantic controls
* selected state is accessible
* keyboard navigation works
* focus states are visible
* mobile drawer is keyboard accessible
* close controls have accessible labels
* result counts are understandable
* color is not the only indicator of selection

Do not use inaccessible custom controls when native controls can provide the same behavior.

---

## 14. Visual Direction

Preserve the established Ricoz system:

* Ricoz Red `#C41230`
* Manrope 400/500/600
* warm off-white background
* `#111111` primary text
* restrained muted text
* thin borders
* 4px radius
* 8px spacing scale
* minimal shadows
* no gradients
* no glassmorphism
* no excessive animation

The filtering UI should feel like part of the existing Services page, not a separate application.

---

## Scope Boundary

Do NOT implement:

* new service taxonomy
* price filtering
* geographic filtering
* availability filtering
* ratings filtering
* AI recommendations
* semantic/AI filtering
* personalization
* related products
* related services
* contact integration
* consultation integration
* CRM
* backend filtering APIs
* purchasing
* payments
* authentication
* CMS
* analytics/tracking
* major global navigation redesign

Only use filter dimensions supported by the current service catalogue.

---

## Validation

After implementation:

1. Verify `/services` still loads the complete catalogue.
2. Select one category and verify the result count.
3. Select multiple categories and verify OR-based category matching.
4. Combine search with one filter.
5. Combine search with multiple filters.
6. Clear an individual filter.
7. Clear all filters.
8. Clear search while retaining filters.
9. Clear filters while retaining search.
10. Verify the zero-results state.
11. Verify every result opens the correct service detail page.
12. Verify category counts remain accurate.
13. Test desktop filter controls.
14. Test mobile bottom-sheet/drawer behavior.
15. Verify keyboard accessibility.
16. Test responsive layouts.
17. Run the production build.

Fix actual build/runtime/type errors introduced by this flow.

Do not treat an existing bundle-size warning as a failure if the production build otherwise passes.

### Final principle

**Filtering should reduce the service catalogue intelligently without changing its structure: search narrows the intent, category filters narrow the capability area, and the existing Service Detail remains the destination.**
