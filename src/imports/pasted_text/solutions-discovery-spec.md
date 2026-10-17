# FLOW 04 — SOLUTIONS & BUSINESS DISCOVERY

Implement the next major Ricoz website flow: **Solutions & Business Discovery**.

Do NOT rebuild existing functionality.

Preserve:

* Existing Ricoz design system
* Ricoz Red `#C41230`
* Instrument Serif + Inter typography
* Warm off-white background
* Near-black text
* Thin editorial borders
* 4px radius system
* Existing header/navigation
* Existing global search
* Existing 123-product catalogue
* Existing 16 product categories
* Existing service catalogue
* Existing product detail pages
* Existing service detail pages
* Existing Contact flow
* Existing Consultation flow
* Existing SEO architecture

The objective is to build the **Solutions discovery layer** that connects business needs to relevant Ricoz products, services and capabilities.

---

## 1. SOLUTIONS LANDING PAGE

Create:

`/solutions`

The page should not simply display products.

It should communicate:

> Ricoz helps businesses solve operational, technology and growth challenges through connected digital capabilities.

### Hero

Use a premium editorial hero.

Eyebrow:

`SOLUTIONS`

Headline:

`Solve the problem. Build what comes next.`

Supporting copy should explain that visitors can explore solutions based on business objectives, operational challenges and organizational needs.

Primary CTA:

`Explore Solutions`

Secondary CTA:

`Talk to Ricoz`

---

## 2. SOLUTION DISCOVERY

Create a structured discovery section.

Visitors should be able to explore solutions by business objective.

Examples:

* Grow revenue
* Improve customer experience
* Automate operations
* Strengthen security
* Manage people
* Understand business data
* Modernize technology
* Improve collaboration
* Scale digital commerce
* Apply AI across the organization

Do not treat these as simple static cards.

Each objective should lead to a relevant solution route or filtered solution experience.

---

## 3. SOLUTION CATEGORIES

Create a solution architecture that groups related business problems.

Use the existing Ricoz ecosystem intelligently.

Examples:

### Growth

Revenue, sales, marketing, customer acquisition and retention.

### Operations

Processes, workflows, assets, supply chain and operational efficiency.

### Customer

Customer support, engagement, feedback, portals and customer success.

### People

HR, recruitment, onboarding, attendance, performance and learning.

### Finance

Accounting, billing, expenses, budgeting, procurement and financial intelligence.

### Technology

IT management, developer platforms, infrastructure, integrations and application operations.

### Intelligence

Analytics, data, forecasting, AI and decision intelligence.

### Security

Identity, access, data protection, threat detection and security operations.

Do not create duplicate product categories.

Solutions are a **business-facing layer above the product taxonomy**.

---

## 4. SOLUTION DETAIL TEMPLATE

Create a reusable solution detail architecture.

Example route:

`/solutions/:slug`

Each solution should support:

### Hero

Solution name

Clear business problem statement

Supporting explanation

CTA:

`Talk to Ricoz`

Secondary:

`Explore capabilities`

### The Challenge

Explain the business problem.

### What Ricoz Brings Together

Display the relevant combination of:

* Products
* Services
* Capabilities

### Recommended Products

Show relevant products from the existing 123-product catalogue.

Each card must link to the existing product detail route.

### Relevant Services

Show relevant services.

Each card links to the existing service detail route.

### Outcomes

Describe measurable or practical business outcomes.

### How It Works

Use a simple 3–5 step visual/process structure.

### Related Solutions

Provide internal solution cross-links.

### CTA

End with:

`Let's discuss your requirements`

Link to Consultation.

---

## 5. SOLUTION ↔ PRODUCT RELATIONSHIPS

The solution layer must use the existing product data.

Do NOT duplicate complete product records.

Use references such as:

```text
productSlug
```

or the existing product relationship mechanism.

The solution should dynamically resolve product information from the existing catalogue.

This ensures that if product information changes later, solution pages remain synchronized.

---

## 6. SOLUTION ↔ SERVICE RELATIONSHIPS

Apply the same principle to services.

Solutions should reference existing services rather than duplicating their content.

---

## 7. BUSINESS NEED DISCOVERY

Add an interactive discovery experience.

Example heading:

`What are you trying to improve?`

Allow visitors to select a primary objective:

* Increase revenue
* Reduce operating costs
* Improve customer relationships
* Automate repetitive work
* Improve employee productivity
* Protect business systems
* Make better decisions
* Modernize technology
* Build a digital operation
* Explore AI opportunities

After selection, show relevant solution recommendations.

This does NOT need to become a complex AI system.

Use a deterministic recommendation model based on solution metadata.

---

## 8. RECOMMENDATION EXPERIENCE

Create a lightweight result state:

### Your starting point

`Based on what you're trying to achieve, these capabilities may be relevant.`

Display:

* Recommended solutions
* Relevant products
* Relevant services

Each recommendation must explain **why it is relevant**.

Example:

`Recommended because it helps centralize customer interactions and improve response workflows.`

Avoid generic recommendation copy.

---

## 9. CTA BEHAVIOR

Every solution should ultimately provide two clear paths:

### Explore

Continue exploring products/services.

### Discuss

Go to Consultation.

When navigating to Consultation, pass solution context through the URL.

Example:

