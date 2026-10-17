# SUPPORTING PROMPT 01 — RICOZ 120+ PRODUCT MASTER CATALOGUE & CATEGORY ARCHITECTURE

Extend the existing Ricoz Product Ecosystem with a complete, scalable **120+ product master catalogue and category architecture**.

This is a supporting implementation prompt for the existing Product Ecosystem.

Do not rebuild the existing application.

Do not redesign the existing Ricoz visual system.

Do not modify unrelated flows.

The objective of this prompt is to establish the **product information architecture and master product dataset** that all existing and future product experiences will use.

---

# 01. PRIMARY OBJECTIVE

The Ricoz ecosystem must support **120+ distinct products**.

The current product catalogue contains the initial Ricoz products.

Expand the catalogue into a coherent ecosystem of 120+ products covering major business functions, technology capabilities, operational needs and emerging digital requirements.

The catalogue must feel like one unified Ricoz ecosystem.

Do not create products merely to reach 120.

Every product must represent a meaningful and distinguishable capability.

---

# 02. ARCHITECTURE PRINCIPLE

Create ONE centralized product data source.

Conceptually:

PRODUCT MASTER DATA

↓

Categories

↓

Products

↓

Product Detail

↓

Search

↓

Filtering

↓

Related Products

↓

Related Services

↓

Resources

↓

SEO

↓

Contact Context

↓

Consultation Context

Do not duplicate product information across components.

The product dataset must remain the single source of truth.

---

# 03. EXISTING PRODUCTS

Preserve the existing products exactly as valid catalogue records:

1. RicoAnalytics
2. RicoFlow
3. RicoShield
4. RicoConnect
5. RicoVault
6. RicoTrack
7. RicoServe
8. RicoData
9. RicoSpark
10. RicoEngage

Do not remove them.

Do not rename them.

Do not create duplicates of them.

Where appropriate, place them into the new category architecture.

---

# 04. CATEGORY ARCHITECTURE

Create a scalable category taxonomy.

Use approximately **14–16 primary product categories**.

The categories should represent meaningful business capability areas rather than arbitrary groupings.

Recommended architecture:

1. Sales & CRM
2. Marketing & Growth
3. Customer Experience
4. Finance & Accounting
5. People & HR
6. Operations & Business Management
7. Project & Work Management
8. Communication & Collaboration
9. Data & Analytics
10. IT Management
11. Security & Identity
12. Automation & Workflow
13. Developer & Application Platforms
14. Commerce & Digital Business
15. AI & Intelligence
16. Industry & Specialized Solutions

You may refine category names where necessary to improve information architecture, but keep the overall taxonomy coherent.

Do not create unnecessary micro-categories.

---

# 05. CATEGORY OBJECT

Every category must have structured data containing:

* id
* name
* slug
* shortDescription
* description
* productCount
* featuredProducts
* seoTitle
* seoDescription

Example structure:

category:
id
name
slug
shortDescription
description
productCount
featuredProducts
seoTitle
seoDescription

Product counts must be derived from the actual product dataset.

Do not hard-code incorrect counts.

---

# 06. PRODUCT OBJECT

Every product must contain at minimum:

* id
* name
* slug
* categoryId
* categoryName
* shortDescription
* positioning
* overview
* capabilities
* features
* benefits
* useCases
* faqs
* relatedProducts
* relatedServices
* relatedResources
* seo
* status

The structure must remain compatible with the existing Product Detail template.

---

# 07. PRODUCT STATUS

Support:

active

coming-soon

archived

For the current catalogue, products should normally use:

active

unless there is a genuine reason to represent another state.

Do not visually expose unnecessary status labels.

---

# 08. PRODUCT NAMING SYSTEM

All product names must belong to the Ricoz product family.

Maintain consistent naming conventions.

Existing names such as:

RicoAnalytics
RicoFlow
RicoShield
RicoConnect
RicoVault
RicoTrack
RicoServe
RicoData
RicoSpark
RicoEngage

must establish the naming language.

New product names should:

