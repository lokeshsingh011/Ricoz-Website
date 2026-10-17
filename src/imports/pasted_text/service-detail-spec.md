Implement **FLOW 19 — SERVICE DETAIL EXPLORATION** for the Ricoz platform.

### Objective

Strengthen the existing dynamic Service Detail experience so a user can fully understand a service before deciding what to do next.

The intended journey is:

**Service → Problem → Capabilities → Process → Outcomes → FAQs**

This is the core informational experience for an individual service.

Build on the existing `ServiceDetail.tsx` architecture and preserve the service-related flows already implemented.

---

## 1. Preserve Existing Architecture

Use the existing:

* `/services/:serviceSlug`
* service catalogue/data model
* service slugs and IDs
* service category relationships
* `ServiceDetail.tsx`
* existing `ServiceCard`
* React Router
* SEO utilities
* existing Contact and Consultation routes
* existing related-product/service relationships where already implemented
* Ricoz design system

The existing service data remains the single source of truth.

Do not create separate detail pages or duplicate service data.

---

## 2. Dynamic Service Resolution

The detail page must resolve the service from the existing slug.

Expected route:

`/services/:serviceSlug`

The page should correctly render different content for different services without hard-coded service-specific layouts.

If the slug is invalid:

* show an appropriate not-found state
* provide a clear route back to `/services`
* do not render misleading placeholder content

---

## 3. Detail Hero

Create a focused service-detail hero with a clear hierarchy.

Recommended structure:

**Breadcrumb**
→ Services
→ Category
→ Service

Then:

* category/context badge
* service name as H1
* concise service statement
* supporting description
* primary CTA
* secondary CTA where already supported

The hero should answer immediately:

**What is this service?**
**Why might I need it?**
**What can I do next?**

Avoid excessive hero content.

Do not invent statistics, customers, certifications, guarantees, awards, or performance claims.

---

## 4. Problem / Need Section

Introduce a clear section explaining the business problem or need the service addresses.

Use existing service data wherever a problem, overview, need, description, or equivalent field exists.

The section should communicate:

**The situation → The challenge → Why this service exists**

If the current data does not contain a dedicated problem statement, derive the presentation from existing descriptive content without inventing new claims.

Do not fabricate pain points that are unsupported by the service data.

---

## 5. Capabilities Section

Create a dedicated **Capabilities** section.

Use the existing service capability information.

Present capabilities in a structured, scannable format such as:

* numbered items
* compact cards
* editorial list/grid

Each capability should be individually understandable.

Do not invent additional capabilities.

If the service contains a substantial capability list, maintain a clear visual hierarchy without overwhelming the page.

---

## 6. Process Section

Add a clear **Process** section explaining how the service works.

Use the existing process/steps data if available.

Present the process sequentially.

Example structure:

**01 → 02 → 03 → 04**

Each step should contain:

* step number
* step title
* concise explanation

If a service does not currently have explicit process data, do not invent a detailed operational process.

Instead, use only the process information already available or keep this section appropriately minimal.

---

## 7. Outcomes / Benefits

Create a dedicated **Outcomes** or **What you achieve** section.

Use existing outcomes, benefits, results, or equivalent service fields.

Focus on the value the service is intended to provide.

Do not make guaranteed claims.

Avoid fabricated numerical improvements such as:

* percentage increases
* cost savings
* response times
* ROI
* performance guarantees

unless those values already exist as authoritative service data.

---

## 8. FAQs

Create or refine the service FAQ section using existing FAQ data where available.

Use an accessible accordion.

Each FAQ should contain:

* question
* answer

Only display questions and answers that actually exist in the service data.

Do not generate fake FAQs simply to fill space.

The accordion should support:

* keyboard navigation
* clear expanded/collapsed state
* accessible controls
* comfortable mobile interaction

---

## 9. Detail Page Hierarchy

Maintain a strong reading sequence:

**Hero**
↓
**Problem / Need**
↓
**Capabilities**
↓
**Process**
↓
**Outcomes**
↓
**FAQs**
↓
**Next Action / Existing CTAs**

The page should feel like a coherent narrative rather than a collection of disconnected cards.

Do not add unnecessary sections just to increase page length.

---

## 10. Existing Conversion Paths

Preserve existing Service Detail CTAs and route behavior.

Where already supported, users should be able to continue toward:

* Contact
* Consultation

Do not rebuild either destination flow in this task.

If existing context-passing architecture is already present, preserve it so the selected service can remain associated with the next step.

Do not claim that a consultation is actually booked unless a real scheduling system exists.

---

## 11. Category Context

Maintain a clear connection to the service category.

The user should be able to navigate:

**Service → Category → Other Services**

The category name should be linked to the existing:

`/services/category/:categorySlug`

Do not create a duplicate category-navigation system.

---

## 12. SEO + Structured Data

Ensure each valid service detail page has dynamic SEO metadata based on the service.

Preserve/use the existing SEO utilities.

Where appropriate:

* dynamic title
* meta description
* canonical URL
* breadcrumb structured data
* Service structured data if the existing data model supports it
* FAQ structured data when the FAQ content qualifies

Do not generate misleading structured data.

Invalid service slugs should not behave like valid indexable service pages.

---

## 13. Responsive Behavior

Validate:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* strong editorial hero
* clear content sections
* efficient capability/process layouts
* readable FAQ area

Tablet:

* naturally reduce columns
* preserve hierarchy
* avoid cramped layouts

Mobile:

* single-column flow where appropriate
* readable section spacing
* compact capability/process presentation
* accessible FAQ accordion
* comfortable CTA targets
* no horizontal overflow

---

## 14. Visual Direction

Preserve the Ricoz system:

* Ricoz Red `#C41230`
* Manrope 400/500/600
* warm off-white background
* `#111111` primary text
* restrained muted text
* thin borders
* 4px radius
* 8px spacing scale
* minimal shadows
* no gradients
* no glassmorphism
* no excessive animation

The Service Detail page should feel like the service equivalent of the refined Product Detail experience.

Keep the design premium, restrained, editorial and highly readable.

---

## Scope Boundary

Do NOT implement:

* related products
* related services
* contact redesign
* consultation redesign
* service search
* service filtering
* AI recommendations
* personalization
* purchasing
* payments
* authentication
* CRM
* backend APIs
* CMS
* fabricated testimonials
* fabricated case studies
* fabricated statistics
* new service data
* new service taxonomy
* major global navigation redesign

Related product/service flows will be handled separately.

---

## Validation

After implementation:

1. Open multiple real service detail URLs.
2. Verify the correct service data resolves for each slug.
3. Verify breadcrumb hierarchy.
4. Verify the hero content is service-specific.
5. Verify the Problem/Need section uses valid existing data.
6. Verify capabilities match the service data.
7. Verify process information is accurate.
8. Verify outcomes/benefits contain no fabricated claims.
9. Verify FAQ accordion behavior.
10. Verify Contact and Consultation CTAs still work.
11. Verify service context is preserved where the existing architecture supports it.
12. Verify category links work.
13. Verify SEO metadata changes correctly between services.
14. Verify structured data does not contain fabricated information.
15. Test invalid service slugs.
16. Test desktop, tablet and mobile layouts.
17. Test keyboard accessibility.
18. Run the production build.

Fix actual build/runtime/type errors introduced by this flow.

Do not treat an existing bundle-size warning as a failure if the production build otherwise passes.

### Final principle

**A Service Detail page should make the service understandable before asking the user to act: identify the problem, explain the capability, show the process, clarify the outcome, answer the questions, then provide the next step.**
