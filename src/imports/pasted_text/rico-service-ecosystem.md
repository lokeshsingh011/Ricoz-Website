# RICOZ — MASTER SERVICE ECOSYSTEM IMPLEMENTATION

## Phase 2 + Phase 3 — All 60 Services

### Individual Landing Pages + Ecosystem Relationships + Conversion

Complete the **entire Ricoz Service Ecosystem** for all **60 services** currently present in the catalogue.

The service catalogue is already complete:

| Category                     | Services |
| ---------------------------- | -------: |
| Implementation & Integration |       12 |
| Strategy & Transformation    |       10 |
| Operations & Efficiency      |       10 |
| Digital Marketing            |        8 |
| Data & Intelligence          |        7 |
| Social Media & Content       |        7 |
| Security & Compliance        |        6 |
| **TOTAL**                    |   **60** |

Every service already has:

* unique ID
* unique slug
* valid category
* tagline
* overview
* `problemsAddressed`
* capabilities
* process
* outcomes
* FAQs
* `relatedProducts`
* `relatedServices`
* SEO metadata

The existing Service Ecosystem discovery flows 15–23 are already implemented.

Now complete **Phase 2 + Phase 3 together**.

---

# PRIMARY OBJECTIVE

Turn all **60 services** into complete, standalone, SEO-ready service landing pages while connecting every service to the wider Ricoz ecosystem.

The final architecture must support:

**Services → Search → Categories → Filters → Service Landing Page → Related Products → Related Services → Resources/Case Studies → Contact → Consultation**

Every service must have its own working URL:

`/services/:serviceSlug`

The result must feel like a complete professional service platform, not a catalogue of cards.

---

# CRITICAL ARCHITECTURE RULE

Do **NOT** create 60 separate page components.

Do NOT create:

`ServiceDetail1.tsx`
`ServiceDetail2.tsx`
`ServiceDetail3.tsx`

etc.

There must be **one reusable dynamic ServiceDetail architecture** driven by the existing service data.

Improve the existing shared components and data-driven rendering where required.

The same architecture must automatically render all 60 services.

Preserve all existing working routes, IDs, slugs, components, flows, and design-system decisions.

---

# INTERNAL IMPLEMENTATION BATCHES

Process the 60 services internally in six controlled batches:

### Batch 1

Services 1–10

### Batch 2

Services 11–20

### Batch 3

Services 21–30

### Batch 4

Services 31–40

### Batch 5

Services 41–50

### Batch 6

Services 51–60

These are **implementation batches only**.

Do not create six different architectures.

Build the reusable architecture first, then ensure all six batches are populated and validated against it.

---

# 1. INDIVIDUAL SERVICE LANDING PAGE

Every service must resolve through:

`/services/:serviceSlug`

Each page should follow this hierarchy:

**Breadcrumb**

→ **Category**

→ **Hero**

→ **Overview**

→ **Problem / Business Need**

→ **Capabilities**

→ **Process**

→ **Outcomes**

→ **Use Cases**

→ **FAQs**

→ **Related Products**

→ **Related Services**

→ **Relevant Resources / Case Studies**

→ **Contact / Consultation CTA**

Do not render mandatory sections empty.

Optional sections should gracefully disappear when no valid data exists.

---

# 2. HERO

Every service must have a distinct service-specific hero.

Include:

* breadcrumb
* service category
* service name
* service-specific headline
* positioning statement
* concise description
* primary Contact CTA
* secondary Consultation CTA

Use the existing service data.

Do not use one generic headline across all 60 pages.

The hero should immediately answer:

**What is this service and why would a business need it?**

---

# 3. OVERVIEW

Use the existing service:

* tagline
* overview
* category
* descriptive content

Create a concise editorial introduction.

Do not create excessive text.

Do not repeat the hero unnecessarily.

---

# 4. PROBLEM / BUSINESS NEED

Use:

`problemsAddressed`

or the equivalent existing field.

Present the real problems this service addresses.

Content must vary appropriately by service.

Examples of appropriate differences:

* infrastructure services → reliability, operational complexity, scalability
* strategy services → uncertainty, positioning, planning, market direction
* marketing services → discoverability, acquisition, conversion
* data services → fragmented information, reporting, decision support
* security services → exposure, access control, security posture

Do not fabricate statistics or guarantees.

---

# 5. CAPABILITIES

Use the existing service capabilities.

Present them in a structured premium layout.

Each capability should clearly communicate something the service actually covers.

Avoid repeating the overview.

Do not invent capabilities that aren't supported by the service data.

---

# 6. PROCESS

Use the existing service `process`.

Present the engagement journey clearly.

The process should communicate how Ricoz approaches the service.

Do not force identical wording onto every service.

Where the underlying service data differs, preserve those differences.

Do not invent unsupported delivery stages.

---

# 7. OUTCOMES

Use the existing service `outcomes`.

Present realistic intended outcomes.

Do not add:

