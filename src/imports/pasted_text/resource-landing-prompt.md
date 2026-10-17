### Figma Make Prompt — Flow 47: Search Engine → Resource

Implement **Flow 47 — Search Engine → Resource** for the Ricoz platform.

**Journey:**
Search Result → Resource → Related Products / Services → Conversion

### Objective

Ensure every valid Resource Detail page can function as a strong standalone landing destination when a visitor arrives directly from a search engine.

The visitor may have no prior Ricoz context, so the Resource page must clearly communicate what the content is about, provide useful related ecosystem paths, and offer an appropriate conversion route.

### Preserve Existing Architecture

Reuse:

* existing Resource catalogue
* existing Resource Detail implementation
* existing resource IDs and canonical slugs
* existing resource categories and types
* existing Product relationships
* existing Service relationships
* existing ResourceCard
* existing ProductCard
* existing ServiceCard
* existing Contact flow
* existing Consultation flow
* existing SEO utilities
* existing Ricoz design system

Do not create a separate SEO-specific Resource template.

### Resource Landing Experience

Verify that a direct visit to:

`/resources/:resourceSlug`

provides a complete standalone resource experience.

Use the existing Flow 31 Resource Detail structure:

1. Breadcrumb
2. Resource header
3. Resource content
4. Related Products
5. Related Services
6. Conversion CTA

Use only the content actually available for the resource.

Do not add SEO-only paragraphs or duplicate content.

### Search Intent → Resource Relevance

A visitor arriving from a search result should immediately understand:

**What is this resource?**
**What topic or problem does it address?**
**Why is it useful?**
**What can the visitor explore next?**

Use the existing:

* title
* description/excerpt
* category
* resource type
* tags/topics
* author/date only when actually available
* article/resource content

Do not invent metadata to make a resource appear more complete.

### Content Experience

Maintain a readable editorial layout.

Requirements:

* clear title hierarchy
* comfortable reading width
* logical heading structure
* readable paragraphs and lists
* appropriate treatment of existing structured content
* accessible links
* appropriate spacing between content sections

Do not alter the underlying resource content.

If a resource contains unsupported or missing content structures, fail gracefully rather than generating placeholder content.

### Related Products

Where the resource has legitimate existing Product relationships:

* resolve them against the existing Product catalogue
* remove invalid or duplicate relationships
* reuse `ProductCard`
* link to canonical `/products/:productSlug`

Only display the section when relevant products actually exist.

Do not create artificial product relationships based solely on keyword matching.

### Related Services

Where legitimate Service relationships exist:

* resolve them against the existing Service catalogue
* remove invalid or duplicate relationships
* reuse `ServiceCard`
* link to canonical `/services/:serviceSlug`

Only display the section when relevant services actually exist.

Do not introduce an AI recommendation system.

### Conversion

Use the existing conversion architecture.

When a legitimate Product relationship exists:

`/contact?product=:productSlug`

and:

`/consultation?product=:productSlug`

When a legitimate Service relationship exists:

`/contact?service=:serviceSlug`

and:

`/consultation?service=:serviceSlug`

If the resource has no specific Product or Service relationship, use the general:

`/contact`

and:

`/consultation`

Do not force contextual conversion when there is no valid relationship.

### Multiple Relationships

If multiple related Products or Services exist:

* show a small, useful selection using existing catalogue relationships
* preserve the existing data ordering/curation
* do not introduce ranking or recommendation algorithms

The objective is useful discovery, not maximum content density.

### Internal Linking

Provide natural paths from the Resource into the existing ecosystem:

* Resource category
* Related Products
* Related Services
* Case Studies where already supported
* Contact
* Consultation

Use canonical routes.

Avoid excessive internal links or links added solely for search-engine purposes.

### SEO Metadata

For every valid Resource Detail page:

* use the resource's existing SEO title where available
* use its existing SEO description where available
* use the canonical resource URL
* preserve existing Open Graph metadata where supported
* ensure metadata is specific to the individual resource
* use Article/WebPage structured data only when supported by actual resource data

Do not invent:

* publication dates
* authors
* reading times
* categories
* keywords
* statistics
* testimonials
* performance claims

### Search Engine Crawlability

Verify that valid Resource Detail routes:

* resolve through the existing router
* are crawlable/indexable according to the current deployment architecture
* have correct canonical URLs
* are not accidentally blocked by page metadata
* do not generate duplicate indexable variants

Search states and filter/query variations must not become alternative indexable resource pages.

### Invalid Resource URLs

For:

`/resources/invalid-resource`

use the existing not-found behavior.

Do not render a fabricated resource.

### Responsive Experience

Search traffic can arrive directly on mobile.

Verify:

* content is readable on mobile
* article width remains comfortable
* headings do not overflow
* related Product/Service cards stack correctly
* CTAs remain accessible
* no horizontal scrolling is introduced

### Accessibility

Ensure:

* semantic heading hierarchy
* accessible breadcrumb
* meaningful links
* keyboard navigation
* visible focus states
* accessible related-content cards
* meaningful image alt text where images exist
* no information depends solely on color

### Performance

Reuse the existing Resource data and components.

Do not introduce:

* duplicate resource data
* unnecessary SEO scripts
* heavy client-side processing
* duplicate catalogue fetching

Maintain the current acceptable bundle-size warning if present.

### Scope Boundary

Do NOT implement:

* new search engine
* AI/semantic search
* keyword stuffing
* duplicate SEO landing pages
* new resource taxonomy
* CMS
* backend
* CRM
* lead scoring
* authentication
* payments
* personalization
* unrelated Resource redesign
* new recommendation algorithms

### Validation

Test:

1. Direct entry to multiple valid Resource Detail URLs.
2. Correct resource content renders independently.
3. Resource-specific SEO metadata is present.
4. Canonical URL is correct.
5. Related Products appear only when legitimate relationships exist.
6. Related Services appear only when legitimate relationships exist.
7. Case Study links appear only where supported by existing relationships.
8. Product contextual Contact links preserve the correct product slug.
9. Service contextual Contact links preserve the correct service slug.
10. Product contextual Consultation links preserve the correct product slug.
11. Service contextual Consultation links preserve the correct service slug.
12. General Contact/Consultation are used when no specific relationship exists.
13. Invalid resource slug uses the existing not-found behavior.
14. No duplicate SEO-only Resource pages are created.
15. Mobile and desktop layouts work correctly.
16. Accessibility behavior remains correct.
17. Build completes without TypeScript errors.
