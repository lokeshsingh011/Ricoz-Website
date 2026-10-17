Implement **FLOW 23 — SERVICE → CONSULTATION** for the Ricoz platform.

### Objective

Connect the Service Detail experience to the existing Consultation flow so a user can move directly from a specific service into a contextual consultation request.

The intended journey is:

**Service → Schedule Consultation → Booking → Confirmation**

The selected service must remain associated with the consultation throughout the existing booking flow.

---

## 1. Preserve Existing Architecture

Use the existing:

* `/services/:serviceSlug`
* `/consultation`
* service catalogue
* service IDs and slugs
* `ServiceDetail`
* existing 5-step Consultation wizard
* existing consultation validation
* React Router
* existing SEO utilities
* existing Ricoz design system

Do not create a second consultation system.

The existing `/consultation` route remains the single consultation destination.

---

## 2. Service CTA

Ensure the Service Detail consultation CTA passes the current service context.

Expected route:

`/consultation?service=:serviceSlug`

Use the canonical service slug from the existing service catalogue.

Do not pass the service name as the primary identifier when a canonical slug exists.

---

## 3. Resolve Service Context

When `/consultation?service=:serviceSlug` loads:

1. Read the `service` query parameter.
2. Resolve the slug against the existing service catalogue.
3. If valid, attach the service context to the consultation flow.
4. If invalid, gracefully fall back to the standard consultation experience.

Do not create a new service object from the query parameter.

The existing catalogue remains authoritative.

---

## 4. Context Banner

When a valid service is supplied, show a compact context indicator near the consultation flow.

Example:

**Consultation for**

**[Service Name]**

`[Existing service tagline or concise description]`

Keep this visually restrained.

Do not duplicate the entire Service Detail page.

The purpose is simply to confirm that the consultation is about the service the user was exploring.

---

## 5. Consultation Step 1

Preserve the existing Step 1 structure.

If the current consultation wizard already contains a purpose/service-interest selection:

* preselect the appropriate service-related option where supported
* associate the selected service with the consultation state
* allow the user to change the selection if the existing UX permits it

Do not create duplicate service-selection controls.

If the current wizard uses a general consultation purpose such as a service consultation, use the existing option rather than creating another category.

---

## 6. Context Persistence

The selected service must remain associated throughout all consultation steps.

Expected flow:

**Service Detail**
→ `/consultation?service=service-slug`
→ Step 1
→ Step 2
→ Step 3
→ Step 4
→ Step 5 Review
→ Confirmation

Do not lose the service context when:

* moving between steps
* navigating backward
* validation errors occur
* form fields change
* the component re-renders

Use the existing consultation state architecture.

Avoid introducing unnecessary global state.

---

## 7. Review Step

The final review step should clearly display the selected service.

Example:

**Consultation request**

Service
**[Service Name]**

Then continue displaying the existing consultation details already collected by the wizard.

The service should appear as contextual information, not as a duplicated editable field unless the existing architecture requires editing at this stage.

---

## 8. Confirmation

After successful submission, the confirmation state should acknowledge the service context.

Example:

**Your consultation request has been received.**

**Service:** `[Service Name]`

Keep the confirmation concise and accurate.

Do not claim that:

* a meeting has already been booked
* a calendar slot has been reserved
* a consultant has been assigned
* a call will happen at a guaranteed time
* a CRM record has been created

unless those capabilities actually exist in the current implementation.

If the current flow is a request/demo/local submission experience, represent it accurately.

---

## 9. Return to Service

Where the existing confirmation architecture supports follow-up navigation, provide:

**Back to Service**

→ `/services/:serviceSlug`

Only show this when a valid service context exists.

The user should be able to return directly to the service they were exploring.

---

## 10. Direct Consultation Access

The existing route must continue working normally:

`/consultation`

When no `service` query parameter exists:

* show the standard consultation wizard
* do not show an empty service-context banner
* do not force a service selection unless the existing consultation flow already requires one
* preserve all current consultation behavior

This flow must be additive.

---

## 11. Invalid Service Context

If someone visits:

`/consultation?service=invalid-slug`

gracefully fall back to the standard consultation experience.

Do not:

* display undefined service names
* throw runtime errors
* create fake service data
* redirect unnecessarily
* break the consultation wizard

Simply ignore the invalid context.

---

## 12. Validation + Wizard Behavior

Preserve all existing consultation validation.

The service context must not interfere with:

* required fields
* step validation
* navigation between steps
* back/next behavior
* error states
* review state
* confirmation state

Verify that the selected service remains intact even when the user moves backward and forward through the wizard.

---

## 13. SEO

The service-specific consultation URL must not create separate indexable pages.

The canonical consultation route remains:

`/consultation`

The `?service=` parameter is contextual application state.

Do not create separate SEO metadata or canonical pages for individual service consultation URLs.

Preserve the existing Consultation metadata.

---

## 14. Responsive Behavior

Validate:

* 1440px+
* 1280px
* 1024px
* 768px
* 480px
* 375px

Desktop:

* service context should integrate naturally into the existing wizard
* preserve the existing consultation layout

Mobile:

* context banner should stack cleanly
* service name should remain readable
* all wizard controls must remain comfortable to use
* step navigation must remain clear
* no horizontal overflow

Do not create a separate mobile consultation architecture.

---

## 15. Accessibility

Ensure:

* service context is clearly associated with the consultation content
* all form controls retain accessible labels
* keyboard navigation works
* focus states remain visible
* validation errors remain understandable
* step changes remain accessible
* confirmation state is accessible
* no information relies solely on color

Preserve the existing accessible form architecture.

---

## 16. Visual Direction

Preserve the established Ricoz system:

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

The service context should feel like a natural part of the consultation experience.

Do not redesign the entire Consultation page.

---

## Scope Boundary

Do NOT implement:

* real calendar integration
* real-time appointment availability
* payment
* authentication
* CRM integration
* email automation
* lead scoring
* AI qualification
* AI recommendations
* new booking infrastructure
* new consultation wizard
* service search
* service filtering
* related products
* related services
* Contact redesign
* new service data
* new service taxonomy
* CMS
* analytics/tracking

This flow only establishes the contextual:

**Service → Consultation**

journey.

---

## Validation

After implementation:

1. Open several real Service Detail pages.
2. Click the Consultation CTA.
3. Verify the URL contains the correct service slug.
4. Verify the Consultation page resolves the correct service.
5. Verify the contextual service indicator.
6. Verify the appropriate existing consultation purpose is preselected where supported.
7. Complete several wizard steps.
8. Navigate backward and forward and confirm service context persists.
9. Verify the final review displays the selected service.
10. Verify confirmation references the selected service where appropriate.
11. Verify the return-to-service action works.
12. Open `/consultation` directly and verify the standard consultation flow remains unchanged.
13. Test an invalid service slug.
14. Test multiple different services.
15. Test validation errors at multiple steps.
16. Test desktop, tablet and mobile layouts.
17. Verify keyboard accessibility.
18. Verify query variants do not create separate indexable pages.
19. Run the production build.

Fix actual build/runtime/type errors introduced by this flow.

Do not treat an existing catalogue-related bundle-size warning as a failure if the production build otherwise passes.

### Final principle

**When a user chooses to schedule a consultation from a Service Detail page, the consultation should already understand the service they came to discuss — reducing friction while keeping the existing consultation system intact.**
