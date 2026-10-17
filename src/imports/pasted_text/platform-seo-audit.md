Implement a complete **platform-wide SEO, GEO (Generative Engine Optimization + Geographic SEO), favicon, metadata, social sharing, indexing, and technical discovery system** across the entire Ricoz platform.

This is not limited to the homepage. Audit and implement it across:

* Public Ricoz website
* Products
* Product categories
* Individual product pages
* Services
* Service categories
* Individual service pages
* Solutions
* Individual solution pages
* Resources
* Resource detail pages
* Case studies
* Company pages
* Contact
* Consultation
* Franchise network
* Every individual franchise/city page
* Customer Portal
* Authentication pages
* Any other publicly routable pages currently present

Do not create fake SEO claims, fake locations, fake business information, fake reviews, fake statistics, or fictional schema data.

---

# 1. FIRST — AUDIT THE EXISTING SEO FOUNDATION

Before changing anything, inspect the existing application and identify:

* Existing `<title>` handling
* Existing meta descriptions
* Existing canonical URLs
* Existing Open Graph metadata
* Existing Twitter/X metadata
* Existing robots configuration
* Existing sitemap
* Existing structured data
* Existing favicon configuration
* Existing manifest
* Existing `lang` attributes
* Existing heading hierarchy
* Existing route-level SEO architecture
* Existing image `alt` handling
* Existing internal linking
* Existing franchise SEO implementation
* Existing portal indexing behaviour

Do not duplicate metadata systems.

If an SEO utility/component already exists, extend it rather than creating a competing implementation.

Create one central SEO architecture that route-level pages can consume.

---

# 2. CENTRAL SEO SYSTEM

Create or refine a reusable SEO system, for example:

`src/seo/`

Possible structure:

* `seoConfig.ts`
* `seoDefaults.ts`
* `seoRoutes.ts`
* `SeoHead.tsx`
* `structuredData.ts`
* `geo.ts`
* `social.ts`

Use the existing architecture if an equivalent already exists.

The system should support:

* title
* description
* canonical URL
* robots directive
* keywords only where genuinely useful
* Open Graph
* Twitter/X cards
* page type
* image
* locale
* geographic signals
* structured data
* breadcrumbs
* alternate metadata where required

Avoid stuffing keywords.

---

# 3. GLOBAL RICOZ BRAND SEO

Establish consistent global identity.

Brand:

**Ricoz**

Use the existing official Ricoz brand naming and domain configuration from the project.

Global SEO positioning should communicate the actual Ricoz ecosystem:

* technology
* digital solutions
* business transformation
* products
* services
* solutions
* consulting
* digital capability
* business growth
* technology implementation

Do not invent claims such as:

* market leader
* India's #1
* largest
* award-winning
* guaranteed ROI

unless those claims already exist as verified project content.

---

# 4. PAGE-SPECIFIC TITLES

Every indexable public page must have a unique title.

Examples of the pattern:

Homepage:

`Ricoz — Technology, Digital Products & Business Solutions`

Products:

`Products — Ricoz`

Services:

`Services — Ricoz`

Solutions:

`Solutions — Ricoz`

Resources:

`Resources — Ricoz`

Company:

`About Ricoz — Technology & Business Solutions`

Individual product:

`[Product Name] — Ricoz`

Individual service:

`[Service Name] — Ricoz`

Individual solution:

`[Solution Name] — Ricoz`

Individual resource:

`[Resource Name] — Ricoz`

Case study:

`[Case Study Name] — Ricoz`

Franchise pages:

`Ricoz [City] — Technology & Business Solutions`

Examples:

`Ricoz Mumbai — Technology & Business Solutions`

`Ricoz Delhi — Technology & Business Solutions`

`Ricoz Nagpur — Technology & Business Solutions`

`Ricoz Kalyan — Technology & Business Solutions`

`Ricoz Kolkata — Technology & Business Solutions`

Make titles dynamic from the actual data model.

Do not hard-code individual product/service titles into a global component.

---

# 5. META DESCRIPTIONS

Every indexable page must have a unique, useful description.

