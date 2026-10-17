### Figma Make Prompt — Flow 46: Search Engine → Service

Implement **Flow 46 — Search Engine → Service** for the Ricoz platform.

**Journey:**
Search Result → Service Landing Page → Related Products / Resources → Conversion

### Objective

Ensure every valid Service Detail page works as a strong standalone landing destination when a visitor arrives directly from a search engine.

The visitor may have no previous Ricoz context, so the Service page must independently communicate the service, the business need it addresses, relevant capabilities, supporting ecosystem content, and clear next actions.

### Preserve Existing Architecture

Reuse:

* existing 60-service catalogue
* existing service IDs and canonical slugs
* existing dynamic `ServiceDetail`
* existing 7 service categories
* existing related Product relationships
* existing related Service relationships
* existing Resource / Case Study relationships
* existing Contact flow
* existing Consultation flow
* existing SEO utilities
* existing Ricoz design system

Do not create a separate SEO landing-page template.

A Service Detail page should remain the same canonical experience regardless of whether the visitor arrives from internal navigation or a search engine.

### Service Landing Page

Verify that a direct visit to:

`/services/:serviceSlug`

provides a complete standalone experience.

The page should clearly communicate:

1. Service identity
2. Service category
3. Service tagline / hero statement
4. Overview
5. Problems / business needs addressed
6. Capabilities
7. Process
8. Outcomes
9. Use cases where available
10. FAQs where available
11. Relevant ecosystem content
12. Conversion options

Use the existing Service Detail implementation from the Service Ecosystem flows.

Do not add duplicate SEO-only content.

### Search Intent → Service Relevance

The page should quickly answer:

**What service is this?**
**What business problem does it address?**
**What does Ricoz actually provide?**
**What can the visitor do next?**

Use the existing service content and relationships.

Do not create keyword-stuffed paragraphs or artificial search-engine copy.

### Related Products

Use the existing `relatedProducts` relationships.

* Resolve product slugs against the existing Product catalogue.
* Remove invalid, duplicated or self-invalid relationships.
* Reuse the existing ProductCard.
* Link to canonical Product Detail routes.

If no legitimate related products exist, omit the section.

Do not invent relationships simply to populate the page.

### Related Services

Where existing `relatedServices` relationships are available:

* resolve them against the Service catalogue
* remove invalid/self/duplicate relationships
* reuse the existing ServiceCard
* link to canonical Service Detail routes

If no legitimate related services exist, omit the section.

Do not introduce recommendation algorithms.

### Resources / Case Studies

Where legitimate existing relationships exist, surface relevant:

* Resources
* Case Studies

Reuse the existing ResourceCard / CaseStudyCard components and canonical routes.

Only show these sections when actual relevant relationships exist.

Do not randomly populate the page with unrelated content.

### Conversion

Provide clear conversion paths using the existing architecture.

Primary contextual contact:

`/contact?service=:serviceSlug`

Consultation:

`/consultation?service=:serviceSlug`

The service context must continue through the existing Contact and Consultation flows.

Do not create a service-specific enquiry form.

### Internal Linking

Ensure visitors can naturally move between:

* Service category
* Related Services
* Related Products
* Resources
* Case Studies
* Contact
* Consultation

Use canonical existing routes.

Keep internal linking useful and restrained.

Do not add links solely for SEO volume.

### SEO Metadata

For every valid Service Detail page:

* use the service's existing SEO title
* use the service's existing SEO description
* use the canonical service URL
* ensure metadata is unique per service
* preserve existing Open Graph metadata where supported
* use appropriate Service/WebPage/FAQ structured data only where the existing architecture supports it and the underlying data is real

Do not invent:

* pricing
* ratings
* reviews
* customer numbers
* certifications
* performance statistics
* guarantees
* market claims

### Search Engine Crawlability

Verify that valid Service Detail routes:

* resolve through the existing router
* remain crawlable/indexable according to the deployment architecture
* are not accidentally blocked by page metadata
* use canonical URLs
* do not create duplicate indexable variants

Search/filter query states must not become alternative service landing pages.

### Invalid Service URLs

For:

`/services/invalid-service`

use the existing invalid/not-found behavior.

Do not render a fabricated service page.

### Responsive Experience

Search visitors may enter from mobile.

Verify:

* complete Service Detail experience on mobile
* readable content hierarchy
* accessible CTAs
* no horizontal overflow
* usable related-content sections
* responsive navigation
* appropriate spacing and typography

### Accessibility

Ensure:

* semantic heading hierarchy
* meaningful page title
* descriptive links
* accessible FAQ accordions
* visible focus states
* keyboard navigation
* meaningful image alt text where applicable
* no information depends solely on color

### Performance

Reuse existing service data and components.

Do not introduce:

* duplicate data fetching
* unnecessary SEO scripts
* heavy SEO-specific components
* redundant catalogue copies

Keep the existing acceptable bundle-size warning if present.

### Scope Boundary

Do NOT implement:

* a new search engine
* AI/semantic search
* keyword stuffing
* duplicate SEO landing pages
* new service taxonomy
* CMS
* backend
* CRM
* lead scoring
* analytics redesign
* authentication
* payments
* personalization
* unrelated Service Detail redesign

### Validation

Test:

1. Direct entry to multiple valid Service Detail URLs.
2. Correct service-specific content renders.
3. Service category resolves correctly.
4. Service SEO title and description are unique and correct.
5. Canonical URL is correct.
6. Related Products appear only from legitimate relationships.
7. Related Services appear only from legitimate relationships.
8. Resources/Case Studies appear only when valid relationships exist.
9. Service → Contact preserves `service=:serviceSlug`.
10. Service → Consultation preserves `service=:serviceSlug`.
11. Contact confirmation references the correct Service.
12. Consultation confirmation references the correct Service.
13. Invalid service slug uses the existing not-found behavior.
14. No duplicate SEO-only service pages are created.
15. Mobile and desktop layouts work correctly.
16. Accessibility behavior remains correct.
17. Build completes without TypeScript errors.
