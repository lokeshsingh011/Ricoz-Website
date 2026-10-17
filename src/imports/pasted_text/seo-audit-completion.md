## RICOZ — SEO & GEO AUDIT + COMPLETION

The core technical SEO foundation is already implemented and TypeScript passes cleanly.

Existing implementation includes:

* `usePageMeta`
* Franchise page SEO metadata
* Franchise Breadcrumb JSON-LD
* Franchise WebPage / LocalBusiness JSON-LD
* `public/robots.txt`
* `public/sitemap.xml`
* `public/manifest.webmanifest`
* `public/favicon.svg`
* `index.html` favicon/manifest/theme-color/default metadata

Do **not rebuild these systems**.

This task is a focused **audit, correction and completion pass across the entire Ricoz platform**.

---

# 1. AUDIT THE EXISTING SEO SYSTEM

First inspect the current implementation and determine:

* How `usePageMeta` works
* Which routes already provide metadata
* Whether metadata is generated dynamically
* How canonical URLs are generated
* How robots directives are handled
* How JSON-LD is injected
* Whether multiple components are writing to `<head>`
* Whether cleanup occurs correctly on route changes
* Whether metadata can leak from one route into another

Do not create a second SEO system.

Extend the existing architecture.

---

# 2. AUDIT EVERY PUBLIC ROUTE

Check all existing public routes, including:

* `/`
* `/products`
* `/products/category/:categorySlug`
* `/products/:productSlug`
* `/services`
* `/services/category/:categorySlug`
* `/services/:serviceSlug`
* `/solutions`
* `/solutions/:solutionSlug`
* `/resources`
* `/resources/:resourceSlug`
* `/resources/case-studies`
* `/resources/case-studies/:slug`
* `/contact`
* `/consultation`
* `/about`
* `/leadership`
* `/careers`
* `/franchise`
* `/franchise/:franchiseSlug`

Also inspect any additional public routes discovered in the project.

For every public indexable route verify:

* Unique title
* Unique meta description
* Canonical URL
* Correct robots directive
* Open Graph title
* Open Graph description
* Open Graph URL
* Open Graph image where available
* Twitter/X card metadata
* Correct page type
* Appropriate structured data
* Correct breadcrumb metadata where applicable

Do not generate generic metadata for every route.

---

# 3. PRODUCT SEO

Audit the complete product catalogue.

Every product detail page must derive its SEO metadata from its actual product record.

Verify:

* Product name
* Product description
* Category
* Canonical URL
* Related products/services/solutions
* Relevant image
* Structured data where appropriate

Do not use fake:

* prices
* ratings
* reviews
* availability
* SKU
* offers
* aggregate ratings

If the product data does not contain those fields, do not invent them for schema.

Product category pages should also have unique metadata.

---

# 4. SERVICE SEO

Audit all service pages.

Every service should have:

* Unique title
* Unique description
* Canonical
* Appropriate Service JSON-LD where useful
* Breadcrumb
* Relevant internal links

Derive information from the existing service data.

Do not duplicate one generic description across the entire service catalogue.

---

# 5. SOLUTION SEO

Audit:

* `/solutions`
* Every solution detail page

Each solution should clearly communicate:

* what the solution is
* who it serves
* relevant capabilities
* related products/services

Use existing content only.

Implement appropriate WebPage/Solution-related structured data only if it accurately represents the page.

Do not force unsupported schema types.

---

# 6. RESOURCE + CASE STUDY SEO

Audit resources and case studies.

Use appropriate metadata based on the actual content type.

Where the content genuinely represents an article/case study, support:

* Article JSON-LD where appropriate
* author only when actual author data exists
* publication date only when actual date exists
* modified date only when actual date exists
* image only when available

Never fabricate authors, dates or publishers.

---

# 7. COMPANY PAGE SEO

Audit:

* About
* Leadership
* Careers
* Contact
* Consultation

Each should have a clear search intent.

Examples of intent:

About → understanding Ricoz

Leadership → understanding the organisation/team

Careers → employment opportunities

Contact → contacting Ricoz

Consultation → starting a business conversation

Do not stuff keywords into these pages.

---

# 8. FRANCHISE GEO SEO

Audit all five active franchise locations:

