### Figma Make Prompt — Flow 45: Search Engine → Product

Implement **Flow 45 — Search Engine → Product** for the Ricoz platform.

**Journey:**
Search Result → Product Landing Page → Related Content → Conversion

### Objective

Ensure every valid Product Detail page can function as a strong standalone landing destination when a visitor arrives directly from a search engine.

The visitor may have no prior Ricoz context, so the Product page must independently explain the product, connect it to relevant ecosystem content, and provide clear conversion paths.

### Preserve Existing Architecture

Reuse:

* existing Product catalogue
* existing 123-product catalogue and canonical slugs
* existing `ProductDetail`
* existing Product category structure
* existing related product relationships
* existing related service relationships
* existing resource/case-study relationships
* existing Contact flow
* existing Consultation flow
* existing SEO utilities
* existing Ricoz design system

Do not create a separate SEO landing-page template.

Every Product Detail page should remain the same canonical product experience regardless of whether the visitor arrives from internal navigation or a search engine.

### Product Landing Page

Verify that a direct visit to:

`/products/:productSlug`

provides a complete standalone experience.

The page should clearly communicate:

1. Product identity
2. Category
3. Product tagline / hero statement
4. Product overview
5. Capabilities
6. Benefits
7. Features
8. Use cases
9. FAQs where available
10. Relevant ecosystem content
11. Conversion options

Use the existing Product Detail implementation from Flow 09.

Do not add duplicate content solely for SEO.

### Search Intent → Product Relevance

The landing page should immediately answer:

**What is this product?**
**What does it help with?**
**Who or what business need is it relevant to?**
**What can the visitor do next?**

Use the actual product data.

Do not create keyword-stuffed copy or artificial SEO paragraphs.

### Related Content

Use only legitimate existing relationships.

Where available, surface:

* Related Products
* Related Services
* Relevant Resources
* Relevant Case Studies

Reuse the existing ProductCard, ServiceCard, ResourceCard and CaseStudyCard components.

Do not introduce a new recommendation engine.

If no legitimate related content exists, omit the section rather than displaying arbitrary content.

### Conversion

Provide clear conversion paths using the existing architecture.

Primary contextual action:

`/contact?product=:productSlug`

Consultation:

`/consultation?product=:productSlug`

The product context must continue through the existing Contact and Consultation flows.

Do not introduce a new SEO-specific enquiry form.

### Internal Linking

Ensure the Product page provides meaningful internal links to relevant Ricoz ecosystem areas.

Where supported, allow visitors to move naturally between:

* Product category
* Related Products
* Related Services
* Resources
* Case Studies
* Contact
* Consultation

Use existing canonical routes.

Avoid excessive internal links purely for SEO purposes.

### SEO Metadata

For every valid Product Detail page:

* use the product's existing SEO title
* use the product's existing SEO description
* use the canonical product URL
* ensure metadata is unique per product
* preserve existing Open Graph metadata where supported
* use appropriate Product/WebPage structured data only when supported by actual available data

Do not invent:

* prices
* ratings
* reviews
* availability
* customer counts
* performance claims
* external certifications
* fake product identifiers

### Search Engine Crawlability

Verify that valid Product Detail routes are:

* reachable through normal application routing
* server-renderable/indexable according to the existing deployment architecture
* not accidentally blocked by application-level metadata
* using canonical URLs
* free from duplicate route variants

Do not make search/filter query states indexable as separate product pages.

### Invalid Product URLs

For:

`/products/invalid-product`

handle the existing invalid-product behavior gracefully.

Do not render a fake product page.

Use the application's established not-found behavior.

### Responsive Experience

Search visitors may arrive directly on mobile.

Verify:

* mobile Product Detail is fully usable
* content hierarchy remains clear
* CTAs remain visible and accessible
* related content does not create horizontal overflow
* typography remains readable
* navigation works correctly

### Accessibility

Ensure:

* semantic headings
* descriptive page title
* meaningful link text
* accessible accordions
* keyboard navigation
* visible focus states
* proper image alt text where images exist
* no information depends solely on visual styling

### Performance

Do not introduce unnecessary SEO scripts, heavy components or duplicate data fetching.

Reuse the existing product data and components.

Maintain the existing acceptable bundle-size warning if present; do not restructure the application solely to eliminate it.

### Scope Boundary

Do NOT implement:

* a new search engine
* AI/semantic search
* keyword stuffing
* SEO-specific duplicate landing pages
* new product taxonomy
* new CMS
* backend
* analytics redesign
* paid search functionality
* CRM
* lead scoring
* authentication
* payments
* unrelated Product Detail redesign

### Validation

Test:

1. Search-style direct entry to multiple valid Product Detail URLs.
2. Correct product data renders independently.
3. Product-specific SEO title and description are present.
4. Canonical URL is correct.
5. Product category link works.
6. Related Products use legitimate relationships.
7. Related Services use legitimate relationships.
8. Related Resources/Case Studies appear only when valid relationships exist.
9. Product → Contact preserves `product=:productSlug`.
10. Product → Consultation preserves `product=:productSlug`.
11. Contact confirmation still references the correct Product.
12. Consultation confirmation still references the correct Product.
13. Invalid product slug uses the existing not-found behavior.
14. No duplicate or SEO-only product pages are created.
15. Mobile and desktop layouts work correctly.
16. Accessibility behavior remains correct.
17. Build completes without TypeScript errors.
