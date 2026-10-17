# FLOW 34 — RESOURCE → CONVERSION

## Objective

Implement the conversion journey:

**Resource → Relevant Product / Service → Contact / Consultation**

A user reading a resource should have a clear, contextually relevant path toward taking the next business action without disrupting the reading experience.

Use the existing Product, Service, Contact, and Consultation architecture.

---

## 1. Preserve Existing Architecture

Reuse:

* Existing resource catalogue
* Existing resource IDs and slugs
* Existing `ResourceDetail`
* Existing product catalogue
* Existing service catalogue
* Existing `ProductCard`
* Existing `ServiceCard`
* Existing Contact flow
* Existing Consultation flow
* Existing routing utilities
* Existing SEO utilities
* Existing Ricoz design system

Do not create a new conversion system.

---

## 2. Determine Conversion Context

Use only legitimate relationships already present in the resource data.

Possible contexts:

**Resource → Product**

**Resource → Service**

**Resource → Product + Service**

If no valid product/service relationship exists, use the general Ricoz conversion path.

Do not invent a product or service relationship simply to create a CTA.

---

## 3. Product Conversion

When a resource has a valid related product:

Provide a clear next-step section such as:

**Explore the product behind this capability**

Use the existing `ProductCard` or a compact product presentation consistent with the existing design system.

Product navigation:

`/products/:productSlug`

From the product detail page, the user can continue through the already implemented Product ecosystem.

Do not create a resource-specific product page.

---

## 4. Service Conversion

When a resource has a valid related service:

Provide a clear next-step section such as:

**Get expert support for this challenge**

Use the existing `ServiceCard` or established service presentation.

Service navigation:

`/services/:serviceSlug`

The existing dynamic `ServiceDetail` experience handles the destination.

Do not create a resource-specific service page.

---

## 5. Contact Conversion

Where a specific product or service relationship exists, provide a contextual Contact action.

Product context:

`/contact?product=:productSlug`

Service context:

`/contact?service=:serviceSlug`

The existing Contact flow should:

* Resolve the context
* Display the selected product/service
* Preserve it through validation
* Reference it in confirmation

Do not redesign the Contact flow.

---

## 6. Consultation Conversion

Where a specific product or service relationship exists, provide:

**Schedule a Consultation**

using the existing contextual consultation routes.

Product:

`/consultation?product=:productSlug`

Service:

`/consultation?service=:serviceSlug`

The existing consultation flow should preserve the selected context through its existing five-step journey and confirmation.

Do not create a new consultation wizard.

---

## 7. General Conversion

If the resource has no valid product/service relationship, provide a general conversion path:

**Discuss your requirements**

`/contact`

and/or:

**Schedule a Consultation**

`/consultation`

Keep the CTA useful without pretending that the resource represents a specific product or service.

---

## 8. CTA Hierarchy

Do not overload the page with competing calls to action.

Use a clear hierarchy:

### Primary

**Discuss this**

or the most relevant contextual action.

### Secondary

**Schedule a Consultation**

Where a specific product/service is available, preserve that context.

The final CTA should feel like a natural continuation of the resource rather than an advertisement interrupting the article.

---

## 9. Context Preservation

When entering Contact or Consultation from a resource:

* Preserve the relevant product/service context
* Do not lose context during form validation
* Preserve context between wizard steps
* Show context in the final review where supported
* Show context in confirmation where supported
* Provide a path back to the originating resource/product/service where appropriate

Do not pass arbitrary resource data into forms.

Only pass the canonical product/service slug when a legitimate relationship exists.

---

## 10. Multiple Relationships

If a resource is associated with multiple products/services:

Do not create an overwhelming CTA section.

Prioritize using existing data relationships.

Present a small, useful set of relevant products/services and allow the user to choose their next destination.

Do not introduce recommendation algorithms.

Do not rank relationships using AI.

---

## 11. Responsive Behaviour

### Desktop

Use a restrained conversion section with clear hierarchy and comfortable spacing.

### Tablet

Maintain readable cards and CTA grouping.

### Mobile

Stack:

* Related product/service content
* Primary CTA
* Secondary CTA

Ensure:

* No horizontal overflow
* Buttons are full-width or comfortably sized
* Touch targets are accessible
* Context remains obvious

---

## 12. Accessibility

Ensure:

* Semantic headings
* Accessible product/service links
* Clearly labelled CTA buttons
* Keyboard navigation
* Visible focus states
* Sufficient contrast
* Meaningful link destinations

Do not use ambiguous labels such as simply **Click Here**.

---

## 13. SEO

Do not create additional indexable URLs for resource conversion states.

Query parameters such as:

`?product=:productSlug`

and:

`?service=:serviceSlug`

represent contextual navigation into existing canonical Contact/Consultation pages.

Preserve canonical SEO behaviour.

Do not create duplicate resource pages for different CTA states.

---

## 14. Visual System

Maintain the Ricoz system:

* Ricoz Red `#C41230`
* Manrope typography
* Warm off-white background
* Near-black text
* Thin borders
* 8px spacing scale
* 4px radius
* Minimal shadows
* Restrained editorial technology aesthetic

The conversion section should feel like part of the Resource experience, not a separate marketing component.

Do not introduce:

* Gradients
* Glassmorphism
* Heavy shadows
* Excessive animation
* Pop-ups
* Sticky conversion overlays
* Aggressive sales patterns

---

## 15. Data Integrity

Validate all resource relationships.

For every resource:

* Product references resolve to canonical products
* Service references resolve to canonical services
* Invalid references are ignored
* Duplicate relationships are removed
* No fake fallback relationships are generated
* CTA URLs use valid canonical slugs

A broken relationship must never break the resource page.

---

## 16. Scope Boundary

Do **not** implement:

* Lead scoring
* CRM
* Backend submission
* Payments
* Authentication
* AI recommendations
* Personalization
* Marketing automation
* Pop-up lead forms
* New contact architecture
* New consultation architecture
* New product architecture
* New service architecture
* Resource search
* Resource filtering
* Case-study redesign
* CMS

This flow is strictly:

**Resource → Relevant Product / Service → Contact / Consultation**

---

## 17. Validation

Test multiple resource scenarios:

1. Resource with a related product
2. Resource with a related service
3. Resource with both
4. Resource with no valid relationships
5. Verify product navigation
6. Verify service navigation
7. Verify product-context Contact
8. Verify service-context Contact
9. Verify product-context Consultation
10. Verify service-context Consultation
11. Confirm context survives form/wizard steps
12. Confirm confirmation references the correct context
13. Verify no broken relationships
14. Test desktop/tablet/mobile
15. Test keyboard accessibility
16. Check SEO/canonical behaviour
17. Check console for new errors
18. Run the production build

Resolve only issues introduced by this flow.

The existing catalogue bundle-size warning is acceptable if it remains the only expected warning.

## Success Criteria

A user can naturally move from:

**Resource → Relevant Product / Service → Contact or Consultation**

while preserving legitimate context, using the existing ecosystem routes and conversion architecture without introducing unnecessary infrastructure.
