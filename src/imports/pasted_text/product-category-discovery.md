# FLOW 07 — PRODUCT CATEGORY DISCOVERY

## Objective

Implement and refine the **Product Category Discovery** experience within the existing Ricoz product ecosystem.

The goal is to let visitors move naturally from the main product catalogue into a specific category, understand what that category represents, browse the products within it, and continue into individual Product Detail pages.

This flow should make the large Ricoz catalogue feel organized and purposeful.

Build on the existing product and category architecture.

**Do not implement advanced filtering, related products, related services, contact, consultation, or resource discovery in this flow.**

---

## 1. Preserve Existing Architecture

Use the existing product and category data as the single source of truth.

Preserve:

* Existing products
* Product IDs
* Product slugs
* Existing category identifiers
* Category slugs
* Category descriptions
* Product relationships
* Product Detail routes
* Existing `/products` route
* Existing React Router architecture
* Existing Manrope typography system
* Existing Ricoz design tokens
* Existing SEO implementation

Do not create duplicate category or product records.

Do not rename existing product slugs or category slugs.

---

## 2. Category Route

Use the existing category route pattern:

`/products/category/:categorySlug`

Each valid category should resolve to a dedicated category discovery page.

The route must dynamically identify the category from the existing category data.

Invalid category slugs should produce a graceful not-found state rather than a broken page.

---

## 3. Category Hero

Create a strong but restrained category introduction.

The hero should contain:

* Breadcrumb
* Category label
* Category name
* Category description
* Product count

The visitor should understand immediately:

**What this category represents + what they can explore inside it.**

Use concise editorial copy.

Do not manufacture claims or statistics.

If the category already has `description`, `seoTitle`, or `seoDescription` data, use the existing source rather than duplicating content in the component.

---

## 4. Category Positioning

Add a short contextual statement explaining the role of the category within the broader Ricoz ecosystem.

For example:

**Explore products designed to help teams manage and improve this area of the business.**

Keep this section concise.

The purpose is orientation—not another large marketing section.

Avoid generic filler copy.

---

## 5. Category Product Catalogue

Create the primary **Products in this Category** section.

Retrieve products dynamically using the existing category relationship.

Display:

* Product name
* Tagline
* Short description
* Product category/status where useful
* Primary discovery action

Use the existing Product Card component wherever possible.

Do not duplicate card implementations unnecessarily.

The product grid should automatically update if products are added or removed from the category data.

---

## 6. Product Count

The category product count must be calculated dynamically.

Do not hard-code:

**“8 products”**

or similar values inside the UI.

Instead, derive the number directly from the products belonging to that category.

Use the same source for:

* Hero metadata
* Category overview
* Any catalogue summary

This prevents inconsistencies.

---

## 7. Product Navigation

The core journey should be:

**Products → Category → Category Overview → Product Card → Product Detail**

Every product card must resolve to the existing Product Detail route using its valid slug.

Use React Router.

Do not trigger a full-page reload.

Do not create alternate product URLs.

---

## 8. Other Categories

Provide a restrained **Explore Other Categories** section near the end of the page.

Display the remaining valid product categories.

Each category should show:

* Category name
* Short description or contextual label
* Product count
* Navigation affordance

The current category should either be excluded or visually identified as the active category.

Avoid turning this section into another oversized catalogue.

Its purpose is to help visitors continue exploring the ecosystem.

---

## 9. Breadcrumbs

Use a clear hierarchy:

**Products → [Category Name]**

The Products breadcrumb should return to:

`/products`

The current category should be the final breadcrumb item.

Use semantic breadcrumb markup and preserve consistency with the existing Ricoz Breadcrumb component.

---

## 10. Empty Category State

If a valid category contains no products, do not display an empty grid.

Show a useful state such as:

**No products in this category yet**

Then provide:

* Return to Products
* Explore Other Categories

Do not fabricate products to populate the page.

---

## 11. Invalid Category State

If the category slug does not exist:

Provide a polished not-found experience.

Suggested direction:

**Category not found**

Supporting message should explain that the requested product category could not be located.

Provide navigation back to:

**Explore Products**

Do not leave a blank page.

---

## 12. Responsive Design

Audit at:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* Editorial hero with generous whitespace
* Efficient product grid
* Clear category navigation

Tablet:

* Reduce grid columns appropriately
* Preserve readable card proportions

Mobile:

* Single-column product cards where appropriate
* Breadcrumbs remain usable
* Category information stacks naturally
* Other-category navigation remains easy to scan
* No horizontal overflow
* Touch targets remain comfortable

Do not simply shrink the desktop layout.

Adapt the composition for mobile.

---

## 13. SEO

Every category page should have category-specific metadata.

Use the existing category data where available:

* SEO title
* SEO description
* Canonical URL

Each category should have:

* One meaningful H1
* Unique title/meta description
* Proper canonical
* BreadcrumbList structured data where appropriate

Do not create duplicate metadata across categories.

Do not index invalid category routes.

---

## 14. Accessibility

Ensure:

* Semantic heading hierarchy
* Accessible breadcrumb navigation
* Keyboard-accessible category links
* Keyboard-accessible product cards
* Visible focus states
* Sufficient contrast
* Meaningful link labels
* Accessible empty/not-found states

Do not rely only on hover to communicate interactivity.

---

## 15. Visual System

Follow the established Ricoz visual language:

* Manrope 400 / 500 / 600
* Ricoz Red `#C41230`
* `#111111` foreground
* Warm off-white background
* Thin subtle borders
* 8px spacing rhythm
* 4px radius
* Minimal shadows
* Restrained hover transitions

Category pages should feel like a natural extension of `/products`.

Do not introduce a new visual language.

Avoid gradients, glassmorphism, excessive cards, or decorative UI that does not improve discovery.

---

## 16. Performance

Use the existing data utilities rather than repeatedly reconstructing category logic inside components.

Avoid:

* New external dependencies
* API calls
* Duplicate product arrays
* Unnecessary global state
* Heavy visual libraries

Keep category discovery lightweight.

---

## 17. Scope Boundary

Do NOT implement:

* Advanced filtering
* New product search behavior
* Related product recommendations
* Related service sections
* Resource recommendations
* Case-study integration
* Contact flow changes
* Consultation flow changes
* Purchasing or checkout
* Authentication
* Dashboards
* AI recommendations

Those belong to later flows.

---

## 18. Validation

Before finishing:

1. Open `/products`.
2. Open every valid product category.
3. Confirm each category resolves correctly from its slug.
4. Confirm the correct products appear in each category.
5. Confirm product counts are dynamically calculated.
6. Confirm every product card opens the correct Product Detail page.
7. Confirm Products breadcrumb works.
8. Confirm Other Categories navigation works.
9. Test an invalid category slug.
10. Test an empty-category state if applicable.
11. Test responsive layouts.
12. Test keyboard navigation and focus states.
13. Verify category SEO metadata.
14. Confirm no existing product/category data was modified incorrectly.
15. Run:

`npm run build`

Fix actual build errors before finishing.

A pre-existing bundle-size warning is not a failure.

---

## Final Principle

**A large catalogue should feel organized, not overwhelming.**

Make every category feel purposeful.

Make the category context clear.

Make products easy to scan.

Make the transition from:

**Category → Product → Understanding**

feel immediate and natural.

Do not redesign the Ricoz product ecosystem. Strengthen its information architecture and discovery experience.
