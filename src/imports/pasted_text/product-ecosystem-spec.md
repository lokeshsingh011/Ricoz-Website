# RICOZ — FLOW GROUP 02: PRODUCT ECOSYSTEM

Implement the complete Ricoz Product Ecosystem experience.

This group covers:

FLOW 05 — Product Discovery
FLOW 06 — Product Search
FLOW 07 — Product Category Discovery
FLOW 08 — Product Filtering
FLOW 09 — Product Detail Exploration
FLOW 10 — Product → Related Product
FLOW 11 — Product → Related Service
FLOW 12 — Product → Contact
FLOW 13 — Product → Consultation
FLOW 14 — Product Discovery Exit

IMPORTANT:

The existing Ricoz foundation, navigation and global search are already implemented.

Do NOT rebuild the application.

Do NOT redesign the established Ricoz visual identity.

Do NOT modify unrelated flows.

Reuse the existing:

* Design tokens
* Header
* Footer
* Buttons
* Badges
* Breadcrumb
* ProductCard
* ServiceCard
* ResourceCard
* CaseStudyCard
* Search
* React Router
* SEO utilities
* Product data model
* Service data model

The current prototype contains approximately 10 products.

The final Ricoz ecosystem is expected to contain approximately 125 products.

The architecture must therefore be data-driven and scalable.

---

# 01. PRODUCT ECOSYSTEM OBJECTIVE

The Product ecosystem should allow a visitor to:

Discover products

↓

Understand categories

↓

Search / filter

↓

Explore a product

↓

Understand its capabilities

↓

Discover related products/services/resources

↓

Contact Ricoz

OR

↓

Schedule a Consultation

Products are discovery and engagement experiences.

Do NOT introduce:

* Ecommerce checkout
* Shopping cart
* Product purchasing
* Payment processing
* Fake transaction flows

The primary product conversion actions remain:

CONTACT US

SCHEDULE A CONSULTATION

---

# 02. PRODUCT INFORMATION ARCHITECTURE

Use the established routing architecture:

/products/

/products/category/:categorySlug

/products/:productSlug

Do not create separate route structures for individual products.

The system must conceptually operate as:

Product Data

↓

Product Listing

↓

Product Category

↓

Product Detail Template

---

# 03. PRODUCTS LANDING PAGE

Enhance /products/ into the primary product discovery hub.

Structure:

Breadcrumb

Products

Hero / Introduction

Category discovery

Featured products

Full product catalogue

Search

Filtering

Conversion CTA

The page should communicate the breadth of the ecosystem without overwhelming the visitor.

---

# 04. PRODUCT HERO

Use an editorial hero.

Eyebrow:

PRODUCTS

H1:

Capabilities built around real business needs.

Supporting copy:

Explore the Ricoz product ecosystem and discover focused capabilities designed to help businesses work smarter, operate better and move forward.

Do not use exaggerated claims.

---

# 05. CATEGORY DISCOVERY

Display all existing product categories from the product data.

Use compact category navigation.

Each category should include:

Category name

Short description where available

Product count

Explore action

Category links must use:

/products/category/:categorySlug

Do not hard-code category routes.

Generate them from the data model.

---

# 06. FEATURED PRODUCTS

Create a curated featured-products section.

Display approximately:

6 products

Use the existing ProductCard.

Featured products must come from the existing product data.

Do not create duplicate product content.

CTA:

Explore All Products →

---

# 07. PRODUCT SEARCH

Integrate the existing global search behavior appropriately.

The Products page should also support local product discovery.

Provide:

Search products...

Search should prioritize product-specific fields.

Searchable fields:

Name

Category

Short description

Description

Capabilities

Benefits

Use cases

Do not duplicate the global search implementation.

Reuse the existing search logic where appropriate.

---

# 08. PRODUCT FILTERING

Create a clean filtering system.

Primary filter:

Category

Optional future-ready structure:

Capability

Use case

Industry

Do not add filters for which there is no meaningful data.

Filtering must update the displayed catalogue without breaking the product URLs.

---

# 09. FILTER UX

Desktop:

Use a compact horizontal or sidebar filter treatment depending on available space.

Mobile:

Use a filter trigger that opens a structured filter panel.

Include:

Active filter state

Clear filters

Result count

Empty state

Do not make filtering visually dominant.

---

# 10. FILTER + SEARCH COMBINATION

The system must support:

Search only

Filter only

Search + filter

Clear search

Clear filters

Clear all

Example:

Search:

analytics

Category:

Data & Intelligence

Result:

RicoAnalytics

The URL does not need to become an indexable SEO page for arbitrary combinations.

---

# 11. PRODUCT GRID

Use the existing ProductCard component.

Cards should support:

Product name

Category

Short description

Optional capability indicator

Explore action

Maintain the established editorial card style.

Avoid excessive card decoration.

---

# 12. PRODUCT EMPTY STATE

When no products match:

NO PRODUCTS FOUND

We couldn't find products matching your current search or filters.

Actions:

Clear Filters

Explore All Products

The empty state should be useful and visually consistent.

