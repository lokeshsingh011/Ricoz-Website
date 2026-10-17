# FLOW 29 — RESOURCE DISCOVERY

## Objective

Implement the complete resource discovery experience:

**Resources → Browse → Categories → Resource**

The goal is to make `/resources` a clean, catalogue-driven entry point where users can understand the available resource library, discover resource categories, browse resources, and open an individual resource.

Keep this flow focused on **discovery only**.

---

## 1. Preserve Existing Architecture

Reuse the existing:

* Resource catalogue/data model
* Resource IDs and slugs
* Resource categories
* `ResourceCard`
* Resource detail route
* Existing resource utilities
* Existing navigation
* Existing SEO utilities
* Ricoz design system

Do not replace or duplicate the existing resource data architecture.

If the current resource catalogue already contains different resource types, preserve that structure.

---

## 2. `/resources` Page Structure

Build the page around this hierarchy:

**Hero → Resource Categories → Browse Resources → Resource Entry**

### Hero

Create/refine an editorial resource-library hero with:

* H1: **Resources**
* Short supporting statement explaining the purpose of the resource library
* Live resource count where supported by the existing catalogue
* Live category count where supported

Counts must always come from actual resource data.

Do not create fictional statistics.

Keep the hero concise and consistent with the existing Solutions, Products, and Services discovery pages.

---

## 3. Resource Categories

Create a category discovery area using the categories already present in the resource catalogue.

Each category card should display:

* Category name
* Short description if available
* Live resource count

Counts must be calculated from the actual catalogue.

Do not introduce a new taxonomy.

If a category currently has no resources, handle it gracefully rather than creating artificial content.

### Category Interaction

If an existing category route/filter architecture already exists, use it.

If no dedicated category route exists, keep category cards as discovery/navigation elements without creating a large new category system.

Do not implement advanced filtering in this flow.

---

## 4. Browse Resources

Add a clear **Browse Resources** section displaying the available resource catalogue.

Use the existing `ResourceCard`.

Cards should use canonical resource data such as:

* Resource title
* Resource type where available
* Category
* Short description/excerpt
* Publication information where already available
* Existing supporting metadata

Do not create new resource-card designs.

The catalogue should remain data-driven.

---

## 5. Resource Navigation

Clicking a resource should navigate to the existing canonical resource-detail route:

`/resources/:resourceSlug`

Do not create separate hardcoded pages for individual resources.

The detail page will be handled in **Flow 31 — Article / Resource Reading**.

---

## 6. Resource Types

If the existing catalogue distinguishes resource types such as:

* Articles
* Guides
* Reports
* Insights
* Case studies
* Other existing resource types

Preserve those distinctions.

Do not invent additional types.

Case studies will receive their dedicated discovery and exploration experience in **Flows 32–33**.

Do not redesign case studies as part of this flow.

---

## 7. Data Integrity

Validate the complete resource catalogue.

Ensure:

* Every resource has a valid unique slug
* Categories resolve correctly
* Resource counts are accurate
* No duplicate resources appear
* Resource cards use canonical data
* Resource links resolve correctly
* Invalid/missing data does not break `/resources`

Do not silently create fallback content that looks like real resource content.

---

## 8. Responsive Behaviour

### Desktop

Use a spacious editorial layout with:

* Clear hero hierarchy
* Category grid
* Comfortable resource-card grid

### Tablet

Reduce column density naturally while preserving hierarchy.

### Mobile

Stack:

* Hero
* Categories
* Resource cards

Ensure:

* No horizontal overflow
* Cards remain readable
* Category cards remain usable
* Tap targets are comfortable
* Typography scales correctly
* Spacing remains consistent

---

## 9. Visual System

Maintain the existing Ricoz visual language:

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
* Stock imagery unless already part of the resource data
* New visual language

The Resources page should feel like a natural part of the existing Products, Services, and Solutions ecosystem.

---

## 10. Accessibility

Ensure:

* One clear H1
* Logical H2 hierarchy
* Semantic sections
* Accessible category links
* Accessible resource links/cards
* Keyboard navigation
* Visible focus states
* Appropriate contrast
* Meaningful link labels

Do not make cards clickable through non-semantic containers alone.

---

## 11. SEO

For `/resources`:

* Add/maintain a unique page title
* Add/maintain a useful meta description
* Preserve canonical URL
* Preserve Open Graph metadata
* Preserve existing structured data where applicable

Do not create duplicate indexable URLs for category states.

Individual resources should retain their own canonical detail URLs.

---

## 12. Performance

Keep the page catalogue-driven and lightweight.

Avoid:

* Large unnecessary dependencies
* Heavy animation libraries
* Client-side processing that is not required
* Duplicate resource datasets
* Unnecessary image loading

Use existing components and utilities wherever possible.

---

## 13. Scope Boundary

Do **not** implement in this flow:

* Resource search
* Advanced filtering
* Article reading redesign
* Related products/services
* Case study exploration
* Contact flow redesign
* Consultation flow redesign
* AI recommendations
* Personalization
* CMS
* Backend
* Authentication
* Payments
* New resource taxonomy
* New resource-management architecture

Those belong to later flows.

This flow is strictly:

**Resources → Browse → Categories → Resource**

---

## 14. Validation

After implementation verify:

1. Open `/resources`
2. Confirm hero renders correctly
3. Verify live resource count
4. Verify live category count
5. Verify category cards
6. Verify category counts against actual catalogue data
7. Verify Browse Resources section
8. Verify multiple `ResourceCard` instances
9. Open several resources
10. Confirm canonical resource routes resolve
11. Test resource/category edge cases
12. Test desktop/tablet/mobile
13. Test keyboard navigation
14. Check SEO metadata
15. Run the production build

Resolve only issues introduced by this flow.

The existing catalogue bundle-size warning remains acceptable if it is still the only expected warning.

## Success Criteria

A user can naturally move through:

**Resources → Discover Categories → Browse Resource Library → Open Resource**

using the existing resource catalogue, existing components, canonical routes, and Ricoz design system without introducing unnecessary architecture.