Descriptions should explain what the page actually offers.

Prioritize:

1. Search relevance
2. Clear user intent
3. Geographic relevance where appropriate
4. Natural language
5. No keyword stuffing

Product/service/solution descriptions should be generated from the existing content/data model rather than duplicated generic text.

Franchise descriptions should include the relevant city naturally.

Example pattern:

`Ricoz Mumbai brings technology, digital capability and business solutions to businesses across Mumbai and the surrounding region.`

Do not copy this blindly to every city.

Each city must have genuinely differentiated wording based on its existing franchise configuration.

---

# 6. GEOGRAPHICAL SEO / GEO

Build a dedicated geographic SEO layer for the franchise network.

Current franchise locations:

* Mumbai
* Nagpur
* Delhi
* Kalyan
* Kolkata

Each franchise page should establish a clear geographic entity relationship:

**Ricoz → Franchise Network → City → Local Business Capability**

Use geographic signals naturally through:

* page title
* meta description
* H1
* supporting copy
* address/location information only where actual data exists
* city references
* surrounding regional references only where already supported by the franchise data
* internal links
* structured data where valid

Do not invent street addresses.

Do not invent phone numbers.

Do not invent office coordinates.

Do not invent service-area claims.

---

# 7. FRANCHISE GEO ARCHITECTURE

Ensure each franchise has a clean canonical URL.

Use the existing franchise route architecture.

Example:

`/franchise/mumbai`

`/franchise/nagpur`

`/franchise/delhi`

`/franchise/kalyan`

`/franchise/kolkata`

Do not create duplicate city URLs.

Every franchise page should have:

* unique title
* unique meta description
* unique H1
* unique introductory content
* canonical URL
* city-specific Open Graph title
* city-specific Open Graph description
* breadcrumb structured data
* relevant geographic structured data only when supported by actual data

---

# 8. LOCAL SEO SIGNALS

For every franchise configuration, support optional real-world business information:

```ts
location?: {
  city: string;
  state?: string;
  country: string;
  postalCode?: string;
  streetAddress?: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
}
```

All optional fields must remain absent when actual information has not been provided.

Never fabricate them.

When real franchise location information is eventually supplied, the SEO layer should be able to consume it without architectural changes.

---

# 9. GEO FOR AI / GENERATIVE SEARCH

Optimize content so that search engines and AI systems can understand the Ricoz ecosystem without relying solely on keyword matching.

Every major page should clearly answer:

* What is Ricoz?
* What does this page represent?
* What does Ricoz offer?
* Who is it for?
* Where is it available?
* What problem does it solve?
* What related products/services/solutions exist?
* What is the next action?

Use semantic headings and concise explanatory sections.

Prioritize factual, entity-rich language.

Do not create artificial FAQ blocks simply to manipulate search.

Where FAQ content genuinely exists, structure it semantically.

---

# 10. ENTITY RELATIONSHIPS

Strengthen the relationship between:

**Ricoz**

→ Products
→ Services
→ Solutions
→ Resources
→ Case Studies
→ Franchise Network
→ Cities
→ Company
→ Customer Portal

Individual product/service/solution pages should link to relevant related entities where the existing data supports it.

Franchise pages should link to:

* relevant products
* relevant services
* relevant solutions
* other franchise locations
* consultation
* contact
* customer portal where appropriate

Avoid creating meaningless link farms.

---

# 11. STRUCTURED DATA

Implement reusable JSON-LD generation.

Support appropriate schema types such as:

* Organization
* WebSite
* WebPage
* BreadcrumbList
* Service
* Product
* Article
* LocalBusiness only when real location/business data exists
* FAQPage only when actual FAQ content exists

Do not blindly apply every schema type to every page.

For product pages, use Product structured data only when the content actually represents a product in a way suitable for that schema.

For service pages, use Service.

For resource/article pages, use Article where appropriate.

For franchise pages, use LocalBusiness only when the required factual business information is actually available.

---

# 12. ORGANIZATION SCHEMA

Create one canonical Ricoz organization representation.

It should be reusable throughout the platform.

