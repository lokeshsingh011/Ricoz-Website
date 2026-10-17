# RICOZ — FOUNDATION AUDIT, ARCHITECTURE HARDENING & SEO READINESS V1.1

The Ricoz digital ecosystem foundation has already been implemented.

Do NOT rebuild the existing interface from scratch.

Do NOT change the established Ricoz visual identity unnecessarily.

Do NOT introduce another visual direction.

This task is a refinement, audit and architecture-hardening pass over the existing implementation.

Current foundation includes:

* Ricoz Red #C41230
* Instrument Serif display typography
* Inter UI/body typography
* Warm off-white background
* Near-black text
* Thin editorial borders
* 8px spacing system
* 4px radius
* Sticky desktop navigation
* Mobile full-screen navigation
* Dark multi-column footer
* Product cards
* Service cards
* Resource cards
* Case-study cards
* Product listing
* Service listing
* Product detail template
* Service detail template
* Contact experience
* Consultation wizard
* React Router
* Structured sample data
* SEO metadata fields
* Related entity relationships

Current prototype data:

10 products
7 services
5 resources
3 case studies

The final Ricoz ecosystem is expected to scale to approximately:

125 products
50 services

The objective of this task is to make the current architecture robust enough to support that scale.

---

## 01. DO NOT REDESIGN

Preserve the existing:

* Brand colors
* Typography
* Layout language
* Header
* Footer
* Card language
* Button system
* Spacing system
* Radius system
* Overall visual hierarchy

Only make visual changes where necessary to correct inconsistency, accessibility, responsiveness or usability issues.

---

# 02. AUDIT THE ROUTING ARCHITECTURE

Review the existing React Router implementation.

Ensure the application supports a clean scalable route architecture.

Products:

/products/
/products/:category/
/products/:productSlug/

Services:

/services/
/services/:category/
/services/:serviceSlug/

Resources:

/resources/
/resources/:category/
/resources/:resourceSlug/

Case studies:

/resources/case-studies/
/resources/case-studies/:caseStudySlug/

Also maintain:

/contact/
/consultation/

Do not create duplicate routes for the same content.

Avoid unnecessary query parameters for primary indexable pages.

---

# 03. DATA-DRIVEN ENTITY ARCHITECTURE

Confirm that Product Detail Pages are generated from structured product data.

The architecture should conceptually work as:

Product Data
→ Product Template
→ Product URL

Do not create separate page components for individual products.

Do the same for services:

Service Data
→ Service Template
→ Service URL

The current 10 products and 7 services are prototype records only.

The architecture must be capable of receiving:

125+ products

and

50+ services

without changing the component architecture.

---

# 04. PRODUCT DATA MODEL

Ensure each product can contain:

id
name
slug
category
shortDescription
description
heroStatement
capabilities
benefits
features
useCases
relatedProducts
relatedServices
faqs
status

SEO fields:

seoTitle
metaDescription
canonicalUrl
ogTitle
ogDescription
ogImage
primaryTopic
keywords where appropriate
imageAlt

Do not force identical SEO content across products.

---

# 05. SERVICE DATA MODEL

Ensure each service can contain:

id
name
slug
category
shortDescription
description
heroStatement
problemsSolved
capabilities
process
outcomes
relatedProducts
relatedServices
faqs
status

SEO fields:

seoTitle
metaDescription
canonicalUrl
ogTitle
ogDescription
ogImage
primaryTopic
imageAlt

Each service should be capable of having unique search-oriented metadata.

---

# 06. UNIQUE SEO METADATA

Audit the existing pages.

Ensure every indexable page can have unique:

<title>

meta description

canonical URL

Open Graph title

Open Graph description

Open Graph image

Do not use generic repeated metadata such as:

"Ricoz Products"

for every product.

Product pages should be capable of generating product-specific titles.

Service pages should generate service-specific titles.

Resource pages should generate resource-specific titles.

---

# 07. HEADING HIERARCHY

Audit every existing page.

Ensure:

* One primary H1 per page
* H2 for major sections
* H3 for subsections where required
* No skipped heading hierarchy without reason

Do not use heading elements merely for visual styling.

The semantic hierarchy should correspond to the actual content hierarchy.

---

# 08. SEMANTIC HTML

Where appropriate, use semantic elements such as:

