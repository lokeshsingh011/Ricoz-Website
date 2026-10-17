# FLOW 25 — SOLUTION EXPLORATION

## Objective

Implement the complete **Solution Detail exploration experience** so a user can move from:

**Solution → Overview → Business Need → Capabilities → Products → Services → FAQs → Conversion**

Use the existing solution catalogue and existing dynamic `SolutionDetail` architecture. Do not create separate hardcoded pages for individual solutions.

---

## 1. Preserve Existing Architecture

Keep and reuse:

* Existing solution data/model
* Existing solution IDs, slugs, categories
* Existing `SolutionCard`
* Existing `SolutionDetail`
* Existing `/solutions/:solutionSlug` route
* Existing product catalogue and `ProductCard`
* Existing service catalogue and `ServiceCard`
* Existing SEO utilities
* Existing contact and consultation flows
* Existing Ricoz design system

Do not replace working data or create duplicate solution structures.

---

## 2. Solution Detail Page Structure

Ensure `/solutions/:solutionSlug` follows this hierarchy:

**Breadcrumb → Hero → Overview → Business Need → Capabilities → Products → Services → FAQs → Final CTA**

### Hero

Show:

* Breadcrumb: Solutions → Category → Solution
* Solution category
* Solution name as H1
* Solution-specific tagline/hero statement
* Short supporting description
* Primary CTA: **Discuss this solution**
* Secondary CTA: **Schedule a Consultation**

Keep the hero editorial and concise.

---

## 3. Overview

Use the solution's existing overview/content fields.

Present:

* What the solution is
* What it is designed to address
* Key contextual metadata where available

Do not invent statistics, customer claims, certifications, integrations, or outcomes.

---

## 4. Business Need

Create a dedicated section using the solution's existing problem/need information.

Structure it around:

**The challenge → Why it matters → How the solution addresses it**

If the existing data uses a different field name, map it cleanly rather than modifying the underlying catalogue unnecessarily.

If no meaningful business-need content exists, omit the section rather than displaying empty UI.

---

## 5. Capabilities

Surface the solution's actual capabilities.

Use a restrained editorial/card layout.

Each capability should clearly communicate:

* Capability name
* Short explanation where available
* Relevant supporting information from the existing solution data

Do not create artificial capabilities just to fill the page.

---

## 6. Related Products

Use the solution's existing product relationships.

For every related product:

* Resolve against the existing product catalogue
* Ignore invalid product slugs/IDs
* Remove duplicates
* Use the existing `ProductCard`
* Link to `/products/:productSlug`

Section heading:

**Products that support this solution**

Only show the section when valid related products exist.

Do not redesign the product catalogue.

---

## 7. Related Services

Use the solution's existing service relationships.

For every related service:

* Resolve against the existing service catalogue
* Ignore invalid references
* Remove duplicates
* Use the existing `ServiceCard`
* Link to `/services/:serviceSlug`

Section heading:

**Services that help deliver it**

Only render the section when valid services exist.

Do not create new service relationships automatically.

---

## 8. FAQs

Use the solution's existing FAQ content.

Implement an accessible accordion:

* Question
* Expand/collapse interaction
* Keyboard accessible
* Clear focus state
* Only one visual treatment across all solutions

If FAQs exist, render the FAQ section.

If the solution has no FAQs, omit the section.

Where valid FAQ data exists, preserve existing FAQ structured-data utilities rather than creating duplicate schema logic.

---

## 9. Final Conversion

End the solution page with a concise solution-specific CTA.

Primary:

**Discuss this solution**

Secondary:

**Schedule a Consultation**

Both actions must preserve the current solution context.

Use:

`/contact?solution=:solutionSlug`

and:

`/consultation?solution=:solutionSlug`

Do not build a new contact or consultation system in this flow.

---

## 10. Navigation Context

Maintain clear movement through the ecosystem:

**Solutions → Solution Category → Solution**

and from the solution:

**Solution → Product**

**Solution → Service**

**Solution → Contact**

**Solution → Consultation**

Preserve the user's solution context when entering conversion flows.

---

## 11. SEO

For every solution detail page:

* Unique `<title>`
* Unique meta description
* Canonical URL
* Open Graph metadata
* Existing breadcrumb structured data
* Appropriate solution/page structured data where already supported

Do not create duplicate indexable routes.

Use the actual solution name, category, and content for metadata.

---

## 12. Responsive & Accessibility

### Desktop

Use the existing editorial layout with comfortable content width and clear section separation.

### Tablet

Reduce column density while preserving hierarchy.

### Mobile

Stack:

* Hero content
* Capabilities
* Products
* Services
* FAQ
* CTAs

Ensure:

* No horizontal overflow
* Cards remain readable
* Buttons remain usable
* Accordion controls are touch-friendly
* Keyboard navigation works
* Semantic H1/H2 hierarchy is maintained
* Contrast remains accessible

---

## 13. Ricoz Visual System

Preserve the existing system:

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
* Excessive shadows
* Excessive animation
* Decorative stock imagery
* New visual language

---

## 14. Data Integrity

Validate the complete solution catalogue:

* Every solution resolves correctly
* Every slug is unique
* Category references are valid
* Related products resolve correctly
* Related services resolve correctly
* No self/duplicate relationships
* Empty content does not create broken sections
* All solution detail links work

Do not modify the existing solution catalogue unless required to fix an actual broken reference.

---

## 15. Scope Boundary

Do **not** implement in this flow:

* Solution search
* Advanced solution filtering
* New solution categories
* Related-resource discovery
* AI recommendations
* Personalization
* Purchasing
* Payments
* Authentication
* Backend/CRM
* CMS
* New consultation/calendar architecture
* New contact architecture
* Unrelated homepage/page redesigns

This flow is specifically for **deep exploration of an individual solution**.

---

## 16. Validation

After implementation verify:

1. Open `/solutions`
2. Open multiple solution cards
3. Confirm each solution resolves dynamically
4. Verify Hero → Overview → Business Need → Capabilities
5. Verify related products
6. Verify related services
7. Verify FAQs
8. Verify Contact CTA preserves `solution` context
9. Verify Consultation CTA preserves `solution` context
10. Test invalid solution slug gracefully
11. Test desktop/tablet/mobile layouts
12. Test keyboard accessibility
13. Check SEO metadata
14. Run the production build

Do not introduce unrelated changes.

## Success Criteria

A user can now move naturally through:

**Solutions → Solution Detail → Understand the Problem → Explore Capabilities → Discover Products & Services → Read FAQs → Discuss / Schedule**

using one reusable, data-driven `SolutionDetail` architecture across the entire solution catalogue.
