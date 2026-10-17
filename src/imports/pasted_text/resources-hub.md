# FLOW 05 — RESOURCES & KNOWLEDGE HUB

Implement **Flow 05 — Resources & Knowledge Hub** for the Ricoz website.

Do NOT rebuild or regress existing functionality.

Preserve the existing:

* Ricoz design system
* Ricoz Red `#C41230`
* Instrument Serif + Inter typography
* Warm off-white background
* Near-black text
* Editorial card language
* 4px radius
* 8px spacing system
* Global Navigation
* Global Search
* 123-product catalogue
* 16 product categories
* Services ecosystem
* Solutions ecosystem
* Contact flow
* Consultation flow
* Existing SEO architecture
* Existing React Router architecture

The purpose of this flow is to create a **structured Ricoz knowledge ecosystem** that helps visitors learn, evaluate capabilities, understand business problems, and eventually move toward Products, Services, Solutions or Consultation.

---

# 1. RESOURCES LANDING PAGE

Create or upgrade:

`/resources`

The page should feel like a premium editorial knowledge hub rather than a conventional blog.

### Hero

Eyebrow:

`RESOURCES`

Headline:

`Ideas, insights and knowledge for building what comes next.`

Supporting copy should explain that Ricoz resources cover technology, business operations, growth, digital transformation, security, AI, data and related business challenges.

Primary CTA:

`Explore Resources`

Secondary CTA:

`Talk to Ricoz`

---

# 2. RESOURCE CONTENT TYPES

Create a clear content taxonomy.

At minimum support:

### Insights

Thought leadership, perspectives and strategic ideas.

### Guides

Practical long-form educational resources.

### Articles

Focused educational or explanatory content.

### Case Studies

Real-world examples and outcomes.

### FAQs

Focused answers to recurring business and technology questions.

### Knowledge

Evergreen educational/reference content.

Do NOT create separate implementations for every content type if the underlying architecture can support a reusable content model.

---

# 3. RESOURCE DATA MODEL

Create or extend the resource data architecture.

Use the project's existing TypeScript conventions.

The model should support fields such as:

```text
id
slug
title
type
category
excerpt
content
author
publishedAt
updatedAt
readingTime
topics
tags
featured
coverImage
relatedProducts
relatedServices
relatedSolutions
relatedResources
seoTitle
seoDescription
```

Do not duplicate Product, Service or Solution data.

Use references such as:

```text
productSlugs
serviceSlugs
solutionSlugs
```

where appropriate.

---

# 4. RESOURCE LISTING

The main Resources page should provide:

### Featured Resource

Large editorial feature.

### Latest

Recently published resources.

### Explore by Type

Insights / Guides / Articles / Case Studies / FAQs / Knowledge.

### Explore by Topic

Examples:

* AI
* Business Operations
* Data & Analytics
* Cybersecurity
* Customer Experience
* Finance
* People & HR
* Automation
* Digital Commerce
* Technology
* Productivity
* Growth

Topics should be data-driven rather than hardcoded individually into components.

---

# 5. FILTERING

Users should be able to filter resources by:

* Content type
* Topic/category

Filtering should happen without a full-page reload.

Use the existing design language for filter controls.

On mobile, ensure filtering remains easy to use and does not create excessive UI density.

---

# 6. RESOURCE SEARCH

The existing global search must recognize Resources.

Ensure the resource dataset is included in the existing search infrastructure.

Search should consider:

* title
* excerpt
* category
* topics
* tags
* content
* related keywords

Do not create a second search engine.

Reuse the existing Global Search architecture.

---

# 7. RESOURCE DETAIL TEMPLATE

Create a reusable route:

```text
/resources/:slug
```

The detail page should include:

### Breadcrumb

Resources → Category → Resource

### Editorial Header

* Content type
* Title
* Description/excerpt
* Author
* Published date
* Updated date where available
* Reading time

### Main Content

Use a highly readable editorial layout.

Do not create unnecessarily narrow or excessively wide text columns.

### Content Navigation

For longer resources, provide an optional table of contents.

### Related Ecosystem