---

# 13. PRODUCT CATEGORY PAGE

Use the existing category route:

/products/category/:categorySlug

Create a reusable Product Category template.

Do NOT create individual category page components.

The template must dynamically receive:

Category

Products

Description

Related categories

SEO metadata

---

# 14. CATEGORY PAGE STRUCTURE

Breadcrumb:

Home
/
Products
/
Category

Hero:

Category name

Category description

Product count

Then:

Products within category

Related categories

Relevant ecosystem CTA

---

# 15. CATEGORY PRODUCT LISTING

Only display products belonging to the selected category.

Use the existing ProductCard.

Support:

Search within category

Relevant filtering where appropriate

Product navigation

---

# 16. CATEGORY SEO

Each category page should support:

Unique title

Unique meta description

Canonical URL

Open Graph metadata

BreadcrumbList structured data

Do not generate duplicate descriptions automatically for every category.

---

# 17. PRODUCT DETAIL TEMPLATE

Use:

/products/:productSlug

Create a reusable Product Detail template.

Every product must render through the same architecture.

The current products are sample records.

The same template must support 125+ future products.

---

# 18. PRODUCT DETAIL HERO

Structure:

Breadcrumb

Category

Product name

Strong positioning statement

Short description

Primary CTA:

Contact Us

Secondary CTA:

Schedule a Consultation

Do not make the hero look like an ecommerce product page.

---

# 19. PRODUCT OVERVIEW

Include:

Overview

What the product does

Who it is for

Primary value proposition

Keep the copy specific to the product.

---

# 20. PRODUCT CAPABILITIES

Create a structured capabilities section.

Display relevant capabilities from product data.

Each capability should be easy to scan.

Avoid oversized decorative cards.

---

# 21. PRODUCT BENEFITS

Create a benefits section.

Focus on meaningful outcomes.

Do not fabricate numerical performance claims.

Use existing product data.

---

# 22. PRODUCT FEATURES

Create a feature section.

Use a clean editorial grid or list.

Prioritize clarity over visual complexity.

---

# 23. PRODUCT USE CASES

Create a use-case section.

Explain where the product is relevant.

Use existing product data.

Use cases should be specific enough to support both user understanding and future SEO content.

---

# 24. PRODUCT FAQ

Display product-specific FAQs where available.

Use the existing FAQ data.

Maintain accessible accordion behavior.

The existing JSON-LD architecture should continue supporting FAQPage schema where appropriate.

Do not fabricate FAQs.

---

# 25. RELATED PRODUCTS

Implement Flow 10.

Product detail:

↓

Related Products

↓

Another Product

Use existing related-product relationships.

Do not randomly select unrelated products.

The section should encourage continued exploration.

---

# 26. RELATED SERVICES

Implement Flow 11.

Product detail:

↓

Related Services

↓

Service Detail

Use the existing related-service relationships.

This is a key ecosystem connection.

---

# 27. RELATED RESOURCES

Where relevant, allow products to surface related resources.

Use existing resource relationships/data where available.

Do not force unrelated resources onto every product.

---

# 28. PRODUCT → CONTACT

Implement Flow 12.

Product Detail

↓

Contact Us

↓

Contact form

The contact experience should understand the originating product.

The form should receive product context without requiring the user to manually repeat it.

Example:

Product:
RicoAnalytics

The user should see that the enquiry relates to RicoAnalytics.

Do not create a separate contact form.

Reuse the existing Contact flow.

---

# 29. PRODUCT → CONSULTATION

Implement Flow 13.

Product Detail

↓

Schedule a Consultation

↓

Existing 5-step consultation wizard

The consultation flow should understand the originating product.

Where appropriate:

Purpose / interest:

RicoAnalytics

This should be passed as context.

Do not create a second consultation wizard.

---

# 30. PRODUCT DISCOVERY EXIT

Implement Flow 14.

From Product Detail, users should be able to continue exploring:

Related Products

Related Services

Resources

Case Studies

Products

Services

The goal is to avoid dead ends.

---

# 31. PRODUCT CONVERSION SECTION

Every product detail page should have a clear closing CTA.

Example:

READY TO EXPLORE WHAT'S POSSIBLE?

Discuss your requirements with the Ricoz team.

Primary:

Schedule a Consultation

Secondary:

Contact Us

Keep the treatment restrained.

---

# 32. PRODUCT BREADCRUMBS

Every product detail page should show:

Home
/
Products
/
Category
/
Product

Category should link to:

/products/category/:categorySlug

Product is the current page.

Maintain the existing Breadcrumb component.

---

# 33. PRODUCT SEO

Every product page must continue supporting:

Unique title

Unique meta description

Canonical URL

Open Graph metadata

Product structured data

BreadcrumbList

FAQPage where appropriate

Do not remove or break the JSON-LD implementation already added.

---

# 34. PRODUCT STRUCTURED DATA

Continue using the existing Product schema implementation.

Ensure values are sourced from actual product data.

Do not add:

* Fake prices
* Fake ratings
* Fake reviews
* Fake availability
* Fake offers