Use only verified project information.

Support fields such as:

* name
* URL
* logo
* description
* sameAs
* contact information when available

Do not create fake social profiles.

Do not create fake award information.

Do not create fake contact details.

---

# 13. BREADCRUMB SEO

Create reusable breadcrumb structured data.

Examples:

Homepage

`Home`

Product:

`Home → Products → [Product]`

Service:

`Home → Services → [Service]`

Solution:

`Home → Solutions → [Solution]`

Resource:

`Home → Resources → [Resource]`

Franchise:

`Home → Franchise Network → Mumbai`

The visual breadcrumb and JSON-LD breadcrumb should remain consistent.

---

# 14. CANONICALIZATION

Every indexable route must have exactly one canonical URL.

Prevent duplicate indexing caused by:

* query parameters
* search filters
* category filters
* pagination if applicable
* alternate route states
* trailing slash inconsistencies
* accidental duplicate routes

Search/filter states should generally not generate thousands of indexable pages.

Canonicalize them appropriately.

---

# 15. ROBOTS / INDEXING STRATEGY

Public informational pages:

`index, follow`

Customer Portal:

`noindex, nofollow`

Portal login:

`noindex, nofollow`

Portal dashboard:

`noindex, nofollow`

Portal enquiries:

`noindex, nofollow`

Portal consultations:

`noindex, nofollow`

Portal products/services:

`noindex, nofollow`

Portal profile:

`noindex, nofollow`

Portal support:

`noindex, nofollow`

Authentication/protected pages must never be exposed as search content.

Do not block useful public franchise pages.

Do not accidentally apply `noindex` globally.

---

# 16. SITEMAP

Create or refine a dynamic sitemap architecture.

Include indexable public routes:

* homepage
* product listing
* product categories
* products
* service listing
* service categories
* services
* solutions
* solution pages
* resources
* resource pages
* case studies
* company pages
* franchise index
* active franchise pages

Exclude:

* portal
* authentication
* private customer pages
* admin
* internal tools
* search states
* non-indexable utility routes

Use the actual registry/data layer wherever possible so new products, services, solutions, resources, and franchises can automatically appear in the sitemap.

---

# 17. ROBOTS.TXT

Create or verify:

`/robots.txt`

Allow public discovery.

Disallow private/internal areas such as:

* `/portal`
* `/admin`
* authentication/private routes

Do not use robots.txt as a replacement for `noindex`.

Both systems should have appropriate responsibilities.

---

# 18. FAVICON SYSTEM

Implement a complete modern favicon package.

Support:

* `favicon.ico`
* 16×16
* 32×32
* 48×48 where useful
* Apple Touch Icon
* 180×180
* Android/PWA icons where applicable
* 192×192
* 512×512
* SVG favicon if supported
* web manifest

Use the actual Ricoz brand mark.

If the project currently only has a text logo and no verified symbol/mark asset, do not invent a new logo.

Instead create the favicon architecture so the official asset can be dropped in cleanly.

Do not use emojis or arbitrary letters as a permanent favicon.

---

# 19. WEB APP MANIFEST

Create/refine:

`manifest.webmanifest`

Include only accurate information:

* Ricoz name
* short name
* description
* start URL
* display mode
* icons
* theme color
* background color

Use Ricoz Red `#C41230` where appropriate within the established brand system.

Do not imply that the website is a full installable application if the current implementation does not support that experience.

---

# 20. SOCIAL SHARING

Implement reusable Open Graph metadata.

Support:

* `og:title`
* `og:description`
* `og:type`
* `og:url`
* `og:image`
* `og:site_name`
* `og:locale`

Also support Twitter/X card metadata.

Use appropriate page-specific imagery.

For product/service/franchise pages, dynamically use the relevant existing image when one is actually available.

Never generate fake social preview images containing fictional people or claims.

---

# 21. SOCIAL PREVIEW FALLBACK

Create a global Ricoz fallback social image.

Visual direction:

* warm off-white background
* Ricoz Red `#C41230`
* Ricoz wordmark
* strong editorial typography
* minimal composition
* no gradients
* no stock photography
* no unnecessary icons
* no fake statistics

