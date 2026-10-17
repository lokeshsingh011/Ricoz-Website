# FLOW 28 — SOLUTION → CONSULTATION

## Objective

Implement the complete consultation conversion flow:

**Solution → Schedule a Consultation → Consultation Booking → Confirmation**

A user viewing a specific solution should be able to start a consultation with that solution already attached as context throughout the existing consultation journey.

---

## 1. Preserve Existing Architecture

Reuse:

* Existing solution catalogue
* Existing solution IDs and slugs
* Existing `SolutionDetail`
* Existing consultation page
* Existing 5-step consultation wizard
* Existing form components and validation
* Existing routing
* Existing confirmation experience
* Existing Ricoz design system

Do not create a second consultation flow.

---

## 2. Solution CTA

On:

`/solutions/:solutionSlug`

The primary/secondary conversion CTA should support:

**Schedule a Consultation**

Navigate to:

`/consultation?solution=:solutionSlug`

Use the canonical solution slug from the current solution.

---

## 3. Consultation Context

When `/consultation?solution=:solutionSlug` is opened:

1. Resolve the solution against the existing catalogue.
2. If valid, display the selected solution as consultation context.
3. Preselect the relevant consultation purpose where an existing option supports solution discussions.
4. Keep the selected solution visible throughout the wizard.

Example context treatment:

**Consulting about**
`[Solution Name]`

Do not create a new solution-selection system.

---

## 4. Existing 5-Step Wizard

Preserve the existing consultation sequence and functionality.

The solution context must survive movement through all five steps.

Ensure that:

* Changing steps does not remove the solution
* Validation errors do not clear the solution
* Back/Next navigation preserves context
* Refresh behavior follows the existing consultation architecture
* Review data contains the selected solution

Do not redesign the wizard unnecessarily.

---

## 5. Review Step

On the final review step, explicitly show:

**Solution**
`Solution Name`

Alongside the user's other consultation information.

The user should be able to verify that the consultation is being requested for the correct solution before submitting.

---

## 6. Confirmation

After successful submission, the confirmation screen should reference the selected solution.

For example:

**Your consultation request is ready to move forward.**

**Solution:**
`Solution Name`

Preserve the existing confirmation design and actions.

Provide a clear route back to:

`/solutions/:solutionSlug`

Do not introduce actual calendar booking, payment, CRM submission, or backend functionality.

---

## 7. Direct Consultation Access

The existing route:

`/consultation`

must continue working normally without a solution parameter.

If no solution is provided:

* Do not show solution context
* Do not force a solution selection
* Preserve the existing consultation experience

If an invalid solution slug is provided:

* Ignore the invalid context gracefully
* Continue using the normal consultation flow
* Do not display broken solution information

---

## 8. Data Integrity

Validate solution references against the canonical solution catalogue.

Ensure:

* Valid slugs resolve correctly
* Invalid slugs never break the consultation page
* Solution names come from canonical data
* No duplicated solution state is created
* Context is preserved through all five steps
* Confirmation references the same solution

Do not modify unrelated solution data.

---

## 9. Responsive Behaviour

Ensure the solution context and consultation wizard work correctly across:

### Desktop

Comfortable two-column or existing consultation layout.

### Tablet

Reduce layout density without losing context.

### Mobile

Stack all content vertically.

Ensure:

* No horizontal overflow
* Inputs remain usable
* Buttons remain accessible
* Context banner/card remains readable
* Step navigation remains usable
* Review information is easy to scan

---

## 10. Accessibility

Maintain:

* Semantic headings
* Proper form labels
* Keyboard navigation
* Visible focus states
* Accessible validation messages
* Accessible step navigation
* Sufficient contrast
* Screen-reader-friendly solution context

Do not rely solely on color to communicate the selected solution.

---

## 11. SEO

Do not create new indexable URLs for solution-specific consultation pages.

The query parameter:

`?solution=:solutionSlug`

is contextual state, not a new page.

Preserve the existing consultation page's canonical URL and SEO metadata.

---

## 12. Visual System

Use the existing Ricoz system:

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
* New consultation visual language

---

## 13. Scope Boundary

Do **not** implement:

* Real calendar integration
* Real appointment scheduling
* Payment processing
* CRM integration
* Backend submission
* Authentication
* AI recommendations
* Personalized consultation matching
* New consultation wizard architecture
* Solution search/filtering
* Solution-to-product redesign
* Solution-to-service redesign
* Resource discovery

This flow is only:

**Solution → Consultation Context → Existing 5-Step Consultation → Confirmation**

---

## 14. Validation

Test:

1. Open several solution detail pages
2. Click **Schedule a Consultation**
3. Confirm URL contains the correct `solution` slug
4. Confirm solution context appears
5. Complete the consultation wizard
6. Move backward and forward between steps
7. Confirm solution context persists
8. Confirm solution appears in final review
9. Submit and verify confirmation references the solution
10. Return to the original solution
11. Open `/consultation` directly and verify normal behavior
12. Test an invalid solution slug
13. Test desktop/tablet/mobile
14. Test keyboard accessibility
15. Run the production build

Resolve only issues introduced by this flow.

## Success Criteria

A user can move seamlessly through:

**Solution → Schedule a Consultation → Existing 5-Step Wizard → Review Solution → Confirmation**

with the selected solution preserved accurately from entry through completion.
