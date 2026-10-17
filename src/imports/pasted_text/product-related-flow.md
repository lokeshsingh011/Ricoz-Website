# FLOW 10 — PRODUCT → RELATED PRODUCT

## Objective

Implement the **Product → Related Product** discovery flow across the existing Ricoz Product Detail experience.

The goal is to help a visitor who is already exploring one Ricoz product discover other relevant products within the ecosystem and move naturally from one product to another.

The relationship should feel intentional and useful—not like a random “You may also like” grid.

This flow should use the existing product relationship data and must not create a new recommendation engine.

---

## 1. Preserve the Existing Product Architecture

Use the existing product catalogue and Product Detail template.

Preserve:

* Product IDs
* Product names
* Product slugs
* Product categories
* Existing product data
* Existing `relatedProducts` relationships
* Existing Product Detail routes
* Existing SEO metadata
* Existing Contact/Consultation behavior
* Existing Product Card component
* Existing Manrope typography
* Existing Ricoz design system

Do not duplicate product records.

Do not change existing product slugs.

---

## 2. Related Product Data

Use the existing `relatedProducts` relationship on each product.

Relationships should be resolved through valid product slugs/IDs already present in the data layer.

Do not infer relationships randomly at render time.

Do not introduce AI recommendations.

Do not create a separate related-product database.

The existing product data remains the source of truth.

---

## 3. Related Products Section

Add/refine a dedicated section near the lower portion of the Product Detail page.

Suggested heading:

**Explore related products**

Supporting copy should briefly explain that the selected products can complement the product currently being explored.

Keep the section concise.

Do not repeat the complete product description.

---

## 4. Product Relationship Logic

For the current product:

1. Read its related-product references.
2. Resolve each reference against the existing product catalogue.
3. Remove invalid references.
4. Prevent the current product from appearing as its own recommendation.
5. Display the remaining valid products.

If no valid related products exist, gracefully omit the section or provide a useful alternative navigation path.

Do not display broken cards.

---

## 5. Related Product Cards

Use the existing Product Card component wherever possible.

Each card should communicate:

* Product name
* Category
* Tagline
* Concise description
* Discovery action

The product name should remain the strongest visual element.

Do not expose internal relationship IDs or implementation details.

Do not overload the card with every product field.

---

## 6. Relationship Quality

The related-product experience should answer:

**“If I'm interested in this product, what else in the Ricoz ecosystem might be relevant?”**

Relationships should therefore feel contextually meaningful.

Do not add relationships simply to fill space.

If a product has only one or two genuinely related products, show only those.

**Do not manufacture a fixed number of recommendations.**

---

## 7. Navigation

The core journey must be:

**Product A → Related Product Card → Product B**

Clicking a related product must navigate to the existing:

`/products/:slug`

or whatever Product Detail route is already established in the application.

Use React Router.

Do not use full-page reloads.

The destination Product Detail page must render normally using the existing template.

---

## 8. Browsing Continuity

After entering Product B, its own related-product section should be generated from Product B's relationship data.

This allows natural ecosystem exploration:

**Product A → Product B → Product C**

Do not create special-case navigation logic between individual products.

The relationship should remain data-driven.

---

## 9. Back-to-Catalogue Navigation

Do not remove the existing Product Detail breadcrumbs.

The visitor should still be able to return to:

**Products**

or the relevant product category.

Related products are an additional discovery path, not a replacement for catalogue navigation.

---

## 10. Responsive Design

Audit the related-product section at:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* Use an appropriately sized multi-card layout
* Keep the section visually subordinate to the primary product content

Tablet:

* Reduce columns naturally
* Maintain comfortable card spacing

Mobile:

* Use a clean stacked layout or compact horizontal treatment where appropriate
* Keep cards readable
* Maintain comfortable touch targets
* Avoid excessive vertical repetition
* Prevent horizontal overflow

Do not force a desktop grid onto mobile.

---

## 11. Accessibility

Ensure:

* Semantic section heading
* Accessible product links
* Keyboard navigation
* Visible focus states
* Meaningful link labels
* Sufficient contrast
* No interaction dependent solely on hover

If a card is clickable, its accessible name should clearly identify the destination product.

---

## 12. Visual System

Use the existing Ricoz visual language:

* Manrope 400 / 500 / 600
* Ricoz Red `#C41230`
* `#111111` foreground
* Warm off-white background
* Thin subtle borders
* 8px spacing rhythm
* 4px radius
* Minimal shadows
* Restrained hover transitions

The related-products section should feel like a continuation of the Product Detail page.

Do not introduce a new card style.

Do not use gradients, glassmorphism, oversized illustrations, or decorative effects.

---

## 13. Content Integrity

Use only existing product data.

Do not generate:

* Fake product relationships
* Fake customer outcomes
* Fake integrations
* Fake statistics
* Fake testimonials
* Fake pricing
* Unsupported claims

If a relationship is unavailable, do not invent one.

---

## 14. SEO

Related product links should strengthen internal linking between product pages.

Ensure every related-product link resolves to the correct canonical Product Detail URL.

Do not create duplicate product URLs.

Do not create indexable query-based recommendation pages.

Do not modify the existing product SEO metadata unnecessarily.

---

## 15. Performance

Keep relationship resolution lightweight.

Use existing product utilities/data structures where available.

Avoid:

* API calls
* External recommendation services
* New heavy dependencies
* Duplicate product datasets
* Expensive calculations on every render

For the existing catalogue size, deterministic client-side relationship resolution is sufficient.

---

## 16. Scope Boundary

Do NOT implement:

* AI recommendations
* Personalized recommendations
* Related services
* Resource recommendations
* Case-study recommendations
* Product search
* Product filtering
* Contact flow redesign
* Consultation flow redesign
* Purchasing
* Checkout
* Authentication
* User-specific recommendation history

This flow is strictly:

**Existing Product → Related Product → Product Detail**

---

## 17. Validation

Test products from multiple categories.

Verify:

1. Related products render from existing relationship data.
2. The current product never appears as its own recommendation.
3. Invalid product references do not create broken cards.
4. Related products use the correct names and descriptions.
5. Every card opens the correct Product Detail page.
6. React Router navigation works without a full reload.
7. Product B correctly displays its own related products.
8. Products without valid relationships do not show broken sections.
9. Existing breadcrumbs remain functional.
10. Existing Contact/Consultation CTAs remain intact.
11. Mobile and desktop layouts are clean.
12. Keyboard navigation works.
13. No duplicate product data was introduced.
14. Existing product SEO remains intact.
15. Run:

`npm run build`

Fix actual build errors before finishing.

A pre-existing bundle-size warning is not a failure.

---

## Final Principle

**Related products should create discovery, not distraction.**

A visitor exploring one Ricoz product should be able to naturally discover another relevant product without feeling pushed through a sales funnel.

Make the relationship meaningful.

Keep the presentation restrained.

Keep the data deterministic.

Make the journey feel like:

**Explore → Discover → Continue**

—not:

**Product → Random Recommendations.**
