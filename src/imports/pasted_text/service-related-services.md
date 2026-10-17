Implement **FLOW 21 — SERVICE → RELATED SERVICE** for the Ricoz platform.

### Objective

Create a clear, data-driven pathway from one Service Detail page to other services that are genuinely related to the current service.

The intended journey is:

**Service → Related Services → Another Service**

This should extend the existing Service Detail experience while preserving the current service catalogue, routing, and design system.

Do not introduce AI recommendations or a new recommendation engine.

---

## 1. Preserve Existing Architecture

Use the existing:

* `/services/:serviceSlug`
* `/services/category/:categorySlug`
* service catalogue
* service category data
* existing service relationship fields/utilities
* `ServiceDetail`
* `ServiceCard`
* React Router
* existing SEO utilities
* existing Contact and Consultation flows
* Ricoz design system

The existing service catalogue remains the single source of truth.

Do not create a second service dataset.

---

## 2. Resolve Existing Relationships

Use the relationship information already available in the service data.

If the current service model contains fields such as:

* `relatedServices`
* `relatedServiceSlugs`
* `serviceRelations`
* equivalent existing relationship data

resolve those references against the canonical service catalogue.

Before rendering:

* remove invalid references
* remove duplicates
* exclude the current service itself
* preserve deterministic ordering
* use the canonical service objects from the catalogue

Do not invent relationships.

---

## 3. Related Services Section

Add a lower-page section to `ServiceDetail`.

Use a heading such as:

**Explore related services**

Supporting copy should briefly explain that these services may address adjacent or complementary business needs.

Keep the section below the primary service narrative and conversion actions.

It should support continued exploration without distracting from the current service.

---

## 4. Service Cards

Use the existing `ServiceCard`.

Each related service should expose only information already available in the service catalogue, such as:

* service name
* tagline
* short description
* category
* existing supporting metadata

Do not create a separate related-service card design.

Maintain consistent card dimensions, spacing and hierarchy.

---

## 5. Service → Another Service

Every related service must navigate to the existing dynamic Service Detail route.

Expected journey:

**Service A**
→ **Related Service B**
→ `/services/:serviceSlug`

Use the canonical service slug.

Do not create intermediary relationship pages.

The destination must use the existing Service Detail implementation.

---

## 6. Relationship Integrity

Only display relationships supported by the existing service data.

Do not:

* randomly select services
* display the entire catalogue
* recommend services using AI
* infer relationships purely from keywords
* fabricate complementary-service claims
* use arbitrary "popular" services as replacements

If no valid related services exist, gracefully omit the section.

An empty relationship is preferable to an artificial recommendation.

---

## 7. Category-Aware Context

Where the existing relationship data supports it, maintain category context.

A related service may belong to:

* the same capability area
* an adjacent capability area
* another explicitly related category

Do not force related services to belong to the same category.

The explicit service relationship remains authoritative.

---

## 8. Preserve Existing Conversion Paths

Adding related services must not interfere with the existing Service Detail experience.

Preserve:

* primary service content
* Contact CTA
* Consultation CTA
* category navigation
* FAQ interaction
* related-product section from Flow 20
* existing routing

The user should be able to explore another service without breaking the overall service journey.

---

## 9. Positioning

Place the related-services section toward the lower portion of the Service Detail page.

Recommended hierarchy:

**Hero**
↓
**Problem / Need**
↓
**Capabilities**
↓
**Process**
↓
**Outcomes**
↓
**FAQs**
↓
**Related Products**
↓
**Related Services**
↓
**Existing next-action / conversion area**

Do not force the section into the hero or above the core service explanation.

If the current implementation has a more appropriate established lower-page structure, preserve that structure while maintaining the same intent.

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

* efficient multi-column service-card grid
* clear visual separation from the main service content

Tablet:

* naturally reduce columns
* preserve card readability

Mobile:

* single-column or compact card layout
* comfortable touch targets
* readable descriptions
* no horizontal overflow

Do not create a separate mobile architecture.

---

## 11. Accessibility

Ensure:

* every related service is a semantic link
* keyboard navigation works
* visible focus states remain intact
* accessible names are meaningful
* heading hierarchy remains logical
* no interaction depends solely on color

Do not introduce inaccessible custom controls.

---

## 12. SEO + Internal Linking

Related service cards should use normal crawlable internal links.

This creates a useful internal linking path:

**Service A → Service B**

Preserve the canonical URL of every destination.

Do not create:

* relationship-specific URLs
* duplicate service pages
* query-generated indexable pages

The relationship section should strengthen service discovery and internal linking naturally.

---

## 13. Visual Direction

Preserve the established Ricoz visual system:

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

The section should visually belong to the existing Service Detail page rather than appearing as an unrelated recommendation widget.

---

## Scope Boundary

Do NOT implement:

* AI recommendations
* recommendation scoring
* personalization
* keyword-based relationship inference
* automatic relationship generation
* new service relationships
* new service data
* service search redesign
* service filtering redesign
* related-product redesign
* contact redesign
* consultation redesign
* purchasing
* payments
* authentication
* CRM
* analytics/tracking
* backend recommendation APIs
* CMS
* fabricated service relationships
* fabricated service claims

---

## Validation

After implementation:

1. Open multiple real Service Detail pages.
2. Verify valid related-service relationships resolve correctly.
3. Verify the current service never appears in its own related list.
4. Verify duplicate relationships are removed.
5. Verify invalid references are ignored.
6. Verify ordering is deterministic.
7. Verify services without valid relationships gracefully omit the section.
8. Verify every related service opens the correct `/services/:serviceSlug`.
9. Verify the destination Service Detail page loads correctly.
10. Verify the Flow 20 Related Products section remains intact.
11. Verify Contact and Consultation CTAs remain functional.
12. Test desktop, tablet and mobile layouts.
13. Verify keyboard accessibility and focus states.
14. Verify internal links remain crawlable.
15. Run the production build.

Fix actual build/runtime/type errors introduced by this flow.

Do not treat an existing catalogue-related bundle-size warning as a failure if the production build otherwise passes.

### Final principle

**A service should lead naturally to the next relevant service — using explicit, trustworthy relationships so users can continue exploring the Ricoz service ecosystem without feeling like they are being shown arbitrary recommendations.**