Where relevant show:

**Related Products**

**Related Services**

**Related Solutions**

Each must link to the existing route.

---

# 8. CASE STUDIES

Preserve the existing case-study architecture:

```text
/resources/case-studies
/resources/case-studies/:slug
```

Improve it so Case Studies feel like a first-class resource category.

Each case study should support:

* Client/organization label where appropriate
* Industry
* Challenge
* Approach
* Capabilities involved
* Products involved
* Services involved
* Outcomes
* Key metrics where legitimately available
* Related solutions
* CTA

Do not invent fake quantitative claims.

If actual metrics are unavailable, use qualitative outcomes instead.

---

# 9. RESOURCE → PRODUCT CONNECTION

Resources should naturally connect visitors to the 123-product ecosystem.

For example, a resource may contain:

`Related Products`

with ProductCards using the existing product data.

Do NOT create duplicate product descriptions.

Product cards must link to:

```text
/products/:slug
```

This creates the discovery path:

**Resource → Product**

---

# 10. RESOURCE → SERVICE CONNECTION

Similarly:

```text
Resource → Service
```

Use the existing ServiceCard/component wherever possible.

Link to existing service detail routes.

---

# 11. RESOURCE → SOLUTION CONNECTION

Support:

```text
Resource → Solution
```

This is particularly important for strategic content.

Example:

A resource about improving customer operations can recommend a relevant Solution rather than forcing the visitor directly toward a product.

---

# 12. RELATED CONTENT

Every resource detail page should end with a contextual discovery section.

Heading:

`Continue exploring`

Show relevant resources based on:

1. Related topic
2. Same content type
3. Related products
4. Related services
5. Related solutions

Do not simply display random resources.

Use deterministic metadata relationships.

---

# 13. RESOURCE CATEGORY PAGES

Support category/type routes where appropriate.

Examples:

```text
/resources/insights
/resources/guides
/resources/articles
/resources/case-studies
/resources/faqs
/resources/knowledge
```

If the existing architecture favors dynamic routes, use:

```text
/resources/type/:type
```

instead.

Choose the architecture that best fits the existing routing system.

Do not create unnecessary duplicate route implementations.

---

# 14. RESOURCE URL ARCHITECTURE

Resource URLs must be:

* readable
* descriptive
* stable
* SEO-friendly

Examples:

```text
/resources/insights/future-of-business-automation
/resources/guides/business-process-automation
/resources/articles/understanding-data-intelligence
/resources/case-studies/example-transformation
```

Avoid IDs in canonical URLs.

Avoid unnecessary query parameters.

---

# 15. SEO

Every indexable resource must support:

* unique title
* unique meta description
* canonical URL
* Open Graph metadata
* semantic heading hierarchy
* structured breadcrumbs

Where appropriate implement:

### Article

For articles and editorial content.

### FAQPage

Only where the page genuinely contains FAQ content.

### BreadcrumbList

For resource hierarchy.

### Organization/author information

Where supported by the existing architecture.

Do NOT add structured data merely for the sake of adding schemas.

---

# 16. RESOURCE INDEXING CONTROL

The following should generally be indexable:

* Resources landing page
* Resource type pages
* Individual resources
* Case studies
* Evergreen knowledge content

The following should NOT create unnecessary indexable duplicates:

* client-side filter states
* temporary search states
* UI-only sorting states
* query-string filter combinations

Use canonical URLs appropriately.

---

# 17. CONTENT QUALITY

The initial resource dataset must feel realistic and useful.

Do NOT fill the page with:

* lorem ipsum
* repetitive generic articles
* keyword-stuffed SEO text
* fake statistics
* fake customer claims
* empty author profiles

Create enough representative content to demonstrate the system properly.

Prioritize quality over a huge number of placeholder resources.

---

# 18. AUTHOR SYSTEM

Create a lightweight author structure if the current architecture supports it.

Example:

```text
author:
  name
  role
  bio
```

Do not create unnecessary profile pages unless they are genuinely useful.

The system should allow multiple authors later.

---

# 19. RESOURCE CARD

Reuse the existing ResourceCard where possible.

