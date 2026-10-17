### Supporting Prompt — Batch 06 + Batch 07: Product Catalogue Expansion

Continue the incremental Ricoz product catalogue from the current validated state.

Current state:

```text
Total products: 82
Total categories: 16
Build: PASS
Validation: PASS
```

**Do NOT regenerate `src/data/products.ts`.**

Preserve all 82 existing products, interfaces, category architecture, relationships, utilities, and SEO structure.

---

# BATCH 06 — Security + Automation

## Security — 7 products

Add 7 differentiated Ricoz products focused on areas such as:

* Identity and access management
* Password and credential management
* Security operations
* Threat detection
* Security compliance
* Data protection
* Security monitoring and incident response

These products should complement **RicoShield** rather than duplicate its purpose.

Each product needs a clearly defined security responsibility.

## Automation — 7 products

Add 7 differentiated Ricoz products focused on:

* Workflow automation
* Business process automation
* Robotic task automation
* Approval automation
* Integration orchestration
* Intelligent process routing
* Automation monitoring and governance

These should complement **RicoFlow** rather than simply becoming multiple versions of workflow automation.

### Batch 06 total

```text
14 products
82 + 14 = 96 products
```

---

# BATCH 07 — Developer Platforms + Commerce

After Batch 06 passes validation, continue with Batch 07.

## Developer Platforms — 7 products

Add 7 differentiated Ricoz products covering:

* Application development
* API management
* Integration development
* Developer tooling
* Testing and quality
* Deployment/release management
* Application observability

Products should be positioned for technical teams and developers.

## Commerce — 6 products

Add 6 differentiated Ricoz products covering:

* Online commerce management
* Order management
* Point-of-sale operations
* Product/catalogue management
* Customer commerce analytics
* Commerce operations and fulfilment

These should complement existing products such as RicoServe, RicoTrack, RicoRevenue, and RicoConnect where appropriate without duplicating them.

### Batch 07 total

```text
13 products
96 + 13 = 109 products
```

---

# PRODUCT QUALITY REQUIREMENTS

Every product must follow the existing Product interface.

Each new product should contain meaningful:

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

Do not use repetitive template copy.

Each product must have a distinct reason to exist.

---

# NAMING REQUIREMENTS

Maintain the Ricoz product naming system.

Before creating a new product:

* check all existing product names
* check all existing IDs
* check all existing slugs
* avoid confusingly similar names
* avoid duplicate concepts disguised under different names

Every product must have a unique ID and slug.

---

# RELATIONSHIP REQUIREMENTS

Only reference products that already exist.

Batch 06 starts with 82 products.

Once Batch 06 is complete, Batch 07 may reference any of the 96 existing products.

Do NOT reference products that will only be created in Batch 08.

Do not create broken `relatedProducts` references.

---

# CATEGORY REQUIREMENTS

Use only the existing 16-category taxonomy.

Do not create additional categories.

Do not rename categories.

Do not introduce alternate spellings.

Every product must map to exactly one valid category.

---

# BATCH 06 VALIDATION

After Batch 06:

```text
Products added: 14
Total products: 96
Categories: 16
Duplicate IDs: 0
Duplicate slugs: 0
Invalid categories: 0
Broken relatedProducts refs: 0
Missing required fields: 0
```

Run:

```bash
npm run build
```

Do not start Batch 07 until Batch 06 passes.

---

# BATCH 07 VALIDATION

After Batch 07:

```text
Products added: 13
Total products: 109
Categories: 16
Duplicate IDs: 0
Duplicate slugs: 0
Invalid categories: 0
Broken relatedProducts refs: 0
Missing required fields: 0
```

Run:

```bash
npm run build
```

Also verify:

* `/products` still renders
* category filters work
* product search includes the newly added products
* product detail routes resolve
* category routes resolve
* product → Contact flow still works
* product → Consultation flow still works
* product SEO metadata remains valid
* `productCategoryData` remains the category source of truth

---

# IMPORTANT — DO NOT AUTO-COMPLETE THE CATALOGUE

After Batch 07 there should be:

```text
109 products
```

Do NOT create the remaining 14 products automatically.

Stop after Batch 07 and report the validation results.

Use this format:

```text
Batch 06 complete
Categories: Security + Automation
Products added: 14
Total products: 96
Duplicate IDs: 0
Duplicate slugs: 0
Invalid categories: 0
Broken relationships: 0
Missing required fields: 0
Build: PASS
Validation: PASS
```

Then:

```text
Batch 07 complete
Categories: Developer Platforms + Commerce
Products added: 13
Total products: 109
Duplicate IDs: 0
Duplicate slugs: 0
Invalid categories: 0
Broken relationships: 0
Missing required fields: 0
Build: PASS
Validation: PASS
```

**STOP. Do not create Batch 08 until explicitly instructed.**
