Implement **FLOW 17 — SERVICE CATEGORY DISCOVERY** for the Ricoz platform.

### Objective

Strengthen the existing service-category experience so users can move naturally from a specific service category into the relevant service catalogue and then into an individual service.

The flow is:

**Services → Category → Service Listing → Service Detail**

This should build on the existing **Flow 15 — Service Discovery** and **Flow 16 — Service Search** implementation without creating duplicate service logic.

---

## 1. Preserve Existing Architecture

Use the existing:

* `/services`
* `/services/category/:categorySlug`
* `/services/:serviceSlug`
* service catalogue/data model
* service category data
* `ServiceCard`
* `ServiceCategory`
* `ServiceDetail`
* React Router
* SEO utilities
* existing navigation
* Ricoz design system

The existing service catalogue remains the single source of truth.

Do not create a second category or service dataset.

---

## 2. Dynamic Category Resolution

Ensure the category page dynamically resolves the category from its slug.

Expected route:

`/services/category/:categorySlug`

The page should:

* identify the correct category
* display the category name
* display its existing description
* calculate the number of services dynamically
* list only services belonging to that category

Do not hard-code service counts.

---

## 3. Category Hero

Create a focused category-level hero.

Structure:

**Breadcrumb**
→ Services
→ Current Category

Then:

* category eyebrow
* category H1
* concise category description
* live service count

The hero should immediately establish:

**What this category covers → How many services are available → What the user can explore next**

Keep the layout restrained and editorial.

Do not introduce unnecessary statistics or promotional claims.

---

## 4. Service Listing

Below the category hero, display the services belonging to that category.

Use the existing `ServiceCard`.

Each card should expose the information already available in the service data, such as:

* service name
* short description/tagline
* category context
* existing supporting metadata

Do not invent service attributes.

The listing must be dynamically generated from the category relationship.

---

## 5. Service → Detail

Every service card must link to the existing service detail route.

Expected journey:

**Category → Service Card → `/services/:serviceSlug`**

Use the actual service slug.

Verify that the category page never generates broken or duplicate service routes.

---

## 6. Category Breadcrumb

Provide a clear breadcrumb hierarchy:

**Services → Category**

On a service detail page entered from this category, the existing detail breadcrumb should continue to provide the appropriate category context where supported by the current architecture.

Use semantic breadcrumb markup where the existing SEO system supports it.

Do not create a separate breadcrumb implementation if one already exists.

---

## 7. Other Service Categories

Near the lower portion of the category page, provide a restrained **“Explore other capability areas”** section.

Use the existing service categories.

Each category item should include:

* category name
* existing short description where available
* live service count

The current category must not appear as a redundant destination within this section.

This creates a natural route:

**Category A → Category B → Services**

Keep this section compact so the page remains focused on the selected category.

---

## 8. Empty / Invalid Category States

Handle invalid category slugs gracefully.

If a category does not exist:

* do not render an empty-looking normal category page
* show a useful not-found state
* provide a route back to `/services`
* allow the user to continue browsing valid categories

If a valid category currently has zero services, handle it gracefully rather than displaying misleading content.

Do not fabricate services to fill the page.

---

## 9. Search Relationship

Preserve the service search experience from Flow 16.

Do not rebuild or duplicate the search system inside the category page.

If the existing architecture supports returning to `/services`, make that route obvious.

Search should remain a global Services-page discovery mechanism rather than becoming a second search implementation here.

---

## 10. SEO

Each valid service category page should have category-specific metadata using the existing SEO utilities.

Where appropriate:

* dynamic title
* dynamic description
* canonical URL
* breadcrumb structured data

Metadata must be derived from the existing category data.

Do not generate duplicate or generic metadata for every category.

Invalid category routes should not be treated as valid indexable category pages.

---

## 11. Responsive Behavior

Validate:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* spacious category hero
* efficient service grid
* compact secondary category navigation

Tablet:

* naturally reduced grid columns
* maintain readable card proportions

Mobile:

* single-column service listing where appropriate
* category information remains easy to scan
* comfortable touch targets
* no horizontal overflow
* breadcrumbs remain usable without becoming visually dominant

---

## 12. Visual Direction

Preserve the established Ricoz system:

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

The category page should feel like a natural extension of the Products category experience while remaining distinctly service-oriented.

---

## Scope Boundary

Do NOT implement:

* advanced filtering
* new service search
* AI recommendations
* personalization
* related products
* related services
* contact integration
* consultation integration
* CRM
* backend APIs
* new service taxonomy
* new service data
* purchasing
* payments
* authentication
* CMS
* major global navigation changes

Filtering belongs to **Flow 18**.

---

## Validation

After implementation:

1. Open several valid service category URLs.
2. Verify category name and description resolve correctly.
3. Verify service counts are dynamic.
4. Verify only services belonging to the selected category are displayed.
5. Verify every service card opens the correct detail page.
6. Verify the current category is excluded from “other categories.”
7. Verify other category links work.
8. Test an invalid category slug.
9. Test a category with no services if such a state exists.
10. Verify breadcrumb behavior.
11. Verify category-specific SEO metadata.
12. Test desktop, tablet and mobile layouts.
13. Verify keyboard accessibility and focus states.
14. Run the production build.

Fix actual build/runtime/type errors introduced by this flow.

Do not treat an existing bundle-size warning as a failure if the build otherwise passes.

### Final principle

**A service category page should answer one question exceptionally well: “What services does Ricoz offer in this capability area, and which one should I explore next?”**
