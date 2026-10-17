# RICOZ — DIGITAL ECOSYSTEM FOUNDATION & ARCHITECTURE

Build the foundational UI system and information architecture for the Ricoz digital ecosystem.

This is NOT a request to build the entire Ricoz website or all product/service pages yet.

The objective of this phase is to establish a premium, scalable, responsive, reusable, SEO-ready design and application foundation that future Ricoz modules can build upon.

Do not reference, imitate, or mention any other company, platform, website, product, or design system.

---

## 01. CORE PRODUCT VISION

Ricoz is a large digital business ecosystem consisting of:

* Approximately 125 products
* Approximately 50 professional services
* Solutions
* Resources
* Case studies
* Customer engagement
* Consultation
* Business enquiries
* Future customer and operational experiences

Products and services are currently primarily discovery and engagement experiences.

The primary conversion actions are:

CONTACT US

and

SCHEDULE A CONSULTATION

Do NOT create:

* Ecommerce checkout
* Shopping cart
* Product purchasing
* Payment checkout for products
* Fake transactional functionality

The architecture must nevertheless be capable of expanding into richer ecosystem functionality later.

---

# 02. VISUAL FOUNDATION

Create a premium, minimal, sophisticated Ricoz design system.

## Brand Color

Use the established Ricoz Red as the primary brand color.

Ricoz Red should be used selectively for:

* Primary CTAs
* Active states
* Important links
* Selected navigation states
* Key accents
* Important indicators

Do not flood the interface with red.

Use a refined neutral palette around it:

* Warm white / off-white backgrounds
* Near-black primary text
* Soft gray secondary text
* Very light neutral borders
* Subtle neutral surfaces

The overall visual impression should be:

PREMIUM
MINIMAL
CONFIDENT
MODERN
EDITORIAL
ENTERPRISE-READY

Avoid:

* Neon colors
* Loud gradients
* Glassmorphism
* Excessive shadows
* Generic SaaS styling
* Excessive rounded containers
* Decorative clutter
* Unnecessary animation

---

# 03. TYPOGRAPHY

Use:

Display typography:
Instrument Serif

Interface and body typography:
Inter

Typography hierarchy should include:

* Display heading
* H1
* H2
* H3
* H4
* Body large
* Body regular
* Body small
* Eyebrow
* Caption
* Metadata
* Button text
* Navigation text

Use large display typography selectively.

Maintain excellent readability and generous line spacing.

Typography should create the premium feeling more than decoration does.

---

# 04. DESIGN TOKENS

Establish reusable design tokens for:

* Colors
* Typography
* Font sizes
* Font weights
* Line heights
* Spacing
* Border radius
* Borders
* Shadows
* Containers
* Breakpoints
* Grid
* Motion

Use a consistent spacing system.

Prefer an 8px-based spacing scale.

Create a constrained content width suitable for premium editorial layouts.

---

# 05. RESPONSIVE FOUNDATION

Design intentionally for:

Desktop
Tablet
Mobile

Do not simply scale the desktop layout down.

Define responsive behavior for:

* Navigation
* Grid systems
* Cards
* Typography
* Forms
* Filters
* Tables
* Hero sections
* Footer
* Content layouts

Mobile must remain premium and easy to navigate.

Use mobile-first thinking when designing components.

---

# 06. GLOBAL NAVIGATION

Create the global Ricoz navigation.

Structure:

RICOZ

Products
Services
Solutions
Resources
Company

Right-side actions:

Search

Contact Us

Primary CTA:

Schedule a Consultation

The header should be clean, spacious and premium.

Create both desktop and mobile navigation behavior.

Mobile navigation should use a polished full-screen or structured menu experience.

---

# 07. GLOBAL FOOTER

Create a reusable Ricoz footer.

Columns:

Products
Services
Solutions
Resources
Company

Additional:

Contact
Privacy
Terms

Include a strong but minimal Ricoz closing statement.

The footer should be designed as a reusable global component.

---

# 08. CORE COMPONENT SYSTEM

Build reusable components before creating large pages.

Components should include:

* Header
* Mobile navigation
* Footer
* Button
* Secondary button
* Text link
* Breadcrumb
* Badge
* Product card
* Service card
* Category card
* Case-study card
* Resource card
* Feature block
* Metric block
* Testimonial
* Search field
* Filter control
* Tabs
* Accordion
* Form field
* Select
* Modal
* Alert
* Pagination
* CTA section