<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>

Avoid using generic div containers for major semantic regions when a meaningful semantic element exists.

Buttons must behave as buttons.

Links must behave as links.

Forms must use proper labels.

---

# 09. BREADCRUMB ARCHITECTURE

Ensure product pages support:

Home
/
Products
/
Category
/
Product

Service pages:

Home
/
Services
/
Category
/
Service

Resource pages:

Home
/
Resources
/
Category
/
Resource

Case studies:

Home
/
Resources
/
Case Studies
/
Case Study

Breadcrumbs must be:

* Visible
* Accessible
* Responsive
* Crawlable

Prepare the architecture so BreadcrumbList structured data can later be generated.

---

# 10. INTERNAL LINKING

Audit and strengthen contextual internal linking.

Product pages should be capable of linking to:

Related Products

Related Services

Relevant Resources

Relevant Case Studies

Service pages should be capable of linking to:

Related Products

Related Services

Relevant Resources

Relevant Case Studies

Resources should be able to link naturally to relevant products and services.

Avoid artificial keyword-heavy internal links.

Use descriptive anchor text.

---

# 11. PRODUCT DISCOVERY

Review the Products listing page.

Maintain:

* Search
* Category filters
* Product cards
* Clear pagination/progressive loading architecture
* Empty state
* No-result state

The architecture must remain usable when the catalogue grows from:

10 products

to

125+ products.

Do not visually display all 125 products at once.

Create an architecture that can support pagination or progressive loading while preserving crawlable category and product URLs.

---

# 12. SERVICE DISCOVERY

Review the Services listing page.

Maintain:

* Search
* Category filters
* Service cards
* Clear browsing structure
* Empty state
* No-result state

The architecture must remain usable when the catalogue grows from:

7 services

to

50+ services.

---

# 13. FILTER SEO SAFETY

Search and filtering are primarily user-experience functions.

Do not allow every possible filter combination to become an indexable duplicate URL.

The architecture should distinguish between:

Indexable category pages

and

User-generated filtering/search states.

Primary indexable content should remain available through clean category and entity URLs.

---

# 14. CANONICALIZATION

Every indexable detail page should have a canonical URL concept.

Examples:

/products/ricoanalytics

/services/digital-transformation

/resources/example-resource

The canonical should represent the preferred URL for the content.

Avoid duplicate canonical variations caused by:

* Query parameters
* Filter states
* Tracking parameters
* Alternate navigation paths

---

# 15. ROBOTS & SITEMAP READINESS

Prepare the application architecture for:

robots.txt

and

sitemap.xml

The sitemap architecture should eventually include indexable:

* Product pages
* Service pages
* Resource pages
* Case studies
* Core pages

Do not include:

* Search results
* Filter combinations
* Temporary states
* Internal application routes
* Duplicate URLs

The current prototype does not need to generate a production sitemap dynamically yet, but the data architecture must make this possible.

---

# 16. STRUCTURED DATA READINESS

Prepare reusable structured-data generators for appropriate page types.

Potential types:

Organization
WebSite
BreadcrumbList
Product
Service
Article
FAQPage

Do not fabricate information.

Only output schema information that actually exists in the page data.

Keep structured data separate from visual components so it can later be generated programmatically.

---

# 17. IMAGE ARCHITECTURE

Review image usage.

Every meaningful image should support:

* Descriptive alt text
* Appropriate dimensions
* Responsive rendering
* Lazy loading where appropriate

Decorative imagery should not receive unnecessary SEO-focused alt text.

Avoid enormous image assets when a smaller asset is sufficient.

---

# 18. MOBILE SEO & RESPONSIVENESS

Audit all existing pages at mobile widths.

Check:

* Navigation
* Hero
* Typography
* Cards
* Product grids
* Service grids
* Forms
* Consultation wizard
* Footer
* Breadcrumbs

No horizontal overflow.

No unreadable text.

No excessively large empty spaces.

No interaction requiring hover.

---

# 19. ACCESSIBILITY AUDIT

Audit:

* Keyboard navigation
* Focus states
* Form labels
* Button labels
* Link labels
* Contrast
* Heading hierarchy
* Dialog behavior
* Mobile menu
* Accordion behavior

Ensure important interactions remain usable without relying solely on color.

---