```text
/consultation?solution=...
```

The consultation flow should display the selected solution in its summary/context.

Do not break the existing product context functionality.

---

## 10. CONTACT CONTEXT

Solutions should also be able to pass context to Contact.

Example:

```text
/contact?solution=...
```

The Contact page should recognize the solution context without breaking existing:

```text
/contact?product=...
```

behavior.

If both product and solution context exist, preserve both.

---

## 11. SEARCH INTEGRATION

Update global search so that Solutions can appear as a searchable content type.

Add:

`Solutions`

to the existing content-type filters.

Search ranking should remain consistent with the existing search architecture.

Solutions should be searchable by:

* title
* category
* description
* business problem
* outcomes
* capabilities
* keywords

Do not make search index implementation-specific page content that isn't intended for discovery.

---

## 12. NAVIGATION INTEGRATION

The existing `Solutions` navigation item should now have meaningful destinations.

Use the existing navigation architecture.

Desktop:

* Solutions
* Explore all solutions
* Solution categories
* Featured solutions

Mobile:

* Solutions accordion
* Explore all
* Category links
* Featured/recommended links where appropriate

Do not redesign the global navigation.

---

# 13. SEO

Every solution page must support:

* unique `<title>`
* unique meta description
* canonical URL
* semantic heading hierarchy
* Open Graph metadata
* appropriate structured data
* BreadcrumbList schema

Where appropriate, implement:

* FAQPage schema
* Service/Organization-related schema where semantically valid

Do not generate artificial keyword-heavy content.

---

# 14. URL ARCHITECTURE

Use clean, descriptive URLs.

Examples:

```text
/solutions
/solutions/revenue-growth
/solutions/customer-experience
/solutions/business-automation
/solutions/people-operations
/solutions/financial-management
/solutions/data-intelligence
/solutions/technology-modernization
/solutions/cybersecurity
```

Do not use query parameters as the primary canonical URL for solution pages.

Query parameters are only for passing temporary context into Contact/Consultation.

---

# 15. RESPONSIVE DESIGN

Desktop:

* Editorial grid
* Generous whitespace
* Strong typography
* Structured cards
* Subtle interaction

Tablet:

* 2-column layouts where appropriate

Mobile:

* Single-column
* Touch-friendly controls
* No horizontal overflow
* Simplified recommendation experience

Do not create excessive animation.

Premium should come from:

* typography
* spacing
* hierarchy
* interaction quality
* restraint

---

# 16. ACCESSIBILITY

Implement:

* semantic HTML
* keyboard navigation
* visible focus states
* proper button/link semantics
* ARIA only where required
* accessible recommendation controls
* accessible cards
* correct heading hierarchy
* sufficient contrast

---

# 17. DATA ARCHITECTURE

Create a dedicated solution data model rather than hardcoding page content directly into components.

For example:

```text
Solution
├── id
├── slug
├── name
├── category
├── tagline
├── description
├── problem
├── outcomes
├── capabilities
├── productSlugs
├── serviceSlugs
├── relatedSolutionSlugs
├── keywords
├── seoTitle
└── seoDescription
```

Adapt this to the project's existing TypeScript conventions.

Do not duplicate Product or Service data.

---

# 18. IMPLEMENTATION SAFETY

Before modifying anything:

Inspect the existing architecture and reuse:

* existing ProductCard
* existing ServiceCard
* existing Breadcrumb
* existing Button
* existing SEO utilities
* existing routing patterns
* existing page metadata system
* existing search infrastructure

Do not create duplicate components when an existing component can be reused.

---

# 19. VALIDATION

After implementation verify:

```text id="j2zq5d"
Solutions landing page: PASS
Solution detail template: PASS
Solution routing: PASS
Solution discovery: PASS
Product relationships: PASS
Service relationships: PASS
Search integration: PASS
Contact context: PASS
Consultation context: PASS
SEO metadata: PASS
Responsive layout: PASS
Accessibility: PASS
Existing product flows: PASS
Existing service flows: PASS
```

Run:

```bash
npm run build
```

Build must pass.

Also verify that existing:

```text
/products
/products/category/:categorySlug
/products/:slug
/services
/services/category/:categorySlug
/services/:slug
/contact
/consultation
```

continue working.

---

# 20. IMPORTANT SCOPE LIMIT

Do NOT build:

* customer dashboards
* authenticated solution portals
* quotation systems
* payments
* product purchasing
* CRM functionality
* backend recommendation engines
* AI recommendation engines

This flow is primarily:

**DISCOVER → UNDERSTAND → EXPLORE → DISCUSS**

The existing product ecosystem remains the underlying catalogue.

---

## FINAL OUTPUT

Report:

```text
Flow 04 — Solutions & Business Discovery

Implemented:
- Solutions architecture
- Solutions landing page
- Solution discovery
- Solution detail template
- Product relationships
- Service relationships
- Recommendation experience
- Search integration
- Contact context
- Consultation context
- SEO
- Responsive behavior
- Accessibility

Build: PASS/FAIL

Existing flows:
Products: PASS/FAIL
Services: PASS/FAIL
Search: PASS/FAIL
Contact: PASS/FAIL
Consultation: PASS/FAIL
```

STOP after Flow 04.

Do not begin Flow 05 automatically.
::
