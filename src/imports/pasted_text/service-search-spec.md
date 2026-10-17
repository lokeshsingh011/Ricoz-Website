Implement **FLOW 16 — SERVICE SEARCH** for the Ricoz platform.

### Objective

Upgrade the existing `/services` experience with a focused, deterministic service-search flow:

**Services → Search → Results → Service Detail**

Users should be able to quickly find a relevant service from the existing service catalogue and open its existing detail page.

Preserve the work completed in **Flow 15 — Service Discovery**. Search should enhance discovery, not replace the existing category and browse experience.

---

## 1. Preserve Existing Architecture

Use the existing:

* `/services` route
* service catalogue/data model
* service IDs and slugs
* service categories
* `ServiceCard`
* `ServiceDetail`
* `ServiceCategory`
* React Router
* SEO utilities
* Ricoz design system
* responsive architecture

Do **not** create a second service dataset or separate search system.

The existing service catalogue remains the single source of truth.

---

## 2. Search Entry Point

Add/refine the search experience on `/services`.

The search field should be clearly visible without overwhelming the discovery experience.

Use appropriate placeholder language such as:

> Search services by name, capability, or business need

Keep the search interface visually consistent with the existing Ricoz search components.

Include:

* search icon
* text input
* clear control when text exists
* accessible label
* keyboard-friendly interaction

Search should operate client-side against the existing catalogue.

No backend search API is required.

---

## 3. Searchable Service Fields

Search across the information already available in each service object.

Prioritize fields approximately in this order:

1. exact service name
2. service name prefix
3. service name contains query
4. category
5. tagline / short description
6. full description / overview
7. capabilities
8. outcomes / benefits
9. process information
10. use cases / related descriptive fields, if already present

Only search fields that actually exist in the current service data.

Do not invent searchable content.

---

## 4. Deterministic Ranking

Use predictable ranking rather than random ordering or AI.

A useful ranking model:

**Highest priority**

* exact service-name match

**High priority**

* service-name starts with query
* service-name contains query

**Medium priority**

* category match
* tagline/short description match

**Supporting priority**

* overview
* capabilities
* outcomes
* process
* use cases

If multiple services receive the same score, preserve a stable catalogue order.

The same query should therefore produce the same ordering every time.

---

## 5. Search Results

When a query is active, clearly transition from the general browse state into a search-results state.

Display:

* search query
* number of matching services
* result cards
* clear-search action

Example structure:

**Search results for “digital”**

`8 services`

Then render the matching services using the existing `ServiceCard`.

Do not create a completely new card system.

---

## 6. Result → Service Detail

Every search result must navigate to the existing service detail route.

Expected journey:

**Search → Result → `/services/:serviceSlug`**

Use the actual service slug from the catalogue.

Do not duplicate service-detail logic.

The destination must retain the existing Service Detail experience from the later service flows.

---

## 7. No-Results State

Create a polished empty state when no services match.

It should communicate:

* the searched query
* that no matching services were found
* a clear **Clear search** action
* a suggestion to try a broader term

Do not fabricate recommended services merely to fill the page.

If the existing category discovery remains visible, allow the user to return to normal browsing naturally.

---

## 8. Search + Existing Discovery

Search must coexist cleanly with the Flow 15 discovery experience.

When there is no query:

**Hero → Categories → Browse Services**

When a query exists:

**Search Context → Results**

Avoid showing a large amount of unrelated browse content above the actual results.

Clearing the search should restore the normal service-discovery state.

Do not implement advanced filtering in this flow.

---

## 9. Search State

Keep the search state predictable and local to the Services experience.

Avoid unnecessary URL/query-parameter complexity unless the existing architecture already uses it.

The search overlay/state must not create indexable duplicate pages.

Refreshing `/services` should not result in broken routing.

---

## 10. Responsive Behavior

Validate:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* prominent but compact search field
* efficient result grid
* clear result-status line

Mobile:

* full-width search control
* comfortable touch targets
* clear button remains accessible
* result cards remain readable
* no horizontal overflow

If the search requires a mobile-specific presentation, keep it lightweight rather than creating a separate architecture.

---

## 11. Accessibility

Ensure:

* proper input label
* keyboard accessibility
* visible focus state
* accessible clear button
* semantic result links
* sufficient contrast
* no reliance on color alone
* appropriate announcement/state handling where useful

The search experience should remain usable without a mouse.

---

## 12. Visual Direction

Continue the established Ricoz system:

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

Search should feel like a native part of the Services page, not a separate application.

---

## Scope Boundary

Do NOT implement:

* advanced filters
* multi-select service filtering
* AI search
* semantic/LLM search
* personalization
* recommendations
* related products
* related services
* contact integration
* consultation integration
* CRM
* backend search APIs
* analytics/tracking
* new service taxonomy
* new service data
* CMS
* authentication

Those belong to later flows or separate systems.

---

## Validation

After implementation:

1. Search by an exact service name.
2. Search by part of a service name.
3. Search by category.
4. Search by a capability or descriptive term that exists in the data.
5. Verify ranking favors stronger matches.
6. Verify result count is accurate.
7. Verify no-results state.
8. Verify clear search restores Flow 15 discovery.
9. Verify every result opens the correct service detail page.
10. Test several different services from the current catalogue.
11. Test keyboard interaction.
12. Test desktop and mobile layouts.
13. Run the production build.

Fix actual errors introduced by this flow.

Do not treat an existing bundle-size warning as a build failure if the production build otherwise passes.

### Final principle

**Make service search fast, predictable, and catalogue-driven: find the right service quickly, then move directly into the existing Service Detail experience.**
