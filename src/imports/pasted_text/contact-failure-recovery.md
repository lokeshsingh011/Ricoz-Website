### Figma Make Prompt — Flow 39: Contact Failure / Recovery

Implement **Flow 39 — Contact Failure / Recovery** for the Ricoz platform.

**Journey:**
Form → Error → Correction → Resubmit → Confirmation

### Objective

Harden the existing Contact experience so that submission failures are handled clearly and recoverably, allowing the visitor to correct or retry without losing their entered information or contextual enquiry.

This completes the Contact & Lead Capture flow.

### Preserve Existing Architecture

Reuse:

* existing `/contact` route
* existing Contact form from Flow 35
* existing Product context from Flow 36
* existing Service context from Flow 37
* existing Solution context from Flow 38
* existing validation components
* existing submission state
* existing confirmation state
* existing Ricoz design system

Do not create a second form or separate error page.

### Validation Failure

If client-side validation fails:

* Keep the visitor on the Contact page.
* Highlight the relevant fields.
* Display concise, actionable inline messages.
* Preserve every valid value already entered.
* Move focus to the first invalid field where appropriate.
* Do not clear product, service or solution context.
* Do not show a success confirmation.

Examples of useful validation behavior:

* Missing required field → identify the missing information.
* Invalid email → clearly explain that a valid email is required.
* Invalid phone format, if phone validation already exists → show the existing validation message.

Do not introduce unnecessary new validation rules.

### Submission Failure

If the existing submission mechanism reports a failure:

Show a clear error state near the form, such as:

**We couldn’t submit your enquiry.**
Please review your details and try again.

The error must:

* be visually noticeable but not alarming
* explain what the visitor should do next
* keep all entered information
* preserve Product / Service / Solution context
* keep the form editable
* allow the visitor to retry

Do not redirect to a generic error page.

### Retry Behavior

Provide a clear retry path using the existing submit action.

When the visitor retries:

1. Revalidate the form.
2. Show the existing submitting state.
3. Prevent duplicate submissions.
4. Remove or replace the previous recoverable error state.
5. On success, transition to the existing confirmation state.

Do not require the visitor to start the form again.

### Context Preservation

The following contextual enquiries must remain intact during failure and recovery:

* `/contact?product=:productSlug`
* `/contact?service=:serviceSlug`
* `/contact?solution=:solutionSlug`

If context is displayed on the Contact page, it must remain visible after validation errors and submission failures.

The eventual confirmation should still reference the correct context.

### Success After Recovery

If a retry succeeds:

* show the existing confirmation state
* acknowledge the relevant Product, Service or Solution when applicable
* provide the appropriate return action
* clear temporary error messaging
* do not show duplicate confirmations

Do not create a separate recovery confirmation screen.

### Accessibility

Ensure error and recovery states are accessible:

* associate errors with their relevant fields
* use appropriate `aria-describedby` relationships where applicable
* announce important submission errors to assistive technologies
* provide visible keyboard focus
* ensure error text has sufficient contrast
* do not rely only on color to communicate errors

### Responsive Behavior

Desktop:

* Keep validation and submission feedback close to the relevant form area.
* Maintain the existing page hierarchy.

Mobile:

* Keep error messages readable without causing excessive layout movement.
* Ensure the retry/submit action remains easy to reach.
* Preserve context visibility.

### UX Requirements

The experience should feel:

* calm
* trustworthy
* transparent
* recoverable
* consistent with the Ricoz premium product experience

Avoid:

* dramatic error screens
* unnecessary illustrations
* fake technical error codes
* fake submission IDs
* excessive animations
* clearing the entire form after failure

### Scope Boundary

Do NOT implement:

* CRM
* backend infrastructure
* new API architecture
* email delivery systems
* lead scoring
* AI
* authentication
* payments
* analytics redesign
* new Contact routes
* new form architecture
* new validation taxonomy
* unrelated page changes

If a real submission backend already exists, handle its existing failure response appropriately. Do not invent a new backend contract.

### Validation

Test the complete recovery journey:

1. Open `/contact`.
2. Submit with missing required fields.
3. Confirm inline validation appears.
4. Correct the invalid fields.
5. Confirm previously entered values remain intact.
6. Submit again.
7. Simulate or use the existing submission failure state.
8. Confirm a clear recoverable error appears.
9. Confirm all entered information remains.
10. Retry submission.
11. Confirm successful submission transitions to the existing confirmation.
12. Test Product → Contact failure/recovery.
13. Test Service → Contact failure/recovery.
14. Test Solution → Contact failure/recovery.
15. Confirm context survives every correction and retry.
16. Confirm duplicate submissions are prevented.
17. Confirm keyboard and screen-reader behavior.
18. Verify desktop and mobile layouts.
19. Build completes without TypeScript errors.