Architecture should allow future page-specific social images without changing the SEO implementation.

---

# 22. IMAGE SEO

Audit all important images.

Implement:

* meaningful `alt`
* descriptive filenames where controllable
* lazy loading where appropriate
* width/height dimensions where possible
* appropriate `loading`
* appropriate `decoding`

Do not stuff keywords into alt text.

Decorative images should use empty alt attributes where appropriate.

Director photographs on franchise pages must use actual supplied images when available.

Until those images are supplied, retain the existing intentional placeholder behavior.

---

# 23. HEADINGS & SEMANTIC SEO

Audit every public page for:

* one clear H1
* logical H2/H3 hierarchy
* no skipped hierarchy purely for styling
* meaningful section headings
* semantic HTML
* accessible navigation
* meaningful link text

Do not add hidden keyword content.

Do not create visually hidden SEO paragraphs purely for search engines.

---

# 24. INTERNAL LINKING

Build a coherent internal linking graph.

Examples:

Product → related services

Service → related products

Solution → relevant products/services

Resource → relevant solution/service/product

Franchise → relevant local offerings

Franchise → other franchise locations

Company → franchise network

Consultation → relevant offering

Use existing relationship data wherever available.

Avoid excessive links.

---

# 25. FRANCHISE NETWORK DISCOVERY

The franchise network should be discoverable from the primary Ricoz ecosystem without overwhelming the main navigation.

Ensure:

* Footer → Franchise Network
* Franchise Network → all active locations
* Franchise page → related locations
* City page → Ricoz ecosystem
* Ricoz ecosystem → franchise network

Maintain the distinct franchise visual experience already implemented.

Do not replace the franchise-specific designs with a generic SEO template.

---

# 26. CUSTOMER PORTAL SEO BOUNDARY

The customer portal is an application, not public search content.

Ensure all authenticated/private portal screens are:

* noindex
* nofollow
* excluded from sitemap
* excluded from public structured-data discovery
* excluded from public search navigation where appropriate

Do not expose customer information through metadata.

Do not expose enquiry records, consultation records, profiles, support information, or private application state in page source unnecessarily.

---

# 27. PERFORMANCE + SEO

Audit the implementation for:

* render-blocking resources
* unnecessary JavaScript
* image sizes
* layout shifts
* font loading
* unused metadata libraries
* duplicate scripts
* duplicate structured data
* excessive DOM elements

Do not sacrifice the existing visual quality for arbitrary SEO optimization.

The goal is:

**Fast + semantic + accessible + indexable + maintainable.**

---

# 28. MOBILE SEO

Verify every SEO-critical route on:

* desktop
* tablet
* mobile

Especially:

* franchise pages
* product detail pages
* service pages
* solution pages
* resource pages
* consultation
* contact

Ensure H1s, metadata-driven content, breadcrumbs and internal links remain meaningful on mobile.

---

# 29. SEARCH ENGINE DISCOVERY

Prepare the application for real deployment.

Verify:

* sitemap generation
* robots.txt
* canonical URLs
* metadata
* structured data
* index/noindex
* social metadata
* favicon
* manifest
* 404 behavior
* redirects
* trailing slash behavior
* client-side routing behavior

Do not claim that the site is indexed by search engines unless external verification actually exists.

This implementation only prepares the platform correctly for crawling and indexing.

---

# 30. 404 + ERROR SEO

Create a proper 404 experience.

Requirements:

* HTTP 404 behavior where supported by deployment architecture
* no accidental canonical to homepage
* noindex where appropriate
* clear recovery navigation
* Products
* Services
* Solutions
* Resources
* Franchise Network
* Contact

Do not create a generic broken application screen.

---

# 31. GEO CONTENT QUALITY

For each franchise city, ensure the content answers local intent naturally.

For example, the page should establish:

**Who:** Ricoz

**Where:** Mumbai / Nagpur / Delhi / Kalyan / Kolkata

**What:** technology, digital products, services and business solutions