* Feel related
* Remain distinguishable
* Be easy to remember
* Communicate the product's purpose
* Have unique slugs

Avoid meaningless combinations of words.

Avoid near-duplicate names.

Avoid creating multiple products that perform essentially the same function.

---

# 09. PRODUCT DISTRIBUTION

Create a balanced catalogue across the category architecture.

Target approximately:

7–10 products per major category.

Some categories may contain more or fewer products based on actual business breadth.

The final catalogue must contain **120+ products**.

Do not force every category to have exactly the same number.

---

# 10. SALES & CRM CATEGORY

Create products covering capabilities such as:

* Customer relationship management
* Lead management
* Sales pipeline
* Account management
* Contact intelligence
* Sales engagement
* Quote management
* Proposal management
* Territory management
* Revenue operations
* Sales forecasting

Products must be distinct.

Do not create separate products for trivial features that belong inside another product.

---

# 11. MARKETING & GROWTH CATEGORY

Cover meaningful capabilities such as:

* Campaign management
* Email marketing
* Marketing automation
* Social management
* Content management
* Landing page management
* Conversion optimization
* Customer journeys
* Survey management
* Event marketing
* Audience management
* Marketing analytics

---

# 12. CUSTOMER EXPERIENCE CATEGORY

Cover:

* Customer support
* Helpdesk
* Ticket management
* Customer communication
* Live engagement
* Knowledge management
* Feedback management
* Customer portals
* Service operations
* Customer success
* Experience analytics

---

# 13. FINANCE & ACCOUNTING CATEGORY

Cover:

* Accounting
* Invoicing
* Billing
* Expense management
* Payroll
* Budget management
* Financial reporting
* Procurement
* Spend management
* Payment operations
* Financial workflows

Do not imply regulated financial services where the product is only software.

---

# 14. PEOPLE & HR CATEGORY

Cover:

* Employee management
* Recruitment
* Applicant tracking
* Workforce scheduling
* Attendance
* Performance management
* Learning
* Employee engagement
* Payroll operations
* HR analytics
* Workforce planning

---

# 15. OPERATIONS & BUSINESS MANAGEMENT CATEGORY

Cover:

* Business operations
* Inventory
* Asset management
* Procurement
* Vendor management
* Process management
* Document workflows
* Business administration
* Operational dashboards
* Compliance workflows
* Resource management

---

# 16. PROJECT & WORK MANAGEMENT CATEGORY

Cover:

* Project management
* Task management
* Agile delivery
* Sprint planning
* Time tracking
* Resource planning
* Portfolio management
* Issue tracking
* Workflow boards
* Project analytics

---

# 17. COMMUNICATION & COLLABORATION CATEGORY

Cover:

* Business email
* Team messaging
* Video meetings
* Calendar
* File management
* Document collaboration
* Knowledge sharing
* Internal communication
* Shared workspaces
* Team productivity

---

# 18. DATA & ANALYTICS CATEGORY

Cover:

* Business intelligence
* Data visualization
* Reporting
* Dashboards
* Data preparation
* Data integration
* Embedded analytics
* Operational analytics
* Data quality
* Performance intelligence

Existing:

RicoAnalytics

RicoData

should remain important products within this ecosystem.

---

# 19. IT MANAGEMENT CATEGORY

Cover:

* IT service management
* Device management
* Asset management
* Infrastructure monitoring
* Application monitoring
* IT operations
* Incident management
* Service monitoring
* System administration
* Digital operations

---

# 20. SECURITY & IDENTITY CATEGORY

Cover:

* Identity management
* Access control
* Password management
* Authentication
* Security monitoring
* Endpoint security
* Email security
* Data protection
* Security workflows
* Risk management

Existing:

RicoShield

RicoVault

should remain core products in this ecosystem.

---

# 21. AUTOMATION & WORKFLOW CATEGORY

Cover:

* Workflow automation
* Process automation
* Integration automation
* Approval workflows
* Robotic automation
* Business process orchestration
* Rule engines
* Trigger-based automation
* Cross-system workflows

