# FLOW 11 — PRODUCT → RELATED SERVICE

## Objective

Implement the **Product → Related Service** discovery flow across the existing Ricoz Product Detail experience.

The goal is to help a visitor who is exploring a Ricoz product discover relevant professional services that can support, complement, implement, customize, or extend the value of that product.

The relationship must feel contextual and purposeful.

This flow should use the existing product/service relationship data and existing service architecture.

**Do not create a recommendation engine or redesign the complete Services experience.**

---

## 1. Preserve Existing Architecture

Use the existing:

* Product catalogue
* Product Detail template
* Service catalogue
* Service Detail template
* Product/service relationship data
* Product slugs
* Service slugs
* React Router
* Product and Service Card components
* SEO implementation
* Contact/Consultation flows
* Manrope typography
* Ricoz design system

Do not duplicate product or service records.

Do not change existing routes or slugs.

---

## 2. Service Relationship Data

Use the existing `relatedServices` relationship available on the product data.

Resolve service references against the existing service catalogue.

For every current product:

1. Read its related service references.
2. Resolve them against the service dataset.
3. Remove invalid references.
4. Prevent duplicate services.
5. Display only valid services.

Do not create relationships randomly at runtime.

Do not introduce AI recommendations.

Do not create a second service database.

---

## 3. Related Services Section

Add/refine a dedicated section toward the lower portion of the Product Detail page.

Suggested heading:

**Services to help you move forward**

Supporting copy should explain that Ricoz services can help organizations apply, implement, support, or extend the relevant technology.

Keep the messaging concise.

The section should feel like a natural continuation of the product story.

---

## 4. Service Cards

Use the existing Service Card component wherever possible.

Each related service card should communicate:

* Service name
* Service category
* Short description
* Primary discovery action

The service name should have the strongest hierarchy.

Avoid exposing internal IDs or relationship metadata.

Do not overload the cards with excessive information.

---

## 5. Relationship Quality

The service relationship should answer:

**“If I'm interested in this product, what professional help might be relevant to me?”**

Only show services that have an actual relationship with the product.

Do not force every product to display the same number of services.

If only one relevant service exists, display one.

If no valid service relationship exists, gracefully omit the section rather than manufacturing recommendations.

---

## 6. Service Detail Navigation

The core journey is:

**Product → Related Service → Service Detail**

Each service card must navigate to the existing Service Detail route using the valid service slug.

Use React Router.

Do not use full-page reloads.

The destination must render through the existing Service Detail template.

---

## 7. Service Detail Continuity

Once a visitor enters a Service Detail page, all existing service functionality must remain intact.

Do not redesign the entire Service Detail page in this flow.

Only ensure the transition from Product → Service works correctly.

Preserve existing:

* Breadcrumbs
* Service content
* SEO
* CTAs
* Contact flow
* Consultation flow
* Related ecosystem behavior where already implemented

---

## 8. Contextual CTA

Where the existing service/contact architecture supports context passing, preserve it.

If a visitor reaches a service from a product, the relevant product context should remain available where the current implementation supports query/context parameters.

Do not redesign Contact or Consultation in this flow.

Do not introduce new booking logic.

The objective is simply to preserve a meaningful transition from:

**Product → Relevant Service → Engagement**

---

## 9. Breadcrumb & Navigation Continuity

Do not remove the Product Detail breadcrumb.

The visitor should still be able to navigate:

**Products → Category → Product**

The related-service section is an additional discovery path.

It should not replace the product's primary navigation hierarchy.

---

## 10. Responsive Experience

Audit the section at:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* Use a balanced service-card grid
* Maintain clear separation from the product content

Tablet:

* Reduce columns appropriately
* Preserve card readability

Mobile:

* Stack cards naturally
* Maintain comfortable touch targets
* Keep descriptions readable
* Avoid excessive card height
* Prevent horizontal overflow

Do not simply compress the desktop grid.

---

## 11. Accessibility

Ensure:

* Semantic section heading
* Accessible service links
* Keyboard navigation
* Visible focus states
* Meaningful link labels
* Sufficient contrast
* No hover-only interactions

A service card's accessible name should clearly identify the destination service.

---

## 12. Visual System

Follow the established Ricoz design system:

* Manrope 400 / 500 / 600
* Ricoz Red `#C41230`
* `#111111` foreground
* Warm off-white background
* Thin subtle borders
* 8px spacing rhythm
* 4px radius
* Minimal shadows
* Restrained transitions

The section should visually belong to the Product Detail page.

Do not create a completely different service-card treatment.

Avoid gradients, glassmorphism, excessive shadows, or decorative graphics.

---

## 13. Content Integrity

Use only existing service data.

Do not invent:

* Services
* Service capabilities
* Certifications
* Customers
* Outcomes
* Statistics
* Testimonials
* Pricing
* Service relationships

If a service relationship is missing, leave it missing.

Do not create filler content simply to make the section appear larger.

---

## 14. SEO & Internal Linking

Use related-service links to strengthen the internal relationship between:

**Products ↔ Services**

Every service link must resolve to its correct canonical Service Detail URL.

Do not create duplicate service URLs.

Do not create query-based recommendation pages.

Do not unnecessarily modify existing Product or Service SEO metadata.

---

## 15. Performance

Use the existing relationship utilities/data structures.

Keep service resolution lightweight.

Avoid:

* External APIs
* Recommendation services
* New heavy dependencies
* Duplicate service datasets
* Complex global state

The current catalogue size is appropriate for deterministic client-side relationship resolution.

---

## 16. Scope Boundary

Do NOT implement:

* AI recommendations
* Personalized recommendations
* Related-product redesign
* Resource recommendations
* Case-study recommendations
* Product filtering
* Product search redesign
* Contact redesign
* Consultation redesign
* Service purchasing
* Checkout
* Authentication
* User-specific recommendations

This flow is strictly:

**Product → Relevant Service → Service Detail**

---

## 17. Validation

Test products from multiple categories.

Verify:

1. Related services come from existing `relatedServices` data.
2. Only valid services are displayed.
3. Duplicate service references are handled cleanly.
4. The correct service names and descriptions appear.
5. Every service card opens the correct Service Detail page.
6. Navigation uses React Router without full reloads.
7. Service Detail pages load normally.
8. Product breadcrumbs remain intact.
9. Existing Contact/Consultation functionality remains intact.
10. Product context is preserved where already supported.
11. Products without valid service relationships do not show broken sections.
12. Mobile and desktop layouts are clean.
13. Keyboard navigation works.
14. No duplicate service/product data was introduced.
15. Existing SEO remains intact.
16. Run:

`npm run build`

Fix actual build errors before finishing.

A pre-existing bundle-size warning is not a failure.

---

## Final Principle

**Products explain what the technology can do. Services help organizations put that technology to work.**

Make that relationship visible.

Keep it contextual.

Keep it data-driven.

Keep it restrained.

The intended journey is:

**Understand the Product → Discover the Right Service → Explore → Engage**

Do not redesign the Ricoz service ecosystem. Connect the existing product and service ecosystems meaningfully.