Components should have:

Default
Hover
Active
Focus
Disabled
Loading

states where appropriate.

---

# 09. INFORMATION ARCHITECTURE

Establish the following top-level architecture:

/

/products/

/services/

/solutions/

/resources/

/company/

/contact/

/consultation/

Product architecture:

/products/
/products/[category]/
/products/[product-slug]/

Service architecture:

/services/
/services/[category]/
/services/[service-slug]/

Resource architecture:

/resources/
/resources/[category]/
/resources/[article-slug]/

Case study architecture:

/resources/case-studies/
/resources/case-studies/[case-study-slug]/

Use clean, readable, descriptive URL structures.

Do not use unnecessary IDs or query parameters for primary indexable pages.

---

# 10. PRODUCT TEMPLATE ARCHITECTURE

Create a reusable Product Detail Page architecture.

This is a TEMPLATE, not 125 separate pages.

Every product should be capable of receiving structured data such as:

* Product name
* Slug
* Category
* Short description
* Long description
* Hero statement
* Key capabilities
* Benefits
* Features
* Use cases
* Related products
* Related services
* FAQs
* SEO title
* SEO description
* Canonical URL
* Social image
* Image alt text

Primary CTAs:

Contact Us

Schedule a Consultation

Product pages must not look like ecommerce pages.

---

# 11. SERVICE TEMPLATE ARCHITECTURE

Create a reusable Service Detail Page architecture.

Every service should support structured content including:

* Service name
* Slug
* Category
* Positioning statement
* Overview
* Problems addressed
* Capabilities
* Process
* Outcomes
* Related products
* Related services
* FAQs
* SEO title
* SEO description
* Canonical URL
* Social image
* Image alt text

Primary CTAs:

Contact Us

Schedule a Consultation

---

# 12. SEO-FIRST PAGE STRUCTURE

All future pages must be designed with semantic, search-friendly content architecture.

Establish:

* One primary H1
* Logical H2 hierarchy
* H3 subsections where appropriate
* Semantic HTML
* Descriptive anchor text
* Breadcrumb structure
* Crawlable navigation
* Internal linking
* Descriptive image alt text
* Search-friendly page titles
* Search-friendly meta descriptions
* Canonical URL support
* Open Graph metadata support
* Structured-data-ready content structure

Do not create visually styled text that behaves semantically like meaningless divs.

The visual design must remain compatible with proper semantic HTML implementation.

---

# 13. SEO METADATA MODEL

Design the content architecture so every indexable Product, Service, Resource and Case Study page can independently define:

SEO Title

Meta Description

Canonical URL

Robots Directive

Open Graph Title

Open Graph Description

Social Image

Primary Keyword / Topic

Breadcrumb Information

Do not hard-code identical metadata across every page.

The architecture must support unique metadata per entity.

---

# 14. STRUCTURED DATA READINESS

Create page structures that can later support appropriate structured data.

Potential schemas may include:

* Organization
* WebSite
* BreadcrumbList
* Product
* Service
* Article
* FAQPage
* LocalBusiness where genuinely applicable

Do not fabricate structured-data claims.

The UI architecture should simply make the required content available for proper implementation later.

---

# 15. INTERNAL LINKING ARCHITECTURE

Build reusable mechanisms for contextual internal linking.

Examples:

Product page
→ Related products

Product page
→ Relevant services

Service page
→ Relevant products

Service page
→ Related services

Resource
→ Relevant product

Resource
→ Relevant service

Case study
→ Products involved

Case study
→ Services involved

This should be part of the reusable template architecture.

---

# 16. BREADCRUMB SYSTEM

Create a reusable breadcrumb component.

Example:

Home
/
Products
/
Category
/
Product

and:

Home
/
Services
/
Category
/
Service

Breadcrumbs should be:

* Visually subtle
* Accessible
* Crawlable
* Consistent
* Responsive

---

# 17. SEARCH ARCHITECTURE

Create a global search foundation.

Search should eventually be capable of discovering:

* Products
* Services
* Solutions
* Resources
* Case studies

Design the search experience but do not attempt to implement a complex search backend in this phase.

Create:

* Search trigger
* Search overlay/page
* Search input
* Recent searches
* Suggested results
* Result groups
* Empty state

