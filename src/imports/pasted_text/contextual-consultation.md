### Figma Make Prompt — Flow 41: Contextual Consultation

Implement **Flow 41 — Contextual Consultation** for the Ricoz platform.

**Journey:**
Product / Service / Solution → Schedule Consultation → Purpose Pre-selected → Booking → Confirmation

### Objective

Connect Product, Service and Solution experiences to the existing 5-step consultation wizard so visitors can schedule a consultation with their selected context already established.

Do not create separate consultation flows for Products, Services or Solutions.

### Preserve Existing Architecture

Reuse:

* existing `/consultation` route
* existing 5-step consultation wizard from Flow 40
* existing purpose selection
* existing date and time selection
* existing contact details
* existing review/confirmation
* existing Product, Service and Solution catalogues
* existing slugs and relationships
* existing Ricoz design system

### Contextual Entry Routes

Support the existing contextual patterns:

**Product**

`/consultation?product=:productSlug`

**Service**

`/consultation?service=:serviceSlug`

**Solution**

`/consultation?solution=:solutionSlug`

Resolve each value against its existing catalogue.

Do not manually hardcode names into routing logic.

### Context Resolution

When a valid context exists:

1. Resolve the Product, Service or Solution.
2. Display a concise context banner near the beginning of the consultation experience.
3. Clearly identify what the consultation is about.
4. Preserve this context through all five steps.

Example structure:

**Consultation about**
[Product / Service / Solution Name]

Where useful, existing category information may appear as secondary context.

### Step 1 — Purpose

When entering through a valid Product, Service or Solution context:

* preselect the existing **Product Demo / relevant existing purpose** where that option already exists
* allow the visitor to change the purpose if the existing wizard permits it
* do not create duplicate purpose options
* preserve the selection while navigating through the wizard

The contextual entry should influence the existing purpose selection without changing the underlying purpose architecture.

### Steps 2–4

Continue using the exact Flow 40 wizard:

**Step 2 — Preferred Date**

* preserve context
* preserve selected date

**Step 3 — Available Time**

* preserve context
* preserve selected date and time

**Step 4 — Contact Details**

* preserve context
* preserve entered contact information
* preserve validation behavior

Do not redesign these steps.

### Step 5 — Review

The final review must clearly show the consultation context alongside the existing booking information.

For example:

* Purpose
* Consultation about: [Name]
* Preferred date
* Selected time
* Contact details

Use the actual resolved catalogue name.

Do not display raw query parameters or slugs to the visitor.

### Confirmation

After successful submission:

* acknowledge the consultation request
* reference the Product, Service or Solution when valid context exists
* retain the existing confirmation structure
* provide an appropriate return action

Return destinations:

Product:

`/products/:productSlug`

Service:

`/services/:serviceSlug`

Solution:

`/solutions/:solutionSlug`

If no contextual parameter exists, preserve the normal Flow 40 confirmation.

### Invalid Context

If the visitor enters:

`/consultation?product=invalid`

or equivalent invalid Service/Solution context:

* gracefully ignore the invalid context
* load the normal consultation wizard
* do not display a broken reference
* do not block booking

Direct `/consultation` must continue working normally.

### Context Priority

If multiple context parameters are present accidentally, avoid displaying multiple conflicting consultation subjects.

Use the existing context-handling convention and establish one valid context consistently.

Do not introduce a new multi-context architecture.

### Contextual CTAs

Verify the existing CTAs point to the correct contextual consultation route:

Product → `/consultation?product=:productSlug`

Service → `/consultation?service=:serviceSlug`

Solution → `/consultation?solution=:solutionSlug`

Do not redesign Product, Service or Solution pages as part of this flow.

### UX Requirements

The contextual experience should feel like a natural continuation of the originating page.

* Context should be visible but secondary to the booking task.
* Use the existing Ricoz visual system.
* Maintain the existing wizard progress indicator.
* Keep the interface calm and premium.
* No unnecessary decorative elements.
* Desktop and mobile layouts must remain consistent.
* Maintain keyboard navigation and visible focus states.
* Context must remain understandable to assistive technologies.

### SEO

Keep `/consultation` as the canonical consultation page.

Do not make contextual query-string variants independently indexable.

### Scope Boundary

Do NOT implement:

* real calendar integration
* real availability APIs
* CRM
* backend infrastructure
* payment processing
* authentication
* lead scoring
* AI
* personalization
* new consultation forms
* new purpose taxonomy
* new Product / Service / Solution relationships
* unrelated page redesign

### Validation

Test all three contextual journeys:

**Product**

1. Product → Schedule Consultation.
2. Correct `product` slug is passed.
3. Product context resolves.
4. Purpose is preselected where supported.
5. Context survives Steps 1–5.
6. Product appears in final review.
7. Confirmation references the Product.
8. Return action opens the correct Product Detail page.

**Service**

9. Service → Schedule Consultation.
10. Service context resolves correctly.
11. Context survives all steps.
12. Service appears in final review and confirmation.
13. Return action opens the correct Service Detail page.

**Solution**

14. Solution → Schedule Consultation.
15. Solution context resolves correctly.
16. Context survives all steps.
17. Solution appears in final review and confirmation.
18. Return action opens the correct Solution Detail page.

Also verify:

19. Invalid context falls back gracefully.
20. Direct `/consultation` remains functional.
21. Back navigation preserves selections.
22. Existing validation remains intact.
23. Duplicate submissions remain prevented.
24. Desktop/mobile layouts work correctly.
25. Build completes without TypeScript errors.