Existing:

RicoFlow

should remain a core product in this category.

---

# 22. DEVELOPER & APPLICATION PLATFORMS CATEGORY

Cover:

* Low-code development
* Application development
* API management
* Integration platforms
* Developer tooling
* Testing automation
* Deployment workflows
* Application monitoring
* Backend services
* Data services

---

# 23. COMMERCE & DIGITAL BUSINESS CATEGORY

Cover:

* Ecommerce
* Point of sale
* Order management
* Product management
* Customer commerce
* Subscription management
* Digital catalogues
* Merchant operations
* Commerce analytics
* Marketplace operations

---

# 24. AI & INTELLIGENCE CATEGORY

Create a modern AI capability layer covering areas such as:

* AI assistants
* Intelligent search
* Document intelligence
* Predictive analytics
* AI workflow automation
* Business intelligence assistants
* Knowledge intelligence
* Content intelligence
* Conversational interfaces
* AI decision support

AI products must have clearly differentiated purposes.

Do not simply prepend "AI" to an existing product name.

---

# 25. INDUSTRY & SPECIALIZED SOLUTIONS CATEGORY

Use this category for genuinely specialized business capabilities that do not belong naturally elsewhere.

Potential areas:

* Education
* Professional services
* Healthcare operations
* Hospitality
* Real estate
* Logistics
* Field operations
* Manufacturing
* Retail
* Specialized compliance

Only create specialized products when they represent a meaningful product capability.

---

# 26. PRODUCT CONTENT DEPTH

Every product must have enough information to render a complete detail page.

Minimum content:

Short description:
1–2 sentences.

Positioning:
1 concise statement.

Overview:
1–2 paragraphs.

Capabilities:
4–8 items.

Features:
5–10 items.

Benefits:
4–6 items.

Use cases:
3–6 items.

FAQs:
3–6 relevant questions.

The content must remain concise enough for a premium product experience.

Do not generate excessively long product pages.

---

# 27. PRODUCT DIFFERENTIATION

Before adding a new product, check:

Does this capability already exist?

Can it reasonably be a feature instead?

Is there a clear independent use case?

Would a visitor understand why this is a separate product?

If not, consolidate it.

The goal is a coherent 120+ product ecosystem, not artificial product inflation.

---

# 28. SLUG SYSTEM

Every product must have a unique URL slug.

Use:

lowercase

hyphen-separated

descriptive

stable

Example:

/products/rico-analytics

or the existing established slug convention if already implemented.

Do not change existing working URLs unnecessarily.

Before completion, verify that every product slug is unique.

---

# 29. PRODUCT IDS

Every product must have a unique stable ID.

Do not use array indexes as permanent product IDs.

IDs should remain stable even if the catalogue order changes.

---

# 30. RELATIONSHIPS

Every product should support relationship fields.

At minimum:

relatedProducts

relatedServices

relatedResources

Where relevant:

relatedCaseStudies

Relationships should be curated logically.

Example:

Analytics product

→ Data product

→ Automation product

→ Relevant analytics service

→ Relevant case study

Avoid circular or meaningless recommendations.

---

# 31. RELATED PRODUCT LIMIT

Do not display enormous relationship lists.

Each product should generally have:

3–6 related products

2–4 related services

0–4 relevant resources

0–3 relevant case studies

The dataset may contain more relationships internally if needed, but the UI should remain curated.

---

# 32. FEATURED PRODUCT SYSTEM

Support a featured flag or equivalent metadata.

Featured products should be curated.

Do not mark all 120+ products as featured.

Featured products should be distributed across categories.

---

# 33. SEARCH METADATA

Products must expose searchable fields.

Ensure search can operate against:

name

category

description

positioning

overview

capabilities

features

benefits

useCases

topics

The existing global search architecture should consume this data rather than requiring a separate product search database.

---

# 34. FILTER METADATA

Prepare structured metadata for future filtering.

Where meaningful, products may support:

businessFunctions

industries

useCases

capabilities

Do not expose every metadata field as a UI filter immediately.