---

# 18. PRODUCT & SERVICE DISCOVERY

Create reusable discovery architecture.

Products:

Search
→ Categories
→ Filters
→ Product cards
→ Product detail

Services:

Search
→ Categories
→ Filters
→ Service cards
→ Service detail

The design should comfortably accommodate:

125+ products

and

50+ services

without feeling crowded.

---

# 19. PERFORMANCE-FIRST UI FOUNDATION

Design components with future performance in mind.

Avoid unnecessary:

* Large decorative assets
* Autoplay video
* Heavy animation
* Excessive dependencies
* Oversized imagery

Use layouts that can later support:

* Responsive images
* Lazy loading
* Optimized assets
* Progressive rendering

Performance is part of the product quality.

---

# 20. ACCESSIBILITY FOUNDATION

Build accessible UI patterns.

Include:

* Sufficient contrast
* Keyboard focus states
* Accessible buttons
* Accessible form labels
* Logical heading hierarchy
* Semantic navigation
* Accessible accordions
* Accessible dialogs
* Touch-friendly controls
* Reduced-motion consideration

Accessibility should be treated as part of the design system.

---

# 21. CONTENT MODEL

Create realistic sample content for:

* 8–12 products
* 5–8 services
* 3–5 resources
* 2–3 case studies

These are only prototype records.

The final system must be capable of scaling to the complete catalogue without changing the page architecture.

---

# 22. HOMEPAGE FOUNDATION

Create the initial Ricoz homepage using the established system.

Structure:

Hero

Ecosystem introduction

Featured Products

Featured Services

Solutions / Capabilities

Why Ricoz

Selected Case Studies

Resources / Insights

Consultation CTA

Footer

Keep the homepage minimal.

Do not try to explain every Ricoz capability on the homepage.

Its primary purpose is to guide users toward discovery.

---

# 23. SEO-FRIENDLY CONTENT PHILOSOPHY

Do not create content purely for search engines.

Prioritize:

* Search intent
* Customer usefulness
* Clear information
* Original content
* Strong topical relevance
* Natural internal linking
* Helpful headings
* Descriptive page copy

Avoid:

* Keyword stuffing
* Repetitive copy
* Artificial SEO blocks
* Hidden text
* Duplicate page content
* Generic filler paragraphs

The design should support high-quality content rather than visually hiding large amounts of SEO text.

---

# 24. SCALABLE TEMPLATE PRINCIPLE

IMPORTANT:

Do NOT manually create 125 product pages.

Do NOT manually create 50 service pages.

Create:

ONE scalable Product Detail Template

ONE scalable Service Detail Template

ONE scalable Product Listing Template

ONE scalable Service Listing Template

The final application should conceptually render pages from structured content/data.

For example:

Product Data
→ Product Template
→ Product Page

Service Data
→ Service Template
→ Service Page

---

# 25. PROTOTYPE ARCHITECTURE

Organize the prototype into reusable layers:

FOUNDATION

Design tokens
Typography
Colors
Spacing
Grid

COMPONENTS

Navigation
Buttons
Cards
Forms
Filters
CTAs

TEMPLATES

Product
Service
Resource
Case Study
Contact
Consultation

PAGES

Homepage
Products
Services
Resources
Company
Contact

Do not create unnecessary duplicate components.

---

# 26. QUALITY BAR

The final foundation should feel:

Premium
Minimal
Editorial
Modern
Confident
Scalable
Trustworthy
Enterprise-ready

It should look like a mature digital ecosystem rather than an early startup landing page.

Whitespace, typography, grid discipline and content hierarchy should do most of the visual work.

---

# 27. BUILD ORDER

Build in this exact sequence:

STEP 1
Design tokens

STEP 2
Typography system

STEP 3
Grid and responsive system

STEP 4
Global header

STEP 5
Global footer

STEP 6
Core components

STEP 7
Product card + Product listing architecture

STEP 8
Product detail template

STEP 9
Service card + Service listing architecture

STEP 10
Service detail template

STEP 11
Resource and case-study templates

STEP 12
Homepage

STEP 13
Contact experience

STEP 14
Consultation experience

Do not attempt to build every module simultaneously.

The objective of this phase is to establish a strong foundation that subsequent Ricoz UI work can consistently extend.
