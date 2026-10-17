# FLOW 12 — PRODUCT → CONTACT

## Objective

Implement and refine the **Product → Contact** conversion flow.

The goal is to let a visitor who is exploring a specific Ricoz product move directly into the existing Contact experience with the selected product already understood by the form.

The visitor should not have to repeat which product they were exploring.

The intended journey is:

**Product Detail → Contact Us → Product Context → Enquiry Form → Confirmation**

This flow should improve continuity between product discovery and enquiry without creating a separate contact system.

---

## 1. Preserve Existing Contact Architecture

Use the existing Contact page and form implementation.

Preserve:

* Existing `/contact` route
* Existing form fields
* Existing validation
* Existing form state
* Existing success/confirmation behavior
* Existing enquiry categories
* Existing product data
* Existing product slugs
* Existing React Router architecture
* Existing SEO implementation
* Existing Manrope typography
* Existing Ricoz design system

Do not replace the existing Contact page with a new application.

---

## 2. Product Context

When a visitor clicks **Contact Us** from a Product Detail page, pass the current product context into the Contact route.

Use the existing query/context pattern already established in the application:

`/contact?product=:productSlug`

The product slug must come from the actual product record.

Do not pass the product name as the primary identifier.

Do not hard-code product-specific URLs.

---

## 3. Product Context Resolution

On the Contact page:

1. Read the `product` query parameter.
2. Resolve it against the existing product catalogue.
3. If the product exists, display the product context.
4. If the product does not exist, gracefully fall back to the normal Contact experience.

Do not display broken product information.

Do not throw an application error because of an invalid query parameter.

---

## 4. Context Banner

When valid product context exists, show a subtle contextual banner near the top of the Contact experience.

Example structure:

**You're enquiring about**

**RicoCRM**

Supporting text can include the product tagline or a concise contextual message.

Provide an action such as:

**Change product**

if the existing form architecture supports changing the selection.

The banner should provide reassurance that the visitor has reached the correct enquiry path.

Do not make the banner visually dominant.

---

## 5. Form Preselection

When valid product context exists:

* Preselect the relevant product/category interest where the current form supports it.
* Preserve the existing form's validation rules.
* Do not require the visitor to manually re-enter the product.

If the current form contains a broader enquiry-interest field, automatically select the appropriate product-related option.

The visitor must still be able to change their selection when appropriate.

Do not make product context impossible to edit.

---

## 6. Form Fields

Do not add unnecessary form fields.

Retain the existing Contact form structure.

Typical information may include:

* Name
* Work email
* Company
* Phone where already supported
* Area of interest
* Message
* Product context

Only modify the existing form where required to correctly support product context.

Do not introduce:

* Payment fields
* Account creation
* Passwords
* Complex lead scoring
* CRM infrastructure
* Backend integrations
* File uploads unless already supported

---

## 7. Product Context in Submission

When the form is submitted, the selected product context must remain part of the enquiry state.

The confirmation state should make it clear that the enquiry was submitted regarding the selected product.

For example:

**Thanks for reaching out about RicoCRM.**

Do not expose internal slugs or IDs to the visitor.

If the current implementation does not have a real backend submission service, preserve the existing demo/local submission behavior rather than inventing a backend integration.

---

## 8. Confirmation State

After successful form validation/submission, show the existing or refined confirmation experience.

It should communicate:

* Submission completed
* Product context
* What happens next, where supported
* A useful next navigation action

Possible actions:

**Return to Product**

**Explore Products**

Do not claim that a human has responded, a meeting has been created, or an enquiry has entered a real system unless that functionality actually exists.

---

## 9. Direct Contact Entry

The normal `/contact` experience must continue working.

If a visitor enters Contact directly without a product query:

`/contact`

show the standard enquiry experience.

Do not require product context.

Therefore both journeys must remain valid:

**Product → Contact with context**

and

**Navigation → Contact without context**

---

## 10. Product Context Persistence

If the visitor navigates through form steps or validation states, preserve the selected product context.

Do not lose the product selection because of:

* Validation errors
* Re-rendering
* Step changes
* Temporary form state updates

If the user intentionally changes the product selection, update the context accordingly.

---

## 11. Navigation Continuity

Provide a natural way back to the originating product.

Where valid product context exists, include an appropriate navigation action such as:

**Back to RicoCRM**

The destination must use the existing Product Detail route.

Do not create duplicate product URLs.

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

* Keep form content comfortably readable
* Use a balanced two-column composition where appropriate
* Keep product context visually secondary to the form

Tablet:

* Reduce columns naturally
* Preserve form readability

Mobile:

* Stack content vertically
* Keep product context visible
* Make all fields and controls touch-friendly
* Ensure validation messages are easy to understand
* Keep the submit action accessible
* Prevent horizontal overflow

---

## 13. Accessibility

Ensure:

* Every form field has an accessible label
* Required fields are communicated clearly
* Validation errors are associated with their fields
* Keyboard navigation works
* Focus states are visible
* Submit state is understandable
* Context banner is accessible
* Confirmation state has an appropriate heading
* Links/buttons have meaningful accessible names

Do not rely only on color to indicate validation state.

---

## 14. Visual System

Follow the existing Ricoz system:

* Manrope 400 / 500 / 600
* Ricoz Red `#C41230`
* `#111111` foreground
* Warm off-white background
* Thin subtle borders
* 8px spacing rhythm
* 4px radius
* Minimal shadows
* Restrained transitions

The product context should feel integrated into the Contact experience.

Do not create a separate visual language for product enquiries.

---

## 15. SEO

Keep `/contact` as the canonical Contact page.

Do not create separate indexable pages for every:

`/contact?product=...`

Query-based product context should not create duplicate SEO pages.

Do not modify Product Detail canonical URLs.

---

## 16. Content Integrity

Do not introduce unsupported promises.

Avoid statements such as:

* Guaranteed response times
* Guaranteed consultation
* Guaranteed implementation
* Guaranteed pricing
* Specific sales outcomes

unless those are already supported by the existing application.

The confirmation should simply communicate what the application actually does.

---

## 17. Scope Boundary

Do NOT implement:

* New CRM systems
* Backend lead management
* Email automation
* Payment processing
* Product purchasing
* Checkout
* Authentication
* Advanced lead scoring
* AI qualification
* Consultation scheduling redesign
* Related-product recommendations
* Related-service recommendations
* Resource recommendations

This flow is strictly:

**Product → Contact → Enquiry → Confirmation**

---

## 18. Validation

Test at least three products from different categories.

Verify:

1. Product Detail Contact CTA opens `/contact?product=:slug`.
2. Correct product context appears.
3. Correct product-related interest is preselected where supported.
4. Product context survives form interaction and validation.
5. Form validation still works.
6. Successful submission reaches confirmation.
7. Confirmation references the correct product.
8. Return-to-product navigation resolves correctly.
9. `/contact` without a query parameter still works normally.
10. Invalid product query parameters fail gracefully.
11. Mobile layout works correctly.
12. Keyboard accessibility works.
13. Existing Contact functionality has not been broken.
14. Existing Product Detail functionality remains intact.
15. No duplicate routes or product records were introduced.
16. Run:

`npm run build`

Fix actual build errors before finishing.

A pre-existing bundle-size warning is not a failure.

---

## Final Principle

**A visitor should never have to explain what they are already looking at.**

Carry the product context forward.

Remove unnecessary repetition.

Keep the enquiry experience simple and trustworthy.

The journey should feel like:

**I found something relevant → I want to know more → Ricoz already knows what I'm asking about.**

Do not build a new contact system.

**Connect the existing Product and Contact experiences properly.**