The card should communicate:

* type
* title
* excerpt
* topic/category
* reading time
* date

Cards should have a consistent hover state.

Avoid excessive shadows and decorative effects.

---

# 20. RESOURCE EMPTY STATES

Implement meaningful empty states for:

* no resources
* no matching filter
* no search results

Provide useful recovery actions such as:

`Clear filters`

`Explore all resources`

`Browse solutions`

---

# 21. RESPONSIVE DESIGN

Desktop:

* editorial multi-column layouts
* featured resource composition
* generous whitespace

Tablet:

* adaptive two-column layouts

Mobile:

* single-column cards
* horizontally scrollable category controls where appropriate
* readable article typography
* sticky/accessible filtering where useful

No horizontal overflow.

---

# 22. ACCESSIBILITY

Ensure:

* semantic HTML
* correct heading hierarchy
* keyboard-accessible filters
* visible focus states
* accessible buttons and links
* meaningful link text
* accessible article navigation
* appropriate ARIA only where required

Do not use clickable `<div>` elements when a button or link is appropriate.

---

# 23. PERFORMANCE

Do not introduce unnecessary dependencies.

Use the existing architecture.

Avoid loading huge content payloads into the initial Resources listing when unnecessary.

Keep the initial resource dataset reasonably lightweight.

The current 123-product catalogue already produces a bundle-size notice; do not make this worse unnecessarily.

---

# 24. NAVIGATION INTEGRATION

Update the existing Resources navigation dropdown/accordion so it provides meaningful access to:

* Explore Resources
* Insights
* Guides
* Articles
* Case Studies
* Knowledge / FAQs

Do NOT redesign the global navigation.

Use the existing navigation components.

---

# 25. CONVERSION PATHS

Resources should not be dead-end pages.

Relevant resources should provide contextual CTAs.

Examples:

```text
Explore related products
Explore related services
Explore related solutions
Talk to Ricoz
```

For Consultation links, preserve the existing context mechanism.

Where a resource is associated with a solution:

```text
/consultation?solution=...
```

Where a resource is associated with a product:

```text
/consultation?product=...
```

Do not break existing query-context behavior.

---

# 26. INTERNAL LINKING

Build intentional internal linking between:

```text
Resources
↓
Products
↓
Services
↓
Solutions
↓
Contact / Consultation
```

This should improve both user discovery and SEO information architecture.

Avoid excessive cross-linking.

Only surface genuinely relevant relationships.

---

# 27. VALIDATION

After implementation verify:

```text
Resources landing page: PASS
Resource listing: PASS
Resource filtering: PASS
Resource detail: PASS
Case studies: PASS
Resource search: PASS
Product relationships: PASS
Service relationships: PASS
Solution relationships: PASS
Internal linking: PASS
SEO metadata: PASS
Structured data: PASS
Responsive layout: PASS
Accessibility: PASS
```

Also verify existing routes:

```text
/products
/products/category/:categorySlug
/products/:slug

/services
/services/category/:categorySlug
/services/:slug

/solutions
/solutions/:slug

/contact
/consultation
```

All must continue working.

---

# 28. BUILD

Run:

```bash
npm run build
```

Build must pass.

If the existing bundle-size warning remains, report it separately as a warning rather than treating it as a failure.

Do not undertake a major bundle optimization refactor during this flow.

---

# FINAL REPORT

Return:

```text
Flow 05 — Resources & Knowledge Hub

Implemented:
- Resources landing page
- Resource taxonomy
- Resource data architecture
- Resource listing
- Filtering
- Resource detail template
- Case studies
- Related Products
- Related Services
- Related Solutions
- Global Search integration
- SEO
- Structured data
- Internal linking
- Responsive behavior
- Accessibility
- Conversion paths

Build: PASS/FAIL

Existing flows:
Products: PASS/FAIL
Services: PASS/FAIL
Solutions: PASS/FAIL
Search: PASS/FAIL
Contact: PASS/FAIL
Consultation: PASS/FAIL
```

STOP after Flow 05.

Do not begin Flow 06 automatically.
