Implement **FLOW 20 — SERVICE → RELATED PRODUCT** for the Ricoz platform.

### Objective

Create a clear, data-driven transition from an individual Service Detail page into relevant products that complement that service.

The intended journey is:

**Service → Related Products → Product Detail**

This should extend the existing Service Detail experience without creating a new recommendation engine or changing the existing product catalogue.

---

## 1. Preserve Existing Architecture

Use the existing:

* `/services/:serviceSlug`
* `/products/:productSlug`
* service catalogue
* product catalogue
* existing service data model
* existing product data model
* `ServiceDetail`
* `ProductDetail`
* `ServiceCard`
* `ProductCard`
* React Router
* existing relationship fields/utilities
* existing SEO system
* Ricoz design system

Both catalogues remain the single sources of truth.

Do not duplicate product or service data.

---

## 2. Resolve Existing Relationships

Use the relationship data already available on the service.

If the service model contains a field such as:

* `relatedProducts`
* `productSlugs`
* `products`
* equivalent existing relationship data

use that relationship directly.

Resolve each referenced product against the existing product catalogue.

Before rendering:

* remove invalid product references
* remove duplicate products
* remove the current service context where irrelevant
* preserve the catalogue's canonical product object
* maintain deterministic ordering

Do not invent product relationships.

---

## 3. Related Products Section

Add a lower-page section to `ServiceDetail`.

Use a clear heading such as:

**Products that complement this service**

Supporting copy should explain that these products can extend, support, or operationalize the service where the existing relationship data indicates relevance.

Keep the section visually subordinate to the primary service content.

Do not place it above the core Service Detail narrative.

---

## 4. Product Cards

Use the existing `ProductCard` component.

Each related product should expose only information already available in the product catalogue, such as:

* product name
* tagline
* short description
* category
* existing supporting metadata

Do not create a new product-card design.

Maintain consistent card heights, spacing and hierarchy.

---

## 5. Service → Product Navigation

Every related product must navigate to the existing dynamic product detail route.

Expected journey:

**Service A**
→ **Related Product B**
→ `/products/:productSlug`

Use the canonical product slug.

Do not create a duplicate product detail route.

The destination must use the existing `ProductDetail` implementation.

---

## 6. Relationship Quality

Only display meaningful relationships supported by the existing data.

Do not:

* randomly select products
* show the entire product catalogue
* infer relationships using AI
* create relationships solely because products share a keyword
* fabricate compatibility claims

If a service has no valid related products, the section should be gracefully omitted rather than filled with arbitrary products.

---

## 7. Optional Relationship Fallback

If the current service data model does not contain an explicit related-product relationship, do **not** create a new recommendation engine for this flow.

Instead, use only an already-established deterministic relationship mechanism if one exists elsewhere in the Ricoz architecture.

If no valid relationship exists, omit the section.

The absence of related products is an acceptable state.

---

## 8. Preserve Service Conversion Paths

Existing Service Detail CTAs must remain intact.

The addition of related products must not interfere with:

* Contact
* Consultation
* category navigation
* existing service content
* FAQ interaction
* existing service routes

The user should be able to move between service and product ecosystems without losing the primary service journey.

---

## 9. Responsive Behavior

Validate:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* compact multi-column product grid
* clear section hierarchy
* enough whitespace around the section

Tablet:

* naturally reduce the number of columns
* preserve card readability

Mobile:

* single-column or appropriately compact product layout
* comfortable touch targets
* no horizontal overflow
* readable product information

Do not create a separate mobile architecture.

---

## 10. Accessibility

Ensure:

* product cards use semantic links
* keyboard navigation works
* visible focus states remain intact
* accessible names are meaningful
* no interaction depends solely on color
* heading hierarchy remains logical

The related-products section must not introduce inaccessible custom interactions.

---

## 11. SEO

Related product links should be normal crawlable internal links.

Preserve the existing Product Detail SEO architecture.

Do not create new indexable intermediary pages for service/product relationships.

Do not modify canonical URLs.

The relationship section should strengthen internal linking without creating SEO duplication.

---

## 12. Visual Direction

Preserve the Ricoz system:

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

The section should feel like a natural bridge between the Service and Product ecosystems.

---

## Scope Boundary

Do NOT implement:

* related-service logic
* AI recommendations
* personalization
* recommendation scoring
* keyword-based relationship inference
* new product data
* new service data
* product redesign
* service redesign
* product search
* product filtering
* contact redesign
* consultation redesign
* purchasing
* payments
* authentication
* CRM
* analytics/tracking
* backend recommendation APIs
* CMS
* fabricated relationships
* fabricated product claims

Related Services belongs to **Flow 21**.

---

## Validation

After implementation:

1. Open several real Service Detail pages.
2. Identify services with valid related-product relationships.
3. Verify only correctly related products appear.
4. Verify invalid relationship references are ignored.
5. Verify duplicate references are removed.
6. Verify ordering remains deterministic.
7. Verify services without valid relationships do not display arbitrary products.
8. Verify every product card opens the correct `/products/:productSlug`.
9. Verify the existing Service Detail CTAs remain functional.
10. Verify Product Detail loads correctly from the relationship.
11. Test desktop, tablet and mobile layouts.
12. Verify keyboard accessibility and focus states.
13. Verify internal links are crawlable.
14. Run the production build.

Fix actual build/runtime/type errors introduced by this flow.

Do not treat an existing catalogue-related bundle-size warning as a failure if the production build otherwise passes.

### Final principle

**A service should naturally lead to the products that genuinely complement it — using existing relationships, not invented recommendations — creating a trustworthy bridge from Service → Product → deeper ecosystem exploration.**