# 20. PERFORMANCE-AWARE ARCHITECTURE

Review the existing components for unnecessary complexity.

Prefer:

* Reusable components
* Lightweight assets
* Lazy loading where appropriate
* Efficient rendering
* Minimal animation
* Optimized images

Avoid adding large libraries unless there is a clear requirement.

The design should remain visually premium without becoming technically heavy.

---

# 21. CONTENT DUPLICATION PREVENTION

Because the platform will eventually contain 125 products and 50 services, prevent template-generated duplication.

Templates should provide structured areas for genuinely unique:

* Product positioning
* Product description
* Capabilities
* Use cases
* Benefits

and:

* Service positioning
* Problems solved
* Process
* Outcomes
* Service-specific content

Do not generate artificial variations merely to make pages appear different.

---

# 22. EMPTY & ERROR STATES

Create polished states for:

* Product not found
* Service not found
* Resource not found
* Search returns no results
* Invalid category
* Form validation error
* Consultation scheduling error
* Network failure

These states must maintain the Ricoz premium design language.

---

# 23. FORM ACCESSIBILITY & UX

Review the Contact and Consultation experiences.

Ensure:

* Every field has a visible or programmatically associated label
* Validation messages are clear
* Errors are associated with the relevant field
* Required fields are identifiable
* Keyboard navigation works
* Submission states are clear
* Success state is meaningful

Do not add unnecessary form fields.

---

# 24. CONSULTATION FLOW

Preserve the existing 5-step consultation wizard.

Ensure the flow clearly communicates:

Step 1
Purpose

Step 2
Date

Step 3
Time

Step 4
Details

Step 5
Confirmation

Maintain the premium minimal interaction style.

Do not add payment or ecommerce functionality.

---

# 25. SEARCH EXPERIENCE

Review the global search architecture.

Search should eventually support:

Products
Services
Resources
Case Studies

Design the experience so results can be grouped by content type.

Example:

PRODUCTS
Result

SERVICES
Result

RESOURCES
Result

CASE STUDIES
Result

Search results themselves should not automatically become indexable landing pages.

---

# 26. SEO CONTENT MODEL

Ensure the architecture supports content written for users first.

SEO should improve:

Discoverability
Understanding
Navigation
Relevance

Do not add:

Keyword stuffing
Hidden text
Artificial SEO paragraphs
Repeated headings
Duplicate descriptions
Unnatural keyword repetition

---

# 27. TECHNICAL SEPARATION

Keep the following concerns separated:

UI components
Data
Routing
SEO metadata
Structured data
Business logic

Do not embed large SEO rules directly inside visual components.

Create reusable utilities or configuration structures where appropriate.

---

# 28. ARCHITECTURE DOCUMENTATION

Add a small internal developer-facing architecture reference inside the project documenting:

* Route structure
* Product data model
* Service data model
* SEO fields
* Component structure
* Template structure
* Internal linking model
* Future catalogue scaling approach

Keep this documentation concise.

---

# 29. DO NOT EXPAND THE SCOPE YET

Do not create:

125 product pages

50 service pages

Large admin systems

Customer dashboards

Complex CRM functionality

Payment systems

Full backend integrations

These belong to later phases.

This phase is specifically:

FOUNDATION AUDIT
+
ARCHITECTURE HARDENING
+
SEO READINESS
+
ACCESSIBILITY
+
RESPONSIVENESS
+
PERFORMANCE AWARENESS

---

# 30. FINAL ACCEPTANCE CRITERIA

The Ricoz foundation should finish this pass with:

✓ Reusable Product architecture

✓ Reusable Service architecture

✓ Scalable routing

✓ Unique metadata capability

✓ Canonical URL capability

✓ Breadcrumb architecture

✓ Internal linking architecture

✓ Structured-data readiness

✓ Sitemap readiness

✓ Robots readiness

✓ Semantic HTML

✓ Accessible components

✓ Responsive layouts

✓ Search/filter architecture

✓ Duplicate-content prevention

✓ Error/empty states

✓ Performance-conscious components

✓ Clean separation of UI, data, routing and SEO

Most importantly:

Do not sacrifice the existing premium Ricoz visual identity while making these improvements.

The result should feel like the same Ricoz product, only more technically mature, scalable and SEO-ready.
