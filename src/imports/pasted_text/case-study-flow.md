# FLOW 33 — CASE STUDY EXPLORATION

## Objective

Implement the individual case-study experience:

**Case Study → Challenge → Approach → Outcome → Related Capabilities**

The page should communicate the case study as a structured business story, using only the existing case-study data and legitimate relationships.

Do not invent project results, customer claims, metrics, or capabilities.

---

## 1. Preserve Existing Architecture

Reuse:

* Existing case-study catalogue
* Existing case-study IDs and slugs
* Existing `CaseStudyCard`
* Existing case-study detail architecture
* Existing `/resources/case-studies/:caseStudySlug` route
* Existing product/service catalogues
* Existing capability/category data
* Existing SEO utilities
* Existing Ricoz design system

Do not create separate hardcoded components for individual case studies.

---

## 2. Case Study Page Structure

The detail page should follow:

**Breadcrumb → Hero → Challenge → Approach → Outcome → Related Capabilities → CTA**

Only render sections when valid content exists.

---

## 3. Breadcrumb

Use:

**Resources → Case Studies → Case Study**

Links should use the existing canonical routes.

The Resources link should return to:

`/resources`

The Case Studies link should return to:

`/resources/case-studies`

Do not introduce another case-study listing URL.

---

## 4. Hero

Display:

* Case study category/type where available
* Case study title as H1
* Short summary/description
* Existing project/industry metadata where available

If the catalogue contains a client/project identifier that is intended for public display, use it.

Do not fabricate:

* Client names
* Industries
* Dates
* Project sizes
* Performance metrics

Keep the hero editorial and concise.

---

## 5. Challenge

Create a dedicated section explaining the problem or business challenge.

Use the case study's existing challenge/problem content.

Recommended hierarchy:

**The Challenge**

Then present the actual case-study content in a readable editorial format.

Do not rewrite the underlying data unnecessarily.

If no challenge information exists, omit the section rather than generating filler.

---

## 6. Approach

Create a dedicated section describing how the challenge was addressed.

Use the existing approach/process/solution information.

Recommended hierarchy:

**The Approach**

Where structured steps exist, present them clearly as sequential content.

For example:

1. Understand
2. Plan
3. Execute
4. Improve

Only use step labels that actually exist in the case-study data.

Do not invent methodology names or project stages.

---

## 7. Outcome

Create a dedicated outcome section using the actual outcome/result information available.

Recommended hierarchy:

**The Outcome**

Where the catalogue contains structured outcomes or metrics, present them clearly.

If quantified results exist, use the exact values from the data.

If outcomes are qualitative, present them as concise outcome statements.

Do not manufacture:

* Percentages
* Revenue figures
* Customer growth
* Efficiency gains
* ROI
* Awards
* Testimonials

---

## 8. Related Capabilities

Connect the case study to relevant existing Ricoz capabilities.

Use the relationships already present in the case-study data.

Resolve each capability against the canonical catalogue where applicable.

Before rendering:

* Remove invalid references
* Remove duplicates
* Preserve canonical names
* Prevent broken links

If the existing architecture represents capabilities through Products, Services, Solutions, or categories, reuse those established relationships rather than creating a new capability taxonomy.

Only display legitimate relationships.

---

## 9. Related Products / Services

If the existing case-study data already contains explicit product or service relationships, preserve them where they are already supported by the current architecture.

Do not create new relationship logic in this flow.

The primary focus remains:

**Challenge → Approach → Outcome → Related Capabilities**

Product/service conversion relationships will remain governed by the existing ecosystem architecture.

---

## 10. CTA

End with a concise conversion area.

Where legitimate context exists, provide:

**Discuss a similar challenge**

and/or

**Schedule a Consultation**

Use the existing routes and preserve available case-study context where the current conversion architecture supports it.

Do not create a new booking or contact system.

If no contextual conversion is supported, use the existing general:

`/contact`

and:

`/consultation`

routes.

---

## 11. Content Rendering

Support content structures already present in the case-study model, such as:

* Paragraphs
* Headings
* Lists
* Structured steps
* Outcome statements
* Existing images/media

Do not introduce a CMS or rich-text editor.

Use a focused editorial reading width and generous spacing.

---

## 12. Responsive Behaviour

### Desktop

Use a strong editorial hierarchy with clear separation between:

**Challenge → Approach → Outcome**

### Tablet

Reduce content density while preserving the storytelling sequence.

### Mobile

Stack all sections vertically.

Ensure:

* No horizontal overflow
* Images remain responsive
* Long titles wrap naturally
* Outcome information remains easy to scan
* CTA buttons remain usable
* Related capability links/cards remain accessible

---

## 13. Accessibility

Ensure:

* One clear H1
* Logical H2/H3 hierarchy
* Semantic article structure
* Accessible breadcrumbs
* Keyboard-accessible links
* Visible focus states
* Appropriate contrast
* Meaningful alt text for existing images

Do not use visual styling as a replacement for semantic structure.

---

## 14. SEO

For every case-study detail page:

* Unique title
* Unique meta description
* Canonical URL
* Open Graph metadata
* Breadcrumb structured data
* Appropriate Article/Case Study structured data where supported by the existing SEO architecture

Use the actual case-study information.

Do not generate duplicate indexable URLs.

---

## 15. Visual System

Maintain the existing Ricoz system:

* Ricoz Red `#C41230`
* Manrope typography
* Warm off-white background
* Near-black text
* Thin borders
* 8px spacing scale
* 4px radius
* Minimal shadows
* Restrained editorial technology aesthetic

The case-study page should feel premium and editorial without becoming visually heavy.

Do not introduce:

* Gradients
* Glassmorphism
* Excessive animation
* Heavy shadows
* Decorative stock imagery
* A separate case-study design language

---

## 16. Data Integrity

Validate the case-study catalogue:

* Unique case-study slugs
* Valid detail routes
* Valid challenge content where expected
* Valid approach content where expected
* Valid outcome content where expected
* Valid capability relationships
* No duplicate relationships
* Invalid references fail gracefully
* Missing optional sections do not create broken layouts

Use one canonical case-study data source.

---

## 17. Scope Boundary

Do **not** implement:

* Case-study search
* Advanced filtering
* New case-study taxonomy
* CMS
* Backend
* AI-generated summaries
* AI recommendations
* Personalization
* Fake metrics
* Fake testimonials
* New product/service architecture
* New capability taxonomy
* New contact architecture
* New consultation architecture

This flow is specifically:

**Case Study → Challenge → Approach → Outcome → Related Capabilities**

---

## 18. Validation

Test multiple case studies:

1. Open a case study from `/resources/case-studies`
2. Verify breadcrumb
3. Verify hero
4. Verify Challenge section
5. Verify Approach section
6. Verify Outcome section
7. Verify related capabilities
8. Verify optional product/service relationships where already supported
9. Verify CTA behaviour
10. Test case studies with missing optional sections
11. Test invalid capability references
12. Test desktop/tablet/mobile
13. Test keyboard accessibility
14. Check SEO metadata
15. Test invalid case-study slug
16. Check console for new errors
17. Run the production build

Resolve only issues introduced by this flow.

The existing catalogue bundle-size warning is acceptable if it remains the only expected warning.

## Success Criteria

A user can move naturally from:

**Case Study Discovery → Case Study → Understand the Challenge → Understand the Approach → See the Outcome → Explore Related Capabilities → Continue to Conversion**

using the existing data, routes, components, and Ricoz design system.