* Mumbai
* Nagpur
* Delhi
* Kalyan
* Kolkata

Each must remain genuinely differentiated.

Verify:

### Mumbai

Urban / Executive / Ambitious

### Nagpur

Growth / Connection / Opportunity

### Delhi

Strategic / Institutional / Authoritative

### Kalyan

Human / Local / Relationship-led

### Kolkata

Cultural / Creative / Established / Intelligent

Do not replace their existing visual or editorial identities.

For each city verify:

* unique title
* unique description
* unique H1
* city-specific introductory content
* canonical
* breadcrumb
* appropriate WebPage schema
* LocalBusiness schema only where factual business information exists
* relevant internal links
* links to other franchise locations

Do not invent:

* office addresses
* phone numbers
* coordinates
* postal codes
* service-area claims
* local reviews
* ratings

---

# 9. GEO CONTENT QUALITY

Audit the franchise content for geographic search and generative search clarity.

Each city page should make the following understandable through normal visible content:

**Who**
Ricoz

**Where**
The specific franchise city

**What**
Technology, digital products, services and business solutions

**Who it serves**
Based on the actual franchise configuration

**How it helps**
Based on the actual franchise content

Do not add hidden SEO text.

Do not create artificial keyword paragraphs.

Do not create repetitive city pages by replacing only the city name.

---

# 10. INTERNAL ENTITY LINKING

Audit the relationship graph:

`Ricoz`

→ Products
→ Services
→ Solutions
→ Resources
→ Case Studies
→ Franchise Network
→ Cities
→ Company
→ Consultation
→ Contact

Strengthen existing relationships where useful.

Product pages should link to relevant services/solutions.

Service pages should link to relevant products/solutions.

Solution pages should link to relevant products/services.

Franchise pages should link to relevant offerings.

Use existing relationship data.

Do not create arbitrary links merely for SEO.

---

# 11. CANONICAL URL QA

Verify that every indexable route generates exactly one canonical URL.

Check for:

* trailing slash inconsistencies
* query parameters
* search/filter URLs
* duplicate route patterns
* route aliases
* client-side navigation metadata
* localhost URLs
* relative canonical URLs where absolute URLs are required

Use the existing production-domain configuration.

Do not invent a domain if one is already configured.

If the production domain is not configured, isolate the domain constant so it can be supplied later.

---

# 12. PRIVATE ROUTE SEO

Verify that all private application routes remain excluded from search.

This includes:

* `/portal`
* `/portal/login`
* `/portal/dashboard`
* `/portal/enquiries`
* `/portal/consultations`
* `/portal/products`
* `/portal/services`
* `/portal/profile`
* `/portal/support`
* `/admin`
* all protected/admin subroutes

Ensure:

* `noindex`
* `nofollow` where appropriate
* excluded from sitemap
* no private customer data in public metadata
* no private records in structured data

Do not change the portal's functional authentication architecture.

---

# 13. SITEMAP QA

Inspect the existing:

`public/sitemap.xml`

Do not blindly regenerate it.

Verify that every listed URL:

* actually exists
* is public
* is indexable
* uses the correct canonical URL
* belongs to the current route architecture

Verify that it includes:

* public core pages
* product categories
* products
* service categories
* services
* solutions
* resources
* case studies
* company pages
* franchise network
* all five active franchise cities

Remove:

* portal URLs
* admin URLs
* authentication URLs
* search/filter states
* dead URLs
* duplicate URLs

If the sitemap is currently static, improve its maintainability without unnecessarily introducing a complex build system.

---

# 14. ROBOTS QA

Inspect:

`public/robots.txt`

Verify:

* public pages remain crawlable
* `/portal/` is protected from crawling
* `/admin/` is protected from crawling
* sitemap reference is correct
* no accidental global disallow exists

Do not rely on robots.txt alone for private-page indexing control.

---

# 15. SOCIAL METADATA

The current `index.html` contains fallback OG metadata.

Keep the fallback.

But verify that route-level metadata overrides it correctly.

For major public pages support:

* `og:title`
* `og:description`
* `og:url`
* `og:type`
* `og:image`
* `og:site_name`
* Twitter/X card metadata