The data architecture should simply remain ready for future expansion.

---

# 35. SEO DATA

Every product must have:

seoTitle

seoDescription

canonicalPath

ogTitle

ogDescription

Products should have unique metadata.

Do not use the same description for multiple products.

Avoid keyword stuffing.

Write metadata naturally.

---

# 36. CATEGORY SEO

Every category must also have unique:

seoTitle

seoDescription

canonicalPath

Category metadata should describe the category rather than listing product names unnaturally.

---

# 37. INTERNAL LINKING

The dataset should make internal linking possible between:

Product

Category

Related Product

Related Service

Resource

Case Study

Contact

Consultation

Do not create isolated products.

---

# 38. CONTACT CONTEXT

Every product must be identifiable by its stable ID and slug so that the existing Contact flow can receive:

productId

productName

productSlug

The user should be able to enquire about the product they were viewing.

---

# 39. CONSULTATION CONTEXT

Every product must be capable of passing the same context into the existing Consultation flow.

Do not create product-specific consultation forms.

---

# 40. CATALOGUE INTEGRITY

Run validation for:

Unique product IDs

Unique product names

Unique slugs

Valid category IDs

Valid related product IDs

Valid related service IDs

Valid resource IDs

No broken references

No duplicate products

No empty mandatory fields

No invalid SEO fields

---

# 41. DATA QUALITY

Do not use:

Lorem ipsum

Placeholder text

"Coming soon" filler descriptions

Repeated generic descriptions

Random statistics

Fake customers

Fake reviews

Fake awards

Fake pricing

Fake ratings

Fake performance claims

The catalogue must feel production-ready.

---

# 42. EXISTING PRODUCT COMPATIBILITY

Do not break the current products:

RicoAnalytics

RicoFlow

RicoShield

RicoConnect

RicoVault

RicoTrack

RicoServe

RicoData

RicoSpark

RicoEngage

Existing product routes must continue working.

Existing ProductCards must continue working.

Existing Product Detail pages must continue working.

Existing search must continue working.

---

# 43. FUTURE SCALABILITY

The architecture must comfortably support:

120 products

150 products

200 products

300+ products

without requiring structural changes.

Do not encode assumptions that exactly 120 products will always exist.

---

# 44. NO PRODUCT-SPECIFIC COMPONENTS

Do not create:

RicoAnalyticsPage.tsx

RicoFlowPage.tsx

RicoShieldPage.tsx

etc.

Use:

ProductDetail.tsx

with dynamic data.

---

# 45. NO DUPLICATE CATEGORY COMPONENTS

Do not create:

SalesProductsPage

MarketingProductsPage

FinanceProductsPage

etc.

Use the existing:

ProductCategory.tsx

with dynamic category data.

---

# 46. FINAL CATALOGUE TARGET

The final catalogue must contain:

120+ products

Approximately 14–16 categories

Unique slugs

Unique IDs

Meaningful descriptions

Structured capabilities

Features

Benefits

Use cases

FAQs

Related products

Related services

SEO metadata

The exact final count should be reported after implementation.

---

# 47. DO NOT ALTER THE VISUAL SYSTEM

Do not change:

Ricoz Red #C41230

Instrument Serif

Inter

Warm off-white background

Near-black text

Thin-border editorial cards

8px spacing system

4px radius

Existing Header

Existing Footer

Existing ProductCard

Existing ServiceCard

Existing Breadcrumb

Existing Search

The purpose of this prompt is catalogue architecture and data expansion.

---

# 48. COMPLETION REPORT

After implementation report:

1. Exact product count
2. Exact category count
3. Products per category
4. Existing products preserved
5. New products created
6. Unique slug validation
7. Unique ID validation
8. Broken relationship count
9. Products with SEO metadata
10. Products with FAQs
11. Products with related products
12. Products with related services
13. Search compatibility
14. Filter compatibility
15. Contact context compatibility
16. Consultation context compatibility
17. Build status
18. Any catalogue quality issues discovered

Do not report completion until the catalogue has been validated.
