# FLOW 13 — PRODUCT → CONSULTATION

## Objective

Implement and refine the **Product → Consultation** conversion flow.

The goal is to allow a visitor who is exploring a specific Ricoz product to move directly into the existing consultation scheduling experience, while carrying the selected product context throughout the journey.

The visitor should not need to repeat which product they are interested in.

The intended journey is:

**Product Detail → Schedule Consultation → Consultation Flow → Product Context → Review → Confirmation**

This flow should connect the existing Product Detail and Consultation experiences.

**Do not build a new calendar backend or replace the existing consultation system.**

---

## 1. Preserve Existing Architecture

Use the existing:

* Product catalogue
* Product Detail template
* Consultation page
* Consultation steps
* Form validation
* Booking state
* Confirmation state
* Product slugs
* React Router
* Existing query/context mechanism
* SEO implementation
* Manrope typography
* Ricoz design system

Do not create a separate consultation flow specifically for products.

The existing Consultation experience should remain reusable for all entry points.

---

## 2. Product Context

When a visitor selects **Schedule Consultation** from a Product Detail page, navigate using the existing product-context pattern:

`/consultation?product=:productSlug`

The slug must come directly from the current product record.

Do not hard-code product names into navigation.

Do not pass internal product IDs as visible context.

---

## 3. Resolve Product Context

When Consultation loads:

1. Read the `product` query parameter.
2. Resolve it against the existing product catalogue.
3. If valid, retain the product context throughout the consultation.
4. If invalid, gracefully fall back to the normal consultation flow.

An invalid query parameter must never break the page.

Do not display internal errors to the visitor.

---

## 4. Consultation Context

When valid product context exists, make it clear that the consultation is connected to that product.

Use a restrained contextual treatment such as:

**Consultation for**

**RicoCRM**

Supporting text may use the existing product tagline.

The context should reassure the visitor that they are scheduling around the product they were exploring.

Do not make the context banner larger than the actual scheduling interface.

---

## 5. Preselect Consultation Purpose

Use the existing consultation purpose/interest step.

When entered from a Product Detail page:

* Preselect the appropriate product-related consultation purpose.
* Preserve the selected product.
* Allow the visitor to modify the selection where the existing flow permits it.

Do not force the visitor to start the consultation form from scratch.

Do not remove existing consultation purposes.

---

## 6. Preserve Consultation Steps

Keep the existing consultation flow structure.

If the current implementation uses multiple steps, preserve its existing progression and validation.

The product context should survive:

* Step changes
* Validation errors
* Back/next navigation
* Re-renders
* Review state

Do not introduce unnecessary additional steps solely for product context.

---

## 7. Consultation Information

Do not add unnecessary form fields.

Preserve the existing consultation information architecture.

Where applicable, continue collecting the existing information such as:

* Contact information
* Company information
* Consultation purpose
* Scheduling preference
* Additional context

Only modify the existing flow where necessary to correctly carry product context.

Do not introduce:

* Payment collection
* Account creation
* Passwords
* Lead scoring
* CRM infrastructure
* Complex qualification logic

---

## 8. Review Step

Before confirmation, the review state should clearly show the selected product.

Example:

**Product**

RicoCRM

The visitor should be able to verify that the consultation is associated with the correct product before completing the flow.

Do not expose:

* Product slugs
* Internal IDs
* Database values
* Technical query parameters

Use the product's human-readable name.

---

## 9. Confirmation

After successful completion, provide a clear confirmation state.

The confirmation should communicate:

* Consultation request completed
* Selected product
* Relevant next step where the existing application supports one

Example direction:

**Your consultation request is complete.**

**Product:** RicoCRM

Do not claim that:

* A meeting has definitely been booked
* A specific person will respond
* A calendar invitation has been sent
* A fixed response time is guaranteed

unless that functionality actually exists.

The confirmation must accurately reflect the current implementation.

---