* guaranteed ROI
* guaranteed rankings
* fake percentages
* invented revenue claims
* unsupported timelines
* fake performance metrics

Outcomes communicate intended value, not guaranteed results.

---

# 8. USE CASES

Where supported by existing service information, present relevant use cases.

Use cases should explain:

**When would a business actually use this service?**

Keep them service-specific.

Do not generate repetitive filler.

If there is no dedicated use-case field, derive carefully from existing service data only where appropriate.

---

# 9. FAQs

Use each service's existing FAQ data.

Render FAQs using an accessible accordion.

Requirements:

* keyboard accessible
* semantic buttons
* visible focus state
* clear expanded/collapsed state
* mobile friendly

FAQs must be specific to each service.

Do not use one generic FAQ set across all services.

---

# 10. RELATED PRODUCTS

Use existing:

`relatedProducts`

Resolve every relationship against the real Ricoz product catalogue.

Only display valid relationships.

Remove:

* invalid references
* duplicates
* broken slugs

Use the existing ProductCard where appropriate.

Suggested heading:

**Products that complement this service**

Each product must link to:

`/products/:productSlug`

Do not create an AI recommendation system.

Do not infer random relationships.

---

# 11. RELATED SERVICES

Use existing:

`relatedServices`

Resolve references against the real 60-service catalogue.

Remove:

* invalid references
* duplicates
* self-references

Use the existing ServiceCard.

Suggested heading:

**Explore related services**

Each service must link to:

`/services/:serviceSlug`

Relationships must remain deterministic and data-driven.

---

# 12. RESOURCES & CASE STUDIES

Where existing Ricoz data contains legitimate relationships, surface relevant:

* Resources
* Knowledge content
* Case Studies

Use existing components and routes.

Do not invent relationships.

Do not randomly recommend unrelated content.

If no valid relationship exists, omit the section.

---

# 13. CONTACT INTEGRATION

Every one of the 60 services must support:

`/contact?service=:serviceSlug`

When arriving from a service:

* resolve the service
* display service context
* preserve service context through the form
* preselect service interest where supported
* display service name in confirmation
* provide return-to-service navigation

The existing Contact implementation already supports unified product / solution / service context.

Preserve that architecture.

Do not redesign Contact.

Direct `/contact` must continue working normally.

Invalid service slugs must fail gracefully.

---

# 14. CONSULTATION INTEGRATION

Every service must support:

`/consultation?service=:serviceSlug`

Preserve the existing 5-step Consultation architecture.

When arriving from a service:

* resolve service context
* show service context banner
* preselect the appropriate service inquiry/purpose
* preserve service context across all steps
* preserve it when navigating backwards
* show service in Step 5 review
* show service in confirmation
* provide return-to-service navigation

Do not add:

* real calendar availability
* payment
* authentication
* CRM
* backend booking
* email automation

---

# 15. FINAL SERVICE CTA

Every landing page should end with a clear, restrained conversion section.

Primary:

**Discuss this service**

Secondary:

**Schedule a consultation**

Both must preserve service context.

No intrusive popups.

No aggressive sales UI.

---

# 16. SEO — ALL 60 SERVICES

Every service landing page must have unique SEO metadata.

Ensure:

* unique title
* unique meta description
* canonical URL
* relevant keywords/topics where supported
* Open Graph metadata where supported
* appropriate Service structured data where supported
* FAQ structured data only when appropriate

Canonical URL:

`/services/:serviceSlug`

Do not allow Contact or Consultation query parameters to become alternative indexable service pages.

---

# 17. BREADCRUMBS

Every service page should communicate:

**Services → Category → Service**

Category must link to:

`/services/category/:categorySlug`

Service is the current page.

Use accessible breadcrumb markup.

Where supported by the existing SEO architecture, maintain BreadcrumbList structured data.

---

# 18. DESIGN SYSTEM

Do not redesign Ricoz.

Use the existing Ricoz design system:

* Ricoz Red `#C41230`
* Manrope
* warm off-white background
* near-black text
* thin editorial borders
* 8px spacing scale
* 4px radius
* restrained cards
* minimal shadows
* premium editorial technology aesthetic

Avoid:

* gradients
* glassmorphism
* excessive shadows
* excessive rounded cards
* visual clutter
* decorative stock imagery
* unnecessary animations

The service landing pages should feel premium, calm, credible, and product-oriented.

---

# 19. RESPONSIVE EXPERIENCE

All 60 service pages must work across:

* desktop
* tablet
* mobile

Verify:

* hero wrapping
* long service names
* CTA stacking
* capability grids
* process layouts
* outcome layouts
* FAQ interaction
* related product cards
* related service cards
* final CTA
* breadcrumb wrapping

No horizontal overflow.

---

# 20. ACCESSIBILITY

Maintain:

* semantic heading hierarchy
* keyboard navigation
* visible focus states
* accessible FAQ controls
* descriptive links
* appropriate button labels
* logical tab order
* readable contrast
* usable mobile touch targets

Do not sacrifice accessibility for visual effects.