**For whom:** the actual target businesses/organisations described in that franchise configuration

**Why:** the actual local positioning already defined for that franchise

Do not create near-identical city pages with only the city name changed.

Preserve the distinct personalities already designed:

* Mumbai — Urban / Executive / Ambitious
* Nagpur — Growth / Connection / Opportunity
* Delhi — Strategic / Institutional / Authoritative
* Kalyan — Human / Local / Relationship-led
* Kolkata — Cultural / Creative / Established / Intelligent

---

# 32. SEO DATA MODEL

Where appropriate, extend existing data types rather than hard-coding SEO inside components.

For example:

```ts
interface SeoMetadata {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  image?: string;
  keywords?: string[];
  structuredData?: unknown;
}
```

Do not blindly copy this interface if an existing SEO model already exists.

Use the project's established architecture.

Products, services, solutions, resources and franchises should be able to provide their own SEO metadata.

---

# 33. ENVIRONMENT / DOMAIN HANDLING

Do not hard-code localhost URLs into canonical metadata.

Create a central site URL configuration based on the existing deployment/environment architecture.

Development should not accidentally produce production canonical URLs unless intentionally configured.

Production should generate consistent absolute canonical URLs.

Do not invent a production domain if the project configuration already defines it elsewhere.

---

# 34. SEO QA PAGE

Create a development-only SEO inspection capability if useful.

It should allow developers to verify:

* title
* description
* canonical
* robots
* OG metadata
* Twitter metadata
* structured data
* route classification
* indexability

Do not expose this as a public production page.

---

# 35. FINAL SEO AUDIT

After implementation, inspect every route.

Create an internal checklist covering:

### Public

* Homepage
* Products
* Product categories
* Product detail
* Services
* Service categories
* Service detail
* Solutions
* Solution detail
* Resources
* Resource detail
* Case studies
* About
* Leadership
* Careers
* Contact
* Consultation
* Franchise network
* Mumbai
* Nagpur
* Delhi
* Kalyan
* Kolkata

### Private

* Portal
* Portal login
* Dashboard
* Enquiries
* Consultations
* Products
* Services
* Profile
* Support
* Admin

For every route verify:

**SEO title → description → canonical → robots → OG → Twitter → structured data → indexability → internal links**

---

# 36. DO NOT BREAK EXISTING PLATFORM

This is critical.

Do not redesign the existing Ricoz website.

Do not change:

* existing product architecture
* existing service architecture
* existing franchise visual personalities
* customer portal UX
* public navigation
* routes
* data relationships
* responsive behavior
* established brand system

unless required to fix an SEO/technical issue.

Preserve the existing:

**Ricoz Red `#C41230`**

and the established premium editorial visual language.

---

# 37. FINAL ACCEPTANCE CRITERIA

The implementation is complete only when:

* Every public route has intentional SEO metadata.
* Every private route is correctly excluded from indexing.
* Every franchise page has city-specific SEO.
* Franchise locations are represented consistently.
* Canonical URLs are correct.
* Sitemap is dynamic and excludes private routes.
* robots.txt is correct.
* Structured data is reusable and factual.
* Open Graph metadata works.
* Twitter/X metadata works.
* Favicon package is complete.
* Apple Touch Icon exists.
* Web manifest exists where appropriate.
* Images have appropriate alt handling.
* Breadcrumbs are semantically implemented.
* Internal linking supports the Ricoz ecosystem.
* No fake business/location information has been introduced.
* No fake reviews, ratings, awards or claims have been introduced.
* No duplicate SEO systems exist.
* TypeScript remains clean.
* Existing public pages still work.
* Existing franchise pages still work.
* Customer Portal still works.
* Admin routes remain unaffected.
* Mobile and desktop layouts remain intact.

At the end, provide a concise implementation summary listing:

1. SEO architecture created/updated
2. Routes covered
3. GEO/franchise changes
4. Structured data implemented
5. Sitemap/robots status
6. Favicon/manifest assets
7. Social metadata
8. Any items intentionally left pending because actual business assets/data are still required

Do not claim external search-engine indexing or ranking has occurred.