## 10. Return Navigation

Where useful, provide a way to return to the originating Product Detail page.

Example:

**Back to RicoCRM**

The destination must use the existing product route.

Also preserve the normal ability to return to the broader product catalogue.

---

## 11. Direct Consultation Entry

The standard consultation route must continue to work:

`/consultation`

without any product context.

Therefore both journeys must remain valid:

**Product → Consultation with product context**

and

**Navigation → Consultation without product context**

Do not make product selection mandatory for all consultation visitors.

---

## 12. Responsive Experience

Audit the complete flow at:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* Keep the consultation interface visually dominant
* Keep product context secondary
* Maintain comfortable form width

Tablet:

* Preserve readable step layout
* Reduce columns where necessary

Mobile:

* Stack all content naturally
* Keep step progression clear
* Ensure form controls are touch-friendly
* Keep product context visible but compact
* Make review information easy to scan
* Ensure confirmation actions remain accessible
* Prevent horizontal overflow

Do not simply shrink the desktop form.

---

## 13. Accessibility

Ensure:

* Every form field has a proper accessible label
* Step progression is understandable
* Validation messages are associated with fields
* Keyboard navigation works
* Focus states remain visible
* Product context is accessible
* Review information has clear semantic structure
* Confirmation has an appropriate heading
* Buttons and links have meaningful accessible names

Do not rely solely on color to communicate active steps or validation.

---

## 14. Visual System

Follow the established Ricoz design system:

* Manrope 400 / 500 / 600
* Ricoz Red `#C41230`
* `#111111` foreground
* Warm off-white background
* Thin subtle borders
* 8px spacing rhythm
* 4px radius
* Minimal shadows
* Restrained transitions

The consultation experience should feel like a natural continuation of the Product Detail page.

Do not introduce a separate product-specific visual language.

---

## 15. SEO

Keep `/consultation` as the canonical consultation destination.

Product query parameters should not create separate indexable pages.

Do not create:

`/consultation/rico-crm`

or other duplicate consultation routes.

Do not alter Product Detail canonical URLs.

---

## 16. Content Integrity

Do not introduce unsupported claims about:

* Consultation availability
* Meeting duration
* Response time
* Booking confirmation
* Consultant identity
* Pricing
* Implementation guarantees

Only communicate behavior that the existing application actually supports.

---

## 17. Scope Boundary

Do NOT implement:

* New calendar infrastructure
* Real-time scheduling backend
* Payment processing
* Account creation
* CRM integration
* Lead scoring
* AI qualification
* Product purchasing
* Checkout
* Related products
* Related services
* Resource recommendations
* Consultation redesign unrelated to product context

This flow is strictly:

**Product → Consultation → Product Context → Review → Confirmation**

---

## 18. Validation

Test at least three products from different categories.

Verify:

1. Product Detail CTA opens `/consultation?product=:slug`.
2. Correct product context appears.
3. Consultation purpose is correctly preselected where supported.
4. Product context survives every consultation step.
5. Validation errors do not remove product context.
6. Review shows the correct product.
7. Confirmation references the correct product.
8. Return-to-product navigation works.
9. `/consultation` without product context still works normally.
10. Invalid product query parameters fail gracefully.
11. Mobile layout works correctly.
12. Keyboard navigation works.
13. Existing consultation functionality remains intact.
14. Existing Product Detail functionality remains intact.
15. No duplicate product or consultation routes are created.
16. Run:

`npm run build`

Fix actual build errors before finishing.

A pre-existing bundle-size warning is not a failure.

---

## Final Principle

**Context should travel with the visitor.**

If someone decides to schedule a consultation while exploring a product, they should never have to explain what brought them there.

The experience should feel like:

**Discover the product → Decide to talk → Continue with context → Review → Confirm**

Keep the flow simple, trustworthy, and connected.

Do not build a new consultation system.

**Connect the existing Product and Consultation experiences properly.**