---

# 21. PERFORMANCE & ARCHITECTURE

Do not create 60 copies of the same page structure.

Use:

* reusable components
* existing data
* dynamic routing
* shared rendering logic
* efficient mapping
* existing cards
* existing layout primitives

Avoid unnecessary dependencies.

Avoid unnecessary client-side computation.

Do not create a CMS.

Do not create a backend.

---

# 22. SERVICE CONTENT QUALITY

All 60 services must feel genuinely different.

Do not simply change the service name inside a template.

Each service should have meaningful differences in:

* positioning
* problem statements
* capabilities
* process
* outcomes
* FAQs
* use cases
* relationships

The content should be concise but substantial enough for a standalone professional service page.

Avoid repetitive AI-generated filler.

Do not make unsupported claims.

---

# 23. EXISTING 60-SERVICE DATA

Do NOT replace the existing 60-service catalogue with a new catalogue.

The current catalogue is authoritative.

Use the existing service data and relationships.

Do not change the category structure merely to match an earlier theoretical structure.

The current categories are:

* Implementation & Integration
* Strategy & Transformation
* Operations & Efficiency
* Digital Marketing
* Data & Intelligence
* Social Media & Content
* Security & Compliance

Preserve this taxonomy.

---

# 24. DO NOT IMPLEMENT

Do not:

* add more services
* remove services
* duplicate services
* change existing slugs unnecessarily
* redesign the Services listing page
* redesign the global navigation
* redesign Contact
* redesign Consultation
* create a CMS
* create a backend
* create authentication
* create payment functionality
* create real calendar booking
* create CRM functionality
* create AI recommendations
* create personalization
* invent clients
* invent testimonials
* invent partnerships
* invent certifications
* invent statistics
* invent case studies
* invent product relationships
* invent service relationships
* introduce competitor/company references
* introduce unnecessary pricing functionality

This implementation is specifically about completing the **60-service landing-page and ecosystem experience**.

---

# 25. FULL-CATALOGUE VALIDATION

After implementation, validate the entire 60-service catalogue.

## Catalogue

Confirm:

**60 total services**

Confirm:

* unique IDs
* unique slugs
* valid categories
* no duplicates

---

## Landing Pages

Test services from every category.

Confirm:

* every slug resolves
* correct service data loads
* correct category loads
* breadcrumb works
* hero works
* overview works
* problems work
* capabilities work
* process works
* outcomes work
* FAQs work
* related content works where available
* CTAs work

---

## Discovery

Verify:

`/services`

correctly displays all 60 services.

Verify category counts.

---

## Search

Search for services across all categories.

Confirm newly added services are discoverable by:

* name
* category
* tagline
* description
* capabilities
* outcomes
* process
* use cases

---

## Filtering

Test:

* single category
* multiple categories
* search + category filtering
* clearing filters
* no-results state

Confirm counts remain accurate.

---

## Category Pages

Test every category:

`/services/category/:categorySlug`

Confirm:

* correct category
* correct service count
* only relevant services displayed
* correct links

---

## Related Products

Test services with related products.

Confirm every linked product resolves correctly.

---

## Related Services

Test services with related services.

Confirm:

* valid links
* no self-links
* no duplicates
* no broken references

---

## Contact

Test several services from different categories through:

`/contact?service=:serviceSlug`

Confirm service context remains intact through confirmation.

---

## Consultation

Test several services from different categories through:

`/consultation?service=:serviceSlug`

Confirm:

* context banner
* purpose preselection
* Step 5 review
* confirmation
* return-to-service

---

## SEO

Check representative pages from **every service category**.

Confirm:

* unique titles
* unique descriptions
* canonical URLs
* correct breadcrumbs
* no accidental duplicate indexable query URLs

---

# 26. RESPONSIVE QA

Test representative service pages from every category on:

* desktop
* tablet
* mobile

Pay particular attention to the longest service names and largest capability/process lists.

---

# 27. BUILD VALIDATION

Run the production build after the entire implementation.

Resolve:

* TypeScript errors
* runtime errors
* routing errors
* data-reference errors
* accessibility issues introduced by the implementation

The existing expected catalogue bundle-size warning is acceptable.

Do not introduce new build errors or warnings unnecessarily.

---

# FINAL SUCCESS CONDITION

The Service Ecosystem is complete only when Ricoz has:

**60 services**

→ **60 unique service URLs**

→ **60 meaningful service landing pages**

→ **7 valid service categories**

→ **working search**

→ **working filtering**

→ **working category discovery**

→ **working related products**

→ **working related services**

→ **relevant resources/case studies where available**

→ **service-aware Contact**

→ **service-aware Consultation**

→ **unique SEO metadata**

→ **responsive and accessible presentation**

→ **clean production build**

The final experience must feel like one coherent Ricoz Service Ecosystem.

Build the reusable architecture once and apply it across all 60 services.

Do not stop after implementing only the first batch.

Complete **all six internal batches — 60/60 services** before considering this task complete.