Ricoz product pages are primarily discovery/engagement pages.

---

# 35. INDEXABLE URL RULES

Indexable:

/products/

/products/category/example/

/products/example-product/

Non-indexable user states:

Search queries

Arbitrary filters

Temporary UI states

Do not generate hundreds of duplicate indexable URLs.

---

# 36. INTERNAL LINKING

Product pages should naturally link to:

Category

Related Products

Related Services

Relevant Resources

Case Studies

Contact

Consultation

Use descriptive anchor text.

Avoid excessive repeated links.

---

# 37. MOBILE PRODUCT EXPERIENCE

On mobile:

Product listing:

Search

Filter

Results

Product cards

Product category:

Breadcrumb

Hero

Products

Related categories

Product detail:

Breadcrumb

Hero

Capabilities

Benefits

Features

Use cases

FAQs

Related ecosystem

CTA

Everything must remain readable and touch-friendly.

---

# 38. RESPONSIVE PRODUCT GRID

Desktop:

Editorial multi-column grid.

Tablet:

Reduced column count.

Mobile:

Single-column or appropriately optimized card layout.

Do not force desktop card dimensions onto mobile.

---

# 39. PERFORMANCE

Do not load unnecessary future product data into visual components.

The UI should remain compatible with future server-side data retrieval.

Keep:

Data

Search logic

Filtering logic

UI

Routing

SEO

appropriately separated.

---

# 40. DATA-DRIVEN ARCHITECTURE

The Product ecosystem must operate from structured data.

Conceptually:

products[]

↓

ProductListing

ProductCategory

ProductDetail

RelatedProducts

RelatedServices

Search

Filters

SEO

Do not duplicate product information across multiple components.

---

# 41. SCALABILITY REQUIREMENT

The system must work with:

10 products

50 products

125 products

250 products

without requiring a redesign of the Product architecture.

The visual design should remain clean as the catalogue expands.

---

# 42. PRODUCT STATUS

Allow product data to eventually support statuses such as:

Active

Coming Soon

Archived

However, only implement visual states if the existing data actually requires them.

Do not add unnecessary UI.

---

# 43. ACCESSIBILITY

Audit the entire Product ecosystem for:

* Heading hierarchy
* Breadcrumb accessibility
* Search labels
* Filter labels
* Keyboard navigation
* Focus states
* Accessible accordions
* Accessible cards
* Descriptive links
* Screen-reader-friendly result states

Do not rely solely on color.

---

# 44. ERROR STATES

Create:

Product not found

Category not found

Invalid product slug

Invalid category slug

Use polished recovery actions:

Back to Products

Explore All Products

Explore Services

---

# 45. FLOW TESTING

Verify:

FLOW 05

Products
→ Category
→ Product

FLOW 06

Products
→ Search
→ Product

FLOW 07

Products
→ Category
→ Products

FLOW 08

Products
→ Filter
→ Results

FLOW 09

Product
→ Overview
→ Capabilities
→ Benefits
→ Features
→ Use Cases
→ FAQs

FLOW 10

Product
→ Related Product
→ Product

FLOW 11

Product
→ Related Service
→ Service

FLOW 12

Product
→ Contact
→ Product context
→ Confirmation

FLOW 13

Product
→ Consultation
→ Product context
→ Confirmation

FLOW 14

Product
→ Resource / Case Study / Related ecosystem
→ Continue exploration

---

# 46. DO NOT BUILD

Do NOT build:

* Ecommerce
* Shopping cart
* Checkout
* Product payments
* Product reviews
* Ratings
* Inventory
* Product comparison engine
* Customer dashboard
* Product administration
* Complex backend search

Those belong to later platform phases.

---

# 47. FINAL PRODUCT ECOSYSTEM QUALITY BAR

The final experience should feel like a mature product ecosystem.

A visitor should be able to answer:

What products exist?

What category is relevant?

What does this product do?

Why might it matter to me?

What else connects to it?

How do I talk to Ricoz?

How do I schedule a consultation?

The product experience should feel:

Premium

Minimal

Clear

Editorial

Structured

Scalable

Trustworthy

Do not make it feel like an ecommerce catalogue.

---

# 48. IMPLEMENTATION SAFETY

Before modifying anything:

Inspect the existing implementation.

Reuse existing components.

Reuse existing data.

Reuse existing SEO utilities.

Reuse existing routing.

Do not duplicate components.

Do not create a second ProductCard.

Do not create a second Breadcrumb.

Do not create a second Contact flow.

Do not create a second Consultation flow.

Only make changes required to complete this Product Ecosystem group.

---

# 49. COMPLETION REPORT

After implementation, report:

1. Product listing changes
2. Category architecture
3. Product detail improvements
4. Search/filter behavior
5. Related product behavior
6. Related service behavior
7. Contact context behavior
8. Consultation context behavior
9. SEO behavior
10. Structured data behavior
11. Responsive behavior
12. Accessibility verification
13. Routes verified
14. Build/module count
15. Any issues or dependencies discovered

Do not modify unrelated flows.
