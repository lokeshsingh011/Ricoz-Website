# FLOW 32 — CASE STUDY DISCOVERY

## Objective

Implement the case-study discovery experience:

**Resources → Case Studies → Case Study**

Users should be able to enter the case-study library from Resources, understand what is available, browse the existing case-study catalogue, and open an individual case study.

Keep this flow focused on **discovery**. The detailed case-study storytelling will be handled in Flow 33.

---

## 1. Preserve Existing Architecture

Reuse:

* Existing resource catalogue/data model
* Existing case-study data
* Existing case-study IDs and slugs
* Existing `CaseStudyCard`
* Existing resource navigation
* Existing case-study detail route
* Existing SEO utilities
* Existing Ricoz design system

Treat case studies as part of the existing Resources ecosystem.

Do not create a separate CMS or duplicate case-study catalogue.

---

## 2. Entry from Resources

On `/resources`, provide a clear route into the case-study collection if it does not already exist.

Use an appropriate editorial entry such as:

**Case Studies**

with a concise supporting statement explaining that these resources demonstrate real project challenges, approaches, and outcomes where such content exists.

Link to:

`/resources/case-studies`

If an existing case-study route already exists, preserve that canonical route rather than creating another one.

---

## 3. Case Study Listing Page

Create/refine:

`/resources/case-studies`

Structure:

**Breadcrumb → Hero → Case Study Catalogue**

### Breadcrumb

Use:

**Resources → Case Studies**

Resources should link back to:

`/resources`

---

## 4. Hero

Create a concise editorial hero containing:

* H1: **Case Studies**
* Short supporting statement
* Live case-study count if supported by the existing catalogue

The count must come from actual data.

Do not use fictional project numbers, customer counts, revenue figures, or performance statistics.

---

## 5. Case Study Catalogue

Display available case studies using the existing `CaseStudyCard`.

Cards should use canonical case-study information such as:

* Case study title
* Short description/excerpt
* Category or capability where available
* Industry/sector where already present
* Existing supporting metadata

Do not invent metadata to make cards look fuller.

Maintain a consistent card layout across the catalogue.

---

## 6. Case Study Navigation

Clicking a case study should navigate to the existing canonical detail route.

Prefer:

`/resources/case-studies/:caseStudySlug`

If the application already uses another established canonical route, preserve it instead of introducing a competing route.

Do not create individual hardcoded page components.

Flow 33 will handle the detailed case-study experience.

---

## 7. Catalogue Ordering

Use the existing data ordering.

If the catalogue already contains:

* Featured case studies
* Publication dates
* Curated ordering
* Priority values

preserve that ordering.

Otherwise, use the existing catalogue order.

Do not introduce random ordering or artificial ranking.

---

## 8. Empty State

If no case studies exist, provide a clean editorial empty state rather than rendering empty cards.

Example structure:

**Case studies are coming soon**

with a simple path back to:

**Explore Resources**

Do not create fake case studies.

---

## 9. Data Integrity

Validate the complete case-study catalogue.

Ensure:

* Every case study has a unique slug
* Every case study resolves correctly
* No duplicate entries appear
* Existing metadata remains canonical
* Invalid records fail gracefully
* Cards link to valid detail routes

Where case studies are represented inside the broader resource catalogue, avoid rendering the same case study twice through conflicting data sources.

Use one canonical source of truth.

---

## 10. Responsive Behaviour

### Desktop

Use a clean editorial case-study grid with comfortable spacing.

### Tablet

Reduce grid density naturally.

### Mobile

Stack case-study cards into a readable single-column layout.

Ensure:

* No horizontal overflow
* Cards remain readable
* Metadata does not become cramped
* Touch targets are comfortable
* Typography scales correctly

---

## 11. Accessibility

Ensure:

* One clear H1
* Logical H2 structure
* Semantic breadcrumb navigation
* Accessible case-study links
* Keyboard navigation
* Visible focus states
* Sufficient contrast
* Meaningful link/card labels

Do not make non-semantic containers act as inaccessible links.

---

## 12. SEO

For `/resources/case-studies`:

* Unique page title
* Useful meta description
* Canonical URL
* Open Graph metadata
* Existing breadcrumb structured data where supported

For individual case studies, preserve their existing canonical metadata architecture.

Do not create duplicate indexable category/query URLs.

---

## 13. Visual System

Maintain the established Ricoz system:

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
* A separate visual identity for case studies

Case studies should feel like a natural premium section of Resources.

---

## 14. Scope Boundary

Do **not** implement:

* Case-study reading/exploration redesign
* Challenge → Approach → Outcome storytelling
* Related capabilities
* Product/service relationship redesign
* Resource search
* Advanced filtering
* AI recommendations
* Personalization
* CMS
* Backend
* Authentication
* Payments
* Contact redesign
* Consultation redesign

Those belong to other flows.

This flow is strictly:

**Resources → Case Studies → Case Study**

---

## 15. Validation

Test:

1. Open `/resources`
2. Confirm Case Studies entry exists
3. Navigate to the canonical case-study listing route
4. Verify breadcrumb
5. Verify hero
6. Verify live case-study count where supported
7. Verify multiple `CaseStudyCard` instances
8. Open several case studies
9. Confirm canonical case-study detail routes
10. Verify no duplicate case studies
11. Test empty/invalid catalogue records
12. Test desktop/tablet/mobile
13. Test keyboard accessibility
14. Check SEO metadata
15. Check console for new errors
16. Run the production build

Resolve only issues introduced by this flow.

## Success Criteria

A user can naturally move through:

**Resources → Case Studies → Browse Case Studies → Case Study Detail**

using the existing resource/case-study architecture, canonical data, established card components, and Ricoz design system.
