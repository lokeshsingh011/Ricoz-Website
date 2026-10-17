### Figma Make Prompt — Flow 40: Consultation Booking

Implement **Flow 40 — Consultation Booking** for the Ricoz platform.

**Journey:**
Purpose → Preferred Date → Available Time → Contact Details → Confirmation

### Objective

Turn the existing 5-step consultation wizard into a polished, reusable conversion flow with clear progression, validation, state preservation and confirmation.

This flow establishes the base consultation architecture that Flow 41 will reuse for Product, Service and Solution contexts.

### Preserve Existing Architecture

Reuse the existing:

* `/consultation` route
* 5-step consultation wizard
* existing purpose options
* existing date/time selection components
* existing contact fields
* existing validation
* existing confirmation state
* existing Ricoz design system
* existing Product / Service / Solution context support

Do not create a second booking wizard.

### Step 1 — Purpose

Present the existing consultation-purpose options.

Requirements:

* Clear step heading and supporting copy.
* One purpose must be selectable.
* Continue only when the required selection is valid.
* Preserve the selected purpose when navigating between steps.

Do not invent additional business categories unless they already exist.

### Step 2 — Preferred Date

Allow the visitor to select a preferred consultation date using the existing date-selection architecture.

Requirements:

* Clear selected/unselected states.
* Prevent invalid dates according to existing rules.
* Preserve the selection when navigating backward and forward.
* Do not claim real availability unless an actual availability source already exists.

### Step 3 — Available Time

Present the existing time-selection experience based on the selected date.

Requirements:

* Clear time options.
* Require a valid selection before continuing.
* Preserve the selected date.
* Preserve the selected time when navigating backward.
* If no time options exist, show a clear empty state rather than inventing availability.

### Step 4 — Contact Details

Collect the existing supported contact information.

Use the current Contact Details fields and validation.

Requirements:

* Required fields clearly identified.
* Email validation.
* Preserve all entered values when navigating between steps.
* Display actionable validation messages.
* Move focus to the first invalid field where appropriate.

Do not introduce unnecessary fields.

### Step 5 — Review / Confirmation

Before final submission, show a concise summary of:

* Selected purpose
* Preferred date
* Selected time
* Contact details
* Any existing consultation context

Provide a clear final submission action.

After successful submission:

* show the existing confirmation state
* acknowledge the consultation request
* summarize the selected details where appropriate
* provide clear next-step guidance
* provide navigation back into the Ricoz ecosystem

Do not create fake booking IDs, fake calendar events or fake confirmation numbers.

### Submission State

Use the existing submission architecture.

During submission:

* disable the final action
* show a clear loading state
* prevent duplicate submissions
* preserve all entered information

If the existing implementation is simulated/front-end only, keep that behavior rather than inventing a backend.

### Navigation

Provide consistent:

* Back
* Continue
* Final Submit

behavior across the wizard.

Do not allow accidental loss of previously entered information.

Browser refresh behavior should remain consistent with the current application architecture; do not introduce complex persistence unless already supported.

### UX Requirements

The wizard should feel:

* premium
* calm
* deliberate
* easy to complete

Use the existing Ricoz visual system.

Desktop:

* clear step hierarchy
* comfortable form width
* visible progress indicator

Mobile:

* single-column experience
* comfortable touch targets
* readable step indicator
* no horizontal overflow

Accessibility:

* keyboard navigation
* visible focus states
* semantic labels
* accessible validation
* logical focus movement between steps

### SEO

Keep `/consultation` as the canonical consultation page.

Do not create indexable pages for individual wizard states or query parameters.

### Scope Boundary

Do NOT implement:

* Product / Service / Solution contextual behavior beyond preserving existing support
* real calendar integration
* real appointment availability API
* CRM
* backend infrastructure
* payments
* authentication
* AI
* lead scoring
* personalization
* new booking architecture
* unrelated page redesign

### Validation

Test:

1. Step 1 → valid purpose selection.
2. Step 2 → valid date selection.
3. Step 3 → valid time selection.
4. Step 4 → contact validation.
5. Step 5 → accurate review.
6. Back navigation preserves all selections.
7. Invalid fields prevent progression.
8. First invalid field receives focus where appropriate.
9. Final submission enters loading state.
10. Duplicate submission is prevented.
11. Confirmation appears correctly.
12. No fake booking/availability information is introduced.
13. Desktop and mobile layouts work correctly.
14. Build completes without TypeScript errors.
