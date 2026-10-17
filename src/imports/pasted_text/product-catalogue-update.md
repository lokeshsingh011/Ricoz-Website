### Supporting Prompt — Batch 08: AI & Intelligence + Industry Solutions

Continue the incremental Ricoz product catalogue from the current validated state.

Current state:

```text id="8o3r1f"
Total products: 109
Total categories: 16
Build: PASS
Validation: PASS
```

**This is the FINAL product-creation batch.**

Do NOT regenerate `src/data/products.ts`.

Preserve all 109 existing products and the complete existing architecture.

---

# BATCH 08 — AI & Intelligence

Add exactly **7 products** to the existing:

**AI & Intelligence**

category.

Products should cover distinct capabilities such as:

* AI assistants
* AI agents
* predictive intelligence
* intelligent document processing
* AI-powered decision support
* knowledge intelligence
* enterprise AI governance/orchestration

Do not make these seven products simple variations of a chatbot.

Each must have a distinct business purpose and position within the Ricoz ecosystem.

They should integrate conceptually with existing products such as RicoData, RicoAnalytics, RicoFlow, RicoIntel and other relevant products where appropriate.

---

# BATCH 08 — Industry Solutions

Add exactly **7 products** to the existing:

**Industry Solutions**

category.

Create differentiated industry-focused products serving areas such as:

* retail
* healthcare
* education
* financial services
* manufacturing
* logistics
* professional services

Each should solve a recognizable industry-specific operational problem.

Do not create seven generic products with industry names attached.

Each product should have:

* a clear target industry
* a clear business problem
* differentiated capabilities
* meaningful use cases
* appropriate related products
* appropriate related services

---

# EXACT PRODUCT COUNT

Add exactly:

```text
AI & Intelligence: 7
Industry Solutions: 7

Total new products: 14
```

Expected final catalogue:

```text id="tq9t3h"
109 existing
+14 new
=123 TOTAL PRODUCTS
```

Do not create product number 124.

---

# PRODUCT DATA QUALITY

Every product must use the existing Product interface and contain meaningful:

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

No placeholders.

No lorem ipsum.

No generic filler.

Avoid repeating the same paragraph structure across products.

---

# NAMING & UNIQUENESS

Before creating each product:

* check existing product names
* check existing IDs
* check existing slugs
* check existing concepts

Every product must have:

```text
Unique name
Unique ID
Unique slug
Unique positioning
```

Do not create confusingly similar names to existing Ricoz products.

---

# RELATIONSHIPS

At this stage, all 109 existing products are available for relationship references.

New products may reference:

* existing products
* previously created Batch 08 products

Do not create any broken references.

Prefer meaningful ecosystem relationships over artificially adding large numbers of related products.

---

# CATEGORY INTEGRITY

Use the exact existing category values.

Do not:

* create new categories
* rename categories
* merge categories
* split categories
* change the existing 16-category architecture

The final catalogue must remain:

**16 categories / 123 products**

---

# SEO REQUIREMENTS

Pay particular attention to SEO because these are the final products entering the catalogue.

Each product should have differentiated:

* SEO title
* SEO description
* search-friendly slug
* semantic product positioning
* meaningful FAQ content

Avoid keyword stuffing.

Do not make SEO descriptions identical except for the product name.

---

# VALIDATION

After adding all 14 products, verify:

```text id="f7g4o1"
Total products: 123
Total categories: 16

Duplicate IDs: 0
Duplicate slugs: 0
Invalid categories: 0
Broken relatedProducts refs: 0
Missing required fields: 0
```

Also verify:

* `productCategoryData` remains exported
* `productCategories` remains functional
* all 16 categories contain valid metadata
* every product belongs to exactly one category
* all product slugs are URL-safe
* all product IDs are unique
* all product relationships resolve
* product search can access all 123 products
* category filtering works across the full catalogue
* product detail routes resolve correctly
* Product → Contact flow still works
* Product → Consultation flow still works

---

# BUILD

Run the production build:

```bash id="bqmb2h"
npm run build
```

The build must pass.

The previously observed chunk-size warning may remain if it is unrelated to this batch, but do not introduce new build errors or warnings.

---

# FINAL REPORT

Return:

```text id="o7t5t4"
Batch 08 complete

AI & Intelligence: 7
Industry Solutions: 7

Products added: 14
Total products: 123
Total categories: 16

Duplicate IDs: 0
Duplicate slugs: 0
Invalid categories: 0
Broken relatedProducts refs: 0
Missing required fields: 0

Build: PASS
Validation: PASS
```

Then STOP.

Do NOT begin another implementation automatically.

The next phase will be a separate **123-Product Catalogue Audit & SEO Integrity Pass**.
