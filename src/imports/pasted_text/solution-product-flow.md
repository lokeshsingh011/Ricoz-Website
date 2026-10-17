# FLOW 26 — SOLUTION → PRODUCT

## Objective

Implement the complete product relationship flow:

**Solution → Related Products → Product Detail**

A user exploring a solution should be able to discover the actual Ricoz products that support that solution and move directly into their existing product-detail experience.

---

## 1. Preserve Existing Architecture

Reuse:

* Existing solution catalogue/data model
* Existing solution IDs and slugs
* Existing `SolutionDetail`
* Existing product catalogue
* Existing `ProductCard`
* Existing `/products/:productSlug` route
* Existing product detail architecture
* Existing routing utilities
* Existing Ricoz design system

Do not create separate product pages or duplicate product data.

---

## 2. Solution → Product Relationship

Use the solution's existing product relationship field, such as:

`relatedProducts`

Resolve each referenced product against the canonical product catalogue.

Before rendering:

* Remove invalid references
* Remove duplicate products
* Prevent accidental self/invalid relationships
* Preserve the catalogue's canonical product data

Do not invent relationships dynamically.

Only show products that are genuinely associated with the current solution.

---

## 3. Related Products Section

Add or refine a dedicated section on:

`/solutions/:solutionSlug`

Use the heading:

**Products that support this solution**

Include a concise supporting statement explaining that these products provide the technology/capabilities behind the solution where appropriate.

Render products using the existing `ProductCard`.

Each card should use the existing product information:

* Product name
* Category
* Tagline/short description
* Existing supporting metadata

Do not introduce a new card design.

---

## 4. Product Navigation

Clicking a product must navigate to:

`/products/:productSlug`

The transition should be direct and predictable.

The product detail page should open using the existing Flow Group 02 implementation.

Do not create a special solution-specific product-detail template.

---

## 5. Empty State

If a solution has no valid related products:

**Do not display an empty products section.**

The solution page should continue naturally from:

**Capabilities → Services / FAQs / CTA**

Do not display fake recommendations, placeholders, or generic products.

---

## 6. Relationship Integrity

Validate the entire solution catalogue.

For every solution:

* `relatedProducts` references must resolve to real product slugs/IDs
* No duplicate references
* No broken product links
* Product names must come from the canonical product catalogue
* Product category information must remain consistent with the product catalogue

If a reference is invalid, fail gracefully by excluding it rather than breaking the page.

Do not rewrite unrelated catalogue data.

---

## 7. Responsive UI

### Desktop

Use a clean multi-column product grid consistent with the existing product ecosystem.

### Tablet

Reduce the number of columns naturally.

### Mobile

Stack product cards into a single-column or appropriately compact layout.

Ensure:

* No horizontal overflow
* Cards remain readable
* Entire card/link is accessible
* Touch targets are comfortable
* Focus states are visible

---

## 8. Visual System

Use the existing Ricoz design language:

* Ricoz Red `#C41230`
* Manrope
* Warm off-white background
* Near-black text
* Thin borders
* 8px spacing scale
* 4px radius
* Minimal shadows
* Restrained editorial layout

Do not introduce:

* Gradients
* Glassmorphism
* Heavy shadows
* Excessive animation
* New product-card styling
* Decorative elements unrelated to the existing system

---

## 9. SEO & Accessibility

Maintain the existing solution page SEO.

Do not create additional indexable relationship URLs.

Ensure:

* Semantic heading hierarchy
* Accessible product links
* Keyboard navigation
* Visible focus states
* Appropriate link labels
* No duplicate or misleading metadata

The product destination remains the canonical product detail URL.

---

## 10. Scope Boundary

Do **not** implement:

* Product search
* Product filtering
* New product categories
* Product redesign
* AI recommendations
* Personalized recommendations
* Purchasing
* Payments
* Authentication
* Backend/CRM
* CMS
* New product detail architecture
* Related services
* Resources/case studies
* Contact/consultation redesign

This flow is only about:

**Solution → Product → Existing Product Detail**

---

## 11. Validation

Test at least several different solutions:

1. Open a solution detail page
2. Confirm related products render where relationships exist
3. Verify product cards use canonical product data
4. Click each product
5. Confirm `/products/:productSlug` opens correctly
6. Test a solution with multiple products
7. Test a solution with no valid products
8. Confirm invalid references do not break the page
9. Check desktop/tablet/mobile layouts
10. Test keyboard navigation
11. Run the production build
12. Resolve only errors introduced by this flow

The existing catalogue bundle-size warning is acceptable if it remains the only expected warning.

## Success Criteria

A user can move naturally from:

**Solution → Products that support this solution → Product Detail**

with every relationship driven by the existing catalogue and every product opening through the established product ecosystem.
