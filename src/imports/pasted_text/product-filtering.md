# FLOW 08 — PRODUCT FILTERING

## Objective

Implement the **Product Filtering** experience for the existing Ricoz product catalogue.

The goal is to help visitors narrow the 125-product ecosystem using meaningful catalogue attributes, while keeping the experience fast, clear, and easy to reset.

This flow should work alongside the existing Product Discovery and Product Search experiences.

**Do not redesign the overall `/products` page or implement related-product, related-service, contact, consultation, or resource flows yet.**

---

## 1. Preserve the Existing Product System

Use the existing product data as the single source of truth.

Preserve:

* All existing products
* Product IDs
* Product slugs
* Product categories
* Existing product metadata
* Existing Product Cards
* Existing Product Detail routes
* Existing search behavior
* Existing category routes
* Existing React Router structure
* Existing SEO implementation
* Existing Manrope typography
* Existing Ricoz design system

Do not duplicate products or create a separate filtering dataset.

---

## 2. Filtering Scope

Introduce filtering based on attributes that already exist in the product catalogue.

The primary filter should be:

### Category

Use the existing 16 product categories dynamically.

Where the current product data supports additional meaningful attributes such as status, do not invent new taxonomy simply to create more filters.

Keep the first implementation intentionally focused.

**Category is the core filter.**

---

## 3. Filter Interface

Add a refined filter control to the `/products` catalogue.

Desktop direction:

* Horizontal filter bar or compact filter controls
* Clear active-state indication
* Product result count
* Clear-all action when filters are active

Mobile direction:

* Compact **Filters** trigger
* Open a drawer/sheet or equivalent focused filter surface
* Allow the user to apply or clear the selection easily
* Do not create a full-screen complex dashboard

The filtering interface should remain visually subordinate to the products themselves.

---

## 4. Category Filter

Display available categories using the existing category data.

Each category option should contain:

* Category name
* Product count where useful

Counts must be dynamically derived from the product dataset.

Do not hard-code category counts.

Example:

**Sales & CRM — 8**

The number must come from the actual products assigned to that category.

---

## 5. Filter Behavior

When a category is selected:

1. Update the visible product collection.
2. Update the result count.
3. Preserve the current page structure.
4. Keep the active filter visibly selected.
5. Allow the user to remove the filter immediately.

The interaction should feel instant.

Do not require a page reload.

Do not make unnecessary API requests.

---

## 6. Multiple Selection

Support selecting multiple categories if the existing product architecture makes this useful.

When multiple categories are selected:

**Show products belonging to any selected category.**

Clearly communicate active selections.

Example:

**3 categories selected · 27 products**

Provide an obvious **Clear all** action.

If a multi-select implementation makes the UI unnecessarily complicated, prioritize a clean single-category experience rather than adding complexity without value.

---

## 7. Search + Filtering Compatibility

The existing Product Search functionality must continue to work.

If both search and filters are active:

**Search first narrows the catalogue, then the active filter determines the displayed subset.**

Example:

`Search: analytics`

`Category: Data & Analytics`

Results should satisfy both conditions.

Do not create a second independent product dataset for filtering.

---

## 8. Result State

When filtering is active, clearly communicate what is happening.

Show:

* Active filter(s)
* Number of matching products
* Result grid

Use the existing Product Card component.

The primary journey remains:

**Filter → Results → Product Card → Product Detail**

Every result must continue to use the existing product slug and detail route.

---

## 9. No-Results State

Create a polished state for combinations that produce no products.

Suggested direction:

**No products match these filters**

Supporting message:

**Try removing a filter or explore the full product catalogue.**

Actions:

* Clear filters
* Browse all products

Do not fabricate recommendations.

Do not leave the grid empty without explanation.

---

## 10. Clear / Reset Behavior

Provide a clear way to return to the complete catalogue.

When all filters are cleared:

* Show the complete product catalogue
* Remove active filter indicators
* Restore the default result count
* Preserve the user's current search query if one exists

If the search query is also cleared separately, restore the full catalogue.

---

## 11. URL & State

Keep the filtering interaction client-side unless the existing architecture already uses URL state.

Do not introduce unnecessary URL complexity.

If query parameters are used, ensure:

* Refreshing the page remains safe
* Invalid filter values fail gracefully
* Product detail routes remain unchanged
* Search and filtering state do not create duplicate indexable pages

---

## 12. Responsive Behavior

Audit at:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* Filters remain compact
* Product grid receives the majority of visual attention

Tablet:

* Avoid overcrowded filter controls
* Allow controls to wrap naturally where needed

Mobile:

* Use a dedicated Filters trigger
* Present options in a clean drawer/sheet
* Make selected state obvious
* Provide a clear reset action
* Prevent background scrolling when the filter surface is open
* Ensure touch targets are comfortable

No horizontal overflow.

---

## 13. Accessibility

Ensure:

* Filter controls have accessible labels
* Selected filters expose their state
* Keyboard navigation works
* Focus states are visible
* Mobile filter surfaces are keyboard accessible
* Escape closes an open filter surface where applicable
* Focus does not become trapped outside an active modal/drawer
* Result updates remain understandable to assistive technology

Do not communicate selected state through color alone.

---

## 14. Visual System

Use the established Ricoz system:

* Manrope 400 / 500 / 600
* Ricoz Red `#C41230`
* `#111111` foreground
* Warm off-white background
* Subtle borders
* 8px spacing rhythm
* 4px radius
* Minimal shadows
* Restrained transitions

Active filters can use Ricoz Red carefully.

Do not turn the entire filter bar red.

The catalogue should remain calm and editorial.

---

## 15. Performance

Filtering must operate efficiently against the existing catalogue.

Use the existing product data and utilities.

Avoid:

* External filtering libraries
* API calls
* Duplicate product arrays
* Heavy global state
* Unnecessary re-renders

A deterministic client-side filtering implementation is appropriate for the current catalogue.

---

## 16. SEO

The canonical `/products` page remains the primary indexable catalogue page.

Do not create indexable pages for every temporary filter combination.

Do not modify Product Detail SEO.

Do not create duplicate category routes through the filtering UI.

---

## 17. Scope Boundary

Do NOT implement:

* New product taxonomy
* AI recommendations
* Advanced recommendation engines
* Related products
* Related services
* Resource recommendations
* Case-study recommendations
* Contact changes
* Consultation changes
* Purchasing
* Checkout
* Authentication
* Backend search/filter infrastructure

Keep this flow focused on **catalogue filtering**.

---

## 18. Validation

Before finishing:

1. Open `/products`.
2. Confirm the complete catalogue appears with no filters.
3. Select one category.
4. Verify only matching products appear.
5. Verify the result count is accurate.
6. Test multiple categories if supported.
7. Test clearing individual filters.
8. Test Clear All.
9. Test Search + Category together.
10. Test a no-results combination if possible.
11. Confirm every result still opens the correct Product Detail page.
12. Test the mobile filter experience.
13. Test keyboard accessibility.
14. Confirm no duplicate product data was introduced.
15. Confirm existing search and category routes still work.
16. Run:

`npm run build`

Fix actual build errors before finishing.

A pre-existing bundle-size warning is not a failure.

---

## Final Principle

**Filtering should reduce complexity, not add to it.**

Let visitors narrow the Ricoz ecosystem quickly.

Keep the controls simple.

Keep the products prominent.

Make every filtered result immediately actionable.

The experience should feel like:

**Choose → Narrow → Discover → Explore**

—not like an administrative filtering system.
