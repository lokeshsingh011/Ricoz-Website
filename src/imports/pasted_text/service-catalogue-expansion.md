# MASTER PROMPT — Expand Ricoz Service Catalogue to 60 Services

Expand the existing Ricoz service catalogue from the current ~11–12 services to a **complete catalogue of 60 distinct professional services**.

This is a **data/catalogue expansion task**, not a redesign. Preserve the existing Ricoz architecture, UI, routing, service flows, design system, and functionality already implemented.

## 1. PRIMARY OBJECTIVE

Create a robust, realistic catalogue of **60 unique Ricoz services** distributed across the existing service ecosystem.

The catalogue must feel like a mature professional technology, IT, digital, marketing, and business-services company — not like 60 variations of the same service.

Do **not** remove or break the existing services. Where existing services already match the new catalogue, retain their existing IDs/slugs and enrich them rather than duplicating them.

Target:

**60 total services**

with approximately this distribution:

* Technology & Software — 12
* IT Infrastructure & Support — 10
* Digital Transformation — 8
* Cybersecurity & Data — 8
* Digital Marketing — 8
* Social Media & Content — 7
* Business & Growth — 7

Use the existing service-category system where possible. Only introduce a new category if the current taxonomy genuinely cannot support the catalogue.

---

## 2. SERVICE DATA QUALITY

Every service must be a complete, usable service record.

Each service should contain, where supported by the existing data model:

* unique `id`
* unique `slug`
* `name`
* `category`
* short tagline
* concise description
* problem / need
* capabilities
* process / steps
* outcomes / benefits
* use cases where supported
* FAQs
* related products
* related services
* SEO title
* SEO description
* relevant keywords/topics where the existing model supports them

Do not create empty placeholder fields.

Do not use generic filler such as:

* "We provide high-quality solutions..."
* "Our experts help your business grow..."
* "Get started today..."
* repeated descriptions with only the service name changed

Each service must have its own meaningful positioning and content.

---

## 3. SERVICE CATALOGUE

Create approximately the following service coverage.

### Technology & Software — 12

Include distinct offerings such as:

* Custom Software Development
* Web Application Development
* Enterprise Application Development
* SaaS Product Development
* Mobile Application Development
* API Development & Integration
* Software Architecture & Engineering
* Legacy Application Modernization
* MVP Development
* Quality Assurance & Testing
* UI/UX Product Design
* Product Engineering & Maintenance

### IT Infrastructure & Support — 10

Include distinct offerings such as:

* IT Infrastructure Setup
* Managed IT Support
* Cloud Infrastructure Management
* Cloud Migration
* Server Management
* Network Infrastructure
* Endpoint Management
* IT Helpdesk Services
* Backup & Disaster Recovery
* IT Infrastructure Audit

### Digital Transformation — 8

Include distinct offerings such as:

* Digital Transformation Consulting
* Business Process Digitization
* Workflow Automation
* Digital Operations Consulting
* Technology Roadmapping
* System Integration
* Data & Process Modernization
* Digital Product Strategy

### Cybersecurity & Data — 8

Include distinct offerings such as:

* Cybersecurity Assessment
* Security Architecture Review
* Vulnerability Assessment
* Data Security Consulting
* Identity & Access Management
* Security Monitoring
* Data Analytics Consulting
* Business Intelligence Solutions

### Digital Marketing — 8

Include distinct offerings such as:

* Digital Marketing Strategy
* Search Engine Optimization
* Search Engine Marketing
* Performance Marketing
* Lead Generation
* Conversion Rate Optimization
* Email Marketing
* Marketing Analytics

### Social Media & Content — 7

Include distinct offerings such as:

* Social Media Management
* Social Media Strategy
* Social Media Advertising
* Content Strategy
* Content Creation
* Brand Content Development
* Community Management

### Business & Growth — 7

Include distinct offerings such as:

* Business Consulting
* Go-to-Market Strategy
* Market Research
* Brand Strategy
* Customer Experience Consulting
* Sales Enablement
* Growth Strategy

You may adjust individual service names where necessary to fit the existing Ricoz positioning and taxonomy, but maintain **60 genuinely distinct services**.

---

## 4. EXISTING SERVICES

Before adding new records:

1. Inspect the existing service catalogue.
2. Identify existing services that already correspond to the proposed catalogue.
3. Preserve their existing IDs and slugs.
4. Preserve existing relationships wherever valid.
5. Enrich incomplete records instead of creating duplicates.
6. Add only the missing services.

Do not create duplicate services under slightly different names.

Do not break existing URLs.

Do not rename existing slugs unnecessarily.

---

## 5. RELATIONSHIPS

Use the existing product and service catalogues to establish meaningful relationships.

Each related product/service relationship must:

* reference a valid existing ID or slug
* point to an actual catalogue item
* avoid self-reference
* avoid duplicates
* make business sense

Prefer a small number of meaningful relationships over filling every field.

Do not invent products.

Do not invent services purely to satisfy relationship counts.

Do not create an AI recommendation engine.

The existing deterministic related-product and related-service flows must continue working.

