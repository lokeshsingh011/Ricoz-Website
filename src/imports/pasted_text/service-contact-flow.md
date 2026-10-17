Implement **FLOW 22 — SERVICE → CONTACT** for the Ricoz platform.

### Objective

Connect the Service Detail experience to the existing Contact flow so a user can move from a specific service directly into a contextual enquiry.

The intended journey is:

**Service → Contact Us → Enquiry → Confirmation**

The service context must remain attached throughout the contact experience.

---

## 1. Preserve Existing Architecture

Use the existing:

* `/services/:serviceSlug`
* `/contact`
* service catalogue
* service IDs and slugs
* `ServiceDetail`
* existing Contact form
* existing form validation
* React Router
* existing SEO utilities
* existing Ricoz design system

Do not create a second contact form or separate service-enquiry system.

The existing Contact page remains the single destination for enquiries.

---

## 2. Service CTA

On the Service Detail page, ensure the primary contact/enquiry CTA passes the current service context to Contact.

Expected route:

`/contact?service=:serviceSlug`

Use the canonical service slug from the existing service catalogue.

Do not pass the service name as the primary identifier when a canonical slug is available.

The CTA should work consistently from different service detail pages.

---

## 3. Resolve Service Context

When `/contact?service=:serviceSlug` loads:

1. Read the service query parameter.
2. Resolve the slug against the existing service catalogue.
3. If valid, attach the service context to the contact experience.
4. If invalid, gracefully fall back to the standard Contact experience.

Do not create a new service object from the query parameter.

The catalogue remains authoritative.

---

## 4. Context Banner

When a valid service is supplied, show a compact contextual banner near the contact form.

Example structure:

**Enquiring about**

**[Service Name]**

`[Existing service tagline or concise description]`

The banner should reassure the user that the enquiry is associated with the service they were exploring.

Keep it visually restrained.

Do not repeat the entire Service Detail page.

---

## 5. Form Context

When a valid service is present:

* preselect the existing relevant service-related interest/category where the Contact form supports such a field
* associate the selected service with the form state
* preserve the service context while the user completes the form
* include the service context in the review/summary state if the current Contact architecture has one

Do not introduce duplicate service fields if the existing form already provides the appropriate field.

The user should still be able to change their enquiry category where the current form permits it.

---

## 6. Direct Contact Access

The normal Contact route must continue working:

`/contact`

When there is no `service` query parameter:

* show the standard Contact experience
* do not show an empty service-context banner
* do not force the user to select a service
* preserve all existing Contact functionality

This flow must be additive.

---

## 7. Invalid Service Context

If someone visits:

`/contact?service=invalid-slug`

the page should gracefully fall back to the normal Contact experience.

Do not:

* display undefined service names
* display broken content
* throw runtime errors
* redirect unnecessarily
* create a fake service context

The invalid query should simply be ignored.

---

## 8. Form Validation

Preserve the existing Contact form validation.

Ensure the service context does not interfere with:

* required fields
* email validation
* phone validation where already present
* message validation
* submit behavior
* error states
* success state

Do not weaken validation merely because the user arrived from a Service Detail page.

---

## 9. Confirmation

After successful submission, the confirmation state should acknowledge the service context when available.

For example:

**Your enquiry has been received.**

**Service:** `[Service Name]`

Keep the confirmation concise.

Do not claim:

* a representative has already been assigned
* a call has been scheduled
* a response will occur within a specific timeframe
* a CRM record was created

unless those capabilities genuinely exist in the current implementation.

If the existing system is a local/demo submission flow, represent it accurately.

---

## 10. Return Path

Where the existing confirmation architecture supports follow-up navigation, provide a clear route back toward the originating service.

Example:

**Back to Service**

→ `/services/:serviceSlug`

Only show this when a valid service context exists.

Do not require the user to reconstruct the service URL manually.

---

## 11. Context Persistence

Ensure the service context remains available throughout the Contact flow.

For example:

**Service Detail**
→ `/contact?service=security-service`
→ Form
→ Validation
→ Confirmation

Do not lose the service association when:

* validation errors appear
* the user changes form fields
* the form re-renders
* the confirmation state is shown

Use the existing application state/query architecture rather than introducing unnecessary global state.

---

## 12. SEO

The service-specific Contact variant should **not** create duplicate indexable pages.

The canonical Contact page remains:

`/contact`

Do not create separate SEO pages for every service enquiry URL.

Preserve the existing Contact metadata.

The service query parameter should remain a contextual application state rather than a new content page.

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

* contextual banner should sit naturally alongside/above the form
* preserve the existing Contact page hierarchy

Mobile:

* contextual banner should stack cleanly
* service name must remain readable
* form controls must remain comfortable to use
* no horizontal overflow
* CTA and submit controls must remain accessible

---

## 14. Accessibility

Ensure:

* service context is semantically associated with the form
* form labels remain explicit
* validation messages remain accessible
* keyboard navigation works
* focus states remain visible
* success/error states are understandable
* contextual information is not communicated by color alone

Do not introduce inaccessible custom form controls.

---

## 15. Visual Direction

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

The service context should feel integrated into the existing Contact page rather than appearing as a promotional banner.

---

## Scope Boundary

Do NOT implement:

* new Contact page architecture
* new form system
* CRM integration
* backend lead management
* email automation
* lead scoring
* payment
* authentication
* AI qualification
* consultation booking
* calendar integration
* service recommendation logic
* related-product changes
* related-service changes
* new service data
* new service taxonomy
* analytics/tracking
* CMS

This flow only establishes the **Service → Contact** contextual journey.

---

## Validation

After implementation:

1. Open a real Service Detail page.
2. Click its Contact CTA.
3. Verify the URL contains the correct service slug.
4. Verify the Contact page resolves the correct service.
5. Verify the contextual service banner.
6. Verify the appropriate service interest is preselected where supported.
7. Submit with invalid fields and confirm context remains intact.
8. Verify the success/confirmation state references the service where appropriate.
9. Verify the return-to-service action works.
10. Open `/contact` directly and verify the standard Contact experience remains unchanged.
11. Test an invalid service slug.
12. Test multiple different services to ensure context changes correctly.
13. Test desktop and mobile layouts.
14. Test keyboard and form accessibility.
15. Run the production build.

Fix actual build/runtime/type errors introduced by this flow.

Do not treat an existing catalogue-related bundle-size warning as a failure if the production build otherwise passes.

### Final principle

**When a user decides to enquire about a service, the Contact experience should already understand what brought them there — reducing friction without creating a separate enquiry system.**
