# FLOW 05 — PRODUCT DISCOVERY

## Objective

Implement and refine the core Ricoz Product Discovery experience.

The goal is to make `/products` feel like a serious, premium product catalogue where a visitor can quickly understand the Ricoz product ecosystem, browse product categories, discover relevant products, and enter a product detail page.

This flow establishes the foundation for the later Product Search, Filtering, Related Products, Related Services, Contact, Consultation, and Resource flows.

**Do not implement those later flows yet.**

---

## 1. Preserve the Existing Product System

Work with the existing Ricoz product architecture and data layer.

Preserve:

* Existing product data
* Existing product IDs
* Existing product slugs
* Existing product categories
* Existing product relationships
* Existing product detail routes
* Existing SEO metadata
* Existing React Router architecture
* Existing design tokens
* Existing Manrope typography system
* Ricoz Red `#C41230`
* Existing responsive behavior

Do not recreate the product catalogue or introduce duplicate product records.

The current catalogue contains the expanded Ricoz product ecosystem. Treat the existing data source as the single source of truth.

---

## 2. Products Route

Refine `/products` as the primary product discovery hub.

The page should communicate immediately:

**Ricoz builds technology around real business needs.**

The experience should feel:

* Premium
* Structured
* Editorial
* Technology-focused
* Calm
* Easy to scan
* Product-led

Avoid making the page feel like a generic SaaS marketplace.

---

## 3. Product Hero

Create a strong editorial hero section.

Use a concise hierarchy:

Eyebrow:
**RICOZ PRODUCTS**

Headline direction:
**Technology built around how your business works.**

Supporting copy should explain that Ricoz provides a broad ecosystem of connected products covering business, technology, operations, intelligence, security, growth, and other practical needs.

Include a restrained primary CTA such as:

**Explore Products**

The hero should prioritize typography, whitespace, hierarchy, and composition rather than decorative graphics.

Do not introduce gradients, glassmorphism, excessive illustrations, or unnecessary visual effects.

---

## 4. Product Catalogue Introduction

Immediately establish that the visitor is entering a broad product ecosystem.

Show a concise catalogue summary using real data.

For example:

* Total products
* Number of product categories
* Product ecosystem positioning

Do not hard-code values if they can be derived from the existing product data.

The numbers should automatically remain accurate if the catalogue changes.

---

## 5. Category Discovery

Create a dedicated **Explore by Category** section.

Use the existing product category structure.

Each category card should communicate:

* Category name
* Short description
* Number of products
* Clear navigation affordance

Examples may include categories such as:

* Sales & CRM
* Marketing & Growth
* Customer Experience
* Finance & Accounting
* People & HR
* Operations & Business Management
* Project & Work Management
* Communication & Collaboration
* Data & Analytics
* IT Management
* Security & Identity
* Automation & Workflow
* Developer & Application Platforms
* Commerce & Digital Business
* AI & Intelligence
* Industry Solutions

Use the existing category data rather than manually duplicating category definitions.

Each category must link to its appropriate category route.

---

## 6. Featured Products

Add a curated **Featured Products** section.

Use the existing product data and featured-product logic where available.

Each Product Card should include:

* Product name
* Category
* Tagline
* Short description
* Primary discovery action
* Appropriate status/badge when available

The card should be highly scannable.

Product name should have the strongest visual hierarchy.

Do not overload cards with every available product field.

---

## 7. Product Card Behavior

Standardize the Product Card component across the catalogue.

Interaction:

**Product Card → Product Detail**

Clicking the card or primary action should navigate through React Router without a full page reload.

Use the existing product slug.

Do not create alternative URLs for the same product.

Provide a subtle hover state using border, typography, or restrained movement.

Avoid excessive shadows.

Cards should remain visually strong on mobile as well.

---

## 8. Product Detail Entry

Every discovery path implemented in this flow should ultimately allow the visitor to reach the existing Product Detail template.

The flow should be:

**Products → Category / Featured Product → Product Card → Product Detail**

Do not redesign the complete Product Detail page in this flow.

Only ensure that the transition into the existing detail experience is clean and consistent.

---

## 9. Catalogue Navigation

Provide clear ways to continue browsing.

The visitor should be able to:

* Browse all products
* Explore categories
* Open featured products
* Return from a category to the main catalogue

Use breadcrumbs where appropriate on category surfaces, but keep the `/products` landing page visually clean.

Do not implement advanced search or filtering here.

Those belong to later flows.

---

## 10. Responsive Experience

Audit the entire discovery experience at:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* Strong editorial composition
* Efficient category grid
* Comfortable product-card spacing

Tablet:

* Reduce columns intelligently
* Preserve hierarchy
* Avoid cramped cards

Mobile:

* Single-column or appropriately optimized grids
* Horizontal category navigation only where genuinely useful
* Comfortable touch targets
* No horizontal overflow
* Hero typography scales cleanly
* Cards remain readable without excessive text truncation

---

## 11. Accessibility

Ensure:

* Semantic headings
* Logical heading hierarchy
* Keyboard-accessible cards and links
* Visible focus states
* Accessible navigation labels
* Sufficient color contrast
* Touch targets of appropriate size
* No information communicated through color alone

Do not sacrifice accessibility for visual styling.

---

## 12. SEO & Internal Linking

The `/products` page should have unique:

* Page title
* Meta description
* Canonical URL
* Primary H1

Ensure meaningful internal links exist between:

**Products → Product Categories → Product Details**

Do not introduce duplicate metadata or duplicate canonical URLs.

Do not add fake claims or unsupported statistics.

---

## 13. Visual Refinement

Apply the current Ricoz visual system consistently:

* Manrope 400 / 500 / 600
* Ricoz Red `#C41230`
* `#111111` primary foreground
* Warm off-white background
* Subtle neutral borders
* 8px spacing rhythm
* 4px radius
* Minimal shadows
* Restrained interaction states

The premium quality should come from:

**Typography + spacing + hierarchy + restraint**

not decorative effects.

---

## 14. Scope Boundary

For this flow, DO NOT implement:

* Global product search
* Advanced filtering
* New filtering logic
* Related products
* Related services
* Contact flow changes
* Consultation flow changes
* Resource integration
* Case-study integration
* Product purchasing
* Checkout
* Authentication
* Dashboards
* Backend services

Those belong to later flows.

---

## 15. Validation

Before finishing:

1. Confirm `/products` loads correctly.
2. Confirm all category cards resolve to the correct category routes.
3. Confirm featured products resolve to valid product detail pages.
4. Confirm no broken product slugs.
5. Confirm no duplicate product records are introduced.
6. Confirm existing Product Detail functionality remains intact.
7. Confirm responsive layouts at the defined breakpoints.
8. Confirm accessibility basics.
9. Confirm SEO metadata remains valid.
10. Run:

`npm run build`

Fix any actual errors before finishing.

A pre-existing bundle-size warning should **not** be treated as a failure.

---

## Final Principle

Do not redesign the Ricoz product architecture.

**Strengthen discovery.
Improve hierarchy.
Make the catalogue feel intentional.
Make every product easy to find and understand.**

This is the foundation for the remaining Product Ecosystem flows.
