Implement **FLOW 15 — SERVICE DISCOVERY** for the Ricoz platform.

### Objective

Strengthen the existing `/services` experience so users can naturally discover the Ricoz service catalogue, understand the major service categories, browse individual services, and enter a service detail page.

The flow is:

**Services → Browse → Categories → Service → Service Detail**

This is a discovery flow only. Do not introduce search, advanced filtering, related services/products, contact, consultation, or any new backend functionality as part of this flow.

---

## 1. Preserve Existing Architecture

Work with the existing Ricoz implementation.

Preserve:

* existing `/services` route
* existing service catalogue and data model
* all existing service IDs, slugs, names, descriptions, categories and metadata
* existing `ServiceCard`
* existing `ServiceCategory`
* existing `ServiceDetail`
* existing React Router structure
* existing service category routes
* existing SEO metadata utilities
* existing responsive layout system
* existing Ricoz design system

Do not duplicate the service catalogue or create a second service data source.

The existing service data remains the single source of truth.

---

## 2. Services Hero

Refine the `/services` hero around service discovery.

Use a restrained editorial hierarchy:

* eyebrow / small category label
* strong H1
* concise supporting statement
* live service count
* live category count

The hero should communicate that Ricoz provides structured professional capabilities for real business needs.

Do not invent statistics, client claims, performance claims, certifications, or testimonials.

The service and category counts must be calculated from the existing data.

Keep the hero visually consistent with the recently refined Product Discovery experience.

---

## 3. Service Category Discovery

Create a strong category-discovery section beneath the hero.

Use the existing service category data.

Each category card should contain:

* category name
* short category description where available
* live number of services in that category
* clear visual affordance indicating that the category is navigable

Use a structured editorial card grid rather than a flat collection of pills.

The category grid should visually align with the category treatment already established for the Product ecosystem.

Category counts must be dynamic.

Do not create new categories merely for visual purposes.

---

## 4. Browse Services

Below category discovery, provide a clear browse-services area using the existing service catalogue.

Each service should be represented using the existing `ServiceCard` component wherever appropriate.

Each card should expose enough information for a user to understand:

* service name
* short description/tagline
* category
* relevant supporting metadata already available in the service data

Do not fabricate additional service attributes.

Maintain consistent card heights and predictable spacing.

---

## 5. Service → Detail Navigation

Every service card must lead to the existing dynamic service detail route.

Use the existing service slug.

Expected journey:

**Services → Service Card → `/services/:serviceSlug`**

Do not create duplicate service-detail routes.

Navigation must work using React Router.

Ensure invalid or missing service data does not create broken navigation links.

---

## 6. Featured / Priority Services

If the existing service data already contains a featured or priority designation, use it to create a small featured-services area or ordering treatment.

If no such designation exists, do not invent one.

Do not randomly select services and label them as featured.

The catalogue itself remains authoritative.

---

## 7. Discovery Hierarchy

The page should establish a clear hierarchy:

**Hero**
↓
**Service Categories**
↓
**Browse Services**
↓
**Service Detail**

Avoid excessive sections.

The purpose of `/services` is to help users answer:

1. What services does Ricoz provide?
2. Which capability area is relevant to me?
3. Which specific service should I explore?
4. Where do I go to learn more?

---

## 8. Visual Direction

Follow the current Ricoz visual system:

* Ricoz Red `#C41230`
* Manrope typography
* warm off-white page background
* near-black primary text
* restrained muted text
* thin borders
* subtle surfaces
* 4px radius
* 8px spacing scale
* minimal shadows
* no gradients
* no glassmorphism
* no excessive animation
* premium editorial technology aesthetic

Do not redesign the global visual system.

The service discovery page should feel like the natural counterpart to the Product Discovery page.

---

## 9. Responsive Behavior

Validate the experience across:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* spacious editorial hero
* multi-column category grid
* efficient service-card grid

Tablet:

* reduce grid columns naturally
* maintain readable hierarchy

Mobile:

* single-column content where appropriate
* category cards remain easy to scan
* service cards remain compact but informative
* maintain comfortable touch targets
* avoid horizontal overflow

Do not create a separate mobile architecture.

---

## 10. Accessibility + SEO

Maintain:

* semantic heading hierarchy
* accessible links/buttons
* keyboard navigation
* visible focus states
* sufficient text contrast
* meaningful accessible labels
* correct link semantics

The `/services` page should retain appropriate SEO metadata.

Use existing SEO utilities rather than creating a second metadata system.

Where appropriate, preserve structured data and breadcrumb behavior already established elsewhere in the platform.

Do not introduce query-dependent or temporary discovery states that become indexable URLs.

---

## Scope Boundary

For this flow, do NOT implement:

* service search
* advanced service filtering
* related products
* related services
* contact integration
* consultation integration
* AI recommendations
* personalization
* purchasing
* payments
* authentication
* CRM functionality
* new backend APIs
* new service taxonomy
* new service data source
* CMS functionality
* testimonials or fabricated proof points
* major global navigation redesign

Those belong to later flows or other product areas.

---

## Validation

After implementation:

1. Verify `/services` loads correctly.
2. Verify the service count is calculated from the existing catalogue.
3. Verify category count is calculated from the existing service categories.
4. Verify every visible service card links to the correct service slug.
5. Verify category cards route to the correct existing category route.
6. Verify the page works with the complete current service catalogue.
7. Check responsive layouts at desktop, tablet and mobile widths.
8. Check keyboard accessibility and focus states.
9. Confirm no duplicate service data or routes were introduced.
10. Run the production build.

Fix actual build/runtime/type errors introduced by this flow.

Do not treat the existing catalogue-related bundle-size warning as a failure if the build otherwise succeeds.

### Final principle

**Make `/services` the strongest service-discovery entry point in the Ricoz ecosystem — clear categories, clear services, clear paths into detail — without turning discovery into search, filtering, or conversion functionality yet.**
