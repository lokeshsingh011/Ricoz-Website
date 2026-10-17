# FLOW 27 — SOLUTION → RELATED SERVICE

## Objective

Implement the complete service relationship flow:

**Solution → Related Services → Service Detail**

A user exploring a solution should be able to discover the relevant Ricoz services associated with that solution and move directly into the existing service-detail experience.

---

## 1. Preserve Existing Architecture

Reuse:

* Existing solution catalogue/data model
* Existing solution IDs and slugs
* Existing `SolutionDetail`
* Existing 60-service catalogue
* Existing `ServiceCard`
* Existing `/services/:serviceSlug` route
* Existing dynamic `ServiceDetail`
* Existing routing utilities
* Existing Ricoz design system

Do not create duplicate service data or separate service-page templates.

---

## 2. Solution → Service Relationship

Use the solution's existing service relationship field, such as:

`relatedServices`

Resolve every referenced service against the canonical service catalogue.

Before rendering:

* Remove invalid references
* Remove duplicate services
* Preserve canonical service data
* Prevent broken service links

Do not automatically generate relationships based on assumptions.

Only display services that are explicitly associated with the solution.

---

## 3. Related Services Section

Add or refine a dedicated section on:

`/solutions/:solutionSlug`

Use the heading:

**Services that help deliver this solution**

Include a short supporting statement where appropriate, explaining that these services can help plan, implement, improve, or support the solution.

Render services using the existing `ServiceCard`.

Each card should use canonical service information such as:

* Service name
* Service category
* Tagline
* Short description
* Existing supporting metadata

Do not introduce a new card system.

---

## 4. Service Navigation

Clicking a service must navigate directly to:

`/services/:serviceSlug`

The existing dynamic `ServiceDetail` page should handle the destination.

The service page must retain its existing full experience:

**Overview → Business Need → Capabilities → Process → Outcomes → Use Cases → FAQs → Related Products → Related Services → Resources → Conversion**

Do not create a special solution-specific service detail page.

---

## 5. Empty State

If the current solution has no valid related services:

**Do not render the related-services section.**

The page should continue naturally to the next available section.

Do not show:

* Empty cards
* Placeholder services
* Generic recommendations
* Artificial relationships

---

## 6. Relationship Integrity

Validate the complete solution catalogue.

For every solution:

* `relatedServices` references resolve to real service slugs/IDs
* No duplicate service references
* No broken service links
* Service names come from the canonical service catalogue
* Service category information remains consistent
* Invalid references fail gracefully

Do not modify unrelated service catalogue content.

---

## 7. Responsive Behaviour

### Desktop

Use the existing editorial service-card grid with comfortable spacing.

### Tablet

Reduce the number of columns naturally while maintaining card readability.

### Mobile

Use a single-column or appropriately compact service-card layout.

Ensure:

* No horizontal overflow
* Cards remain readable
* Links are easy to tap
* Focus states are visible
* Content hierarchy remains clear

---

## 8. Visual System

Maintain the established Ricoz system:

* Ricoz Red `#C41230`
* Manrope typography
* Warm off-white background
* Near-black text
* Thin borders
* 8px spacing scale
* 4px radius
* Minimal shadows
* Restrained editorial technology aesthetic

Do not introduce:

* Gradients
* Glassmorphism
* Heavy shadows
* Excessive animation
* New service-card styling
* Decorative visual noise

---

## 9. Accessibility & SEO

Maintain the existing solution-page SEO and structure.

Ensure:

* Semantic section headings
* Accessible service links
* Keyboard navigation
* Visible focus states
* Sufficient contrast
* Meaningful link/card labels

Do not create additional indexable relationship URLs.

The service detail page remains the canonical destination.

---

## 10. Scope Boundary

Do **not** implement:

* Service search
* Service filtering
* New service categories
* Service catalogue redesign
* AI recommendations
* Personalization
* Purchasing
* Payments
* Authentication
* Backend/CRM
* CMS
* New ServiceDetail architecture
* Related product redesign
* Resource discovery
* Contact redesign
* Consultation redesign

This flow is specifically:

**Solution → Related Services → Existing Service Detail**

---

## 11. Validation

Test multiple solutions:

1. Open a solution detail page
2. Confirm related services appear where relationships exist
3. Verify cards use canonical service data
4. Click each service
5. Confirm `/services/:serviceSlug` resolves correctly
6. Test a solution with multiple services
7. Test a solution with no valid services
8. Verify invalid references do not break the page
9. Test desktop/tablet/mobile
10. Test keyboard navigation
11. Verify no duplicate service entries
12. Run the production build
13. Resolve only errors introduced by this flow

The existing catalogue bundle-size warning is acceptable if it remains the only expected warning.

## Success Criteria

A user can move naturally from:

**Solution → Services that help deliver this solution → Service Detail**

with every relationship data-driven, canonical, responsive, accessible, and connected to the existing 60-service ecosystem.