---

## 6. COMPATIBILITY WITH FLOWS 15–23

The expanded catalogue must work automatically with every completed Service Ecosystem flow.

Verify compatibility with:

### Flow 15 — Service Discovery

`/services`

* displays the complete catalogue
* displays correct live service count
* category cards show correct counts
* ServiceCard works for every service

### Flow 16 — Service Search

Search must discover the new services using:

* name
* tagline
* description
* category
* capabilities
* outcomes
* process
* use cases
* other existing searchable fields

Do not redesign the search system.

### Flow 17 — Service Category Discovery

Every service must resolve into its correct category.

Category counts must update automatically.

Category pages must display only services belonging to that category.

### Flow 18 — Service Filtering

Existing category filters must work across all 60 services.

Ensure:

* correct category counts
* multi-select behavior
* correct result counts
* search + filtering compatibility
* no-results handling

### Flow 19 — Service Detail

Every service must resolve through:

`/services/:serviceSlug`

and provide meaningful:

Hero → Problem → Capabilities → Process → Outcomes → FAQs

Do not leave major sections empty.

### Flow 20 — Related Product

Existing valid service → product relationships must continue resolving correctly.

### Flow 21 — Related Service

Existing valid service → service relationships must continue resolving correctly.

### Flow 22 — Service → Contact

Every service must work with:

`/contact?service=:serviceSlug`

The Contact context must correctly display the selected service.

### Flow 23 — Service → Consultation

Every service must work with:

`/consultation?service=:serviceSlug`

The consultation context, purpose preselection, Step 5 review, confirmation, and return-to-service navigation must continue working.

---

## 7. SEO

Generate meaningful SEO metadata for every service.

Each service should have:

* unique SEO title
* unique meta description
* canonical service URL
* appropriate service terminology
* no keyword stuffing

Preserve the existing dynamic SEO implementation.

Do not create duplicate indexable pages from query parameters.

---

## 8. UI / DESIGN

Do **not redesign the existing Services page or ServiceDetail page**.

The existing Ricoz design system must remain unchanged:

* Ricoz Red `#C41230`
* Manrope typography
* warm off-white background
* near-black text
* thin editorial borders
* restrained visual hierarchy
* 8px spacing system
* 4px radius
* minimal shadows
* no gradients
* no glassmorphism
* no unnecessary animation

The expanded catalogue should naturally populate the existing UI.

If the larger catalogue exposes minor layout issues, make only the smallest implementation adjustments required for correct presentation.

---

## 9. RESPONSIVE BEHAVIOR

Verify that 60 services work correctly across:

* desktop
* tablet
* mobile

Do not introduce a separate mobile architecture.

Preserve existing responsive behavior for:

* category cards
* service grids
* search
* filters
* service detail
* related services
* related products

---

## 10. ACCESSIBILITY

Maintain existing accessibility standards.

Ensure:

* semantic headings
* keyboard-accessible controls
* visible focus states
* accessible buttons
* accessible links
* appropriate labels
* usable filter/search controls
* no inaccessible custom interactions

---

## 11. DATA INTEGRITY

Before finishing, programmatically or logically validate:

* exactly **60 services**
* every service has a unique ID
* every service has a unique slug
* every service has a valid category
* no duplicate services
* no broken service references
* no broken related-product references
* no broken related-service references
* no self-referencing related service
* all service routes resolve
* all category counts are accurate
* all search/filter results are accurate

If the current catalogue contains valid services outside the suggested list, retain them and adapt the distribution rather than deleting useful existing content.

The final catalogue must contain **60 total services**, not merely 60 names displayed in the UI.

---

## 12. DO NOT IMPLEMENT

Do not:

* redesign the Services page
* redesign ServiceDetail
* redesign the navigation
* create a new CMS
* create a backend
* add authentication
* add payments
* add CRM functionality
* add real booking infrastructure
* add AI recommendations
* add personalization
* add fake customer statistics
* add fake testimonials
* add fake certifications
* add fake case studies
* invent client names
* invent partnerships
* introduce competitor/company references
* introduce pricing unless already supported by the existing data model
* create duplicate services
* change existing routes unnecessarily
* replace the existing service architecture

This task is specifically about **expanding and strengthening the service catalogue while preserving the completed ecosystem flows.**

---

## 13. FINAL VALIDATION

After implementation:

1. Run the production build.
2. Resolve all TypeScript/runtime/data errors.
3. Ignore only the already-known catalogue bundle-size warning if it remains the same expected warning.
4. Verify the Services page displays approximately **60 services**.
5. Verify category counts.
6. Test search against newly added services.
7. Test category filtering.
8. Open several newly added service detail pages.
9. Test related product/service navigation.
10. Test Contact context from a newly added service.
11. Test Consultation context from a newly added service.
12. Confirm existing services and existing URLs still work.

Do not move into another feature group after this task.

The success condition is:

**Ricoz now has a complete, realistic 60-service catalogue fully compatible with the already-built Service Ecosystem flows 15–23, without breaking the existing architecture or design.**