Product/service/franchise pages should use relevant existing imagery where available.

Do not create fictional social preview content.

---

# 16. FAVICON QA

Keep the existing Ricoz favicon implementation.

Verify:

* favicon loads correctly
* SVG is referenced correctly
* browser tab displays correctly
* manifest icon reference works
* no broken legacy favicon reference exists
* no competing favicon definitions exist

Do not replace the existing Ricoz Red `#C41230` favicon unnecessarily.

If additional raster sizes are genuinely required by the existing deployment/browser compatibility, structure them cleanly without changing the brand mark.

---

# 17. MANIFEST QA

Inspect:

`public/manifest.webmanifest`

Verify:

* valid JSON
* valid icon paths
* Ricoz name
* short name
* theme color
* background color
* appropriate display mode
* correct start URL

Do not add unsupported PWA claims.

---

# 18. HEADING + SEMANTIC AUDIT

Inspect the main public pages.

Verify:

* one meaningful H1
* logical H2/H3 hierarchy
* no heading used only for visual styling
* semantic `<nav>`
* semantic `<main>`
* semantic `<footer>`
* descriptive link text
* accessible image alternatives

Do not insert hidden SEO content.

Do not alter the established visual design simply to satisfy arbitrary heading rules.

---

# 19. IMAGE SEO

Audit important existing images.

Verify:

* meaningful alt text
* decorative images use appropriate empty alt
* width/height where practical
* lazy loading where appropriate
* no broken image references

For franchise director imagery:

* retain the existing placeholder when no real photograph exists
* use the real director image once supplied
* do not invent a person or photograph

---

# 20. STRUCTURED DATA QA

Inspect all JSON-LD currently generated.

Ensure:

* valid JSON
* no duplicate Organization schemas unnecessarily repeated
* no contradictory entity information
* no fabricated fields
* URLs match canonical URLs
* breadcrumbs match visible breadcrumbs
* schema type matches actual content

Use:

* Organization
* WebSite
* WebPage
* BreadcrumbList
* Product where genuinely applicable
* Service where genuinely applicable
* Article where genuinely applicable
* LocalBusiness only with real business/location information

Do not add schema simply because it exists.

---

# 21. ROUTE CHANGE / CLEANUP TEST

Because SEO metadata is dynamically injected, verify route transitions carefully.

Test navigation:

Homepage → Product → Service → Solution → Franchise → Contact

and back again.

Confirm:

* previous title disappears
* previous description disappears
* previous canonical is replaced
* previous JSON-LD does not accumulate
* current page metadata is correct

This is particularly important for `FranchisePage.tsx`.

---

# 22. SEO DEVELOPMENT CHECK

If practical, add a small development-only diagnostic utility.

It should expose:

* current route
* title
* description
* canonical
* robots
* OG title
* OG image
* structured-data types

Do not expose this publicly in production.

If the project already has an equivalent debugging mechanism, use that instead.

---

# 23. DO NOT OVER-ENGINEER

This is a QA/completion pass.

Do NOT:

* rebuild the router
* replace the SEO library unnecessarily
* redesign pages
* rewrite all content
* create a second SEO framework
* add fake business data
* create fake reviews
* create fake FAQs
* create keyword-stuffed content
* change franchise visual identities
* change portal UX
* change admin architecture

Only make changes required for SEO/GEO correctness, discoverability and maintainability.

---

# 24. FINAL QA REPORT

After implementation, run a complete route-level audit.

Report only concise results:

### SEO

* Routes audited
* Routes corrected
* Metadata coverage

### GEO

* Franchise pages audited
* Geographic signals implemented
* Missing factual location data, if any

### Structured Data

* Schema types implemented
* Invalid/duplicate schema removed

### Discovery

* Sitemap status
* robots.txt status
* canonical status

### Brand

* favicon status
* manifest status
* social metadata status

### Quality

* TypeScript status
* route navigation status
* responsive/regression status

Also clearly list anything that cannot be completed because **actual business information or assets have not yet been supplied**.

The final implementation must remain TypeScript-clean and must not break:

* public Ricoz pages
* product ecosystem
* service ecosystem
* solutions
* resources
* five franchise pages
* customer portal
* admin routes
* existing responsive layouts
