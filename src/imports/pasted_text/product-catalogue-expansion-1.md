Excellent. We are at **53 / 123 products**, with both batches clean. The catalogue is now large enough that we should keep the same discipline and move into the next two categories.

For **Batch 04 + Batch 05**, let's add **29 products total** and bring the catalogue to **82 products**.

### Supporting Prompt — Batch 04 + Batch 05: Product Catalogue Expansion

Continue the incremental Ricoz product catalogue.

The current state is:

```text
Total products: 53
Total categories: 16
Build: PASS
Validation: PASS
Duplicate IDs: 0
Duplicate slugs: 0
Broken relationships: 0
```

**Do NOT regenerate `src/data/products.ts`.**

Preserve all 53 existing products and all existing architecture.

---

# BATCH 04 — Project Management + Collaboration & Communication

Add products only to these two existing categories.

## Project Management — 7 products

Create seven differentiated products covering areas such as:

* Project planning
* Task and milestone management
* Agile/project delivery
* Resource planning
* Project portfolio management
* Time tracking
* Project reporting and delivery intelligence

Products should serve different operational needs rather than being variations of one project-management application.

## Collaboration & Communication — 7 products

Create seven differentiated products covering areas such as:

* Team communication
* Business messaging
* Video meetings
* Shared calendars
* Collaborative documents
* Knowledge collaboration
* Internal communication / announcements

Again, each product must have a clearly defined purpose.

### Batch 04 total

```text
14 new products
53 + 14 = 67 products
```

---

# BATCH 05 — Data & Analytics + IT & Technology Management

After Batch 04 passes validation, continue with Batch 05.

## Data & Analytics — 8 products

Create eight differentiated products covering areas such as:

* Business intelligence
* Data visualization
* Data preparation
* Reporting
* Data integration
* Operational analytics
* Forecasting
* Executive intelligence

Do not make every product a generic dashboard product. Each should solve a distinct data or analytics problem.

## IT & Technology Management — 7 products

Create seven differentiated products covering areas such as:

* IT service management
* IT asset management
* Infrastructure monitoring
* Application monitoring
* Device management
* Technology operations
* IT reporting / service intelligence

These should complement the existing RicoShield and RicoTrack products rather than duplicate them.

### Batch 05 total

```text
15 new products
67 + 15 = 82 products
```

---

# Product data requirements

Every new product must follow the existing Product interface and contain meaningful:

* id
* name
* slug
* category
* tagline
* shortDescription
* heroStatement
* overview
* capabilities
* benefits
* features
* useCases
* faqs
* relatedProducts
* relatedServices
* status
* SEO metadata where supported

Maintain the established Ricoz editorial tone:

* premium
* concise
* intelligent
* enterprise-ready
* practical
* non-generic

Do not use filler copy.

---

# Naming requirements

All product names must:

* begin with the Ricoz naming system where appropriate
* have unique IDs
* have unique slugs
* be easy to understand
* have clear differentiation
* fit naturally within the Ricoz ecosystem

Do not create names that are confusingly similar to existing products.

---

# Relationship rules

Only reference products that already exist.

At the beginning of Batch 04, the available products are the existing 53.

After Batch 04, the 67 products may be used for Batch 05 relationships.

Do not reference products planned for future batches.

Broken references are unacceptable.

---

# Architecture rules

Do NOT:

* change the 16-category taxonomy
* rename existing categories
* remove existing products
* rewrite existing product content
* recreate `productCategoryData`
* replace the existing Product interface unnecessarily
* modify unrelated routes/components
* introduce temporary placeholder products

Continue using the current architecture.

---

# Validation — Batch 04

After Batch 04:

```text id="8m8f2m"
Products added: 14
Total products: 67
Categories: 16
Duplicate IDs: 0
Duplicate slugs: 0
Invalid categories: 0
Broken relatedProducts refs: 0
Missing required fields: 0
```

Run the production build.

Batch 04 must pass before starting Batch 05.

---

# Validation — Batch 05

After Batch 05:

```text id="6zq2ha"
Products added: 15
Total products: 82
Categories: 16
Duplicate IDs: 0
Duplicate slugs: 0
Invalid categories: 0
Broken relatedProducts refs: 0
Missing required fields: 0
```

Run the production build again.

Also verify:

* product listing still renders
* search still indexes all products
* category filtering works
* category pages resolve
* product detail routes resolve
* SEO metadata remains valid
* `productCategoryData` remains exported
* `productCategories` remains functional

---

# Completion report

Return two separate reports:

```text id="7v3r1q"
Batch 04 complete

Categories:
- Project Management
- Collaboration & Communication

Products added: 14
Total products: 67
Duplicate IDs: 0
Duplicate slugs: 0
Broken relationships: 0
Build: PASS
Validation: PASS
```

Then:

```text id="p2x91k"
Batch 05 complete

Categories:
- Data & Analytics
- IT & Technology Management

Products added: 15
Total products: 82
Duplicate IDs: 0
Duplicate slugs: 0
Broken relationships: 0
Build: PASS
Validation: PASS
```

**STOP after Batch 05. Do not begin Batch 06 automatically.**

After these two, we'll be at **82 products**, meaning only **41 products remain**. At that point we're entering the final stretch: Security, Automation, Developer, Commerce, AI, and Industry Solutions.
