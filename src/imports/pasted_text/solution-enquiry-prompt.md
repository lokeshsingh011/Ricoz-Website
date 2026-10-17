### Figma Make Prompt — Flow 38: Solution Enquiry

Implement **Flow 38 — Solution Enquiry** for the Ricoz platform.

**Journey:**
Solution → Contact → Context Pre-filled → Form → Confirmation

### Objective

Connect the existing Solution Detail experience to the Contact flow so a visitor enquiring about a specific solution arrives with that solution automatically established as the enquiry context.

### Preserve Existing Architecture

Reuse:

* existing `SolutionDetail` page
* existing Solution catalogue
* existing solution IDs and slugs
* existing `/contact` route
* existing Contact form and validation from Flow 35
* existing Product context behavior from Flow 36
* existing Service context behavior from Flow 37
* existing confirmation architecture
* existing Ricoz design system

Do not create a separate Solution Enquiry form.

### Solution → Contact Routing

The primary enquiry CTA on Solution Detail should navigate to:

`/contact?solution=:solutionSlug`

Use the canonical solution slug from the existing Solution catalogue.

Do not manually construct solution names inside the URL.

### Contact Context Resolution

When `/contact` receives a valid `solution` query parameter:

1. Resolve the slug against the existing Solution catalogue.
2. Establish the resolved solution as the enquiry context.
3. Display a concise contextual indicator near the form:

**Enquiring about**
[Solution Name]

Where useful and already available, show the existing solution category as supporting context.

4. Preselect an existing solution-interest/enquiry-type field if the current Contact architecture supports one.

Do not introduce a new form field solely for this flow.

### Multiple Context Parameters

If the URL contains more than one context parameter, do not create confusing mixed-context behavior.

Use the existing context architecture consistently and establish the most specific valid context according to the current implementation.

Do not redesign the Contact form around multi-context enquiries.

### Invalid Solution Context

For:

`/contact?solution=invalid-slug`

gracefully fall back to the normal General Contact experience.

Do not display an error page or broken solution reference.

Direct `/contact` must continue working normally.

### Form Behavior

Reuse the Flow 35 form behavior.

Ensure:

* solution context survives validation errors
* entered visitor information is preserved
* solution context is not lost during correction
* validation rules remain unchanged
* submitting/loading states remain unchanged
* duplicate submission protection remains unchanged

A valid solution context should not require the visitor to manually identify the solution again.

### Confirmation

After successful submission, the confirmation state should acknowledge the solution enquiry when valid solution context exists.

Provide a contextual return action:

**Back to [Solution Name]**

Route to:

`/solutions/:solutionSlug`

If no valid solution context exists, retain the standard General Contact confirmation.

### Solution Detail CTA

Ensure the primary Solution Detail enquiry CTA uses:

`/contact?solution=:solutionSlug`

The existing consultation CTA must remain separate and continue using:

`/consultation?solution=:solutionSlug`

Do not redesign Solution Detail or the existing consultation flow.

### UX Requirements

* Make the solution context immediately understandable.
* Keep the context visually secondary to the enquiry form.
* Maintain the same interaction pattern established for Product and Service enquiries.
* Use existing Ricoz typography, spacing, borders and form components.
* Maintain the premium, minimal editorial technology aesthetic.
* Desktop and mobile must remain clean and responsive.
* Preserve keyboard navigation, focus states and accessible labels.
* Ensure the relationship between the form and selected solution is understandable to assistive technologies.

### SEO

Keep `/contact` as the canonical Contact page.

The `solution` query parameter must not generate separate indexable pages or change canonical SEO behavior.

### Scope Boundary

Do NOT implement:

* new Solution taxonomy
* Product/Service catalogue changes
* new form architecture
* CRM
* backend/API
* lead scoring
* AI
* personalization
* authentication
* payments
* analytics redesign
* consultation redesign
* unrelated page changes

### Validation

Test:

1. Solution → Contact opens `/contact?solution=:solutionSlug`.
2. Valid solution slug resolves correctly.
3. Correct solution name appears as enquiry context.
4. Existing solution-interest field is preselected where supported.
5. Invalid solution slug falls back gracefully to General Contact.
6. Validation errors preserve solution context.
7. Confirmation acknowledges the selected solution.
8. “Back to Solution” returns to the correct Solution Detail page.
9. Direct `/contact` remains unchanged.
10. Product → Contact behavior from Flow 36 remains intact.
11. Service → Contact behavior from Flow 37 remains intact.
12. Existing Solution → Consultation behavior remains intact.
13. Desktop/mobile layouts remain correct.
14. Build completes without TypeScript errors.
