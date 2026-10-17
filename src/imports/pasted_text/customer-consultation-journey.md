# FLOW 50 — CUSTOMER CONSULTATION JOURNEY

## Objective

Establish the customer experience after a consultation is scheduled:

**Consultation booked → Confirmation → Reminder → Meeting → Follow-up**

The goal is to make consultation booking feel like the beginning of an ongoing customer interaction, while keeping the architecture ready for the later Consultation Management, Customer Management, Communication, and Automation flows.

Do not build a complete calendar, appointment backend, customer portal, or communication platform in this flow.

---

## 1. Preserve Existing Consultation Architecture

Build on the existing `/consultation` implementation from Flows 40–41.

Preserve:

* 5-step consultation wizard
* Purpose selection
* Preferred date
* Preferred time
* Contact details
* Review/confirmation
* Product context
* Service context
* Solution context
* Validation
* Submission/loading state
* Error/retry handling
* Contextual confirmation
* Existing responsive and accessibility behavior

Do not replace the existing consultation wizard.

---

## 2. Establish a Consultation Record Concept

After successful confirmation, establish a structured consultation representation using the information already collected.

Where applicable, retain:

* Customer name
* Email
* Phone
* Company
* Consultation purpose
* Preferred date
* Preferred time
* Product context
* Service context
* Solution context
* Booking/submission state
* Created timestamp

Use the existing frontend data structures where possible.

Do not introduce a real booking backend or external calendar integration.

---

## 3. Consultation Lifecycle

Establish a lightweight lifecycle model that can later be consumed by the operational system.

Conceptually support:

**Booked → Confirmed → Reminder → Meeting → Follow-up → Completed**

Do not simulate real calendar events or claim that reminders have actually been sent.

The lifecycle represents the intended platform architecture rather than a fake real-time appointment system.

---

## 4. Booking Confirmation

Improve the existing confirmation experience so the customer clearly understands that the consultation has been booked/requested.

The confirmation should communicate:

* consultation successfully submitted/booked
* selected date
* selected time
* consultation purpose
* relevant product/service/solution context when available
* customer contact information where appropriate
* what happens next

For contextual bookings, clearly maintain the relationship.

Examples:

**Product → Schedule Consultation → Confirmation**

**Service → Schedule Consultation → Confirmation**

**Solution → Schedule Consultation → Confirmation**

Do not invent:

* meeting links
* calendar IDs
* appointment numbers
* consultant names
* guaranteed availability
* confirmed calendar synchronization

unless such data already exists in the application.

---

## 5. Reminder Architecture

Establish the data structure required for future reminders.

A consultation record should conceptually support:

* scheduled date/time
* reminder status
* reminder timing
* communication status

However, do not implement actual reminder delivery.

Do not add:

* email service
* SMS
* WhatsApp
* push notifications
* external calendar reminders
* background jobs
* notification backend

These can be implemented later through the Automation and Integration flows.

---

## 6. Meeting Stage

Establish the consultation as a distinct stage in the customer journey:

**Booked → Meeting**

The customer-facing experience should not pretend that a meeting occurred when the application has no real meeting integration.

Instead, structure the consultation record so that a future system can associate:

* meeting status
* meeting date/time
* meeting notes
* participants
* outcome
* follow-up requirement

Do not build meeting notes or video-conferencing functionality yet unless those capabilities already exist.

---

## 7. Follow-up Stage

Establish the concept of post-consultation follow-up.

A completed consultation should eventually be able to transition toward:

**Meeting → Follow-up → Ongoing Customer Relationship**

The architecture should preserve the original consultation context so future follow-up can understand:

* who the customer is
* why they requested the consultation
* what product/service/solution was involved
* when the consultation occurred
* what the next action should be

Do not build a follow-up CRM interface yet.

---

## 8. Context Preservation

Context must survive the complete consultation journey.

For example:

**Product**

→ Schedule Consultation

→ Product context retained

→ Consultation booked

→ Confirmation

→ Future follow-up

Likewise for:

**Service → Consultation → Confirmation → Follow-up**

**Solution → Consultation → Confirmation → Follow-up**

A general consultation must continue to work without contextual relationships.

---

## 9. Failure & Recovery

Preserve the existing consultation submission behavior.

If booking/confirmation submission fails:

* preserve all entered information
* preserve date/time selection
* preserve product/service/solution context
* show the existing error state
* allow retry
* prevent duplicate submissions
* transition to confirmation only after successful submission

Do not introduce another error-handling architecture.

---

## 10. Future Operational Compatibility

Structure the consultation record so Flow 57 — Consultation Management can later consume it.

The future operational journey should be able to evolve into:

**Appointments → Appointment → Details → Update → Follow-up**

Likewise, future Customer Management should be able to associate consultations with the appropriate customer relationship.

Do not implement those admin interfaces now.

---

## 11. Responsive, Accessibility & UX

The complete consultation journey must remain usable across:

* desktop
* tablet
* mobile

Maintain the existing Ricoz design system:

* Manrope typography
* Ricoz Red `#C41230`
* warm off-white background
* near-black text
* thin borders
* restrained cards
* 4px radius
* 8px spacing scale
* light mode only
* no gradients
* no glassmorphism
* no excessive shadows

Maintain:

* keyboard accessibility
* visible focus states
* semantic controls
* accessible error/confirmation messaging
* logical heading hierarchy
* clear date/time presentation

---

## 12. Scope Boundary

Do **not** build:

* customer portal
* customer login
* full calendar system
* real-time availability backend
* external calendar integration
* video meeting integration
* email automation
* SMS/WhatsApp notifications
* notification backend
* CRM
* admin appointment dashboard
* payment
* AI scheduling
* analytics

Those belong to later platform flows.

The final result should establish a credible consultation lifecycle that connects the existing booking wizard to the future operational and customer relationship architecture.

## Validation

Verify:

* Existing consultation booking still works.
* Product/service/solution context remains intact.
* Confirmation accurately reflects the consultation.
* Date and time selections survive the journey.
* Submission errors preserve all relevant information.
* Duplicate submissions remain prevented.
* Consultation data has a reusable lifecycle representation.
* The architecture is ready for Flow 57 Consultation Management.
* The architecture can connect to Flow 51 Customer Relationship Journey.
* No existing consultation functionality regresses.
* Build completes without TypeScript errors.
