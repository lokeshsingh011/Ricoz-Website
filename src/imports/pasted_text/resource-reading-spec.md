# FLOW 31 — ARTICLE / RESOURCE READING

## Objective

Implement the complete individual resource-reading experience:

**Resource → Article → Related Products / Services → CTA**

The goal is to make every resource detail page useful, readable, and connected to the existing Ricoz ecosystem without creating a new content-management architecture.

---

## 1. Preserve Existing Architecture

Reuse:

* Existing resource catalogue/data model
* Existing resource IDs and slugs
* Existing resource types
* Existing `ResourceDetail` architecture
* Existing `/resources/:resourceSlug` route
* Existing `ResourceCard`
* Existing Product catalogue and `ProductCard`
* Existing Service catalogue and `ServiceCard`
* Existing Contact flow
* Existing Consultation flow
* Existing SEO utilities
* Existing Ricoz design system

Do not create separate hardcoded pages for individual articles/resources.

---

## 2. Resource Detail Structure

The page should follow this hierarchy:

**Breadcrumb → Resource Header → Article Content → Related Products → Related Services → Conversion CTA**

Only render sections for which valid content exists.

---

## 3. Resource Header

Display:

* Breadcrumb: `Resources → Category → Resource`
* Resource type where available
* Category
* Publication date where available
* Resource title as H1
* Short description / excerpt
* Author information where already present

Keep the header editorial and focused.

Do not invent:

* Authors
* Publication dates
* Reading times
* Statistics
* Editorial claims

Only display metadata that exists in the resource data.

---

## 4. Article / Resource Content

Render the resource's existing content using a readable editorial layout.

Support the content structures already present in the data model, such as:

* Paragraphs
* Headings
* Lists
* Quotes
* Callouts
* Existing images/media where provided

Do not introduce a new rich-text editor or CMS.

Prioritize:

* Comfortable reading width
* Strong typography hierarchy
* Clear paragraph spacing
* Easy scanning
* Consistent heading levels

Avoid excessive decorative elements.

---

## 5. Reading Experience

The content area should feel substantially more editorial than the catalogue cards.

Use:

* Narrow readable content width
* Clear H2/H3 hierarchy
* Comfortable line height
* Appropriate whitespace
* Strong distinction between body content and supporting UI

On long resources, preserve natural section progression.

Do not add unnecessary animations or sticky elements that interfere with reading.

---

## 6. Related Products

Use existing resource-to-product relationships where available.

Resolve relationships against the canonical product catalogue.

Before rendering:

* Remove invalid references
* Remove duplicates
* Use canonical product information
* Do not invent relationships

Use the existing `ProductCard`.

Suggested heading:

**Products related to this resource**

Only render this section when valid related products exist.

Clicking a product must navigate to:

`/products/:productSlug`

---

## 7. Related Services

Use existing resource-to-service relationships where available.

Resolve relationships against the canonical service catalogue.

Before rendering:

* Remove invalid references
* Remove duplicates
* Use canonical service information
* Do not invent relationships

Use the existing `ServiceCard`.

Suggested heading:

**Services related to this resource**

Only render when valid related services exist.

Clicking a service must navigate to:

`/services/:serviceSlug`

---

## 8. Resource → Conversion

At the end of the resource, provide a restrained conversion section.

Use the resource's legitimate product/service context where available.

Primary actions may route to:

`/contact?product=:productSlug`

or:

`/contact?service=:serviceSlug`

and:

`/consultation?product=:productSlug`

or:

`/consultation?service=:serviceSlug`

If the resource has no specific product/service relationship, use the existing general conversion routes:

`/contact`

`/consultation`

Do not invent a product or service simply to create a contextual CTA.

---

## 9. Breadcrumb Navigation

Maintain:

**Resources → Category → Resource**

Each valid parent should be navigable.

If a category route does not exist in the current architecture, do not create a new category system solely for breadcrumbs.

The Resources breadcrumb must always return to:

`/resources`

---

## 10. Resource Navigation

Provide a subtle way to continue exploring the resource library after reading.

Use existing routes/components where available.

Examples:

**Back to Resources**

or an existing resource-navigation mechanism.

Do not implement a new recommendation engine.

---

## 11. Responsive Behaviour

### Desktop

Use a focused reading column with supporting sections below.

### Tablet

Maintain readable content width and reduce surrounding density.

### Mobile

Stack:

* Header
* Article content
* Related products
* Related services
* CTA

Ensure:

* No horizontal overflow
* Images/media remain responsive
* Headings do not break awkwardly
* Body text remains comfortable to read
* Buttons remain easy to tap

---

## 12. Accessibility

Ensure:

* One clear H1
* Logical H2/H3 hierarchy
* Semantic article structure
* Accessible links
* Keyboard navigation
* Visible focus states
* Appropriate contrast
* Meaningful image alt text where image metadata exists

Do not use heading elements purely for visual styling.

---

## 13. SEO

For every resource detail page:

* Unique title
* Unique meta description
* Canonical URL
* Open Graph metadata
* Appropriate article/resource structured data where supported by existing utilities
* Breadcrumb structured data where applicable

Use the actual resource content and metadata.

Do not create duplicate indexable URLs.

---

## 14. Data Integrity

Validate the resource catalogue:

* Every resource resolves by slug
* Resource content is present where expected
* Related products resolve correctly
* Related services resolve correctly
* No duplicate relationships
* Invalid references fail gracefully
* Missing optional fields do not produce broken UI

Do not modify unrelated product/service/resource data.

---

## 15. Visual System

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

Do not introduce:

* Gradients
* Glassmorphism
* Heavy shadows
* Excessive animation
* Decorative stock imagery
* New visual language

---

## 16. Scope Boundary

Do **not** implement:

* Resource search
* Advanced filtering
* CMS
* Backend content management
* AI-generated summaries
* AI recommendations
* Personalization
* Comments
* Ratings
* Social/community features
* New product/service architecture
* Case-study discovery
* Case-study redesign
* New contact architecture
* New consultation architecture

This flow is specifically:

**Resource → Read → Discover legitimate related Products/Services → Convert**

---

## 17. Validation

Test multiple resource types where available:

1. Open a resource from `/resources`
2. Confirm breadcrumb
3. Verify resource header
4. Verify article content rendering
5. Test long-form content
6. Verify optional metadata
7. Verify related products where relationships exist
8. Verify related services where relationships exist
9. Test resources with no relationships
10. Verify product links
11. Verify service links
12. Test Contact CTA context
13. Test Consultation CTA context
14. Test mobile/tablet/desktop
15. Test keyboard accessibility
16. Check SEO metadata
17. Test invalid resource slug
18. Check console for new errors
19. Run the production build

Resolve only issues introduced by this flow.

## Success Criteria

A user can naturally move through:

**Resource Discovery → Resource Detail → Comfortable Reading Experience → Relevant Products/Services → Contact or Consultation**

using the existing resource, product, service, and conversion architecture without introducing unnecessary infrastructure.
